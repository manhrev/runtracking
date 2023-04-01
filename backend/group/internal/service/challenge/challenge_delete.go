package challenge

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) DeleteChallenge(
	ctx context.Context,
	userId int64,
	request *group.DeleteChallengeRequest,
) (*group.DeleteChallengeReply, error) {
	challengeEnt, err := c.repository.Challenge.GetChallengeWithGroup(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	if userId != challengeEnt.Edges.Groupz.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = c.repository.Challenge.Delete(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	return &group.DeleteChallengeReply{}, nil
}
