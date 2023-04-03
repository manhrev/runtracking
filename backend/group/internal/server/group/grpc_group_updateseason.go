package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) UpdateSeason(
	ctx context.Context,
	request *group.UpdateSeasonRequest,
) (*group.UpdateSeasonReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	return s.service.Season.UpdateSeason(ctx, userId, request)
}
