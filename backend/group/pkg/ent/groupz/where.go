// Code generated by ent, DO NOT EDIT.

package groupz

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldID, id))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldName, v))
}

// Description applies equality check predicate on the "description" field. It's identical to DescriptionEQ.
func Description(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldDescription, v))
}

// BackgroundPicture applies equality check predicate on the "background_picture" field. It's identical to BackgroundPictureEQ.
func BackgroundPicture(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldBackgroundPicture, v))
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldCreatedAt, v))
}

// LeaderID applies equality check predicate on the "leader_id" field. It's identical to LeaderIDEQ.
func LeaderID(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldLeaderID, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasSuffix(FieldName, v))
}

// NameIsNil applies the IsNil predicate on the "name" field.
func NameIsNil() predicate.Groupz {
	return predicate.Groupz(sql.FieldIsNull(FieldName))
}

// NameNotNil applies the NotNil predicate on the "name" field.
func NameNotNil() predicate.Groupz {
	return predicate.Groupz(sql.FieldNotNull(FieldName))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContainsFold(FieldName, v))
}

// DescriptionEQ applies the EQ predicate on the "description" field.
func DescriptionEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldDescription, v))
}

// DescriptionNEQ applies the NEQ predicate on the "description" field.
func DescriptionNEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldDescription, v))
}

// DescriptionIn applies the In predicate on the "description" field.
func DescriptionIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldDescription, vs...))
}

// DescriptionNotIn applies the NotIn predicate on the "description" field.
func DescriptionNotIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldDescription, vs...))
}

// DescriptionGT applies the GT predicate on the "description" field.
func DescriptionGT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldDescription, v))
}

// DescriptionGTE applies the GTE predicate on the "description" field.
func DescriptionGTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldDescription, v))
}

// DescriptionLT applies the LT predicate on the "description" field.
func DescriptionLT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldDescription, v))
}

// DescriptionLTE applies the LTE predicate on the "description" field.
func DescriptionLTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldDescription, v))
}

// DescriptionContains applies the Contains predicate on the "description" field.
func DescriptionContains(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContains(FieldDescription, v))
}

// DescriptionHasPrefix applies the HasPrefix predicate on the "description" field.
func DescriptionHasPrefix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasPrefix(FieldDescription, v))
}

// DescriptionHasSuffix applies the HasSuffix predicate on the "description" field.
func DescriptionHasSuffix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasSuffix(FieldDescription, v))
}

// DescriptionIsNil applies the IsNil predicate on the "description" field.
func DescriptionIsNil() predicate.Groupz {
	return predicate.Groupz(sql.FieldIsNull(FieldDescription))
}

// DescriptionNotNil applies the NotNil predicate on the "description" field.
func DescriptionNotNil() predicate.Groupz {
	return predicate.Groupz(sql.FieldNotNull(FieldDescription))
}

// DescriptionEqualFold applies the EqualFold predicate on the "description" field.
func DescriptionEqualFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEqualFold(FieldDescription, v))
}

// DescriptionContainsFold applies the ContainsFold predicate on the "description" field.
func DescriptionContainsFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContainsFold(FieldDescription, v))
}

// BackgroundPictureEQ applies the EQ predicate on the "background_picture" field.
func BackgroundPictureEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldBackgroundPicture, v))
}

// BackgroundPictureNEQ applies the NEQ predicate on the "background_picture" field.
func BackgroundPictureNEQ(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldBackgroundPicture, v))
}

// BackgroundPictureIn applies the In predicate on the "background_picture" field.
func BackgroundPictureIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldBackgroundPicture, vs...))
}

// BackgroundPictureNotIn applies the NotIn predicate on the "background_picture" field.
func BackgroundPictureNotIn(vs ...string) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldBackgroundPicture, vs...))
}

// BackgroundPictureGT applies the GT predicate on the "background_picture" field.
func BackgroundPictureGT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldBackgroundPicture, v))
}

// BackgroundPictureGTE applies the GTE predicate on the "background_picture" field.
func BackgroundPictureGTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldBackgroundPicture, v))
}

// BackgroundPictureLT applies the LT predicate on the "background_picture" field.
func BackgroundPictureLT(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldBackgroundPicture, v))
}

// BackgroundPictureLTE applies the LTE predicate on the "background_picture" field.
func BackgroundPictureLTE(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldBackgroundPicture, v))
}

// BackgroundPictureContains applies the Contains predicate on the "background_picture" field.
func BackgroundPictureContains(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContains(FieldBackgroundPicture, v))
}

// BackgroundPictureHasPrefix applies the HasPrefix predicate on the "background_picture" field.
func BackgroundPictureHasPrefix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasPrefix(FieldBackgroundPicture, v))
}

// BackgroundPictureHasSuffix applies the HasSuffix predicate on the "background_picture" field.
func BackgroundPictureHasSuffix(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldHasSuffix(FieldBackgroundPicture, v))
}

// BackgroundPictureEqualFold applies the EqualFold predicate on the "background_picture" field.
func BackgroundPictureEqualFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldEqualFold(FieldBackgroundPicture, v))
}

// BackgroundPictureContainsFold applies the ContainsFold predicate on the "background_picture" field.
func BackgroundPictureContainsFold(v string) predicate.Groupz {
	return predicate.Groupz(sql.FieldContainsFold(FieldBackgroundPicture, v))
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldCreatedAt, v))
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldCreatedAt, v))
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldCreatedAt, vs...))
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldCreatedAt, vs...))
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldCreatedAt, v))
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldCreatedAt, v))
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldCreatedAt, v))
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldCreatedAt, v))
}

// LeaderIDEQ applies the EQ predicate on the "leader_id" field.
func LeaderIDEQ(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldEQ(FieldLeaderID, v))
}

// LeaderIDNEQ applies the NEQ predicate on the "leader_id" field.
func LeaderIDNEQ(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldNEQ(FieldLeaderID, v))
}

// LeaderIDIn applies the In predicate on the "leader_id" field.
func LeaderIDIn(vs ...int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldIn(FieldLeaderID, vs...))
}

// LeaderIDNotIn applies the NotIn predicate on the "leader_id" field.
func LeaderIDNotIn(vs ...int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldNotIn(FieldLeaderID, vs...))
}

// LeaderIDGT applies the GT predicate on the "leader_id" field.
func LeaderIDGT(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldGT(FieldLeaderID, v))
}

// LeaderIDGTE applies the GTE predicate on the "leader_id" field.
func LeaderIDGTE(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldGTE(FieldLeaderID, v))
}

// LeaderIDLT applies the LT predicate on the "leader_id" field.
func LeaderIDLT(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldLT(FieldLeaderID, v))
}

// LeaderIDLTE applies the LTE predicate on the "leader_id" field.
func LeaderIDLTE(v int64) predicate.Groupz {
	return predicate.Groupz(sql.FieldLTE(FieldLeaderID, v))
}

// HasMembers applies the HasEdge predicate on the "members" edge.
func HasMembers() predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, MembersTable, MembersColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasMembersWith applies the HasEdge predicate on the "members" edge with a given conditions (other predicates).
func HasMembersWith(preds ...predicate.Member) predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(MembersInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, MembersTable, MembersColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasChallenges applies the HasEdge predicate on the "challenges" edge.
func HasChallenges() predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengesTable, ChallengesColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasChallengesWith applies the HasEdge predicate on the "challenges" edge with a given conditions (other predicates).
func HasChallengesWith(preds ...predicate.Challenge) predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(ChallengesInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, ChallengesTable, ChallengesColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Groupz) predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Groupz) predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
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
func Not(p predicate.Groupz) predicate.Groupz {
	return predicate.Groupz(func(s *sql.Selector) {
		p(s.Not())
	})
}
