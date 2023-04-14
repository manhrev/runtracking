package groupi

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupIServer) GetSeason(
	ctx context.Context,
	request *group.GetSeasonRequest,
) (*group.GetSeasonReply, error) {
	return s.service.Season.GetSeason(ctx, request)
}
