package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) CreateChallenge(
	ctx context.Context,
	userId int64,
	request *group.CreateChallengeRequest,
) (*group.CreateChallengeReply, error) {
	groupEntity, err := c.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	isChallengeActiveExisted, err := c.isActiveChallengeExisted(ctx, request.GroupId)
	if err != nil {
		return nil, err
	}

	if isChallengeActiveExisted {
		return nil, status.Internal(fmt.Sprintf("There was one active challenge in group. You need to deactivate it before creating the new one"))
	}

	challengeEnt, err := c.repository.Challenge.Create(ctx, groupEntity.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	// set challenge rules
	challengeRules, err := c.repository.Challenge.CreateBulkChallengeRules(ctx,
		userId, groupEntity.ID, challengeEnt.ID, request.ChallengeInfo)
	if err != nil {
		return nil, err
	}

	//list current member of group to insert into challenge
	members, err := c.repository.Group.ListMember(ctx, groupEntity.ID,
		group.Member_MEMBER_STATUS_ACTIVE)

	// Create Challenge Member
	challengeMembers, err := c.repository.Challenge.CreateBulkChallengeMember(ctx,
		members, challengeEnt)

	// Create challenge Member rules
	_, err = c.repository.Challenge.CreateBulkChallengeMemberRule(ctx,
		challengeMembers, challengeRules)
	if err != nil {
		return nil, err
	}

	return &group.CreateChallengeReply{}, nil
}
