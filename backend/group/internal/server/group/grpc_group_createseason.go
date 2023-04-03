package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) CreateSeason(
	ctx context.Context,
	request *group.CreateSeasonRequest,
) (*group.CreateSeasonReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	return s.service.Season.CreateSeason(ctx, userId, request)
}
