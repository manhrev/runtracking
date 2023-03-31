package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) GetChallenge(
	ctx context.Context,
	request *group.GetChallengeRequest,
) (*group.GetChallengeReply, error) {

	return s.service.Challenge.GetChallenge(ctx, request)
}
