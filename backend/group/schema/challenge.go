package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Challenge struct {
	ent.Schema
}

// Fields of the Agent
func (Challenge) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Time("created_at").
			Default(time.Now),
		field.Time("start_time").
			Optional(),
		field.Time("end_time").
			Optional(),
		field.String("description").
			Optional(),
		field.Int64("type_id"),
		// id of member who completed with all rules of challenge first
		field.Int64("completed_first_member_id").
			Optional(),
	}
}

func (Challenge) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("challenge_members", ChallengeMember.Type),
		edge.From("groupz", Groupz.Type).
			Ref("challenges").
			Unique(),
		edge.To("challenge_rules", ChallengeRule.Type),
	}
}
