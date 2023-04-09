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
		field.Int64("source_type").
			Optional(),
		field.Int64("source_id").
			Optional(),
		field.String("source_image").
			Default("https://www.chameleon.io/assets/blog/app-notification-smartphone.png"),
		field.JSON("receive_ids", []int64{}).
			Optional(),
		field.Time("scheduled_time").
			Optional(),
	}
}

func (Notification) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("notification_users", NotificationUser.Type),
	}
}
