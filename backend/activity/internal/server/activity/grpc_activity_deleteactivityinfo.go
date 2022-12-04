package activity

import (
	"context"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
)

func (s *activityServer) DeleteActivityInfo(
	ctx context.Context,
	request *activity.DeleteActivityInfoRequest,
) (*activity.DeleteActivityInfoReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Activity.Delete(ctx, userId, request.GetIdsToDelete())
	if err != nil {
		return nil, err
	}

	return &activity.DeleteActivityInfoReply{}, nil
}
