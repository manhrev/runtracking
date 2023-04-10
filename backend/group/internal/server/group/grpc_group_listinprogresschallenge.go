package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListInProgressChallenge(
	ctx context.Context,
	request *group.ListInProgressChallengeRequest,
) (*group.ListInProgressChallengeReply, error) {
	return s.service.Challenge.ListInProgressChallenge(ctx, request)
}
