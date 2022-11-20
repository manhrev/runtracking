package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type User struct {
	ent.Schema
}

func (User) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id"),
		field.String("username"),
		field.String("password"),
		field.String("display_name"),
		field.String("email"),
		field.String("phone"),
		field.Int32("role"),
		field.Int32("age"),
		field.Int32("height"),
		field.Int32("weight"),
		field.String("profile_picture"),
		field.Time("created_at").Default(time.Now()),
	}
}

func (User) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("user_setting", UserSetting.Type).
			Unique(),
	}
}
