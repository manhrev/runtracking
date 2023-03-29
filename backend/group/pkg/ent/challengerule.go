// Code generated by ent, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
)

// ChallengeRule is the model entity for the ChallengeRule schema.
type ChallengeRule struct {
	config `json:"-"`
	// ID of the ent.
	ID int64 `json:"id,omitempty"`
	// Total holds the value of the "total" field.
	Total int64 `json:"total,omitempty"`
	// RuleID holds the value of the "rule_id" field.
	RuleID int64 `json:"rule_id,omitempty"`
	// CreatedAt holds the value of the "created_at" field.
	CreatedAt time.Time `json:"created_at,omitempty"`
	// Edges holds the relations/edges for other nodes in the graph.
	// The values are being populated by the ChallengeRuleQuery when eager-loading is set.
	Edges                     ChallengeRuleEdges `json:"edges"`
	challenge_challenge_rules *int64
}

// ChallengeRuleEdges holds the relations/edges for other nodes in the graph.
type ChallengeRuleEdges struct {
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
func (e ChallengeRuleEdges) ChallengeMemberRulesOrErr() ([]*ChallengeMemberRule, error) {
	if e.loadedTypes[0] {
		return e.ChallengeMemberRules, nil
	}
	return nil, &NotLoadedError{edge: "challenge_member_rules"}
}

// ChallengeOrErr returns the Challenge value or an error if the edge
// was not loaded in eager-loading, or loaded but was not found.
func (e ChallengeRuleEdges) ChallengeOrErr() (*Challenge, error) {
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
func (*ChallengeRule) scanValues(columns []string) ([]any, error) {
	values := make([]any, len(columns))
	for i := range columns {
		switch columns[i] {
		case challengerule.FieldID, challengerule.FieldTotal, challengerule.FieldRuleID:
			values[i] = new(sql.NullInt64)
		case challengerule.FieldCreatedAt:
			values[i] = new(sql.NullTime)
		case challengerule.ForeignKeys[0]: // challenge_challenge_rules
			values[i] = new(sql.NullInt64)
		default:
			return nil, fmt.Errorf("unexpected column %q for type ChallengeRule", columns[i])
		}
	}
	return values, nil
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the ChallengeRule fields.
func (cr *ChallengeRule) assignValues(columns []string, values []any) error {
	if m, n := len(values), len(columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	for i := range columns {
		switch columns[i] {
		case challengerule.FieldID:
			value, ok := values[i].(*sql.NullInt64)
			if !ok {
				return fmt.Errorf("unexpected type %T for field id", value)
			}
			cr.ID = int64(value.Int64)
		case challengerule.FieldTotal:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field total", values[i])
			} else if value.Valid {
				cr.Total = value.Int64
			}
		case challengerule.FieldRuleID:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for field rule_id", values[i])
			} else if value.Valid {
				cr.RuleID = value.Int64
			}
		case challengerule.FieldCreatedAt:
			if value, ok := values[i].(*sql.NullTime); !ok {
				return fmt.Errorf("unexpected type %T for field created_at", values[i])
			} else if value.Valid {
				cr.CreatedAt = value.Time
			}
		case challengerule.ForeignKeys[0]:
			if value, ok := values[i].(*sql.NullInt64); !ok {
				return fmt.Errorf("unexpected type %T for edge-field challenge_challenge_rules", value)
			} else if value.Valid {
				cr.challenge_challenge_rules = new(int64)
				*cr.challenge_challenge_rules = int64(value.Int64)
			}
		}
	}
	return nil
}

// QueryChallengeMemberRules queries the "challenge_member_rules" edge of the ChallengeRule entity.
func (cr *ChallengeRule) QueryChallengeMemberRules() *ChallengeMemberRuleQuery {
	return NewChallengeRuleClient(cr.config).QueryChallengeMemberRules(cr)
}

// QueryChallenge queries the "challenge" edge of the ChallengeRule entity.
func (cr *ChallengeRule) QueryChallenge() *ChallengeQuery {
	return NewChallengeRuleClient(cr.config).QueryChallenge(cr)
}

// Update returns a builder for updating this ChallengeRule.
// Note that you need to call ChallengeRule.Unwrap() before calling this method if this ChallengeRule
// was returned from a transaction, and the transaction was committed or rolled back.
func (cr *ChallengeRule) Update() *ChallengeRuleUpdateOne {
	return NewChallengeRuleClient(cr.config).UpdateOne(cr)
}

// Unwrap unwraps the ChallengeRule entity that was returned from a transaction after it was closed,
// so that all future queries will be executed through the driver which created the transaction.
func (cr *ChallengeRule) Unwrap() *ChallengeRule {
	_tx, ok := cr.config.driver.(*txDriver)
	if !ok {
		panic("ent: ChallengeRule is not a transactional entity")
	}
	cr.config.driver = _tx.drv
	return cr
}

// String implements the fmt.Stringer.
func (cr *ChallengeRule) String() string {
	var builder strings.Builder
	builder.WriteString("ChallengeRule(")
	builder.WriteString(fmt.Sprintf("id=%v, ", cr.ID))
	builder.WriteString("total=")
	builder.WriteString(fmt.Sprintf("%v", cr.Total))
	builder.WriteString(", ")
	builder.WriteString("rule_id=")
	builder.WriteString(fmt.Sprintf("%v", cr.RuleID))
	builder.WriteString(", ")
	builder.WriteString("created_at=")
	builder.WriteString(cr.CreatedAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// ChallengeRules is a parsable slice of ChallengeRule.
type ChallengeRules []*ChallengeRule

func (cr ChallengeRules) config(cfg config) {
	for _i := range cr {
		cr[_i].config = cfg
	}
}
