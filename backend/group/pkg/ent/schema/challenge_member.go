package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type ChallengeMember struct {
	ent.Schema
}

// Fields of the Agent
func (ChallengeMember) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("member_id"),
	}
}

func (ChallengeMember) Indexes() []ent.Index {
	return []ent.Index{
		// non-unique index.
		index.Fields("member_id").
			Edges("challenge").
			Unique(),
	}
}

func (ChallengeMember) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("challenge_member_rules", ChallengeMemberRule.Type),
		edge.From("challenge", Challenge.Type).
			Ref("challenge_members").
			Unique(),
	}
}
