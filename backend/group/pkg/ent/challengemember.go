// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
)

// ChallengeMember is the model entity for the ChallengeMember schema.
type ChallengeMember struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// MemberID holds the value of the "member_id" field.
	MemberID int64 `json:"member_id,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the ChallengeMemberQuery when eager-loading is set.
	Edges                       ChallengeMemberEdges `json:"edges"`
	challenge_challenge_members *int64
}

// ChallengeMemberEdges holds the relations/edges for other nodes in the graph.
type ChallengeMemberEdges struct {
	// ChallengeMemberRules holds the value of the challenge_member_rules edge.
	ChallengeMemberRules []*ChallengeMemberRule `json:"challenge_member_rules,omitempty"`
	// Challenge holds the value of the challenge edge.
	Challenge *Challenge `json:"challenge,omitempty"`
	// loadedTypes holds the information for reporting if a
	// type was loaded (or requested) in eager-loading or not.
	loadedTypes [2]bool
}

// ChallengeMemberRulesOrErr returns the ChallengeMemberRules value or an error if the edge
// was not loaded in eager-loading.
func (e ChallengeMemberEdges) ChallengeMemberRulesOrErr() ([]*ChallengeMemberRule, error) {
	if e.loadedTypes[0] {
		return e.ChallengeMemberRules, nil
	}
	return nil, &NotLoadedError{edge: "challenge_member_rules"}
}

// ChallengeOrErr returns the Challenge value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e ChallengeMemberEdges) ChallengeOrErr() (*Challenge, error) {
	if e.loadedTypes[1] {
		if e.Challenge == nil {
			// Edge was loaded but was not found.
			return nil, &NotFoundError{label: challenge.Label}
		}
		return e.Challenge, nil
	}
	return nil, &NotLoadedError{edge: "challenge"}
}

// scanValues returns the types for scanning values from sql.Rows.
func (*ChallengeMember) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case challengemember.FieldID, challengemember.FieldMemberID:
			values[i] = new(sql.NullInt64)
		case challengemember.ForeignKeys[0]: // challenge_challenge_members
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type ChallengeMember", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the ChallengeMember fields.
func (cm *ChallengeMember) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case challengemember.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			cm.ID = int64(value.Int64)
		case challengemember.FieldMemberID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field member_id", values[i])
			} else if value.Valid {
				cm.MemberID = value.Int64
			}
		case challengemember.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field challenge_challenge_members", value)
			} else if value.Valid {
				cm.challenge_challenge_members = new(int64)
				*cm.challenge_challenge_members = int64(value.Int64)
			}
		}
	}
	return nil
}

// QueryChallengeMemberRules queries the "challenge_member_rules" edge of the ChallengeMember entity.
func (cm *ChallengeMember) QueryChallengeMemberRules() *ChallengeMemberRuleQuery {
	return (&ChallengeMemberClient{config: cm.config}).QueryChallengeMemberRules(cm)
}

// QueryChallenge queries the "challenge" edge of the ChallengeMember entity.
func (cm *ChallengeMember) QueryChallenge() *ChallengeQuery {
	return (&ChallengeMemberClient{config: cm.config}).QueryChallenge(cm)
}

// Update returns a builder for updating this ChallengeMember.
// Note that you need to call ChallengeMember.Unwrap() before calling this method if this ChallengeMember
// was returned from a transaction, and the transaction was committed or rolled back.
func (cm *ChallengeMember) Update() *ChallengeMemberUpdateOne {
	return (&ChallengeMemberClient{config: cm.config}).UpdateOne(cm)
}

// Unwrap unwraps the ChallengeMember entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (cm *ChallengeMember) Unwrap() *ChallengeMember {
	_tx, ok := cm.config.driver.(*txDriver)
	if !ok {
		panic("ent: ChallengeMember is not a transactional entity")
	}
	cm.config.driver = _tx.drv
	return cm
}

// String implements the fmt.Stringer.
func (cm *ChallengeMember) String() string {
	var builder strings.Builder
	builder.WriteString("ChallengeMember(")
	builder.WriteString(fmt.Sprintf("id=%v, ", cm.ID))
	builder.WriteString("member_id=")
	builder.WriteString(fmt.Sprintf("%v", cm.MemberID))
	builder.WriteByte(')')
	return builder.String()
}

// ChallengeMembers is a parsable slice of ChallengeMember.
type ChallengeMembers []*ChallengeMember

func (cm ChallengeMembers) config(cfg config) {
	for _i := range cm {
		cm[_i].config = cfg
	}
}
