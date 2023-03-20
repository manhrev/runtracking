// Code generated by ent, DO NOT EDIT.

package challengememberrule

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLTE(FieldID, id))
}

// Total applies equality check predicate on the "total" field. It's identical to TotalEQ.
func Total(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldTotal, v))
}

// RuleID applies equality check predicate on the "rule_id" field. It's identical to RuleIDEQ.
func RuleID(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldRuleID, v))
}

// TotalEQ applies the EQ predicate on the "total" field.
func TotalEQ(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldTotal, v))
}

// TotalNEQ applies the NEQ predicate on the "total" field.
func TotalNEQ(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNEQ(FieldTotal, v))
}

// TotalIn applies the In predicate on the "total" field.
func TotalIn(vs ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldIn(FieldTotal, vs...))
}

// TotalNotIn applies the NotIn predicate on the "total" field.
func TotalNotIn(vs ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNotIn(FieldTotal, vs...))
}

// TotalGT applies the GT predicate on the "total" field.
func TotalGT(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGT(FieldTotal, v))
}

// TotalGTE applies the GTE predicate on the "total" field.
func TotalGTE(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGTE(FieldTotal, v))
}

// TotalLT applies the LT predicate on the "total" field.
func TotalLT(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLT(FieldTotal, v))
}

// TotalLTE applies the LTE predicate on the "total" field.
func TotalLTE(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLTE(FieldTotal, v))
}

// TotalIsNil applies the IsNil predicate on the "total" field.
func TotalIsNil() predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldIsNull(FieldTotal))
}

// TotalNotNil applies the NotNil predicate on the "total" field.
func TotalNotNil() predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNotNull(FieldTotal))
}

// RuleIDEQ applies the EQ predicate on the "rule_id" field.
func RuleIDEQ(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldEQ(FieldRuleID, v))
}

// RuleIDNEQ applies the NEQ predicate on the "rule_id" field.
func RuleIDNEQ(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNEQ(FieldRuleID, v))
}

// RuleIDIn applies the In predicate on the "rule_id" field.
func RuleIDIn(vs ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldIn(FieldRuleID, vs...))
}

// RuleIDNotIn applies the NotIn predicate on the "rule_id" field.
func RuleIDNotIn(vs ...int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldNotIn(FieldRuleID, vs...))
}

// RuleIDGT applies the GT predicate on the "rule_id" field.
func RuleIDGT(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGT(FieldRuleID, v))
}

// RuleIDGTE applies the GTE predicate on the "rule_id" field.
func RuleIDGTE(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldGTE(FieldRuleID, v))
}

// RuleIDLT applies the LT predicate on the "rule_id" field.
func RuleIDLT(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLT(FieldRuleID, v))
}

// RuleIDLTE applies the LTE predicate on the "rule_id" field.
func RuleIDLTE(v int64) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(sql.FieldLTE(FieldRuleID, v))
}

// HasChallengeMember applies the HasEdge predicate on the "challenge_member" edge.
func HasChallengeMember() predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, ChallengeMemberTable, ChallengeMemberColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasChallengeMemberWith applies the HasEdge predicate on the "challenge_member" edge with a given conditions (other predicates).
func HasChallengeMemberWith(preds ...predicate.ChallengeMember) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengeMemberInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, ChallengeMemberTable, ChallengeMemberColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.ChallengeMemberRule) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.ChallengeMemberRule) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for i, p := range predicates {
			if i > 0 {
				s1.Or()
			}
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Not applies the not operator on the given predicate.
func Not(p predicate.ChallengeMemberRule) predicate.ChallengeMemberRule {
	return predicate.ChallengeMemberRule(func(s *sql.Selector) {
		p(s.Not())
	})
}
