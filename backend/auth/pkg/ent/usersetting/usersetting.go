// Code generated by ent, DO NOT EDIT.

package usersetting

import (
	"time"
)

const (
	// Label holds the string label denoting the usersetting type in the database.
	Label = "user_setting"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldRegion holds the string denoting the region field in the database.
	FieldRegion = "region"
	// FieldLanguage holds the string denoting the language field in the database.
	FieldLanguage = "language"
	// FieldIsNotification holds the string denoting the is_notification field in the database.
	FieldIsNotification = "is_notification"
	// FieldDateModified holds the string denoting the date_modified field in the database.
	FieldDateModified = "date_modified"
	// EdgeUser holds the string denoting the user edge name in mutations.
	EdgeUser = "user"
	// Table holds the table name of the usersetting in the database.
	Table = "user_settings"
	// UserTable is the table that holds the user relation/edge.
	UserTable = "user_settings"
	// UserInverseTable is the table name for the User entity.
	// It exists in this package in order to avoid circular dependency with the "user" package.
	UserInverseTable = "users"
	// UserColumn is the table column denoting the user relation/edge.
	UserColumn = "user_user_setting"
)

// Columns holds all SQL columns for usersetting fields.
var Columns = []string{
	FieldID,
	FieldRegion,
	FieldLanguage,
	FieldIsNotification,
	FieldDateModified,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "user_settings"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"user_user_setting",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultDateModified holds the default value on creation for the "date_modified" field.
	DefaultDateModified time.Time
)
