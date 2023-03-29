package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Groupz struct {
	ent.Schema
}

// Fields of the Agent
func (Groupz) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("name").
			Optional(),
		field.String("description").
			Optional(),
		field.String("group_picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.String("background_picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.Time("created_at").
			Default(time.Now),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
		field.Int64("leader_id"),
	}
}

func (Groupz) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("members", Member.Type),
		edge.To("challenges", Challenge.Type),
	}
}
