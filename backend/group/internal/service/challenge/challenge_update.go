package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
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

	// Process add new rule to challenge
	if len(request.ChallengeRulesToAdd) > 0 {
		// set challenge rules
		challengeRules, err := c.repository.Challenge.CreateBulkChallengeRules(ctx,
			userId, request.GetChallengeInfo().Id, request.ChallengeRulesToAdd)
		if err != nil {
			return nil, err
		}

		challengeMemberEntList, err := c.entClient.ChallengeMember.Query().
			Where(challengemember.ChallengeIDEQ(request.ChallengeInfo.Id)).
			All(ctx)
		if err != nil {
			return nil, status.Internal(fmt.Sprintf("Error when fetching members of challenge: %v", err))
		}

		// Create challenge Member rules
		_, err = c.repository.Challenge.CreateBulkChallengeMemberRule(ctx,
			challengeMemberEntList, challengeRules, int64(request.ChallengeInfo.Status))
		if err != nil {
			return nil, err
		}
	}

	return &group.UpdateChallengeReply{}, nil
}
