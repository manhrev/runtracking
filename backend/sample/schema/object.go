package object

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Object struct {
	ent.Schema
}

// Fields of the Agent
func (Object) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id"),
		field.String("name"),
		field.Float32("value"),
	}
}
