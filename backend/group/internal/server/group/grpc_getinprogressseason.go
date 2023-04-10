package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) GetInProgressSeason(
	ctx context.Context,
	request *group.GetInProgressSeasonRequest,
) (*group.GetInProgressSeasonReply, error) {
	return s.service.Season.GetInProgressSeason(ctx, request)
}
