package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

type Challenge struct {
	ent.Schema
}

// Fields of the Agent
func (Challenge) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("name").
			Optional(),
		field.Time("created_at").
			Default(time.Now),
		field.Time("start_time").
			Optional(),
		field.String("picture").
			Default("https://img.freepik.com/free-vector/modern-running-background_1017-7491.jpg?w=2000"),
		field.Time("end_time").
			Optional(),
		field.String("description").
			Optional(),
		field.Int64("type_id"),
		field.Int64("status").
			Default(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)),
		// id of member who completed with all rules of challenge first
		field.Int64("completed_first_member_id").Optional(),
	}
}

func (Challenge) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("challenge_members", ChallengeMember.Type).
			Annotations(entsql.Annotation{
				OnDelete: entsql.Cascade,
			}),
		edge.From("groupz", Groupz.Type).
			Ref("challenges").
			Unique(),
		edge.To("challenge_rules", ChallengeRule.Type).
			Annotations(entsql.Annotation{
				OnDelete: entsql.Cascade,
			}),
		edge.From("first_member", Member.Type).
			Ref("challenge").
			Field("completed_first_member_id").
			Unique(),
	}
}
