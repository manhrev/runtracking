// Code generated by ent, DO NOT EDIT.

package challengemember

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldID, id))
}

// Point applies equality check predicate on the "point" field. It's identical to PointEQ.
func Point(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldPoint, v))
}

// MemberID applies equality check predicate on the "member_id" field. It's identical to MemberIDEQ.
func MemberID(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldMemberID, v))
}

// ChallengeID applies equality check predicate on the "challenge_id" field. It's identical to ChallengeIDEQ.
func ChallengeID(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldChallengeID, v))
}

// Status applies equality check predicate on the "status" field. It's identical to StatusEQ.
func Status(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldStatus, v))
}

// TimeCompleted applies equality check predicate on the "time_completed" field. It's identical to TimeCompletedEQ.
func TimeCompleted(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldTimeCompleted, v))
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldCreatedAt, v))
}

// UpdatedAt applies equality check predicate on the "updated_at" field. It's identical to UpdatedAtEQ.
func UpdatedAt(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldUpdatedAt, v))
}

// PointEQ applies the EQ predicate on the "point" field.
func PointEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldPoint, v))
}

// PointNEQ applies the NEQ predicate on the "point" field.
func PointNEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldPoint, v))
}

// PointIn applies the In predicate on the "point" field.
func PointIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldPoint, vs...))
}

// PointNotIn applies the NotIn predicate on the "point" field.
func PointNotIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldPoint, vs...))
}

// PointGT applies the GT predicate on the "point" field.
func PointGT(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldPoint, v))
}

// PointGTE applies the GTE predicate on the "point" field.
func PointGTE(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldPoint, v))
}

// PointLT applies the LT predicate on the "point" field.
func PointLT(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldPoint, v))
}

// PointLTE applies the LTE predicate on the "point" field.
func PointLTE(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldPoint, v))
}

// MemberIDEQ applies the EQ predicate on the "member_id" field.
func MemberIDEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldMemberID, v))
}

// MemberIDNEQ applies the NEQ predicate on the "member_id" field.
func MemberIDNEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldMemberID, v))
}

// MemberIDIn applies the In predicate on the "member_id" field.
func MemberIDIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldMemberID, vs...))
}

// MemberIDNotIn applies the NotIn predicate on the "member_id" field.
func MemberIDNotIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldMemberID, vs...))
}

// ChallengeIDEQ applies the EQ predicate on the "challenge_id" field.
func ChallengeIDEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldChallengeID, v))
}

// ChallengeIDNEQ applies the NEQ predicate on the "challenge_id" field.
func ChallengeIDNEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldChallengeID, v))
}

// ChallengeIDIn applies the In predicate on the "challenge_id" field.
func ChallengeIDIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldChallengeID, vs...))
}

// ChallengeIDNotIn applies the NotIn predicate on the "challenge_id" field.
func ChallengeIDNotIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldChallengeID, vs...))
}

// StatusEQ applies the EQ predicate on the "status" field.
func StatusEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldStatus, v))
}

// StatusNEQ applies the NEQ predicate on the "status" field.
func StatusNEQ(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldStatus, v))
}

// StatusIn applies the In predicate on the "status" field.
func StatusIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldStatus, vs...))
}

// StatusNotIn applies the NotIn predicate on the "status" field.
func StatusNotIn(vs ...int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldStatus, vs...))
}

// StatusGT applies the GT predicate on the "status" field.
func StatusGT(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldStatus, v))
}

// StatusGTE applies the GTE predicate on the "status" field.
func StatusGTE(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldStatus, v))
}

// StatusLT applies the LT predicate on the "status" field.
func StatusLT(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldStatus, v))
}

// StatusLTE applies the LTE predicate on the "status" field.
func StatusLTE(v int64) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldStatus, v))
}

// TimeCompletedEQ applies the EQ predicate on the "time_completed" field.
func TimeCompletedEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldTimeCompleted, v))
}

// TimeCompletedNEQ applies the NEQ predicate on the "time_completed" field.
func TimeCompletedNEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldTimeCompleted, v))
}

// TimeCompletedIn applies the In predicate on the "time_completed" field.
func TimeCompletedIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldTimeCompleted, vs...))
}

// TimeCompletedNotIn applies the NotIn predicate on the "time_completed" field.
func TimeCompletedNotIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldTimeCompleted, vs...))
}

// TimeCompletedGT applies the GT predicate on the "time_completed" field.
func TimeCompletedGT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldTimeCompleted, v))
}

// TimeCompletedGTE applies the GTE predicate on the "time_completed" field.
func TimeCompletedGTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldTimeCompleted, v))
}

// TimeCompletedLT applies the LT predicate on the "time_completed" field.
func TimeCompletedLT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldTimeCompleted, v))
}

// TimeCompletedLTE applies the LTE predicate on the "time_completed" field.
func TimeCompletedLTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldTimeCompleted, v))
}

// TimeCompletedIsNil applies the IsNil predicate on the "time_completed" field.
func TimeCompletedIsNil() predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIsNull(FieldTimeCompleted))
}

// TimeCompletedNotNil applies the NotNil predicate on the "time_completed" field.
func TimeCompletedNotNil() predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotNull(FieldTimeCompleted))
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldCreatedAt, v))
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldCreatedAt, v))
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldCreatedAt, vs...))
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldCreatedAt, vs...))
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldCreatedAt, v))
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldCreatedAt, v))
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldCreatedAt, v))
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldCreatedAt, v))
}

// UpdatedAtEQ applies the EQ predicate on the "updated_at" field.
func UpdatedAtEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldEQ(FieldUpdatedAt, v))
}

// UpdatedAtNEQ applies the NEQ predicate on the "updated_at" field.
func UpdatedAtNEQ(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNEQ(FieldUpdatedAt, v))
}

// UpdatedAtIn applies the In predicate on the "updated_at" field.
func UpdatedAtIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldIn(FieldUpdatedAt, vs...))
}

// UpdatedAtNotIn applies the NotIn predicate on the "updated_at" field.
func UpdatedAtNotIn(vs ...time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldNotIn(FieldUpdatedAt, vs...))
}

// UpdatedAtGT applies the GT predicate on the "updated_at" field.
func UpdatedAtGT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGT(FieldUpdatedAt, v))
}

// UpdatedAtGTE applies the GTE predicate on the "updated_at" field.
func UpdatedAtGTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldGTE(FieldUpdatedAt, v))
}

// UpdatedAtLT applies the LT predicate on the "updated_at" field.
func UpdatedAtLT(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLT(FieldUpdatedAt, v))
}

// UpdatedAtLTE applies the LTE predicate on the "updated_at" field.
func UpdatedAtLTE(v time.Time) predicate.ChallengeMember {
	return predicate.ChallengeMember(sql.FieldLTE(FieldUpdatedAt, v))
}

// HasChallengeMemberRules applies the HasEdge predicate on the "challenge_member_rules" edge.
func HasChallengeMemberRules() predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengeMemberRulesTable, ChallengeMemberRulesColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasChallengeMemberRulesWith applies the HasEdge predicate on the "challenge_member_rules" edge with a given conditions (other predicates).
func HasChallengeMemberRulesWith(preds ...predicate.ChallengeMemberRule) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengeMemberRulesInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengeMemberRulesTable, ChallengeMemberRulesColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasChallenge applies the HasEdge predicate on the "challenge" edge.
func HasChallenge() predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, ChallengeTable, ChallengeColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasChallengeWith applies the HasEdge predicate on the "challenge" edge with a given conditions (other predicates).
func HasChallengeWith(preds ...predicate.Challenge) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengeInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, ChallengeTable, ChallengeColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasMember applies the HasEdge predicate on the "member" edge.
func HasMember() predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, MemberTable, MemberColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasMemberWith applies the HasEdge predicate on the "member" edge with a given conditions (other predicates).
func HasMemberWith(preds ...predicate.Member) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(MemberInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, MemberTable, MemberColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.ChallengeMember) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.ChallengeMember) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
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
func Not(p predicate.ChallengeMember) predicate.ChallengeMember {
	return predicate.ChallengeMember(func(s *sql.Selector) {
		p(s.Not())
	})
}
