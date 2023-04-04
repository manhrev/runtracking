package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
)

func (c *challengeImpl) CreateBulkChallengeMember(
	ctx context.Context,
	memberEnts []*ent.Member,
	challengeEnt *ent.Challenge,
) ([]*ent.ChallengeMember, error) {
	bulk := make([]*ent.ChallengeMemberCreate, len(memberEnts))

	for i, memberEnt := range memberEnts {
		bulk[i] = c.entClient.ChallengeMember.Create().
			SetChallenge(challengeEnt).
			SetCreatedAt(challengeEnt.StartTime).
			SetMember(memberEnt).
			SetStatus(challengeEnt.Status)
	}

	challengeMembers, err := c.entClient.ChallengeMember.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge members for challenge has failed %s\n", err.Error()))
	}

	return challengeMembers, nil
}

func (c *challengeImpl) CreateChallengeMember(
	ctx context.Context,
	memberId int64,
	challengeEnt *ent.Challenge,
) (*ent.ChallengeMember, error) {

	challengeMemberEnt, err := c.entClient.ChallengeMember.Create().
		SetChallenge(challengeEnt).
		SetCreatedAt(challengeEnt.StartTime).
		SetMemberID(memberId).
		SetStatus(challengeEnt.Status).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Creating challenge member for challenge has failed %s\n", err.Error()))
	}

	return challengeMemberEnt, nil
}

func (m *challengeImpl) UpdateMemberPoint(
	ctx context.Context,
	point int,
	inProgressChallengeEnt *ent.Challenge,
	memberEnt *ent.Member,
) error {

	err := m.entClient.ChallengeMember.Update().
		Where(challengemember.HasMemberWith(member.IDEQ(memberEnt.ID)),
			challengemember.ChallengeIDEQ(inProgressChallengeEnt.ID)).
		AddPoint(int64(point)).
		Exec(ctx)

	if err != nil {
		return status.Internal(fmt.Sprintf("Error when add point for member season: %v", err))
	}

	return nil
}
