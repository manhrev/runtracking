package schema

import (
	"time"

	"github.com/google/uuid"

	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type Group struct {
	ent.Schema
}

// Fields of the Agent
func (Group) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).
			Default(uuid.New),
		field.String("name").
			Optional(),
		field.String("description").
			Optional(),
		field.String("background_picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.Time("created_at").
			Default(time.Now),
		field.UUID("leader_id", uuid.UUID{}).
			Default(uuid.New),
	}
}
