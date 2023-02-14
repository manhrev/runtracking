package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type NotificationType struct {
	ent.Schema
}

// Fields of the Agent
func (NotificationType) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("type_name").
			Optional(),
	}
}

func (NotificationType) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("notifications", Notification.Type),
	}
}
