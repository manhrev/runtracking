// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
)

// Event is the model entity for the Event schema.
type Event struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// OwnerGroupID holds the value of the "owner_group_id" field.
	OwnerGroupID int64 `json:"owner_group_id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// StartAt holds the value of the "start_at" field.
	StartAt time.Time `json:"start_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// Picture holds the value of the "picture" field.
	Picture string `json:"picture,omitempty"`
	// Description holds the value of the "description" field.
	Description string `json:"description,omitempty"`
	// Status holds the value of the "status" field.
	Status int64 `json:"status,omitempty"`
	// IsGlobal holds the value of the "is_global" field.
	IsGlobal bool `json:"is_global,omitempty"`
	// NumberOfGroups holds the value of the "number_of_groups" field.
	NumberOfGroups uint32 `json:"number_of_groups,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the EventQuery when eager-loading is set.
	Edges        EventEdges `json:"edges"`
	selectValues sql.SelectValues
}

// EventEdges holds the relations/edges for other nodes in the graph.
type EventEdges struct {
	// Subevents holds the value of the subevents edge.
	Subevents []*SubEvent `json:"subevents,omitempty"`
	// Groups holds the value of the groups edge.
	Groups []*EventGroupz `json:"groups,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// SubeventsOrErr returns the Subevents value or an error if the edge
// was not loaded in eager-loading.
func (e EventEdges) SubeventsOrErr() ([]*SubEvent, error) {
	if e.loadedTypes[0] {
		return e.Subevents, nil
	}
	return nil, &NotLoadedError{edge: "subevents"}
}

// GroupsOrErr returns the Groups value or an error if the edge
// was not loaded in eager-loading.
func (e EventEdges) GroupsOrErr() ([]*EventGroupz, error) {
	if e.loadedTypes[1] {
		return e.Groups, nil
	}
	return nil, &NotLoadedError{edge: "groups"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Event) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case event.FieldIsGlobal:
			values[i] = new(sql.NullBool)
		case event.FieldID, event.FieldOwnerGroupID, event.FieldStatus, event.FieldNumberOfGroups:
			values[i] = new(sql.NullInt64)
		case event.FieldName, event.FieldPicture, event.FieldDescription:
			values[i] = new(sql.NullString)
		case event.FieldCreatedAt, event.FieldStartAt, event.FieldUpdatedAt:
			values[i] = new(sql.NullTime)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Event fields.
func (e *Event) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case event.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			e.ID = int64(value.Int64)
		case event.FieldOwnerGroupID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field owner_group_id", values[i])
			} else if value.Valid {
				e.OwnerGroupID = value.Int64
			}
		case event.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				e.Name = value.String
			}
		case event.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				e.CreatedAt = value.Time
			}
		case event.FieldStartAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field start_at", values[i])
			} else if value.Valid {
				e.StartAt = value.Time
			}
		case event.FieldUpdatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field updated_at", values[i])
			} else if value.Valid {
				e.UpdatedAt = value.Time
			}
		case event.FieldPicture:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field picture", values[i])
			} else if value.Valid {
				e.Picture = value.String
			}
		case event.FieldDescription:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field description", values[i])
			} else if value.Valid {
				e.Description = value.String
			}
		case event.FieldStatus:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field status", values[i])
			} else if value.Valid {
				e.Status = value.Int64
			}
		case event.FieldIsGlobal:
			if value, ok := values[i].(*sql.NullBool); !ok {
				return fmt.Errorf("unexpected type %T for field is_global", values[i])
			} else if value.Valid {
				e.IsGlobal = value.Bool
			}
		case event.FieldNumberOfGroups:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field number_of_groups", values[i])
			} else if value.Valid {
				e.NumberOfGroups = uint32(value.Int64)
			}
		default:
			e.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the Event.
// This includes values selected through modifiers, order, etc.
func (e *Event) Value(name string) (ent.Value, error) {
	return e.selectValues.Get(name)
}

// QuerySubevents queries the "subevents" edge of the Event entity.
func (e *Event) QuerySubevents() *SubEventQuery {
	return NewEventClient(e.config).QuerySubevents(e)
}

// QueryGroups queries the "groups" edge of the Event entity.
func (e *Event) QueryGroups() *EventGroupzQuery {
	return NewEventClient(e.config).QueryGroups(e)
}

// Update returns a builder for updating this Event.
// Note that you need to call Event.Unwrap() before calling this method if this Event
// was returned from a transaction, and the transaction was committed or rolled back.
func (e *Event) Update() *EventUpdateOne {
	return NewEventClient(e.config).UpdateOne(e)
}

// Unwrap unwraps the Event entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (e *Event) Unwrap() *Event {
	_tx, ok := e.config.driver.(*txDriver)
	if !ok {
		panic("ent: Event is not a transactional entity")
	}
	e.config.driver = _tx.drv
	return e
}

// String implements the fmt.Stringer.
func (e *Event) String() string {
	var builder strings.Builder
	builder.WriteString("Event(")
	builder.WriteString(fmt.Sprintf("id=%v, ", e.ID))
	builder.WriteString("owner_group_id=")
	builder.WriteString(fmt.Sprintf("%v", e.OwnerGroupID))
	builder.WriteString(", ")
	builder.WriteString("name=")
	builder.WriteString(e.Name)
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(e.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("start_at=")
	builder.WriteString(e.StartAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("updated_at=")
	builder.WriteString(e.UpdatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("picture=")
	builder.WriteString(e.Picture)
	builder.WriteString(", ")
	builder.WriteString("description=")
	builder.WriteString(e.Description)
	builder.WriteString(", ")
	builder.WriteString("status=")
	builder.WriteString(fmt.Sprintf("%v", e.Status))
	builder.WriteString(", ")
	builder.WriteString("is_global=")
	builder.WriteString(fmt.Sprintf("%v", e.IsGlobal))
	builder.WriteString(", ")
	builder.WriteString("number_of_groups=")
	builder.WriteString(fmt.Sprintf("%v", e.NumberOfGroups))
	builder.WriteByte(')')
	return builder.String()
}

// Events is a parsable slice of Event.
type Events []*Event
