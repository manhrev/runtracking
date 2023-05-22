package activity

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *activityServer) CommitActivity(
	ctx context.Context,
	request *activity.CommitActivityRequest,
) (*activity.CommitActivityReply, error) {

	commitedToPlan := false

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	activityInfo, err := s.repository.Activity.GetById(ctx, userId, request.GetActivityId())
	if err != nil {
		return nil, err
	}

	// call api to update progress
	var errfinal = error(nil)

	for _, commitObj := range request.CommitTo {
		switch commitObj.CommitType {
		case activity.CommitType_COMMIT_TYPE_PLAN:
			if commitedToPlan {
				continue
			}
			// check if activity commited
			if activityInfo.CommitType != uint32(activity.CommitType_COMMIT_TYPE_UNSPECIFIED) {
				return nil, status.Internal("Activity already committed to a plan")
			}

			incrementValue := int64(0)
			rule := commitObj.GetRule()

			// check rule to get increment value
			if rule == uint32(plan.Rule_RULE_TOTAL_ACTIVITY) || rule == uint32(plan.Rule_RULE_TOTAL_ACTIVITY_DAILY) {
				incrementValue = 1
			} else if rule == uint32(plan.Rule_RULE_TOTAL_DISTANCE) || rule == uint32(plan.Rule_RULE_TOTAL_DISTANCE_DAILY) {
				incrementValue = int64(activityInfo.TotalDistance)
			} else if rule == uint32(plan.Rule_RULE_TOTAL_TIME) || rule == uint32(plan.Rule_RULE_TOTAL_TIME_DAILY) {
				incrementValue = int64(activityInfo.Duration)
			} else if rule == uint32(plan.Rule_RULE_TOTAL_CALORIES) || rule == uint32(plan.Rule_RULE_TOTAL_CALORIES_DAILY) {
				incrementValue = int64(activityInfo.Kcal)
			} else {
				errfinal = status.Internal("Unknown rule")
				break
			}

			// call plani
			_, err := s.planIClient.UpdatePlanProgress(ctx, &plan.UpdatePlanProgressRequest{
				PlanId:         commitObj.GetCommitId(),
				Time:           timestamppb.New(activityInfo.EndTime),
				Rule:           plan.Rule(rule), // not used
				IncrementValue: incrementValue,
			})
			if err != nil {
				errfinal = status.Internal(fmt.Sprintf("Error while call UpdatePlanProgress: %v", err))
				break
			}

			err = s.repository.Activity.SetCommit(ctx, request.ActivityId, commitObj.CommitType, commitObj.CommitId)
			if err != nil {
				errfinal = err
				break
			}
			commitedToPlan = true
		case activity.CommitType_COMMIT_TYPE_CHALLENGE:
			_, err := s.groupIClient.UpdateChallengeProgress(ctx, &group.UpdateChallengeProgressRequest{
				ChallengeId: commitObj.GetCommitId(),
				UserId:      userId,
				Time:        timestamppb.New(activityInfo.EndTime),
				ActivityRecord: &group.ActivityRecord{
					CaloriesValue:  int64(activityInfo.Kcal),
					TimeSpendValue: int64(activityInfo.Duration),
					DistanceValue:  int64(activityInfo.TotalDistance),
				},
			})
			if err != nil {
				errfinal = status.Internal(fmt.Sprintf("Error while call UpdateChallengeProgress: %v", err))
				break
			}
		case activity.CommitType_COMMIT_TYPE_EVENT:
			_, err := s.eventIClient.UpdateEventProgress(ctx, &event.UpdateEventProgressRequest{
				EventId: commitObj.GetCommitId(),
				UserId:  userId,
				GroupId: commitObj.GetUserGroupId(),
				Time:    timestamppb.New(activityInfo.EndTime),
				ActivityRecord: &event.ActivityRecord{
					CaloriesValue:  int64(activityInfo.Kcal),
					TimeSpendValue: int64(activityInfo.Duration),
					DistanceValue:  int64(activityInfo.TotalDistance),
				},
			})
			if err != nil {
				errfinal = status.Internal(fmt.Sprintf("Error while call UpdateEventProgress: %v", err))
				break
			}
		}

	}

	if errfinal != nil {
		return nil, errfinal
	}

	return &activity.CommitActivityReply{}, nil
}
