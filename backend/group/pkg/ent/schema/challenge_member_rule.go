package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

type ChallengeMemberRule struct {
	ent.Schema
}

// Fields of the Agent
func (ChallengeMemberRule) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("total").
			Default(0),
		field.Int64("rule_id"),
		// Field will be set to true if the goal of this rule equals with total of its
		field.Int64("status").
			Default(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)),
		field.Time("time_completed").
			Optional(),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
	}
}

func (ChallengeMemberRule) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("rule_id").
			Edges("challenge_member").
			Unique(),
	}
}

func (ChallengeMemberRule) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("challenge_member", ChallengeMember.Type).
			Ref("challenge_member_rules").
			Unique(),
		edge.From("challenge_rule", ChallengeRule.Type).
			Ref("challenge_member_rules").
			Unique(),
	}
}

type Progress struct {
	ProgressDays []*group.ChallengeProgress
}
