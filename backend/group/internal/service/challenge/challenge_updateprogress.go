package challenge

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) UpdateChallengeProgress(
	ctx context.Context,
	userId int64,
	request *group.UpdateChallengeProgressRequest,
) (string, error) {
	return c.repository.Challenge.UpdateChallengeProgress(ctx,
		request.ChallengeId,
		userId, request.Time,
		request.GetActivityRecord())
}
