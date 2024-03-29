// Code generated by ent, DO NOT EDIT.

package plan

import (
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldID, id))
}

// UserID applies equality check predicate on the "user_id" field. It's identical to UserIDEQ.
func UserID(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldUserID, v))
}

// Rule applies equality check predicate on the "rule" field. It's identical to RuleEQ.
func Rule(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldRule, v))
}

// ActivityType applies equality check predicate on the "activity_type" field. It's identical to ActivityTypeEQ.
func ActivityType(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldActivityType, v))
}

// StartTime applies equality check predicate on the "start_time" field. It's identical to StartTimeEQ.
func StartTime(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldStartTime, v))
}

// EndTime applies equality check predicate on the "end_time" field. It's identical to EndTimeEQ.
func EndTime(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldEndTime, v))
}

// Total applies equality check predicate on the "total" field. It's identical to TotalEQ.
func Total(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldTotal, v))
}

// Goal applies equality check predicate on the "goal" field. It's identical to GoalEQ.
func Goal(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldGoal, v))
}

// Status applies equality check predicate on the "status" field. It's identical to StatusEQ.
func Status(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldStatus, v))
}

// CreatedAt applies equality check predicate on the "created_at" field. It's identical to CreatedAtEQ.
func CreatedAt(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldCreatedAt, v))
}

// Name applies equality check predicate on the "name" field. It's identical to NameEQ.
func Name(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldName, v))
}

// Note applies equality check predicate on the "note" field. It's identical to NoteEQ.
func Note(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldNote, v))
}

// TimeZone applies equality check predicate on the "time_zone" field. It's identical to TimeZoneEQ.
func TimeZone(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldTimeZone, v))
}

// UserIDEQ applies the EQ predicate on the "user_id" field.
func UserIDEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldUserID, v))
}

// UserIDNEQ applies the NEQ predicate on the "user_id" field.
func UserIDNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldUserID, v))
}

// UserIDIn applies the In predicate on the "user_id" field.
func UserIDIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldUserID, vs...))
}

// UserIDNotIn applies the NotIn predicate on the "user_id" field.
func UserIDNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldUserID, vs...))
}

// UserIDGT applies the GT predicate on the "user_id" field.
func UserIDGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldUserID, v))
}

// UserIDGTE applies the GTE predicate on the "user_id" field.
func UserIDGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldUserID, v))
}

// UserIDLT applies the LT predicate on the "user_id" field.
func UserIDLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldUserID, v))
}

// UserIDLTE applies the LTE predicate on the "user_id" field.
func UserIDLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldUserID, v))
}

// RuleEQ applies the EQ predicate on the "rule" field.
func RuleEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldRule, v))
}

// RuleNEQ applies the NEQ predicate on the "rule" field.
func RuleNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldRule, v))
}

// RuleIn applies the In predicate on the "rule" field.
func RuleIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldRule, vs...))
}

// RuleNotIn applies the NotIn predicate on the "rule" field.
func RuleNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldRule, vs...))
}

// RuleGT applies the GT predicate on the "rule" field.
func RuleGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldRule, v))
}

// RuleGTE applies the GTE predicate on the "rule" field.
func RuleGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldRule, v))
}

// RuleLT applies the LT predicate on the "rule" field.
func RuleLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldRule, v))
}

// RuleLTE applies the LTE predicate on the "rule" field.
func RuleLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldRule, v))
}

// ActivityTypeEQ applies the EQ predicate on the "activity_type" field.
func ActivityTypeEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldActivityType, v))
}

// ActivityTypeNEQ applies the NEQ predicate on the "activity_type" field.
func ActivityTypeNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldActivityType, v))
}

// ActivityTypeIn applies the In predicate on the "activity_type" field.
func ActivityTypeIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldActivityType, vs...))
}

// ActivityTypeNotIn applies the NotIn predicate on the "activity_type" field.
func ActivityTypeNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldActivityType, vs...))
}

// ActivityTypeGT applies the GT predicate on the "activity_type" field.
func ActivityTypeGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldActivityType, v))
}

// ActivityTypeGTE applies the GTE predicate on the "activity_type" field.
func ActivityTypeGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldActivityType, v))
}

// ActivityTypeLT applies the LT predicate on the "activity_type" field.
func ActivityTypeLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldActivityType, v))
}

// ActivityTypeLTE applies the LTE predicate on the "activity_type" field.
func ActivityTypeLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldActivityType, v))
}

// StartTimeEQ applies the EQ predicate on the "start_time" field.
func StartTimeEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldStartTime, v))
}

// StartTimeNEQ applies the NEQ predicate on the "start_time" field.
func StartTimeNEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldStartTime, v))
}

// StartTimeIn applies the In predicate on the "start_time" field.
func StartTimeIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldStartTime, vs...))
}

// StartTimeNotIn applies the NotIn predicate on the "start_time" field.
func StartTimeNotIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldStartTime, vs...))
}

// StartTimeGT applies the GT predicate on the "start_time" field.
func StartTimeGT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldStartTime, v))
}

// StartTimeGTE applies the GTE predicate on the "start_time" field.
func StartTimeGTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldStartTime, v))
}

// StartTimeLT applies the LT predicate on the "start_time" field.
func StartTimeLT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldStartTime, v))
}

// StartTimeLTE applies the LTE predicate on the "start_time" field.
func StartTimeLTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldStartTime, v))
}

// EndTimeEQ applies the EQ predicate on the "end_time" field.
func EndTimeEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldEndTime, v))
}

// EndTimeNEQ applies the NEQ predicate on the "end_time" field.
func EndTimeNEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldEndTime, v))
}

// EndTimeIn applies the In predicate on the "end_time" field.
func EndTimeIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldEndTime, vs...))
}

// EndTimeNotIn applies the NotIn predicate on the "end_time" field.
func EndTimeNotIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldEndTime, vs...))
}

// EndTimeGT applies the GT predicate on the "end_time" field.
func EndTimeGT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldEndTime, v))
}

// EndTimeGTE applies the GTE predicate on the "end_time" field.
func EndTimeGTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldEndTime, v))
}

// EndTimeLT applies the LT predicate on the "end_time" field.
func EndTimeLT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldEndTime, v))
}

// EndTimeLTE applies the LTE predicate on the "end_time" field.
func EndTimeLTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldEndTime, v))
}

// TotalEQ applies the EQ predicate on the "total" field.
func TotalEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldTotal, v))
}

// TotalNEQ applies the NEQ predicate on the "total" field.
func TotalNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldTotal, v))
}

// TotalIn applies the In predicate on the "total" field.
func TotalIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldTotal, vs...))
}

// TotalNotIn applies the NotIn predicate on the "total" field.
func TotalNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldTotal, vs...))
}

// TotalGT applies the GT predicate on the "total" field.
func TotalGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldTotal, v))
}

// TotalGTE applies the GTE predicate on the "total" field.
func TotalGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldTotal, v))
}

// TotalLT applies the LT predicate on the "total" field.
func TotalLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldTotal, v))
}

// TotalLTE applies the LTE predicate on the "total" field.
func TotalLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldTotal, v))
}

// GoalEQ applies the EQ predicate on the "goal" field.
func GoalEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldGoal, v))
}

// GoalNEQ applies the NEQ predicate on the "goal" field.
func GoalNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldGoal, v))
}

// GoalIn applies the In predicate on the "goal" field.
func GoalIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldGoal, vs...))
}

// GoalNotIn applies the NotIn predicate on the "goal" field.
func GoalNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldGoal, vs...))
}

// GoalGT applies the GT predicate on the "goal" field.
func GoalGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldGoal, v))
}

// GoalGTE applies the GTE predicate on the "goal" field.
func GoalGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldGoal, v))
}

// GoalLT applies the LT predicate on the "goal" field.
func GoalLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldGoal, v))
}

// GoalLTE applies the LTE predicate on the "goal" field.
func GoalLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldGoal, v))
}

// StatusEQ applies the EQ predicate on the "status" field.
func StatusEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldStatus, v))
}

// StatusNEQ applies the NEQ predicate on the "status" field.
func StatusNEQ(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldStatus, v))
}

// StatusIn applies the In predicate on the "status" field.
func StatusIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldStatus, vs...))
}

// StatusNotIn applies the NotIn predicate on the "status" field.
func StatusNotIn(vs ...int64) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldStatus, vs...))
}

// StatusGT applies the GT predicate on the "status" field.
func StatusGT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldStatus, v))
}

// StatusGTE applies the GTE predicate on the "status" field.
func StatusGTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldStatus, v))
}

// StatusLT applies the LT predicate on the "status" field.
func StatusLT(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldStatus, v))
}

// StatusLTE applies the LTE predicate on the "status" field.
func StatusLTE(v int64) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldStatus, v))
}

// ProgessIsNil applies the IsNil predicate on the "progess" field.
func ProgessIsNil() predicate.Plan {
	return predicate.Plan(sql.FieldIsNull(FieldProgess))
}

// ProgessNotNil applies the NotNil predicate on the "progess" field.
func ProgessNotNil() predicate.Plan {
	return predicate.Plan(sql.FieldNotNull(FieldProgess))
}

// CreatedAtEQ applies the EQ predicate on the "created_at" field.
func CreatedAtEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldCreatedAt, v))
}

// CreatedAtNEQ applies the NEQ predicate on the "created_at" field.
func CreatedAtNEQ(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldCreatedAt, v))
}

// CreatedAtIn applies the In predicate on the "created_at" field.
func CreatedAtIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldCreatedAt, vs...))
}

// CreatedAtNotIn applies the NotIn predicate on the "created_at" field.
func CreatedAtNotIn(vs ...time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldCreatedAt, vs...))
}

// CreatedAtGT applies the GT predicate on the "created_at" field.
func CreatedAtGT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldCreatedAt, v))
}

// CreatedAtGTE applies the GTE predicate on the "created_at" field.
func CreatedAtGTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldCreatedAt, v))
}

// CreatedAtLT applies the LT predicate on the "created_at" field.
func CreatedAtLT(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldCreatedAt, v))
}

// CreatedAtLTE applies the LTE predicate on the "created_at" field.
func CreatedAtLTE(v time.Time) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldCreatedAt, v))
}

// NameEQ applies the EQ predicate on the "name" field.
func NameEQ(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldName, v))
}

// NameNEQ applies the NEQ predicate on the "name" field.
func NameNEQ(v string) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldName, v))
}

// NameIn applies the In predicate on the "name" field.
func NameIn(vs ...string) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldName, vs...))
}

// NameNotIn applies the NotIn predicate on the "name" field.
func NameNotIn(vs ...string) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldName, vs...))
}

// NameGT applies the GT predicate on the "name" field.
func NameGT(v string) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldName, v))
}

// NameGTE applies the GTE predicate on the "name" field.
func NameGTE(v string) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldName, v))
}

// NameLT applies the LT predicate on the "name" field.
func NameLT(v string) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldName, v))
}

// NameLTE applies the LTE predicate on the "name" field.
func NameLTE(v string) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldName, v))
}

// NameContains applies the Contains predicate on the "name" field.
func NameContains(v string) predicate.Plan {
	return predicate.Plan(sql.FieldContains(FieldName, v))
}

// NameHasPrefix applies the HasPrefix predicate on the "name" field.
func NameHasPrefix(v string) predicate.Plan {
	return predicate.Plan(sql.FieldHasPrefix(FieldName, v))
}

// NameHasSuffix applies the HasSuffix predicate on the "name" field.
func NameHasSuffix(v string) predicate.Plan {
	return predicate.Plan(sql.FieldHasSuffix(FieldName, v))
}

// NameEqualFold applies the EqualFold predicate on the "name" field.
func NameEqualFold(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEqualFold(FieldName, v))
}

// NameContainsFold applies the ContainsFold predicate on the "name" field.
func NameContainsFold(v string) predicate.Plan {
	return predicate.Plan(sql.FieldContainsFold(FieldName, v))
}

// NoteEQ applies the EQ predicate on the "note" field.
func NoteEQ(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldNote, v))
}

// NoteNEQ applies the NEQ predicate on the "note" field.
func NoteNEQ(v string) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldNote, v))
}

// NoteIn applies the In predicate on the "note" field.
func NoteIn(vs ...string) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldNote, vs...))
}

// NoteNotIn applies the NotIn predicate on the "note" field.
func NoteNotIn(vs ...string) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldNote, vs...))
}

// NoteGT applies the GT predicate on the "note" field.
func NoteGT(v string) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldNote, v))
}

// NoteGTE applies the GTE predicate on the "note" field.
func NoteGTE(v string) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldNote, v))
}

// NoteLT applies the LT predicate on the "note" field.
func NoteLT(v string) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldNote, v))
}

// NoteLTE applies the LTE predicate on the "note" field.
func NoteLTE(v string) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldNote, v))
}

// NoteContains applies the Contains predicate on the "note" field.
func NoteContains(v string) predicate.Plan {
	return predicate.Plan(sql.FieldContains(FieldNote, v))
}

// NoteHasPrefix applies the HasPrefix predicate on the "note" field.
func NoteHasPrefix(v string) predicate.Plan {
	return predicate.Plan(sql.FieldHasPrefix(FieldNote, v))
}

// NoteHasSuffix applies the HasSuffix predicate on the "note" field.
func NoteHasSuffix(v string) predicate.Plan {
	return predicate.Plan(sql.FieldHasSuffix(FieldNote, v))
}

// NoteIsNil applies the IsNil predicate on the "note" field.
func NoteIsNil() predicate.Plan {
	return predicate.Plan(sql.FieldIsNull(FieldNote))
}

// NoteNotNil applies the NotNil predicate on the "note" field.
func NoteNotNil() predicate.Plan {
	return predicate.Plan(sql.FieldNotNull(FieldNote))
}

// NoteEqualFold applies the EqualFold predicate on the "note" field.
func NoteEqualFold(v string) predicate.Plan {
	return predicate.Plan(sql.FieldEqualFold(FieldNote, v))
}

// NoteContainsFold applies the ContainsFold predicate on the "note" field.
func NoteContainsFold(v string) predicate.Plan {
	return predicate.Plan(sql.FieldContainsFold(FieldNote, v))
}

// TimeZoneEQ applies the EQ predicate on the "time_zone" field.
func TimeZoneEQ(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldEQ(FieldTimeZone, v))
}

// TimeZoneNEQ applies the NEQ predicate on the "time_zone" field.
func TimeZoneNEQ(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldNEQ(FieldTimeZone, v))
}

// TimeZoneIn applies the In predicate on the "time_zone" field.
func TimeZoneIn(vs ...uint32) predicate.Plan {
	return predicate.Plan(sql.FieldIn(FieldTimeZone, vs...))
}

// TimeZoneNotIn applies the NotIn predicate on the "time_zone" field.
func TimeZoneNotIn(vs ...uint32) predicate.Plan {
	return predicate.Plan(sql.FieldNotIn(FieldTimeZone, vs...))
}

// TimeZoneGT applies the GT predicate on the "time_zone" field.
func TimeZoneGT(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldGT(FieldTimeZone, v))
}

// TimeZoneGTE applies the GTE predicate on the "time_zone" field.
func TimeZoneGTE(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldGTE(FieldTimeZone, v))
}

// TimeZoneLT applies the LT predicate on the "time_zone" field.
func TimeZoneLT(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldLT(FieldTimeZone, v))
}

// TimeZoneLTE applies the LTE predicate on the "time_zone" field.
func TimeZoneLTE(v uint32) predicate.Plan {
	return predicate.Plan(sql.FieldLTE(FieldTimeZone, v))
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.Plan) predicate.Plan {
	return predicate.Plan(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.Plan) predicate.Plan {
	return predicate.Plan(func(s *sql.Selector) {
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
func Not(p predicate.Plan) predicate.Plan {
	return predicate.Plan(func(s *sql.Selector) {
		p(s.Not())
	})
}
