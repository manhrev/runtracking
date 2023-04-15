package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
)

func (c *challengeImpl) CreateBulkChallengeMemberRule(
	ctx context.Context,
	challengeMemberEnts []*ent.ChallengeMember,
	challengeRuleEnts []*ent.ChallengeRule,
	challengeStatus int64,
) ([]*ent.ChallengeMemberRule, error) {
	bulk := make([]*ent.ChallengeMemberRuleCreate, len(challengeRuleEnts)*len(challengeMemberEnts))
	for i, challengeRule := range challengeRuleEnts {
		for j, challengeMemberEnt := range challengeMemberEnts {
			bulk[i*len(challengeMemberEnts)+j] = c.entClient.ChallengeMemberRule.Create().
				SetChallengeMember(challengeMemberEnt).
				SetRuleID(challengeRule.RuleID).
				SetChallengeRule(challengeRule).
				SetStatus(challengeStatus)
		}
	}

	challengeMemberRules, err := c.entClient.ChallengeMemberRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge member rules for challenge has failed %s\n", err.Error()))
	}

	return challengeMemberRules, nil
}

func (c *challengeImpl) CreateChallengeMemberRule(
	ctx context.Context,
	challengeMemberEnt *ent.ChallengeMember,
	challengeEnt *ent.Challenge,
) ([]*ent.ChallengeMemberRule, error) {
	challengeRuleEnts, err := c.entClient.ChallengeRule.Query().
		Where(challengerule.HasChallengeWith(challenge.IDEQ(challengeEnt.ID))).
		All(ctx)
	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Error when get challege rules: %v", err))
	}

	bulk := make([]*ent.ChallengeMemberRuleCreate, len(challengeRuleEnts))
	for i, challengeRule := range challengeRuleEnts {
		bulk[i] = c.entClient.ChallengeMemberRule.Create().
			SetChallengeMember(challengeMemberEnt).
			SetRuleID(challengeRule.RuleID).
			SetChallengeRule(challengeRule).
			SetStatus(challengeEnt.Status)
	}

	challengeMemberRules, err := c.entClient.ChallengeMemberRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge member rules for challenge has failed %s\n", err.Error()))
	}

	return challengeMemberRules, nil
}
