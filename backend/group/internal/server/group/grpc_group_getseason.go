package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) GetSeason(
	ctx context.Context,
	request *group.GetSeasonRequest,
) (*group.GetSeasonReply, error) {

	return s.service.Season.GetSeason(ctx, request)
}
