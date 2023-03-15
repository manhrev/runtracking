package transformer

import (
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformActivityListEntToActivityList(activityList []*ent.Activity) []*activity.ActivityInfo {
	activityInfoList := []*activity.ActivityInfo{}
	for _, activityEnt := range activityList {
		activityInfo := &activity.ActivityInfo{
			Id:            activityEnt.ID,
			Type:          activity.ActivityType(activityEnt.Type),
			TotalDistance: activityEnt.TotalDistance,
			Kcal:          activityEnt.Kcal,
			StartTime:     timestamppb.New(activityEnt.StartTime),
			EndTime:       timestamppb.New(activityEnt.EndTime),
			Duration:      activityEnt.Duration,
			Route:         activityEnt.Route,
			ActivityName:  activityEnt.ActivityName,
			ActivityNote:  activityEnt.ActivityNote,
			CommitType:    activity.CommitType(activityEnt.CommitType),
			CommitId:      activityEnt.CommitID,
		}
		activityInfoList = append(activityInfoList, activityInfo)
	}
	return activityInfoList
}
