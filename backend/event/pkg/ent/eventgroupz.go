// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
)

// EventGroupz is the model entity for the EventGroupz schema.
type EventGroupz struct {
	config
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the EventGroupzQuery when eager-loading is set.
	Edges        EventGroupzEdges `json:"edges"`
	selectValues sql.SelectValues
}

// EventGroupzEdges holds the relations/edges for other nodes in the graph.
type EventGroupzEdges struct {
	// Event holds the value of the event edge.
	Event []*Event `json:"event,omitempty"`
	// Participates holds the value of the participates edge.
	Participates []*Participate `json:"participates,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// EventOrErr returns the Event value or an error if the edge
// was not loaded in eager-loading.
func (e EventGroupzEdges) EventOrErr() ([]*Event, error) {
	if e.loadedTypes[0] {
		return e.Event, nil
	}
	return nil, &NotLoadedError{edge: "event"}
}

// ParticipatesOrErr returns the Participates value or an error if the edge
// was not loaded in eager-loading.
func (e EventGroupzEdges) ParticipatesOrErr() ([]*Participate, error) {
	if e.loadedTypes[1] {
		return e.Participates, nil
	}
	return nil, &NotLoadedError{edge: "participates"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*EventGroupz) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case eventgroupz.FieldID:
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the EventGroupz fields.
func (eg *EventGroupz) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case eventgroupz.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			eg.ID = int64(value.Int64)
		default:
			eg.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the EventGroupz.
// This includes values selected through modifiers, order, etc.
func (eg *EventGroupz) Value(name string) (ent.Value, error) {
	return eg.selectValues.Get(name)
}

// QueryEvent queries the "event" edge of the EventGroupz entity.
func (eg *EventGroupz) QueryEvent() *EventQuery {
	return NewEventGroupzClient(eg.config).QueryEvent(eg)
}

// QueryParticipates queries the "participates" edge of the EventGroupz entity.
func (eg *EventGroupz) QueryParticipates() *ParticipateQuery {
	return NewEventGroupzClient(eg.config).QueryParticipates(eg)
}

// Update returns a builder for updating this EventGroupz.
// Note that you need to call EventGroupz.Unwrap() before calling this method if this EventGroupz
// was returned from a transaction, and the transaction was committed or rolled back.
func (eg *EventGroupz) Update() *EventGroupzUpdateOne {
	return NewEventGroupzClient(eg.config).UpdateOne(eg)
}

// Unwrap unwraps the EventGroupz entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (eg *EventGroupz) Unwrap() *EventGroupz {
	_tx, ok := eg.config.driver.(*txDriver)
	if !ok {
		panic("ent: EventGroupz is not a transactional entity")
	}
	eg.config.driver = _tx.drv
	return eg
}

// String implements the fmt.Stringer.
func (eg *EventGroupz) String() string {
	var builder strings.Builder
	builder.WriteString("EventGroupz(")
	builder.WriteString(fmt.Sprintf("id=%v", eg.ID))
	builder.WriteByte(')')
	return builder.String()
}

// EventGroupzs is a parsable slice of EventGroupz.
type EventGroupzs []*EventGroupz
