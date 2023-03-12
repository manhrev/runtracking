package activity

import (
	"context"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
)

func (s *activityServer) CreateActivityInfo(
	ctx context.Context,
	request *activity.CreateActivityInfoRequest,
) (*activity.CreateActivityInfoReply, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	activity_ent, err := s.repository.Activity.Create(ctx, userId, request.GetActivityInfo())
	if err != nil {
		return nil, err
	}
	return &activity.CreateActivityInfoReply{
		IdCreated: activity_ent.ID,
	}, nil
}
