package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type Member struct {
	ent.Schema
}

// Fields of the Agent
func (Member) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Time("created_at").
			Default(time.Now),
		field.Int64("user_id"),
	}
}

func (Member) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("groupz", Groupz.Type).
			Ref("members").
			Unique(),
	}
}

func (Member) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("user_id").
			Edges("groupz").
			Unique(),
	}
}
