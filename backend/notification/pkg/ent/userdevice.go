// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
)

// UserDevice is the model entity for the UserDevice schema.
type UserDevice struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID int64 `json:"user_id,omitempty"`
	// ExpoPushToken holds the value of the "expo_push_token" field.
	ExpoPushToken string `json:"expo_push_token,omitempty"`
}

// scanValues returns the types for scanning values from sql.Rows.
func (*UserDevice) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case userdevice.FieldID, userdevice.FieldUserID:
			values[i] = new(sql.NullInt64)
		case userdevice.FieldExpoPushToken:
			values[i] = new(sql.NullString)
		default:
			return nil, fmt.Errorf("unexpected column %q for type UserDevice", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the UserDevice fields.
func (ud *UserDevice) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case userdevice.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			ud.ID = int64(value.Int64)
		case userdevice.FieldUserID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field user_id", values[i])
			} else if value.Valid {
				ud.UserID = value.Int64
			}
		case userdevice.FieldExpoPushToken:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field expo_push_token", values[i])
			} else if value.Valid {
				ud.ExpoPushToken = value.String
			}
		}
	}
	return nil
}

// Update returns a builder for updating this UserDevice.
// Note that you need to call UserDevice.Unwrap() before calling this method if this UserDevice
// was returned from a transaction, and the transaction was committed or rolled back.
func (ud *UserDevice) Update() *UserDeviceUpdateOne {
	return NewUserDeviceClient(ud.config).UpdateOne(ud)
}

// Unwrap unwraps the UserDevice entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (ud *UserDevice) Unwrap() *UserDevice {
	_tx, ok := ud.config.driver.(*txDriver)
	if !ok {
		panic("ent: UserDevice is not a transactional entity")
	}
	ud.config.driver = _tx.drv
	return ud
}

// String implements the fmt.Stringer.
func (ud *UserDevice) String() string {
	var builder strings.Builder
	builder.WriteString("UserDevice(")
	builder.WriteString(fmt.Sprintf("id=%v, ", ud.ID))
	builder.WriteString("user_id=")
	builder.WriteString(fmt.Sprintf("%v", ud.UserID))
	builder.WriteString(", ")
	builder.WriteString("expo_push_token=")
	builder.WriteString(ud.ExpoPushToken)
	builder.WriteByte(')')
	return builder.String()
}

// UserDevices is a parsable slice of UserDevice.
type UserDevices []*UserDevice

func (ud UserDevices) config(cfg config) {
	for _i := range ud {
		ud[_i].config = cfg
	}
}
