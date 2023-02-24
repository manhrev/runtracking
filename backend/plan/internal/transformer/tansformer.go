package transformer

import (
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/schema"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformPlanListEntToPlanList(planList []*ent.Plan) []*plan.PlanInfo {
	planInfoList := []*plan.PlanInfo{}
	for _, planEnt := range planList {
		planInfo := &plan.PlanInfo{
			Id:           planEnt.ID,
			ActivityType: plan.ActivityType(planEnt.ActivityType),
			StartTime:    timestamppb.New(planEnt.StartTime),
			EndTime:      timestamppb.New(planEnt.EndTime),
			Goal:         planEnt.Goal,
			Total:        planEnt.Total,
			Name:         planEnt.Name,
			Note:         planEnt.Note,
			Rule:         plan.Rule(planEnt.Rule),
			Progress:     transformPlanEntProgressToPlanProgress(planEnt.Progess),
		}
		planInfoList = append(planInfoList, planInfo)
	}
	return planInfoList
}

func transformPlanEntProgressToPlanProgress(entProgress *schema.Progress) []*plan.PlanProgress {
	if entProgress != nil {
		progressList := make([]*plan.PlanProgress, len(entProgress.ProgressDays))
		for idx, entDay := range entProgress.ProgressDays {
			progressList[idx] = &plan.PlanProgress{
				Timestamp: entDay.GetTimestamp(),
				Value:     entDay.GetValue(),
			}
		}
		return progressList
	}
	return []*plan.PlanProgress{}
}
