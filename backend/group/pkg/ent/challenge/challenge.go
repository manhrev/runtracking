// Code generated by ent, DO NOT EDIT.

package challenge

import (
	"time"
)

const (
	// Label holds the string label denoting the challenge type in the database.
	Label = "challenge"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldStartTime holds the string denoting the start_time field in the database.
	FieldStartTime = "start_time"
	// FieldEndTime holds the string denoting the end_time field in the database.
	FieldEndTime = "end_time"
	// FieldDescription holds the string denoting the description field in the database.
	FieldDescription = "description"
	// FieldGroupID holds the string denoting the group_id field in the database.
	FieldGroupID = "group_id"
	// FieldTypeID holds the string denoting the type_id field in the database.
	FieldTypeID = "type_id"
	// EdgeChallengeMembers holds the string denoting the challenge_members edge name in mutations.
	EdgeChallengeMembers = "challenge_members"
	// Table holds the table name of the challenge in the database.
	Table = "challenges"
	// ChallengeMembersTable is the table that holds the challenge_members relation/edge.
	ChallengeMembersTable = "challenge_members"
	// ChallengeMembersInverseTable is the table name for the ChallengeMember entity.
	// It exists in this package in order to avoid circular dependency with the "challengemember" package.
	ChallengeMembersInverseTable = "challenge_members"
	// ChallengeMembersColumn is the table column denoting the challenge_members relation/edge.
	ChallengeMembersColumn = "challenge_challenge_members"
)

// Columns holds all SQL columns for challenge fields.
var Columns = []string{
	FieldID,
	FieldCreatedAt,
	FieldStartTime,
	FieldEndTime,
	FieldDescription,
	FieldGroupID,
	FieldTypeID,
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
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
)
