package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type GroupProgress struct {
	ent.Schema
}

func (GroupProgress) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("group_id"),
		field.Int64("progress").
			Default(0),
	}
}

func (GroupProgress) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("sub_event", SubEvent.Type).
			Ref("group").
			Unique(),
		edge.To("member", MemberProgress.Type),
	}
}
