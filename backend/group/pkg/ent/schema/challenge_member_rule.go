package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
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
			Optional(),
		field.Int64("rule_id"),
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
	}
}
