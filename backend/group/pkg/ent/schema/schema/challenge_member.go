package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/entsql"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

type ChallengeMember struct {
	ent.Schema
}

// Fields of the Agent
func (ChallengeMember) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("point").
			Default(0),
		field.Int64("member_id"),
		field.Int64("challenge_id"),
		// if all rules completed then set this field to true
		field.Int64("status").
			Default(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)),
		field.Time("time_completed").
			Optional(),
		field.Time("created_at").
			Default(time.Now()),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
	}
}

func (ChallengeMember) Indexes() []ent.Index {
	return []ent.Index{
		// non-unique index.
		index.Fields("member_id", "challenge_id").
			Unique(),
	}
}

func (ChallengeMember) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("challenge_member_rules", ChallengeMemberRule.Type).
			Annotations(entsql.Annotation{
				OnDelete: entsql.Cascade,
			}),
		edge.From("challenge", Challenge.Type).
			Ref("challenge_members").
			Field("challenge_id").
			Unique().
			Required(),
		edge.From("member", Member.Type).
			Ref("challenge_members").
			Field("member_id").
			Unique().
			Required(),
	}
}
