// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

// SubEvent is the model entity for the SubEvent schema.
type SubEvent struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Picture holds the value of the "picture" field.
	Picture string `json:"picture,omitempty"`
	// StartDate holds the value of the "start_date" field.
	StartDate time.Time `json:"start_date,omitempty"`
	// EndDate holds the value of the "end_date" field.
	EndDate time.Time `json:"end_date,omitempty"`
	// Description holds the value of the "description" field.
	Description string `json:"description,omitempty"`
	// Goal holds the value of the "goal" field.
	Goal int64 `json:"goal,omitempty"`
	// RuleID holds the value of the "rule_id" field.
	RuleID int64 `json:"rule_id,omitempty"`
	// Status holds the value of the "status" field.
	Status int64 `json:"status,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the SubEventQuery when eager-loading is set.
	Edges           SubEventEdges `json:"edges"`
	event_subevents *int64
	selectValues    sql.SelectValues
}

// SubEventEdges holds the relations/edges for other nodes in the graph.
type SubEventEdges struct {
	// Event holds the value of the event edge.
	Event *Event `json:"event,omitempty"`
	// Group holds the value of the group edge.
	Group []*GroupzProgress `json:"group,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// EventOrErr returns the Event value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e SubEventEdges) EventOrErr() (*Event, error) {
	if e.loadedTypes[0] {
		if e.Event == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: event.Label}
		}
		return e.Event, nil
	}
	return nil, &NotLoadedError{edge: "event"}
}

// GroupOrErr returns the Group value or an error if the edge
// was not loaded in eager-loading.
func (e SubEventEdges) GroupOrErr() ([]*GroupzProgress, error) {
	if e.loadedTypes[1] {
		return e.Group, nil
	}
	return nil, &NotLoadedError{edge: "group"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*SubEvent) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case subevent.FieldID, subevent.FieldGoal, subevent.FieldRuleID, subevent.FieldStatus:
			values[i] = new(sql.NullInt64)
		case subevent.FieldName, subevent.FieldPicture, subevent.FieldDescription:
			values[i] = new(sql.NullString)
		case subevent.FieldStartDate, subevent.FieldEndDate:
			values[i] = new(sql.NullTime)
		case subevent.ForeignKeys[0]: // event_subevents
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the SubEvent fields.
func (se *SubEvent) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case subevent.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			se.ID = int64(value.Int64)
		case subevent.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				se.Name = value.String
			}
		case subevent.FieldPicture:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field picture", values[i])
			} else if value.Valid {
				se.Picture = value.String
			}
		case subevent.FieldStartDate:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field start_date", values[i])
			} else if value.Valid {
				se.StartDate = value.Time
			}
		case subevent.FieldEndDate:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field end_date", values[i])
			} else if value.Valid {
				se.EndDate = value.Time
			}
		case subevent.FieldDescription:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field description", values[i])
			} else if value.Valid {
				se.Description = value.String
			}
		case subevent.FieldGoal:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field goal", values[i])
			} else if value.Valid {
				se.Goal = value.Int64
			}
		case subevent.FieldRuleID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field rule_id", values[i])
			} else if value.Valid {
				se.RuleID = value.Int64
			}
		case subevent.FieldStatus:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field status", values[i])
			} else if value.Valid {
				se.Status = value.Int64
			}
		case subevent.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field event_subevents", value)
			} else if value.Valid {
				se.event_subevents = new(int64)
				*se.event_subevents = int64(value.Int64)
			}
		default:
			se.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the SubEvent.
// This includes values selected through modifiers, order, etc.
func (se *SubEvent) Value(name string) (ent.Value, error) {
	return se.selectValues.Get(name)
}

// QueryEvent queries the "event" edge of the SubEvent entity.
func (se *SubEvent) QueryEvent() *EventQuery {
	return NewSubEventClient(se.config).QueryEvent(se)
}

// QueryGroup queries the "group" edge of the SubEvent entity.
func (se *SubEvent) QueryGroup() *GroupzProgressQuery {
	return NewSubEventClient(se.config).QueryGroup(se)
}

// Update returns a builder for updating this SubEvent.
// Note that you need to call SubEvent.Unwrap() before calling this method if this SubEvent
// was returned from a transaction, and the transaction was committed or rolled back.
func (se *SubEvent) Update() *SubEventUpdateOne {
	return NewSubEventClient(se.config).UpdateOne(se)
}

// Unwrap unwraps the SubEvent entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (se *SubEvent) Unwrap() *SubEvent {
	_tx, ok := se.config.driver.(*txDriver)
	if !ok {
		panic("ent: SubEvent is not a transactional entity")
	}
	se.config.driver = _tx.drv
	return se
}

// String implements the fmt.Stringer.
func (se *SubEvent) String() string {
	var builder strings.Builder
	builder.WriteString("SubEvent(")
	builder.WriteString(fmt.Sprintf("id=%v, ", se.ID))
	builder.WriteString("name=")
	builder.WriteString(se.Name)
	builder.WriteString(", ")
	builder.WriteString("picture=")
	builder.WriteString(se.Picture)
	builder.WriteString(", ")
	builder.WriteString("start_date=")
	builder.WriteString(se.StartDate.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("end_date=")
	builder.WriteString(se.EndDate.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("description=")
	builder.WriteString(se.Description)
	builder.WriteString(", ")
	builder.WriteString("goal=")
	builder.WriteString(fmt.Sprintf("%v", se.Goal))
	builder.WriteString(", ")
	builder.WriteString("rule_id=")
	builder.WriteString(fmt.Sprintf("%v", se.RuleID))
	builder.WriteString(", ")
	builder.WriteString("status=")
	builder.WriteString(fmt.Sprintf("%v", se.Status))
	builder.WriteByte(')')
	return builder.String()
}

// SubEvents is a parsable slice of SubEvent.
type SubEvents []*SubEvent