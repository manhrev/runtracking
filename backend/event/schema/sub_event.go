package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type SubEvent struct {
	ent.Schema
}

func (SubEvent) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("name").
			Optional(),
		field.String("picture").
			Default("https://placehold.jp/300x200.png"),
		field.Time("start_date"),
		field.Time("end_date"),
		field.String("description").
			Optional(),
		field.Int64("goal").
			Default(0),
		field.Int64("rule"),
		field.Int64("activity_type"),
		field.Int64("status").
			Default(1),
	}
}

func (SubEvent) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("event", Event.Type).
			Ref("subevents").
			Unique(),
		edge.To("group", GroupzProgress.Type),
	}
}
