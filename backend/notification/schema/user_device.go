package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type UserDevice struct {
	ent.Schema
}

// Fields of the Agent
func (UserDevice) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("user_id"),
		field.String("expo_push_token").
			Optional(),
	}
}

func (UserDevice) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("user_id", "expo_push_token").Unique(),
	}
}
