package activity

import (
	"context"

	"github.com/manhrev/runtracking/backend/activity/internal/transformer"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
)

func (s *activityServer) GetUsersAchievement(
	ctx context.Context,
	request *activity.GetUsersAchievementRequest,
) (*activity.GetUsersAchievementReply, error) {
	infos, err := s.repository.Activity.GetUsersAchievement(ctx, request.GetUserIds())
	if err != nil {
		return nil, err
	}

	// convert to proto
	result := transformer.TransformUserAchievementQueryToUserAchievement(infos, request.GetUserIds())

	return &activity.GetUsersAchievementReply{
		UserAchievements: result,
	}, nil
}
