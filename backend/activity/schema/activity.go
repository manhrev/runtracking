package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
)

type Activity struct {
	ent.Schema
}

func (Activity) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.String("activity_name"),
		field.String("activity_note"),
		field.Int64("user_id"),
		field.Uint32("type").Default(uint32(activity.ActivityType_ACTIVITY_TYPE_UNSPECIFIED)),
		field.Float("total_distance"),
		field.Float32("kcal"),
		field.Time("start_time"),
		field.Uint64("duration"),
		field.Time("end_time"),
		field.JSON("route", []*activity.TrackPoint{}),
		field.Int64("commit_id").Optional(),
		field.Uint32("commit_type").Default(uint32(activity.CommitType_COMMIT_TYPE_UNSPECIFIED)),
		field.Time("created_at").Default(time.Now()),
	}
}
