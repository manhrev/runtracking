package plan

import (
	"context"
	"fmt"
	"log"
	"time"

	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	plan_pb "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// all plan here is in progress
func checkIfPlanExpired(
	ctx context.Context,
	entClient *ent.Client,
	planned *ent.Plan,
	notificationIClient notification.NotificationIClient,
	timeCheck time.Time,
) error {
	updateQuery := entClient.Plan.UpdateOne(planned)
	// check plan ended but not completed -> change to failed
	// time Now or ???
	if timeCheck.After(planned.EndTime) {
		err := updateQuery.SetStatus(int64(plan.RuleStatus_RULE_STATUS_FAILED)).Exec(ctx)
		if err != nil {
			log.Printf("Error update plan status when check if plan expired: %v", err)
			return err
		}
		notifyUserAboutPlan(ctx, notificationIClient, fmt.Sprintf("Your %v plan has failed!", planned.Name), planned.UserID, planned.ID)
		log.Printf("Plan %v:%d has failed 0: Status when check if plan expired", planned.Name, planned.ID)
		return nil
	}

	rule := plan_pb.Rule(planned.Rule)
	// only check daily rule
	if rule == plan_pb.Rule_RULE_TOTAL_ACTIVITY_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_DISTANCE_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_TIME_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_CALORIES_DAILY {
		var currentProgress []*plan_pb.PlanProgress
		if planned.Progess == nil {
			currentProgress = []*plan_pb.PlanProgress{}
		} else {
			currentProgress = planned.Progess.ProgressDays
		}

		// check progress
		if len(currentProgress) == 0 {
			notifyUserAboutPlan(ctx, notificationIClient, fmt.Sprintf("Your %v plan has failed!", planned.Name), planned.UserID, planned.ID)
			err := updateQuery.SetStatus(int64(plan.RuleStatus_RULE_STATUS_FAILED)).Exec(ctx)
			if err != nil {
				log.Printf("Error update plan status when check if plan expired: %v", err)
				return err
			}
			log.Printf("Plan %v:%d has failed 1: No progress", planned.Name, planned.ID)
			return nil
		} else {
			maxIdx := len(currentProgress) - 1
			newestProgressTime := currentProgress[maxIdx].GetTimestamp().AsTime().
				In(time.FixedZone("UTC+7", 7*60*60)).Day()
			today := timeCheck.In(time.FixedZone("UTC+7", 7*60*60)).Day()

			log.Printf("Check daily plan %v:%d", planned.Name, planned.ID)
			log.Printf("Newest progress time: %v - Timecheck: %v", currentProgress[maxIdx].GetTimestamp().AsTime().Unix(), timeCheck.Unix())
			log.Printf("Newest progress day: %v - Today: %v", newestProgressTime, today)

			if today != newestProgressTime {
				updateQuery.SetStatus(int64(plan.RuleStatus_RULE_STATUS_FAILED))
				notifyUserAboutPlan(ctx, notificationIClient, fmt.Sprintf("Your %v plan has failed!", planned.Name), planned.UserID, planned.ID)
				log.Printf("Plan %v:%d has failed 2: No progress today", planned.Name, planned.ID)

			} else if currentProgress[maxIdx].Value < planned.Goal {
				updateQuery.SetStatus(int64(plan.RuleStatus_RULE_STATUS_FAILED))
				notifyUserAboutPlan(ctx, notificationIClient, fmt.Sprintf("Your %v plan has failed!", planned.Name), planned.UserID, planned.ID)
				log.Printf("Plan %v:%d has failed 3: Progress today not enough", planned.Name, planned.ID)

			}
			err := updateQuery.Exec(ctx)
			if err != nil {
				log.Printf("Error update plan status for daily plan: %v", err)
				return err
			}
			return nil
		}
	}

	log.Printf("Plan not expired")

	return nil
}

func notifyUserAboutPlan(
	ctx context.Context,
	notificationIClient notification.NotificationIClient,
	message string,
	userId int64,
	planId int64,
) error {
	// uncomment for debug local
	// if notificationIClient == nil {
	// 	log.Printf(message)
	// 	return nil
	// }
	_, err := notificationIClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      message,
		SourceType:    notification.SOURCE_TYPE_PLAN,
		ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 10)),
		ReceiveIds:    []int64{userId},
		SourceId:      planId,
	})
	if err != nil {
		log.Printf("Error when push notification: %v", err)
		return err
	}
	return nil
}
