// Code generated by ent, DO NOT EDIT.

package userdevice

const (
	// Label holds the string label denoting the userdevice type in the database.
	Label = "user_device"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldUserID holds the string denoting the user_id field in the database.
	FieldUserID = "user_id"
	// FieldExpoPushToken holds the string denoting the expo_push_token field in the database.
	FieldExpoPushToken = "expo_push_token"
	// Table holds the table name of the userdevice in the database.
	Table = "user_devices"
)

// Columns holds all SQL columns for userdevice fields.
var Columns = []string{
	FieldID,
	FieldUserID,
	FieldExpoPushToken,
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
