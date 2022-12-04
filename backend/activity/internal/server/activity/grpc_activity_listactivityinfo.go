package activity

import (
	"context"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	"github.com/manhrev/runtracking/backend/activity/internal/transformer"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
)

func (s *activityServer) ListActivityInfo(
	ctx context.Context,
	request *activity.ListActivityInfoRequest,
) (*activity.ListActivityInfoReply, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	activityList, total, err := s.repository.Activity.List(
		ctx,
		userId,
		request.GetActivityType(),
		request.GetSortBy(),
		request.GetAscending(),
		request.GetFrom(),
		request.GetTo(),
		request.GetLimit(),
		request.GetOffset(),
	)

	return &activity.ListActivityInfoReply{
		ActivityList: transformer.TransformActivityListEntToActivityList(activityList),
		Total:        total,
	}, nil
}
