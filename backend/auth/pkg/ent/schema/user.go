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
		field.Int64("id").
			Unique(),
		field.String("username").
			Unique(),
		field.String("password"),
		field.String("display_name").
			Default(""),
		field.String("email").
			Default(""),
		field.String("phone").
			Default(""),
		field.Int32("role").
			Default(1),
		field.Int32("age").
			Default(0),
		field.Int32("height").
			Optional(),
		field.Int32("weight").
			Optional(),
		field.String("profile_picture").
			Default(""),
		field.Time("created_at").Default(time.Now()),
	}
}

func (User) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("user_setting", UserSetting.Type).
			Unique(),
	}
}
