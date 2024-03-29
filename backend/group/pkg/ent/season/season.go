// Code generated by ent, DO NOT EDIT.

package season

import (
	"time"
)

const (
	// Label holds the string label denoting the season type in the database.
	Label = "season"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldDescription holds the string denoting the description field in the database.
	FieldDescription = "description"
	// FieldPicture holds the string denoting the picture field in the database.
	FieldPicture = "picture"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// FieldStartTime holds the string denoting the start_time field in the database.
	FieldStartTime = "start_time"
	// FieldEndTime holds the string denoting the end_time field in the database.
	FieldEndTime = "end_time"
	// FieldStatus holds the string denoting the status field in the database.
	FieldStatus = "status"
	// EdgeSeasonMembers holds the string denoting the season_members edge name in mutations.
	EdgeSeasonMembers = "season_members"
	// Table holds the table name of the season in the database.
	Table = "seasons"
	// SeasonMembersTable is the table that holds the season_members relation/edge.
	SeasonMembersTable = "season_members"
	// SeasonMembersInverseTable is the table name for the SeasonMember entity.
	// It exists in this package in order to avoid circular dependency with the "seasonmember" package.
	SeasonMembersInverseTable = "season_members"
	// SeasonMembersColumn is the table column denoting the season_members relation/edge.
	SeasonMembersColumn = "season_id"
)

// Columns holds all SQL columns for season fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldDescription,
	FieldPicture,
	FieldCreatedAt,
	FieldUpdatedAt,
	FieldStartTime,
	FieldEndTime,
	FieldStatus,
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
	// DefaultPicture holds the default value on creation for the "picture" field.
	DefaultPicture string
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
	// UpdateDefaultUpdatedAt holds the default value on update for the "updated_at" field.
	UpdateDefaultUpdatedAt func() time.Time
	// DefaultStatus holds the default value on creation for the "status" field.
	DefaultStatus int64
)
