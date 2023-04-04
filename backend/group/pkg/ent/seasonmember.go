// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

// SeasonMember is the model entity for the SeasonMember schema.
type SeasonMember struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// Point holds the value of the "point" field.
	Point int64 `json:"point,omitempty"`
	// MemberID holds the value of the "member_id" field.
	MemberID int64 `json:"member_id,omitempty"`
	// SeasonID holds the value of the "season_id" field.
	SeasonID int64 `json:"season_id,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// UpdatedAt holds the value of the "updated_at" field.
	UpdatedAt time.Time `json:"updated_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the SeasonMemberQuery when eager-loading is set.
	Edges SeasonMemberEdges `json:"edges"`
}

// SeasonMemberEdges holds the relations/edges for other nodes in the graph.
type SeasonMemberEdges struct {
	// Season holds the value of the season edge.
	Season *Season `json:"season,omitempty"`
	// Member holds the value of the member edge.
	Member *Member `json:"member,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// SeasonOrErr returns the Season value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e SeasonMemberEdges) SeasonOrErr() (*Season, error) {
	if e.loadedTypes[0] {
		if e.Season == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: season.Label}
		}
		return e.Season, nil
	}
	return nil, &NotLoadedError{edge: "season"}
}

// MemberOrErr returns the Member value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e SeasonMemberEdges) MemberOrErr() (*Member, error) {
	if e.loadedTypes[1] {
		if e.Member == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: member.Label}
		}
		return e.Member, nil
	}
	return nil, &NotLoadedError{edge: "member"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*SeasonMember) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case seasonmember.FieldID, seasonmember.FieldPoint, seasonmember.FieldMemberID, seasonmember.FieldSeasonID:
			values[i] = new(sql.NullInt64)
		case seasonmember.FieldCreatedAt, seasonmember.FieldUpdatedAt:
			values[i] = new(sql.NullTime)
		default:
			return nil, fmt.Errorf("unexpected column %q for type SeasonMember", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the SeasonMember fields.
func (sm *SeasonMember) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case seasonmember.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			sm.ID = int64(value.Int64)
		case seasonmember.FieldPoint:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field point", values[i])
			} else if value.Valid {
				sm.Point = value.Int64
			}
		case seasonmember.FieldMemberID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field member_id", values[i])
			} else if value.Valid {
				sm.MemberID = value.Int64
			}
		case seasonmember.FieldSeasonID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field season_id", values[i])
			} else if value.Valid {
				sm.SeasonID = value.Int64
			}
		case seasonmember.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				sm.CreatedAt = value.Time
			}
		case seasonmember.FieldUpdatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field updated_at", values[i])
			} else if value.Valid {
				sm.UpdatedAt = value.Time
			}
		}
	}
	return nil
}

// QuerySeason queries the "season" edge of the SeasonMember entity.
func (sm *SeasonMember) QuerySeason() *SeasonQuery {
	return NewSeasonMemberClient(sm.config).QuerySeason(sm)
}

// QueryMember queries the "member" edge of the SeasonMember entity.
func (sm *SeasonMember) QueryMember() *MemberQuery {
	return NewSeasonMemberClient(sm.config).QueryMember(sm)
}

// Update returns a builder for updating this SeasonMember.
// Note that you need to call SeasonMember.Unwrap() before calling this method if this SeasonMember
// was returned from a transaction, and the transaction was committed or rolled back.
func (sm *SeasonMember) Update() *SeasonMemberUpdateOne {
	return NewSeasonMemberClient(sm.config).UpdateOne(sm)
}

// Unwrap unwraps the SeasonMember entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (sm *SeasonMember) Unwrap() *SeasonMember {
	_tx, ok := sm.config.driver.(*txDriver)
	if !ok {
		panic("ent: SeasonMember is not a transactional entity")
	}
	sm.config.driver = _tx.drv
	return sm
}

// String implements the fmt.Stringer.
func (sm *SeasonMember) String() string {
	var builder strings.Builder
	builder.WriteString("SeasonMember(")
	builder.WriteString(fmt.Sprintf("id=%v, ", sm.ID))
	builder.WriteString("point=")
	builder.WriteString(fmt.Sprintf("%v", sm.Point))
	builder.WriteString(", ")
	builder.WriteString("member_id=")
	builder.WriteString(fmt.Sprintf("%v", sm.MemberID))
	builder.WriteString(", ")
	builder.WriteString("season_id=")
	builder.WriteString(fmt.Sprintf("%v", sm.SeasonID))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(sm.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("updated_at=")
	builder.WriteString(sm.UpdatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// SeasonMembers is a parsable slice of SeasonMember.
type SeasonMembers []*SeasonMember

func (sm SeasonMembers) config(cfg config) {
	for _i := range sm {
		sm[_i].config = cfg
	}
}