package schema

import (
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
	}
}

func (EventGroupz) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("event", Event.Type).Ref("groups").Through("participates", Participate.Type),
	}
}
