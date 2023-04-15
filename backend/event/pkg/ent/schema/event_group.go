package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type EventGroupz struct {
	ent.Schema
}

func (EventGroupz) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Time("joined_at").
			Default(time.Now),
		field.Int64("status").
			Default(0),
	}
}

func (EventGroupz) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("event", Event.Type).Ref("groups"),
	}
}
