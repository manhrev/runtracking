package groupi

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupIServer) ListInProgressChallenge(
	ctx context.Context,
	request *group.ListInProgressChallengeRequest,
) (*group.ListInProgressChallengeReply, error) {
	return s.service.Challenge.ListInProgressChallenge(ctx, request)
}
