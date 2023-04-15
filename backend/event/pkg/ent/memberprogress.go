// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent"
	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/memberprogress"
)

// MemberProgress is the model entity for the MemberProgress schema.
type MemberProgress struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// MemberID holds the value of the "member_id" field.
	MemberID int64 `json:"member_id,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID int64 `json:"user_id,omitempty"`
	// Progress holds the value of the "progress" field.
	Progress int64 `json:"progress,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the MemberProgressQuery when eager-loading is set.
	Edges                 MemberProgressEdges `json:"edges"`
	group_progress_member *int64
	selectValues          sql.SelectValues
}

// MemberProgressEdges holds the relations/edges for other nodes in the graph.
type MemberProgressEdges struct {
	// Group holds the value of the group edge.
	Group *GroupProgress `json:"group,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [1]bool
}

// GroupOrErr returns the Group value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e MemberProgressEdges) GroupOrErr() (*GroupProgress, error) {
	if e.loadedTypes[0] {
		if e.Group == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: groupprogress.Label}
		}
		return e.Group, nil
	}
	return nil, &NotLoadedError{edge: "group"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*MemberProgress) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case memberprogress.FieldID, memberprogress.FieldMemberID, memberprogress.FieldUserID, memberprogress.FieldProgress:
			values[i] = new(sql.NullInt64)
		case memberprogress.ForeignKeys[0]: // group_progress_member
			values[i] = new(sql.NullInt64)
		default:
			values[i] = new(sql.UnknownType)
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the MemberProgress fields.
func (mp *MemberProgress) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case memberprogress.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			mp.ID = int64(value.Int64)
		case memberprogress.FieldMemberID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field member_id", values[i])
			} else if value.Valid {
				mp.MemberID = value.Int64
			}
		case memberprogress.FieldUserID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field user_id", values[i])
			} else if value.Valid {
				mp.UserID = value.Int64
			}
		case memberprogress.FieldProgress:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field progress", values[i])
			} else if value.Valid {
				mp.Progress = value.Int64
			}
		case memberprogress.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field group_progress_member", value)
			} else if value.Valid {
				mp.group_progress_member = new(int64)
				*mp.group_progress_member = int64(value.Int64)
			}
		default:
			mp.selectValues.Set(columns[i], values[i])
		}
	}
	return nil
}

// Value returns the ent.Value that was dynamically selected and assigned to the MemberProgress.
// This includes values selected through modifiers, order, etc.
func (mp *MemberProgress) Value(name string) (ent.Value, error) {
	return mp.selectValues.Get(name)
}

// QueryGroup queries the "group" edge of the MemberProgress entity.
func (mp *MemberProgress) QueryGroup() *GroupProgressQuery {
	return NewMemberProgressClient(mp.config).QueryGroup(mp)
}

// Update returns a builder for updating this MemberProgress.
// Note that you need to call MemberProgress.Unwrap() before calling this method if this MemberProgress
// was returned from a transaction, and the transaction was committed or rolled back.
func (mp *MemberProgress) Update() *MemberProgressUpdateOne {
	return NewMemberProgressClient(mp.config).UpdateOne(mp)
}

// Unwrap unwraps the MemberProgress entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (mp *MemberProgress) Unwrap() *MemberProgress {
	_tx, ok := mp.config.driver.(*txDriver)
	if !ok {
		panic("ent: MemberProgress is not a transactional entity")
	}
	mp.config.driver = _tx.drv
	return mp
}

// String implements the fmt.Stringer.
func (mp *MemberProgress) String() string {
	var builder strings.Builder
	builder.WriteString("MemberProgress(")
	builder.WriteString(fmt.Sprintf("id=%v, ", mp.ID))
	builder.WriteString("member_id=")
	builder.WriteString(fmt.Sprintf("%v", mp.MemberID))
	builder.WriteString(", ")
	builder.WriteString("user_id=")
	builder.WriteString(fmt.Sprintf("%v", mp.UserID))
	builder.WriteString(", ")
	builder.WriteString("progress=")
	builder.WriteString(fmt.Sprintf("%v", mp.Progress))
	builder.WriteByte(')')
	return builder.String()
}

// MemberProgresses is a parsable slice of MemberProgress.
type MemberProgresses []*MemberProgress