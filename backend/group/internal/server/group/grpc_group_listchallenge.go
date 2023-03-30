package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListChallenge(
	ctx context.Context,
	request *group.ListChallengeRequest,
) (*group.ListChallengeReply, error) {
	return s.service.Challenge.ListChallenge(ctx, request)
}
