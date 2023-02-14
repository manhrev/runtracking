package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Notification struct {
	ent.Schema
}

// Fields of the Agent
func (Notification) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("message").
			Optional(),
		field.Int64("type_id"),
		field.Time("scheduled_time").
			Optional(),
	}
}

func (Notification) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("notification_type", NotificationType.Type).
			Ref("notifications").
			Unique(),
	}
}
