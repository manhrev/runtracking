package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListUserRanking(
	ctx context.Context,
	request *group.ListUserRankingRequest,
) (*group.ListUserRankingReply, error) {
	return s.service.Group.ListUserRanking(ctx, request)
}
