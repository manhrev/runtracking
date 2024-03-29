// Code generated by ent, DO NOT EDIT.

package challengemember

import (
	"time"
)

const (
	// Label holds the string label denoting the challengemember type in the database.
	Label = "challenge_member"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldPoint holds the string denoting the point field in the database.
	FieldPoint = "point"
	// FieldMemberID holds the string denoting the member_id field in the database.
	FieldMemberID = "member_id"
	// FieldChallengeID holds the string denoting the challenge_id field in the database.
	FieldChallengeID = "challenge_id"
	// FieldStatus holds the string denoting the status field in the database.
	FieldStatus = "status"
	// FieldTimeCompleted holds the string denoting the time_completed field in the database.
	FieldTimeCompleted = "time_completed"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldUpdatedAt holds the string denoting the updated_at field in the database.
	FieldUpdatedAt = "updated_at"
	// EdgeChallengeMemberRules holds the string denoting the challenge_member_rules edge name in mutations.
	EdgeChallengeMemberRules = "challenge_member_rules"
	// EdgeChallenge holds the string denoting the challenge edge name in mutations.
	EdgeChallenge = "challenge"
	// EdgeMember holds the string denoting the member edge name in mutations.
	EdgeMember = "member"
	// Table holds the table name of the challengemember in the database.
	Table = "challenge_members"
	// ChallengeMemberRulesTable is the table that holds the challenge_member_rules relation/edge.
	ChallengeMemberRulesTable = "challenge_member_rules"
	// ChallengeMemberRulesInverseTable is the table name for the ChallengeMemberRule entity.
	// It exists in this package in order to avoid circular dependency with the "challengememberrule" package.
	ChallengeMemberRulesInverseTable = "challenge_member_rules"
	// ChallengeMemberRulesColumn is the table column denoting the challenge_member_rules relation/edge.
	ChallengeMemberRulesColumn = "challenge_member_challenge_member_rules"
	// ChallengeTable is the table that holds the challenge relation/edge.
	ChallengeTable = "challenge_members"
	// ChallengeInverseTable is the table name for the Challenge entity.
	// It exists in this package in order to avoid circular dependency with the "challenge" package.
	ChallengeInverseTable = "challenges"
	// ChallengeColumn is the table column denoting the challenge relation/edge.
	ChallengeColumn = "challenge_id"
	// MemberTable is the table that holds the member relation/edge.
	MemberTable = "challenge_members"
	// MemberInverseTable is the table name for the Member entity.
	// It exists in this package in order to avoid circular dependency with the "member" package.
	MemberInverseTable = "members"
	// MemberColumn is the table column denoting the member relation/edge.
	MemberColumn = "member_id"
)

// Columns holds all SQL columns for challengemember fields.
var Columns = []string{
	FieldID,
	FieldPoint,
	FieldMemberID,
	FieldChallengeID,
	FieldStatus,
	FieldTimeCompleted,
	FieldCreatedAt,
	FieldUpdatedAt,
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
	// DefaultPoint holds the default value on creation for the "point" field.
	DefaultPoint int64
	// DefaultStatus holds the default value on creation for the "status" field.
	DefaultStatus int64
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt time.Time
	// DefaultUpdatedAt holds the default value on creation for the "updated_at" field.
	DefaultUpdatedAt func() time.Time
	// UpdateDefaultUpdatedAt holds the default value on update for the "updated_at" field.
	UpdateDefaultUpdatedAt func() time.Time
)
