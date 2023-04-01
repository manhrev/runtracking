package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) UpdateChallenge(
	ctx context.Context,
	userId int64,
	request *group.UpdateChallengeRequest,
) (*group.UpdateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	if request.ChallengeInfo.Status == group.RuleStatus_RULE_STATUS_INPROGRESS {
		isChallengeActiveExisted, err := c.isActiveChallengeExisted(ctx, request.GroupId)
		if err != nil {
			return nil, err
		}

		if isChallengeActiveExisted {
			return nil, status.Internal(fmt.Sprintf("There was one active challenge in group. You need to deactivate it before creating the new one"))
		}
	}

	err = c.repository.Challenge.Update(ctx, groupEntity.ID, request.ChallengeInfo, request.GetIdsRuleToDelete())
	if err != nil {
		return nil, err
	}

	return &group.UpdateChallengeReply{}, nil
}
