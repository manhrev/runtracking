package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type SeasonMember struct {
	ent.Schema
}

// Fields of the Agent
func (SeasonMember) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		// point used to track member's achievement after each season
		field.Int64("point").
			Default(0),
		field.Int64("member_id"),
		field.Int64("season_id"),
		field.Time("created_at").
			Default(time.Now()),
		field.Time("updated_at").
			Default(time.Now).
			UpdateDefault(time.Now),
		// how many challenge completed by this member will be set into this field
		field.Int64("completed_challenge_count").
			Default(0),
	}
}

func (SeasonMember) Indexes() []ent.Index {
	return []ent.Index{
		// non-unique index.
		index.Fields("member_id", "season_id").Unique(),
	}
}

func (SeasonMember) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("season", Season.Type).
			Ref("season_members").
			Field("season_id").
			Unique().
			Required(),
		edge.From("member", Member.Type).
			Ref("season_members").
			Field("member_id").
			Unique().
			Required(),
	}
}
