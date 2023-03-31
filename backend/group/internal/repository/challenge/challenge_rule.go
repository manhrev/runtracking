package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
)

func (c *challengeImpl) UpdateChallengeRule(
	ctx context.Context,
	ruleInfo *group.ChallengeRuleInfo,
) error {
	query := c.entClient.ChallengeRule.UpdateOneID(ruleInfo.Id).
		SetGoal(ruleInfo.Goal)

	if ruleInfo.CreatedAt != nil {
		query.SetCreatedAt(ruleInfo.CreatedAt.AsTime())
	}

	if ruleInfo.UpdatedAt != nil {
		query.SetCreatedAt(ruleInfo.UpdatedAt.AsTime())
	}

	err := query.Exec(ctx)
	if err != nil {
		return err
	}
	return nil
}

func (c *challengeImpl) DeleteChallengeRule(
	ctx context.Context,
	idsToDelete []int64,
) error {
	_, err := c.entClient.ChallengeRule.Delete().
		Where(challengerule.IDIn(idsToDelete...)).
		Exec(ctx)

	if err != nil {
		return err
	}

	return nil
}

func (c *challengeImpl) CreateBulkChallengeRules(
	ctx context.Context,
	userId int64,
	groupId int64,
	challengeId int64,
	challengeInfo *group.ChallengeInfo,
) ([]*ent.ChallengeRule, error) {
	bulk := make([]*ent.ChallengeRuleCreate, len(challengeInfo.ChallengeRules))
	for i, rule := range challengeInfo.ChallengeRules {
		bulk[i] = c.entClient.ChallengeRule.Create().
			SetChallengeID(challengeId).
			SetRuleID(int64(rule.GetRule())).
			SetGoal(rule.Goal)
	}

	challengeRules, err := c.entClient.ChallengeRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating rule for challenge has failed %s\n", err.Error()))
	}

	return challengeRules, nil
}
