package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type EventGroup struct {
	ent.Schema
}

func (EventGroup) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("group_id"),
		field.Time("joined_at").
			Default(time.Now),
		field.Int64("status").
			Default(0),
	}
}

func (EventGroup) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("event", Event.Type).Ref("groups").Unique(),
	}
}
