package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Message struct {
	ent.Schema
}

// Fields of the Agent
func (Message) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		// For easy to implement, field from_user_id is always less than field to_user_id
		// for example: 1-2, 1-3
		field.Int64("from_user_id"),
		field.Int64("to_user_id"),
		field.String("message").
			Optional(),
		// field is_seen show this message has been read by user or not,
		// to show for front end side
		field.Bool("is_seen_from_user_id").
			Default(false),
		field.Bool("is_seen_to_user_id").
			Default(false),
		// use when one side of users when to delete conversation but another side will be remained
		field.Bool("soft_delete_from_user_id").
			Default(false),
		field.Bool("soft_delete_to_user_id").
			Default(false),
		field.Time("created_at").
			Default(time.Now),
	}
}
