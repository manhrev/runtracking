package groupi

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupIServer) CheckDailyProgressChallenge(
	ctx context.Context,
	request *group.CheckDailyProgressChallengeRequest,
) (*group.CheckDailyProgressChallengeReply, error) {
	return s.service.Challenge.CheckDailyProgress(ctx, request.TimeCheck.AsTime())
}
