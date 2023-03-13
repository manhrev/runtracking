// Code generated by ent, DO NOT EDIT.

package challenge

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldID, id))
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldCreatedAt, v))
}

// StartTime applies equality check predicate on the "start_time" field. It's identical to StartTimeEQ.
func StartTime(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldStartTime, v))
}

// EndTime applies equality check predicate on the "end_time" field. It's identical to EndTimeEQ.
func EndTime(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldEndTime, v))
}

// Description applies equality check predicate on the "description" field. It's identical to DescriptionEQ.
func Description(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldDescription, v))
}

// TypeID applies equality check predicate on the "type_id" field. It's identical to TypeIDEQ.
func TypeID(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldTypeID, v))
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldCreatedAt, v))
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldCreatedAt, v))
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldCreatedAt, vs...))
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldCreatedAt, vs...))
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldCreatedAt, v))
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldCreatedAt, v))
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldCreatedAt, v))
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldCreatedAt, v))
}

// StartTimeEQ applies the EQ predicate on the "start_time" field.
func StartTimeEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldStartTime, v))
}

// StartTimeNEQ applies the NEQ predicate on the "start_time" field.
func StartTimeNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldStartTime, v))
}

// StartTimeIn applies the In predicate on the "start_time" field.
func StartTimeIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldStartTime, vs...))
}

// StartTimeNotIn applies the NotIn predicate on the "start_time" field.
func StartTimeNotIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldStartTime, vs...))
}

// StartTimeGT applies the GT predicate on the "start_time" field.
func StartTimeGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldStartTime, v))
}

// StartTimeGTE applies the GTE predicate on the "start_time" field.
func StartTimeGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldStartTime, v))
}

// StartTimeLT applies the LT predicate on the "start_time" field.
func StartTimeLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldStartTime, v))
}

// StartTimeLTE applies the LTE predicate on the "start_time" field.
func StartTimeLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldStartTime, v))
}

// StartTimeIsNil applies the IsNil predicate on the "start_time" field.
func StartTimeIsNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldIsNull(FieldStartTime))
}

// StartTimeNotNil applies the NotNil predicate on the "start_time" field.
func StartTimeNotNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldNotNull(FieldStartTime))
}

// EndTimeEQ applies the EQ predicate on the "end_time" field.
func EndTimeEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldEndTime, v))
}

// EndTimeNEQ applies the NEQ predicate on the "end_time" field.
func EndTimeNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldEndTime, v))
}

// EndTimeIn applies the In predicate on the "end_time" field.
func EndTimeIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldEndTime, vs...))
}

// EndTimeNotIn applies the NotIn predicate on the "end_time" field.
func EndTimeNotIn(vs ...time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldEndTime, vs...))
}

// EndTimeGT applies the GT predicate on the "end_time" field.
func EndTimeGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldEndTime, v))
}

// EndTimeGTE applies the GTE predicate on the "end_time" field.
func EndTimeGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldEndTime, v))
}

// EndTimeLT applies the LT predicate on the "end_time" field.
func EndTimeLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldEndTime, v))
}

// EndTimeLTE applies the LTE predicate on the "end_time" field.
func EndTimeLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldEndTime, v))
}

// EndTimeIsNil applies the IsNil predicate on the "end_time" field.
func EndTimeIsNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldIsNull(FieldEndTime))
}

// EndTimeNotNil applies the NotNil predicate on the "end_time" field.
func EndTimeNotNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldNotNull(FieldEndTime))
}

// DescriptionEQ applies the EQ predicate on the "description" field.
func DescriptionEQ(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldDescription, v))
}

// DescriptionNEQ applies the NEQ predicate on the "description" field.
func DescriptionNEQ(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldDescription, v))
}

// DescriptionIn applies the In predicate on the "description" field.
func DescriptionIn(vs ...string) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldDescription, vs...))
}

// DescriptionNotIn applies the NotIn predicate on the "description" field.
func DescriptionNotIn(vs ...string) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldDescription, vs...))
}

// DescriptionGT applies the GT predicate on the "description" field.
func DescriptionGT(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldDescription, v))
}

// DescriptionGTE applies the GTE predicate on the "description" field.
func DescriptionGTE(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldDescription, v))
}

// DescriptionLT applies the LT predicate on the "description" field.
func DescriptionLT(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldDescription, v))
}

// DescriptionLTE applies the LTE predicate on the "description" field.
func DescriptionLTE(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldDescription, v))
}

// DescriptionContains applies the Contains predicate on the "description" field.
func DescriptionContains(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldContains(FieldDescription, v))
}

// DescriptionHasPrefix applies the HasPrefix predicate on the "description" field.
func DescriptionHasPrefix(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldHasPrefix(FieldDescription, v))
}

// DescriptionHasSuffix applies the HasSuffix predicate on the "description" field.
func DescriptionHasSuffix(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldHasSuffix(FieldDescription, v))
}

// DescriptionIsNil applies the IsNil predicate on the "description" field.
func DescriptionIsNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldIsNull(FieldDescription))
}

// DescriptionNotNil applies the NotNil predicate on the "description" field.
func DescriptionNotNil() predicate.Challenge {
	return predicate.Challenge(sql.FieldNotNull(FieldDescription))
}

// DescriptionEqualFold applies the EqualFold predicate on the "description" field.
func DescriptionEqualFold(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldEqualFold(FieldDescription, v))
}

// DescriptionContainsFold applies the ContainsFold predicate on the "description" field.
func DescriptionContainsFold(v string) predicate.Challenge {
	return predicate.Challenge(sql.FieldContainsFold(FieldDescription, v))
}

// TypeIDEQ applies the EQ predicate on the "type_id" field.
func TypeIDEQ(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldEQ(FieldTypeID, v))
}

// TypeIDNEQ applies the NEQ predicate on the "type_id" field.
func TypeIDNEQ(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldNEQ(FieldTypeID, v))
}

// TypeIDIn applies the In predicate on the "type_id" field.
func TypeIDIn(vs ...int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldIn(FieldTypeID, vs...))
}

// TypeIDNotIn applies the NotIn predicate on the "type_id" field.
func TypeIDNotIn(vs ...int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldNotIn(FieldTypeID, vs...))
}

// TypeIDGT applies the GT predicate on the "type_id" field.
func TypeIDGT(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldGT(FieldTypeID, v))
}

// TypeIDGTE applies the GTE predicate on the "type_id" field.
func TypeIDGTE(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldGTE(FieldTypeID, v))
}

// TypeIDLT applies the LT predicate on the "type_id" field.
func TypeIDLT(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldLT(FieldTypeID, v))
}

// TypeIDLTE applies the LTE predicate on the "type_id" field.
func TypeIDLTE(v int64) predicate.Challenge {
	return predicate.Challenge(sql.FieldLTE(FieldTypeID, v))
}

// HasChallengeMembers applies the HasEdge predicate on the "challenge_members" edge.
func HasChallengeMembers() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengeMembersTable, ChallengeMembersColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasChallengeMembersWith applies the HasEdge predicate on the "challenge_members" edge with a given conditions (other predicates).
func HasChallengeMembersWith(preds ...predicate.ChallengeMember) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengeMembersInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengeMembersTable, ChallengeMembersColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasGroupz applies the HasEdge predicate on the "groupz" edge.
func HasGroupz() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, GroupzTable, GroupzColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasGroupzWith applies the HasEdge predicate on the "groupz" edge with a given conditions (other predicates).
func HasGroupzWith(preds ...predicate.Groupz) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(GroupzInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, GroupzTable, GroupzColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Challenge) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Challenge) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
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
func Not(p predicate.Challenge) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		p(s.Not())
	})
}
