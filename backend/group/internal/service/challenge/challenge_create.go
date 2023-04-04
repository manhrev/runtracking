package challenge

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) CreateChallenge(
	ctx context.Context,
	userId int64,
	request *group.CreateChallengeRequest,
) (*group.CreateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId(), false, false)
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	challengeEnt, err := c.repository.Challenge.Create(ctx, groupEntity.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	// set challenge rules
	challengeRules, err := c.repository.Challenge.CreateBulkChallengeRules(ctx,
		userId, groupEntity.ID, challengeEnt, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	//list current member of group to insert into challenge
	members, err := c.repository.Group.ListMember(ctx, groupEntity.ID,
		group.Member_MEMBER_STATUS_ACTIVE)

	if err != nil {
		return nil, err
	}

	// Create Challenge Member
	challengeMembers, err := c.repository.Challenge.CreateBulkChallengeMember(ctx,
		members, challengeEnt)

	if err != nil {
		return nil, err
	}

	// Create challenge Member rules
	_, err = c.repository.Challenge.CreateBulkChallengeMemberRule(ctx,
		challengeMembers, challengeRules, challengeEnt)
	if err != nil {
		return nil, err
	}

	return &group.CreateChallengeReply{}, nil
}
