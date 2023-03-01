package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Group struct {
	ent.Schema
}

// Fields of the Agent
func (Group) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("name").
			Optional(),
		field.String("description").
			Optional(),
		field.String("background_picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.Time("created_at").
			Default(time.Now),
		field.Int64("leader_id"),
	}
}

func (Group) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("members", Member.Type),
	}
}
