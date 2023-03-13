package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
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
		field.Uint32("status").
			Default(uint32(group.Member_MEMBER_STATUS_UNSPECIFIED)),
		field.Time("joining_at").
			Optional(),
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
