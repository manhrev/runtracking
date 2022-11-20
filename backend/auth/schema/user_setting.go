package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type UserSetting struct {
	ent.Schema
}

func (UserSetting) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id"),
		field.String("region"),
		field.String("language"),
		field.String("is_notification"),
		field.Time("date_modified").Default(time.Now()),
	}
}

func (UserSetting) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("user", User.Type).
			Ref("user_setting").
			Unique().
			Required(),
	}
}
