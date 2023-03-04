// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
)

// Groupz is the model entity for the Groupz schema.
type Groupz struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// Name holds the value of the "name" field.
	Name string `json:"name,omitempty"`
	// Description holds the value of the "description" field.
	Description string `json:"description,omitempty"`
	// BackgroundPicture holds the value of the "background_picture" field.
	BackgroundPicture string `json:"background_picture,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// LeaderID holds the value of the "leader_id" field.
	LeaderID int64 `json:"leader_id,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the GroupzQuery when eager-loading is set.
	Edges GroupzEdges `json:"edges"`
}

// GroupzEdges holds the relations/edges for other nodes in the graph.
type GroupzEdges struct {
	// Members holds the value of the members edge.
	Members []*Member `json:"members,omitempty"`
	// Challenges holds the value of the challenges edge.
	Challenges []*Challenge `json:"challenges,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// MembersOrErr returns the Members value or an error if the edge
// was not loaded in eager-loading.
func (e GroupzEdges) MembersOrErr() ([]*Member, error) {
	if e.loadedTypes[0] {
		return e.Members, nil
	}
	return nil, &NotLoadedError{edge: "members"}
}

// ChallengesOrErr returns the Challenges value or an error if the edge
// was not loaded in eager-loading.
func (e GroupzEdges) ChallengesOrErr() ([]*Challenge, error) {
	if e.loadedTypes[1] {
		return e.Challenges, nil
	}
	return nil, &NotLoadedError{edge: "challenges"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Groupz) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case groupz.FieldID, groupz.FieldLeaderID:
			values[i] = new(sql.NullInt64)
		case groupz.FieldName, groupz.FieldDescription, groupz.FieldBackgroundPicture:
			values[i] = new(sql.NullString)
		case groupz.FieldCreatedAt:
			values[i] = new(sql.NullTime)
		default:
			return nil, fmt.Errorf("unexpected column %q for type Groupz", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Groupz fields.
func (gr *Groupz) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case groupz.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			gr.ID = int64(value.Int64)
		case groupz.FieldName:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field name", values[i])
			} else if value.Valid {
				gr.Name = value.String
			}
		case groupz.FieldDescription:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field description", values[i])
			} else if value.Valid {
				gr.Description = value.String
			}
		case groupz.FieldBackgroundPicture:
			if value, ok := values[i].(*sql.NullString); !ok {
				return fmt.Errorf("unexpected type %T for field background_picture", values[i])
			} else if value.Valid {
				gr.BackgroundPicture = value.String
			}
		case groupz.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				gr.CreatedAt = value.Time
			}
		case groupz.FieldLeaderID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field leader_id", values[i])
			} else if value.Valid {
				gr.LeaderID = value.Int64
			}
		}
	}
	return nil
}

// QueryMembers queries the "members" edge of the Groupz entity.
func (gr *Groupz) QueryMembers() *MemberQuery {
	return (&GroupzClient{config: gr.config}).QueryMembers(gr)
}

// QueryChallenges queries the "challenges" edge of the Groupz entity.
func (gr *Groupz) QueryChallenges() *ChallengeQuery {
	return (&GroupzClient{config: gr.config}).QueryChallenges(gr)
}

// Update returns a builder for updating this Groupz.
// Note that you need to call Groupz.Unwrap() before calling this method if this Groupz
// was returned from a transaction, and the transaction was committed or rolled back.
func (gr *Groupz) Update() *GroupzUpdateOne {
	return (&GroupzClient{config: gr.config}).UpdateOne(gr)
}

// Unwrap unwraps the Groupz entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (gr *Groupz) Unwrap() *Groupz {
	_tx, ok := gr.config.driver.(*txDriver)
	if !ok {
		panic("ent: Groupz is not a transactional entity")
	}
	gr.config.driver = _tx.drv
	return gr
}

// String implements the fmt.Stringer.
func (gr *Groupz) String() string {
	var builder strings.Builder
	builder.WriteString("Groupz(")
	builder.WriteString(fmt.Sprintf("id=%v, ", gr.ID))
	builder.WriteString("name=")
	builder.WriteString(gr.Name)
	builder.WriteString(", ")
	builder.WriteString("description=")
	builder.WriteString(gr.Description)
	builder.WriteString(", ")
	builder.WriteString("background_picture=")
	builder.WriteString(gr.BackgroundPicture)
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(gr.CreatedAt.Format(time.ANSIC))
	builder.WriteString(", ")
	builder.WriteString("leader_id=")
	builder.WriteString(fmt.Sprintf("%v", gr.LeaderID))
	builder.WriteByte(')')
	return builder.String()
}

// Groupzs is a parsable slice of Groupz.
type Groupzs []*Groupz

func (gr Groupzs) config(cfg config) {
	for _i := range gr {
		gr[_i].config = cfg
	}
}
