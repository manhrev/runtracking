// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
)

// Notification is the model entity for the Notification schema.
type Notification struct {
	config
	// ID of the ent.
	ID int `json:"id,omitempty"`
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Notification) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case notification.FieldID:
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type Notification", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Notification fields.
func (n *Notification) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case notification.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			n.ID = int(value.Int64)
		}
	}
	return nil
}

// Update returns a builder for updating this Notification.
// Note that you need to call Notification.Unwrap() before calling this method if this Notification
// was returned from a transaction, and the transaction was committed or rolled back.
func (n *Notification) Update() *NotificationUpdateOne {
	return NewNotificationClient(n.config).UpdateOne(n)
}

// Unwrap unwraps the Notification entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (n *Notification) Unwrap() *Notification {
	_tx, ok := n.config.driver.(*txDriver)
	if !ok {
		panic("ent: Notification is not a transactional entity")
	}
	n.config.driver = _tx.drv
	return n
}

// String implements the fmt.Stringer.
func (n *Notification) String() string {
	var builder strings.Builder
	builder.WriteString("Notification(")
	builder.WriteString(fmt.Sprintf("id=%v", n.ID))
	builder.WriteByte(')')
	return builder.String()
}

// Notifications is a parsable slice of Notification.
type Notifications []*Notification

func (n Notifications) config(cfg config) {
	for _i := range n {
		n[_i].config = cfg
	}
}
