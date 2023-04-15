package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type MemberProgress struct {
	ent.Schema
}

func (MemberProgress) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("member_id"),
		field.Int64("user_id"),
		field.Int64("progress").Default(0),
	}
}

func (MemberProgress) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("group", GroupzProgress.Type).
			Ref("member").
			Unique(),
	}
}
