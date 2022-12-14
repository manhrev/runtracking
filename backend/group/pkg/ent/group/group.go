// Code generated by ent, DO NOT EDIT.

package group

import (
	"time"

	"github.com/google/uuid"
)

const (
	// Label holds the string label denoting the group type in the database.
	Label = "group"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldDescription holds the string denoting the description field in the database.
	FieldDescription = "description"
	// FieldBackgroundPicture holds the string denoting the background_picture field in the database.
	FieldBackgroundPicture = "background_picture"
	// FieldCreatedAt holds the string denoting the created_at field in the database.
	FieldCreatedAt = "created_at"
	// FieldLeaderID holds the string denoting the leader_id field in the database.
	FieldLeaderID = "leader_id"
	// Table holds the table name of the group in the database.
	Table = "groups"
)

// Columns holds all SQL columns for group fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldDescription,
	FieldBackgroundPicture,
	FieldCreatedAt,
	FieldLeaderID,
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
	// DefaultBackgroundPicture holds the default value on creation for the "background_picture" field.
	DefaultBackgroundPicture string
	// DefaultCreatedAt holds the default value on creation for the "created_at" field.
	DefaultCreatedAt func() time.Time
	// DefaultLeaderID holds the default value on creation for the "leader_id" field.
	DefaultLeaderID func() uuid.UUID
	// DefaultID holds the default value on creation for the "id" field.
	DefaultID func() uuid.UUID
)
