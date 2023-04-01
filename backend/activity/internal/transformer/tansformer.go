package transformer

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository/activity"
	activitypb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformActivityListEntToActivityList(activityList []*ent.Activity) []*activitypb.ActivityInfo {
	activityInfoList := []*activitypb.ActivityInfo{}
	for _, activityEnt := range activityList {
		activityInfo := &activitypb.ActivityInfo{
			Id:            activityEnt.ID,
			Type:          activitypb.ActivityType(activityEnt.Type),
			TotalDistance: activityEnt.TotalDistance,
			Kcal:          activityEnt.Kcal,
			StartTime:     timestamppb.New(activityEnt.StartTime),
			EndTime:       timestamppb.New(activityEnt.EndTime),
			Duration:      activityEnt.Duration,
			Route:         activityEnt.Route,
			ActivityName:  activityEnt.ActivityName,
			ActivityNote:  activityEnt.ActivityNote,
			CommitType:    activitypb.CommitType(activityEnt.CommitType),
			CommitId:      activityEnt.CommitID,
		}
		activityInfoList = append(activityInfoList, activityInfo)
	}
	return activityInfoList
}
func TransformUserAchievementQueryToUserAchievement(info []*activity.AchievementDetailData, userIds []int64) map[int64]*activitypb.UserAchievement {
	result := map[int64]*activitypb.UserAchievement{}
	for _, userId := range userIds {
		result[userId] = &activitypb.UserAchievement{
			Achievements: map[uint32]*activitypb.AchievementDetail{},
		}
	}
	for _, detail := range info {
		result[detail.UserID].Achievements[uint32(detail.ActivityType)] = &activitypb.AchievementDetail{
			Level:              checkLevel(detail.TotalDistance),
			NumberOfActivities: detail.NumberOfActivities,
			TotalDistance:      detail.TotalDistance,
			TotalDuration:      detail.TotalDuration,
			TotalKcal:          detail.TotalKcal,
		}
	}

	return result
}

func checkLevel(totalDistance float64) activitypb.AchievementLevel {
	// for testing, change later
	if (totalDistance > 0) && (totalDistance <= 1000) {
		return activitypb.AchievementLevel_ACHIEVEMENT_LEVEL_BEGINNER
	} else if totalDistance > 1000 && totalDistance <= 2000 {
		return activitypb.AchievementLevel_ACHIEVEMENT_LEVEL_INTERMEDIATE
	} else if totalDistance > 2000 && totalDistance <= 3000 {
		return activitypb.AchievementLevel_ACHIEVEMENT_LEVEL_ADVANCED
	} else if totalDistance > 3000 {
		return activitypb.AchievementLevel_ACHIEVEMENT_LEVEL_EXPERT
	}
	return activitypb.AchievementLevel_ACHIEVEMENT_LEVEL_BEGINNER
}
