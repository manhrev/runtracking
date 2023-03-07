package plan

import (
	"context"
	"fmt"
	"log"
	"time"

	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan_pb "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/plan"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/schema"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"

type Plan interface {
	Create(
		ctx context.Context,
		userId int64,
		rule plan_pb.Rule,
		activityType plan_pb.ActivityType,
		goal int64,
		name string,
		note string,
		timezone uint32,
		startTime *timestamppb.Timestamp,
		endTime *timestamppb.Timestamp,
	) error
	Delete(
		ctx context.Context,
		userId int64,
		ids []int64,
	) error
	List(
		ctx context.Context,
		userId int64,
		limit uint32,
		offset uint64,
		ascending bool,
		sortBy plan_pb.PlanSortBy,
		acitvityType plan_pb.ActivityType,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
	) ([]*ent.Plan, int64, error)
	Update(
		ctx context.Context,
		userId int64,
		planId int64,
		newEndTime *timestamppb.Timestamp,
		goal int64,
		name string,
		note string,
	) error
	UpdateProgress(
		ctx context.Context,
		plan_id int64,
		value_increment int64,
		timestamp *timestamppb.Timestamp,
	) (int64, string, error)
	CheckProgressDaily(ctx context.Context, timeCheck time.Time) error
}

type planImpl struct {
	entClient           *ent.Client
	notificationIClient notification.NotificationIClient
}

func New(entClient *ent.Client, notificationIClient notification.NotificationIClient) Plan {
	return &planImpl{
		entClient:           entClient,
		notificationIClient: notificationIClient,
	}
}

func (p *planImpl) Create(
	ctx context.Context,
	userId int64,
	rule plan_pb.Rule,
	activityType plan_pb.ActivityType,
	goal int64,
	name string,
	note string,
	timezone uint32,
	startTime *timestamppb.Timestamp,
	endTime *timestamppb.Timestamp,
) error {
	_, err := p.entClient.Plan.Create().
		SetUserID(userId).
		SetRule(int64(rule)).
		SetActivityType(int64(activityType)).
		SetGoal(goal).
		SetName(name).
		SetNote(note).
		SetStartTime(startTime.AsTime()).
		SetEndTime(endTime.AsTime()).
		SetStatus(int64(plan_pb.RuleStatus_RULE_STATUS_INPROGRESS)).
		SetTotal(0).
		SetCreatedAt(time.Now()).
		SetTimeZone(timezone).
		Save(ctx)

	if err != nil {
		log.Printf("Error create plan: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}

func (p *planImpl) Delete(
	ctx context.Context,
	userId int64,
	ids []int64,
) error {
	deletedCount, err := p.entClient.Plan.Delete().
		Where(
			plan.UserIDEQ(userId),
			plan.IDIn(ids...),
		).
		Exec(ctx)

	if err != nil {
		log.Printf("Error delete plan: %v", err)
		return status.Internal(err.Error())
	}

	if deletedCount == 0 {
		log.Printf("Error delete plan: no record deleted")
		return status.Internal("ent: no records deleted")
	}

	return nil
}

func (p *planImpl) List(
	ctx context.Context,
	userId int64,
	limit uint32,
	offset uint64,
	ascending bool,
	sortBy plan_pb.PlanSortBy,
	acitvityType plan_pb.ActivityType,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
) ([]*ent.Plan, int64, error) {
	var (
		byField string
	)

	query := p.entClient.Plan.Query().
		Where(plan.UserIDEQ(userId))

	if acitvityType != plan_pb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED {
		query.Where(plan.ActivityTypeEQ(int64(acitvityType)))
	} else {
		query.Where(plan.ActivityTypeNEQ(int64(plan_pb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED)))
	}

	switch sortBy {
	case plan_pb.PlanSortBy_PLAN_SORT_BY_CREATED_TIME:
		byField = plan.FieldCreatedAt
	case plan_pb.PlanSortBy_PLAN_SORT_BY_PROGESS:
		byField = plan.FieldCreatedAt // how??
	case plan_pb.PlanSortBy_PLAN_SORT_BY_UNSPECIFIED:
		byField = plan.FieldCreatedAt
	}

	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	if from != nil && to != nil {
		query.Where(
			plan.CreatedAtGTE(from.AsTime()),
			plan.CreatedAtLTE(to.AsTime()),
		)
	}

	total, err := query.Count(ctx)
	if err != nil {
		log.Printf("Error list plans: cannot count: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	plans, err := query.All(ctx)
	if err != nil {
		log.Printf("Error list plans: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	return plans, int64(total), nil
}

func (p *planImpl) Update(
	ctx context.Context,
	userId int64,
	planId int64,
	newEndTime *timestamppb.Timestamp,
	newGoal int64,
	newName string,
	newNote string,
) error {
	query := p.entClient.Plan.Update().Where(
		plan.UserIDEQ(userId),
		plan.IDEQ(planId),
	)

	if newEndTime != nil {
		query.Where(
			plan.EndTimeLT(newEndTime.AsTime()),
		).SetEndTime(newEndTime.AsTime())
	}

	if newGoal != 0 {
		query.SetGoal(newGoal)
	}

	if newName != "" {
		query.SetName(newName)
	}

	if newNote != "" {
		query.SetNote(newNote)
	}

	err := query.Exec(ctx)
	if err != nil {
		log.Printf("Error update plan: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}

func (p *planImpl) UpdateProgress(
	ctx context.Context,
	plan_id int64,
	value_increment int64,
	timestamp *timestamppb.Timestamp,
) (int64, string, error) {
	pushNotifyMessage := ""
	// get current plan
	planned, err := p.entClient.Plan.Get(ctx, plan_id)

	if err != nil {
		log.Printf("Error update plan progress: cannot get plan: %v", err)
		return 0, "", status.Internal(err.Error())
	}
	userId := planned.UserID
	rule := plan_pb.Rule(planned.Rule)

	// if plan status is failed, reject
	if planned.Status == int64(plan_pb.RuleStatus_RULE_STATUS_FAILED) {
		log.Printf("Error update plan progress: plan failed")
		return userId, "", status.Internal("plan failed")
	}

	// check plan ended but not completed -> change to failed
	// NOTIFY?
	if planned.Status == int64(plan_pb.RuleStatus_RULE_STATUS_INPROGRESS) && time.Now().After(planned.EndTime) {
		err := p.entClient.Plan.UpdateOne(planned).SetStatus(int64(plan_pb.RuleStatus_RULE_STATUS_FAILED)).Exec(ctx)
		if err != nil {
			log.Printf("Error update plan progress: cannot update plan status: %v", err)
			return userId, "", status.Internal(err.Error())
		}
		pushNotifyMessage = fmt.Sprintf("Plan '%v' failed!", planned.Name)
		log.Printf("Error update plan progress: plan failed")
		return userId, pushNotifyMessage, status.Internal("plan failed")
	}

	// check if new progress day is in planned time range and /*before now*/
	newProgessTime := timestamp.AsTime()
	if newProgessTime.Before(planned.StartTime) || newProgessTime.After(planned.EndTime) /*|| newProgessTime.After(time.Now())*/ {
		log.Printf("Error update plan progress: new progress time is not in planned time range")
		return userId, "", status.Internal("new progress time is not in planned time range")
	}

	// plan rule normal
	if rule == plan_pb.Rule_RULE_TOTAL_ACTIVITY ||
		rule == plan_pb.Rule_RULE_TOTAL_DISTANCE ||
		rule == plan_pb.Rule_RULE_TOTAL_TIME ||
		rule == plan_pb.Rule_RULE_TOTAL_CALORIES {

		updateQuery := p.entClient.Plan.UpdateOne(planned).AddTotal(value_increment)

		// if finished or not
		if (planned.Total + value_increment) >= planned.Goal {
			// NOTIFY?
			pushNotifyMessage = fmt.Sprintf("Plan '%v' completed!", planned.Name)
			updateQuery.SetStatus(int64(plan_pb.RuleStatus_RULE_STATUS_COMPLETED))
		}

		err = updateQuery.Exec(ctx)
		if err != nil {
			log.Printf("Error update plan progress: total type: %v", err)
			return userId, "", status.Internal(err.Error())
		}
	}

	// plan rule daily
	if rule == plan_pb.Rule_RULE_TOTAL_ACTIVITY_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_DISTANCE_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_TIME_DAILY ||
		rule == plan_pb.Rule_RULE_TOTAL_CALORIES_DAILY {

		// TODO: check newProgress is in current day

		var currentProgress []*plan_pb.PlanProgress
		if planned.Progess == nil {
			currentProgress = []*plan_pb.PlanProgress{}
		} else {
			currentProgress = planned.Progess.ProgressDays
		}

		//TODO: convert timezone.   currentTz := planned.TimeZone

		// no progress yet
		if len(currentProgress) == 0 {
			currentProgress = append(currentProgress, &plan_pb.PlanProgress{
				Timestamp: timestamp,
				Value:     value_increment,
			})
		} else {

			maxIdx := len(currentProgress) - 1
			newestProgressDay := currentProgress[maxIdx].GetTimestamp().AsTime().In(time.FixedZone("UTC+7", 7*60*60)).Day()
			newProgressDay := newProgessTime.In(time.FixedZone("UTC+7", 7*60*60)).Day()

			if newestProgressDay == newProgressDay {
				currentProgress[maxIdx] = &plan_pb.PlanProgress{
					Timestamp: timestamp,
					Value:     currentProgress[maxIdx].GetValue() + value_increment,
				}
			} else {
				currentProgress = append(currentProgress, &plan_pb.PlanProgress{
					Timestamp: timestamp,
					Value:     value_increment,
				})
			}
		}

		updateQuery := p.entClient.Plan.UpdateOneID(plan_id).SetProgess(&schema.Progress{
			ProgressDays: currentProgress,
		})

		// check if finished
		todayProgress := currentProgress[len(currentProgress)-1]
		if todayProgress.Timestamp.AsTime().In(time.FixedZone("UTC+7", 7*60*60)).Day() == planned.EndTime.In(time.FixedZone("UTC+7", 7*60*60)).Day() &&
			todayProgress.Value >= planned.Goal {
			// NOTIFY?
			pushNotifyMessage = fmt.Sprintf("Plan %v completed!", planned.Name)
			updateQuery.SetStatus(int64(plan_pb.RuleStatus_RULE_STATUS_COMPLETED))
		}

		err = updateQuery.Exec(ctx)
		if err != nil {
			log.Printf("Error update plan progress: daily type: %v", err)
			return userId, "", status.Internal(err.Error())
		}
	}

	return userId, pushNotifyMessage, nil
}

// timeCheck to specify exact time to check plan expired (23h59)
func (p *planImpl) CheckProgressDaily(ctx context.Context, timeCheck time.Time) error {
	// get all unfinished plans
	planlist, err := p.entClient.Plan.Query().
		Where(plan.StatusEQ(int64(plan_pb.RuleStatus_RULE_STATUS_INPROGRESS))).
		All(ctx)
	if err != nil {
		log.Printf("Error while query plan to check progress daily: %v", err)
		return status.Internal(err.Error())
	}

	for _, planInfo := range planlist {
		_ = checkIfPlanExpired(ctx, p.entClient, planInfo, p.notificationIClient, timeCheck)
	}
	return nil
}
