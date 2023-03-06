// Code generated by ent, DO NOT EDIT.

package entactivity

import (
	"time"
)

const (
	// Label holds the string label denoting the activity type in the database.
	Label = "activity"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldActivityName holds the string denoting the activity_name field in the database.
	FieldActivityName = "activity_name"
	// FieldActivityNote holds the string denoting the activity_note field in the database.
	FieldActivityNote = "activity_note"
	// FieldUserID holds the string denoting the user_id field in the database.
	FieldUserID = "user_id"
	// FieldType holds the string denoting the type field in the database.
	FieldType = "type"
	// FieldTotalDistance holds the string denoting the total_distance field in the database.
	FieldTotalDistance = "total_distance"
	// FieldKcal holds the string denoting the kcal field in the database.
	FieldKcal = "kcal"
	// FieldStartTime holds the string denoting the start_time field in the database.
	FieldStartTime = "start_time"
	// FieldDuration holds the string denoting the duration field in the database.
	FieldDuration = "duration"
	// FieldEndTime holds the string denoting the end_time field in the database.
	FieldEndTime = "end_time"
	// FieldRoute holds the string denoting the route field in the database.
	FieldRoute = "route"
	// FieldPlanID holds the string denoting the plan_id field in the database.
	FieldPlanID = "plan_id"
	// FieldChallengeID holds the string denoting the challenge_id field in the database.
	FieldChallengeID = "challenge_id"
	// FieldEventID holds the string denoting the event_id field in the database.
	FieldEventID = "event_id"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// Table holds the table name of the activity in the database.
	Table = "activities"
)

// Columns holds all SQL columns for activity fields.
var Columns = []string{
	FieldID,
	FieldActivityName,
	FieldActivityNote,
	FieldUserID,
	FieldType,
	FieldTotalDistance,
	FieldKcal,
	FieldStartTime,
	FieldDuration,
	FieldEndTime,
	FieldRoute,
	FieldPlanID,
	FieldChallengeID,
	FieldEventID,
	FieldCreatedAt,
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultType holds the default value on creation for the "type" field.
	DefaultType uint32
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt time.Time
)
