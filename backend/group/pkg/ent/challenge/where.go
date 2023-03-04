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
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldID), id))
	})
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldID), id))
	})
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldID), id))
	})
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		v := make([]any, len(ids))
		for i := range v {
			v[i] = ids[i]
		}
		s.Where(sql.In(s.C(FieldID), v...))
	})
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		v := make([]any, len(ids))
		for i := range v {
			v[i] = ids[i]
		}
		s.Where(sql.NotIn(s.C(FieldID), v...))
	})
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldID), id))
	})
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldID), id))
	})
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldID), id))
	})
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldID), id))
	})
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldCreatedAt), v))
	})
}

// StartTime applies equality check predicate on the "start_time" field. It's identical to StartTimeEQ.
func StartTime(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldStartTime), v))
	})
}

// EndTime applies equality check predicate on the "end_time" field. It's identical to EndTimeEQ.
func EndTime(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldEndTime), v))
	})
}

// Description applies equality check predicate on the "description" field. It's identical to DescriptionEQ.
func Description(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldDescription), v))
	})
}

// TypeID applies equality check predicate on the "type_id" field. It's identical to TypeIDEQ.
func TypeID(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldTypeID), v))
	})
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldCreatedAt), v))
	})
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldCreatedAt), v))
	})
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.In(s.C(FieldCreatedAt), v...))
	})
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotIn(s.C(FieldCreatedAt), v...))
	})
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldCreatedAt), v))
	})
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldCreatedAt), v))
	})
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldCreatedAt), v))
	})
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldCreatedAt), v))
	})
}

// StartTimeEQ applies the EQ predicate on the "start_time" field.
func StartTimeEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldStartTime), v))
	})
}

// StartTimeNEQ applies the NEQ predicate on the "start_time" field.
func StartTimeNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldStartTime), v))
	})
}

// StartTimeIn applies the In predicate on the "start_time" field.
func StartTimeIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.In(s.C(FieldStartTime), v...))
	})
}

// StartTimeNotIn applies the NotIn predicate on the "start_time" field.
func StartTimeNotIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotIn(s.C(FieldStartTime), v...))
	})
}

// StartTimeGT applies the GT predicate on the "start_time" field.
func StartTimeGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldStartTime), v))
	})
}

// StartTimeGTE applies the GTE predicate on the "start_time" field.
func StartTimeGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldStartTime), v))
	})
}

// StartTimeLT applies the LT predicate on the "start_time" field.
func StartTimeLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldStartTime), v))
	})
}

// StartTimeLTE applies the LTE predicate on the "start_time" field.
func StartTimeLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldStartTime), v))
	})
}

// StartTimeIsNil applies the IsNil predicate on the "start_time" field.
func StartTimeIsNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldStartTime)))
	})
}

// StartTimeNotNil applies the NotNil predicate on the "start_time" field.
func StartTimeNotNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldStartTime)))
	})
}

// EndTimeEQ applies the EQ predicate on the "end_time" field.
func EndTimeEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldEndTime), v))
	})
}

// EndTimeNEQ applies the NEQ predicate on the "end_time" field.
func EndTimeNEQ(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldEndTime), v))
	})
}

// EndTimeIn applies the In predicate on the "end_time" field.
func EndTimeIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.In(s.C(FieldEndTime), v...))
	})
}

// EndTimeNotIn applies the NotIn predicate on the "end_time" field.
func EndTimeNotIn(vs ...time.Time) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotIn(s.C(FieldEndTime), v...))
	})
}

// EndTimeGT applies the GT predicate on the "end_time" field.
func EndTimeGT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldEndTime), v))
	})
}

// EndTimeGTE applies the GTE predicate on the "end_time" field.
func EndTimeGTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldEndTime), v))
	})
}

// EndTimeLT applies the LT predicate on the "end_time" field.
func EndTimeLT(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldEndTime), v))
	})
}

// EndTimeLTE applies the LTE predicate on the "end_time" field.
func EndTimeLTE(v time.Time) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldEndTime), v))
	})
}

// EndTimeIsNil applies the IsNil predicate on the "end_time" field.
func EndTimeIsNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldEndTime)))
	})
}

// EndTimeNotNil applies the NotNil predicate on the "end_time" field.
func EndTimeNotNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldEndTime)))
	})
}

// DescriptionEQ applies the EQ predicate on the "description" field.
func DescriptionEQ(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldDescription), v))
	})
}

// DescriptionNEQ applies the NEQ predicate on the "description" field.
func DescriptionNEQ(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldDescription), v))
	})
}

// DescriptionIn applies the In predicate on the "description" field.
func DescriptionIn(vs ...string) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.In(s.C(FieldDescription), v...))
	})
}

// DescriptionNotIn applies the NotIn predicate on the "description" field.
func DescriptionNotIn(vs ...string) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotIn(s.C(FieldDescription), v...))
	})
}

// DescriptionGT applies the GT predicate on the "description" field.
func DescriptionGT(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldDescription), v))
	})
}

// DescriptionGTE applies the GTE predicate on the "description" field.
func DescriptionGTE(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldDescription), v))
	})
}

// DescriptionLT applies the LT predicate on the "description" field.
func DescriptionLT(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldDescription), v))
	})
}

// DescriptionLTE applies the LTE predicate on the "description" field.
func DescriptionLTE(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldDescription), v))
	})
}

// DescriptionContains applies the Contains predicate on the "description" field.
func DescriptionContains(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.Contains(s.C(FieldDescription), v))
	})
}

// DescriptionHasPrefix applies the HasPrefix predicate on the "description" field.
func DescriptionHasPrefix(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.HasPrefix(s.C(FieldDescription), v))
	})
}

// DescriptionHasSuffix applies the HasSuffix predicate on the "description" field.
func DescriptionHasSuffix(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.HasSuffix(s.C(FieldDescription), v))
	})
}

// DescriptionIsNil applies the IsNil predicate on the "description" field.
func DescriptionIsNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.IsNull(s.C(FieldDescription)))
	})
}

// DescriptionNotNil applies the NotNil predicate on the "description" field.
func DescriptionNotNil() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotNull(s.C(FieldDescription)))
	})
}

// DescriptionEqualFold applies the EqualFold predicate on the "description" field.
func DescriptionEqualFold(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EqualFold(s.C(FieldDescription), v))
	})
}

// DescriptionContainsFold applies the ContainsFold predicate on the "description" field.
func DescriptionContainsFold(v string) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.ContainsFold(s.C(FieldDescription), v))
	})
}

// TypeIDEQ applies the EQ predicate on the "type_id" field.
func TypeIDEQ(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.EQ(s.C(FieldTypeID), v))
	})
}

// TypeIDNEQ applies the NEQ predicate on the "type_id" field.
func TypeIDNEQ(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NEQ(s.C(FieldTypeID), v))
	})
}

// TypeIDIn applies the In predicate on the "type_id" field.
func TypeIDIn(vs ...int64) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.In(s.C(FieldTypeID), v...))
	})
}

// TypeIDNotIn applies the NotIn predicate on the "type_id" field.
func TypeIDNotIn(vs ...int64) predicate.Challenge {
	v := make([]any, len(vs))
	for i := range v {
		v[i] = vs[i]
	}
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.NotIn(s.C(FieldTypeID), v...))
	})
}

// TypeIDGT applies the GT predicate on the "type_id" field.
func TypeIDGT(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GT(s.C(FieldTypeID), v))
	})
}

// TypeIDGTE applies the GTE predicate on the "type_id" field.
func TypeIDGTE(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.GTE(s.C(FieldTypeID), v))
	})
}

// TypeIDLT applies the LT predicate on the "type_id" field.
func TypeIDLT(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LT(s.C(FieldTypeID), v))
	})
}

// TypeIDLTE applies the LTE predicate on the "type_id" field.
func TypeIDLTE(v int64) predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		s.Where(sql.LTE(s.C(FieldTypeID), v))
	})
}

// HasChallengeMembers applies the HasEdge predicate on the "challenge_members" edge.
func HasChallengeMembers() predicate.Challenge {
	return predicate.Challenge(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengeMembersTable, FieldID),
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
			sqlgraph.To(GroupzTable, FieldID),
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