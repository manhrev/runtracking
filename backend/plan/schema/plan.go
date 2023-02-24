package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

type Plan struct {
	ent.Schema
}

func (Plan) Fields() []ent.Field {
	return []ent.Field{
		field.Int64("id").
			Unique(),
		field.Int64("user_id"),
		field.Int64("rule").Default(int64(plan.RuleStatus_RULE_STATUS_UNSPECIFIED)),
		field.Int64("activity_type").Default(int64(plan.ActivityType_ACTIVITY_TYPE_UNSPECIFIED)),
		field.Time("start_time"),
		field.Time("end_time"),
		field.Int64("total").Default(0),
		field.Int64("goal"),
		field.Int64("status").Default(int64(plan.RuleStatus_RULE_STATUS_INPROGRESS)),
		field.JSON("progess", &Progress{}).Optional(),
		field.Time("created_at").Default(time.Now()),
		field.String("name"),
		field.String("note").Optional(),
	}
}

type Progress struct {
	ProgressDays []plan.PlanProgress
}
