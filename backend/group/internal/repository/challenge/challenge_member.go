package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
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
