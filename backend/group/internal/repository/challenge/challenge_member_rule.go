package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func (c *challengeImpl) CreateBulkChallengeMemberRule(
	ctx context.Context,
	challengeMemberEnts []*ent.ChallengeMember,
	challengeRuleEnts []*ent.ChallengeRule,
) ([]*ent.ChallengeMemberRule, error) {
	bulk := make([]*ent.ChallengeMemberRuleCreate, len(challengeRuleEnts)*len(challengeMemberEnts))
	for i, challengeRule := range challengeRuleEnts {
		for j, challengeMemberEnt := range challengeMemberEnts {
			bulk[i*len(challengeMemberEnts)+j] = c.entClient.ChallengeMemberRule.Create().
				SetChallengeMember(challengeMemberEnt).
				SetRuleID(challengeRule.RuleID).
				SetChallengeRule(challengeRule)
		}
	}

	challengeMemberRules, err := c.entClient.ChallengeMemberRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge member rules for challenge has failed %s\n", err.Error()))
	}

	return challengeMemberRules, nil
}
