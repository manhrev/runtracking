package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
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
