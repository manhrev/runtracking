package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Event struct {
	ent.Schema
}

func (Event) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("owner_group_id"),
		field.String("name").
			Optional(),
		field.Time("created_at").
			Default(time.Now),
		field.Time("start_at").
			Default(time.Now),
		field.Time("updated_at").
			Default(time.Now),
		field.String("picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.String("description").
			Optional(),
		field.Int64("status").
			Default(0),
		field.Bool("is_global").Default(false), // gobal event for all group, create by admin
		field.Uint32("number_of_groups"),
	}
}

func (Event) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("subevents", SubEvent.Type),
		edge.To("groups", EventGroupz.Type).Through("participates", Participate.Type),
	}
}
