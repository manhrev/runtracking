package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
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
		// field used to compare with total placed on challenge member rule table
		field.Int64("goal").
			Default(0),
		field.Int64("rule_id"),
		field.Time("created_at").
			Default(time.Now()),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
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
		edge.To("challenge_member_rules", ChallengeMemberRule.Type).
			Annotations(entsql.Annotation{
				OnDelete: entsql.Cascade,
			}),
		edge.From("challenge", Challenge.Type).
			Ref("challenge_rules").
			Unique().
			Required(),
	}
}
