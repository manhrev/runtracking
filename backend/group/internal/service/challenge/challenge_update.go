package challenge

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) UpdateChallenge(
	ctx context.Context,
	userId int64,
	request *group.UpdateChallengeRequest,
) (*group.UpdateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId(), false, false)
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = c.repository.Challenge.Update(ctx, groupEntity.ID, request.ChallengeInfo, request.GetIdsRuleToDelete())
	if err != nil {
		return nil, err
	}

	return &group.UpdateChallengeReply{}, nil
}
