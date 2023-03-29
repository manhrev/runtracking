package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type ChallengeRule struct {
	ent.Schema
}

// Fields of the Agent
func (ChallengeRule) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		// field used to compare with goal placed on challenge member rule table
		field.Int64("total"),
		field.Int64("rule_id"),
		field.Time("created_at").
			Default(time.Now()),
	}
}

func (ChallengeRule) Indexes() []ent.Index {
	return []ent.Index{
		// Used to prevent duplicate rule in one challenge
		index.Fields("rule_id").
			Edges("challenge").
			Unique(),
	}
}

func (ChallengeRule) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("challenge_member_rules", ChallengeMemberRule.Type),
		edge.From("challenge", Challenge.Type).
			Ref("challenge_rules").
			Unique(),
	}
}
