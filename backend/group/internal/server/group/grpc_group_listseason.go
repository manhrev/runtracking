package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListSeason(
	ctx context.Context,
	request *group.ListSeasonRequest,
) (*group.ListSeasonReply, error) {
	return s.service.Season.ListSeason(ctx, request)
}
