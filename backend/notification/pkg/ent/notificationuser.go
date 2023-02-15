// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
)

// NotificationUser is the model entity for the NotificationUser schema.
type NotificationUser struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID int64 `json:"user_id,omitempty"`
	// IsSeen holds the value of the "is_seen" field.
	IsSeen bool `json:"is_seen,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the NotificationUserQuery when eager-loading is set.
	Edges                           NotificationUserEdges `json:"edges"`
	notification_notification_users *int64
}

// NotificationUserEdges holds the relations/edges for other nodes in the graph.
type NotificationUserEdges struct {
	// Notification holds the value of the notification edge.
	Notification *Notification `json:"notification,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// NotificationOrErr returns the Notification value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e NotificationUserEdges) NotificationOrErr() (*Notification, error) {
	if e.loadedTypes[0] {
		if e.Notification == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: notification.Label}
		}
		return e.Notification, nil
	}
	return nil, &NotLoadedError{edge: "notification"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*NotificationUser) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case notificationuser.FieldIsSeen:
			values[i] = new(sql.NullBool)
		case notificationuser.FieldID, notificationuser.FieldUserID:
			values[i] = new(sql.NullInt64)
		case notificationuser.FieldCreatedAt:
			values[i] = new(sql.NullTime)
		case notificationuser.ForeignKeys[0]: // notification_notification_users
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type NotificationUser", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the NotificationUser fields.
func (nu *NotificationUser) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case notificationuser.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			nu.ID = int64(value.Int64)
		case notificationuser.FieldUserID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field user_id", values[i])
			} else if value.Valid {
				nu.UserID = value.Int64
			}
		case notificationuser.FieldIsSeen:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field is_seen", values[i])
			} else if value.Valid {
				nu.IsSeen = value.Bool
			}
		case notificationuser.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				nu.CreatedAt = value.Time
			}
		case notificationuser.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field notification_notification_users", value)
			} else if value.Valid {
				nu.notification_notification_users = new(int64)
				*nu.notification_notification_users = int64(value.Int64)
			}
		}
	}
	return nil
}

// QueryNotification queries the "notification" edge of the NotificationUser entity.
func (nu *NotificationUser) QueryNotification() *NotificationQuery {
	return NewNotificationUserClient(nu.config).QueryNotification(nu)
}

// Update returns a builder for updating this NotificationUser.
// Note that you need to call NotificationUser.Unwrap() before calling this method if this NotificationUser
// was returned from a transaction, and the transaction was committed or rolled back.
func (nu *NotificationUser) Update() *NotificationUserUpdateOne {
	return NewNotificationUserClient(nu.config).UpdateOne(nu)
}

// Unwrap unwraps the NotificationUser entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (nu *NotificationUser) Unwrap() *NotificationUser {
	_tx, ok := nu.config.driver.(*txDriver)
	if !ok {
		panic("ent: NotificationUser is not a transactional entity")
	}
	nu.config.driver = _tx.drv
	return nu
}

// String implements the fmt.Stringer.
func (nu *NotificationUser) String() string {
	var builder strings.Builder
	builder.WriteString("NotificationUser(")
	builder.WriteString(fmt.Sprintf("id=%v, ", nu.ID))
	builder.WriteString("user_id=")
	builder.WriteString(fmt.Sprintf("%v", nu.UserID))
	builder.WriteString(", ")
	builder.WriteString("is_seen=")
	builder.WriteString(fmt.Sprintf("%v", nu.IsSeen))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(nu.CreatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// NotificationUsers is a parsable slice of NotificationUser.
type NotificationUsers []*NotificationUser

func (nu NotificationUsers) config(cfg config) {
	for _i := range nu {
		nu[_i].config = cfg
	}
}
