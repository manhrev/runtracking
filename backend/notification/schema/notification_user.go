package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type NotificationUser struct {
	ent.Schema
}

// Fields of the Agent
func (NotificationUser) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("user_id"),
		field.Bool("is_seen").
			Optional(),
		field.Time("created_at").
			Default(time.Now),
	}
}

func (NotificationUser) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("notifications", NotificationType.Type),
	}
}
