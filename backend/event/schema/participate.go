package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
)

type Participate struct {
	ent.Schema
}

func (Participate) Annotations() []schema.Annotation {
	return []schema.Annotation{
		field.ID("event_id", "event_group_id"),
	}
}

func (Participate) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("event_group_id"),
		field.Int64("event_id"),
		field.Time("joined_at").
			Default(time.Now),
		field.Int64("status").
			Default(int64(event_pb.GroupStatus_GROUP_STATUS_UNSPECIFIED)),
	}
}

func (Participate) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("event", Event.Type).
			Unique().
			Required().
			Field("event_id"),
		edge.To("event_group", EventGroupz.Type).
			Unique().
			Required().
			Field("event_group_id"),
	}
}
