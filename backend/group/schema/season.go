package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

//Season Entity will be set by system's admin
type Season struct {
	ent.Schema
}

// Fields of the Agent
func (Season) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("name").
			Optional(),
		field.String("description").
			Optional(),
		field.String("picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.Time("created_at").
			Default(time.Now),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
		field.Time("start_date").
			Optional(),
		field.Time("end_date").
			Optional(),
		// Used to determine current season
		field.Bool("is_current").
			Default(false),
	}
}

func (Season) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("season_members", SeasonMember.Type).
			Annotations(entsql.Annotation{
				OnDelete: entsql.Cascade,
			}),
	}
}
