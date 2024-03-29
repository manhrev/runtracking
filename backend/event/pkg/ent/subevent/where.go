// Code generated by ent, DO NOT EDIT.

package subevent

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldID, id))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldName, v))
}

// Picture applies equality check predicate on the "picture" field. It's identical to PictureEQ.
func Picture(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldPicture, v))
}

// StartDate applies equality check predicate on the "start_date" field. It's identical to StartDateEQ.
func StartDate(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldStartDate, v))
}

// EndDate applies equality check predicate on the "end_date" field. It's identical to EndDateEQ.
func EndDate(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldEndDate, v))
}

// Description applies equality check predicate on the "description" field. It's identical to DescriptionEQ.
func Description(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldDescription, v))
}

// Goal applies equality check predicate on the "goal" field. It's identical to GoalEQ.
func Goal(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldGoal, v))
}

// Rule applies equality check predicate on the "rule" field. It's identical to RuleEQ.
func Rule(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldRule, v))
}

// ActivityType applies equality check predicate on the "activity_type" field. It's identical to ActivityTypeEQ.
func ActivityType(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldActivityType, v))
}

// Status applies equality check predicate on the "status" field. It's identical to StatusEQ.
func Status(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldStatus, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasSuffix(FieldName, v))
}

// NameIsNil applies the IsNil predicate on the "name" field.
func NameIsNil() predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIsNull(FieldName))
}

// NameNotNil applies the NotNil predicate on the "name" field.
func NameNotNil() predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotNull(FieldName))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContainsFold(FieldName, v))
}

// PictureEQ applies the EQ predicate on the "picture" field.
func PictureEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldPicture, v))
}

// PictureNEQ applies the NEQ predicate on the "picture" field.
func PictureNEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldPicture, v))
}

// PictureIn applies the In predicate on the "picture" field.
func PictureIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldPicture, vs...))
}

// PictureNotIn applies the NotIn predicate on the "picture" field.
func PictureNotIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldPicture, vs...))
}

// PictureGT applies the GT predicate on the "picture" field.
func PictureGT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldPicture, v))
}

// PictureGTE applies the GTE predicate on the "picture" field.
func PictureGTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldPicture, v))
}

// PictureLT applies the LT predicate on the "picture" field.
func PictureLT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldPicture, v))
}

// PictureLTE applies the LTE predicate on the "picture" field.
func PictureLTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldPicture, v))
}

// PictureContains applies the Contains predicate on the "picture" field.
func PictureContains(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContains(FieldPicture, v))
}

// PictureHasPrefix applies the HasPrefix predicate on the "picture" field.
func PictureHasPrefix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasPrefix(FieldPicture, v))
}

// PictureHasSuffix applies the HasSuffix predicate on the "picture" field.
func PictureHasSuffix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasSuffix(FieldPicture, v))
}

// PictureEqualFold applies the EqualFold predicate on the "picture" field.
func PictureEqualFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEqualFold(FieldPicture, v))
}

// PictureContainsFold applies the ContainsFold predicate on the "picture" field.
func PictureContainsFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContainsFold(FieldPicture, v))
}

// StartDateEQ applies the EQ predicate on the "start_date" field.
func StartDateEQ(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldStartDate, v))
}

// StartDateNEQ applies the NEQ predicate on the "start_date" field.
func StartDateNEQ(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldStartDate, v))
}

// StartDateIn applies the In predicate on the "start_date" field.
func StartDateIn(vs ...time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldStartDate, vs...))
}

// StartDateNotIn applies the NotIn predicate on the "start_date" field.
func StartDateNotIn(vs ...time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldStartDate, vs...))
}

// StartDateGT applies the GT predicate on the "start_date" field.
func StartDateGT(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldStartDate, v))
}

// StartDateGTE applies the GTE predicate on the "start_date" field.
func StartDateGTE(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldStartDate, v))
}

// StartDateLT applies the LT predicate on the "start_date" field.
func StartDateLT(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldStartDate, v))
}

// StartDateLTE applies the LTE predicate on the "start_date" field.
func StartDateLTE(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldStartDate, v))
}

// EndDateEQ applies the EQ predicate on the "end_date" field.
func EndDateEQ(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldEndDate, v))
}

// EndDateNEQ applies the NEQ predicate on the "end_date" field.
func EndDateNEQ(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldEndDate, v))
}

// EndDateIn applies the In predicate on the "end_date" field.
func EndDateIn(vs ...time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldEndDate, vs...))
}

// EndDateNotIn applies the NotIn predicate on the "end_date" field.
func EndDateNotIn(vs ...time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldEndDate, vs...))
}

// EndDateGT applies the GT predicate on the "end_date" field.
func EndDateGT(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldEndDate, v))
}

// EndDateGTE applies the GTE predicate on the "end_date" field.
func EndDateGTE(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldEndDate, v))
}

// EndDateLT applies the LT predicate on the "end_date" field.
func EndDateLT(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldEndDate, v))
}

// EndDateLTE applies the LTE predicate on the "end_date" field.
func EndDateLTE(v time.Time) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldEndDate, v))
}

// DescriptionEQ applies the EQ predicate on the "description" field.
func DescriptionEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldDescription, v))
}

// DescriptionNEQ applies the NEQ predicate on the "description" field.
func DescriptionNEQ(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldDescription, v))
}

// DescriptionIn applies the In predicate on the "description" field.
func DescriptionIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldDescription, vs...))
}

// DescriptionNotIn applies the NotIn predicate on the "description" field.
func DescriptionNotIn(vs ...string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldDescription, vs...))
}

// DescriptionGT applies the GT predicate on the "description" field.
func DescriptionGT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldDescription, v))
}

// DescriptionGTE applies the GTE predicate on the "description" field.
func DescriptionGTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldDescription, v))
}

// DescriptionLT applies the LT predicate on the "description" field.
func DescriptionLT(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldDescription, v))
}

// DescriptionLTE applies the LTE predicate on the "description" field.
func DescriptionLTE(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldDescription, v))
}

// DescriptionContains applies the Contains predicate on the "description" field.
func DescriptionContains(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContains(FieldDescription, v))
}

// DescriptionHasPrefix applies the HasPrefix predicate on the "description" field.
func DescriptionHasPrefix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasPrefix(FieldDescription, v))
}

// DescriptionHasSuffix applies the HasSuffix predicate on the "description" field.
func DescriptionHasSuffix(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldHasSuffix(FieldDescription, v))
}

// DescriptionIsNil applies the IsNil predicate on the "description" field.
func DescriptionIsNil() predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIsNull(FieldDescription))
}

// DescriptionNotNil applies the NotNil predicate on the "description" field.
func DescriptionNotNil() predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotNull(FieldDescription))
}

// DescriptionEqualFold applies the EqualFold predicate on the "description" field.
func DescriptionEqualFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEqualFold(FieldDescription, v))
}

// DescriptionContainsFold applies the ContainsFold predicate on the "description" field.
func DescriptionContainsFold(v string) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldContainsFold(FieldDescription, v))
}

// GoalEQ applies the EQ predicate on the "goal" field.
func GoalEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldGoal, v))
}

// GoalNEQ applies the NEQ predicate on the "goal" field.
func GoalNEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldGoal, v))
}

// GoalIn applies the In predicate on the "goal" field.
func GoalIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldGoal, vs...))
}

// GoalNotIn applies the NotIn predicate on the "goal" field.
func GoalNotIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldGoal, vs...))
}

// GoalGT applies the GT predicate on the "goal" field.
func GoalGT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldGoal, v))
}

// GoalGTE applies the GTE predicate on the "goal" field.
func GoalGTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldGoal, v))
}

// GoalLT applies the LT predicate on the "goal" field.
func GoalLT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldGoal, v))
}

// GoalLTE applies the LTE predicate on the "goal" field.
func GoalLTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldGoal, v))
}

// RuleEQ applies the EQ predicate on the "rule" field.
func RuleEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldRule, v))
}

// RuleNEQ applies the NEQ predicate on the "rule" field.
func RuleNEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldRule, v))
}

// RuleIn applies the In predicate on the "rule" field.
func RuleIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldRule, vs...))
}

// RuleNotIn applies the NotIn predicate on the "rule" field.
func RuleNotIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldRule, vs...))
}

// RuleGT applies the GT predicate on the "rule" field.
func RuleGT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldRule, v))
}

// RuleGTE applies the GTE predicate on the "rule" field.
func RuleGTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldRule, v))
}

// RuleLT applies the LT predicate on the "rule" field.
func RuleLT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldRule, v))
}

// RuleLTE applies the LTE predicate on the "rule" field.
func RuleLTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldRule, v))
}

// ActivityTypeEQ applies the EQ predicate on the "activity_type" field.
func ActivityTypeEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldActivityType, v))
}

// ActivityTypeNEQ applies the NEQ predicate on the "activity_type" field.
func ActivityTypeNEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldActivityType, v))
}

// ActivityTypeIn applies the In predicate on the "activity_type" field.
func ActivityTypeIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldActivityType, vs...))
}

// ActivityTypeNotIn applies the NotIn predicate on the "activity_type" field.
func ActivityTypeNotIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldActivityType, vs...))
}

// ActivityTypeGT applies the GT predicate on the "activity_type" field.
func ActivityTypeGT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldActivityType, v))
}

// ActivityTypeGTE applies the GTE predicate on the "activity_type" field.
func ActivityTypeGTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldActivityType, v))
}

// ActivityTypeLT applies the LT predicate on the "activity_type" field.
func ActivityTypeLT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldActivityType, v))
}

// ActivityTypeLTE applies the LTE predicate on the "activity_type" field.
func ActivityTypeLTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldActivityType, v))
}

// StatusEQ applies the EQ predicate on the "status" field.
func StatusEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldEQ(FieldStatus, v))
}

// StatusNEQ applies the NEQ predicate on the "status" field.
func StatusNEQ(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNEQ(FieldStatus, v))
}

// StatusIn applies the In predicate on the "status" field.
func StatusIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldIn(FieldStatus, vs...))
}

// StatusNotIn applies the NotIn predicate on the "status" field.
func StatusNotIn(vs ...int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldNotIn(FieldStatus, vs...))
}

// StatusGT applies the GT predicate on the "status" field.
func StatusGT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGT(FieldStatus, v))
}

// StatusGTE applies the GTE predicate on the "status" field.
func StatusGTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldGTE(FieldStatus, v))
}

// StatusLT applies the LT predicate on the "status" field.
func StatusLT(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLT(FieldStatus, v))
}

// StatusLTE applies the LTE predicate on the "status" field.
func StatusLTE(v int64) predicate.SubEvent {
	return predicate.SubEvent(sql.FieldLTE(FieldStatus, v))
}

// HasEvent applies the HasEdge predicate on the "event" edge.
func HasEvent() predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, EventTable, EventColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasEventWith applies the HasEdge predicate on the "event" edge with a given conditions (other predicates).
func HasEventWith(preds ...predicate.Event) predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		step := newEventStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// HasGroup applies the HasEdge predicate on the "group" edge.
func HasGroup() predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, GroupTable, GroupColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasGroupWith applies the HasEdge predicate on the "group" edge with a given conditions (other predicates).
func HasGroupWith(preds ...predicate.GroupzProgress) predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		step := newGroupStep()
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.SubEvent) predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.SubEvent) predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
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
func Not(p predicate.SubEvent) predicate.SubEvent {
	return predicate.SubEvent(func(s *sql.Selector) {
		p(s.Not())
	})
}
