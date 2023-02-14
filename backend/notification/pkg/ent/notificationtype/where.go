// Code generated by ent, DO NOT EDIT.

package notificationtype

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// ID filters vertices based on their ID field.
func ID(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldEQ(FieldID, id))
}

// IDEQ applies the EQ predicate on the ID field.
func IDEQ(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldEQ(FieldID, id))
}

// IDNEQ applies the NEQ predicate on the ID field.
func IDNEQ(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldNEQ(FieldID, id))
}

// IDIn applies the In predicate on the ID field.
func IDIn(ids ...int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldIn(FieldID, ids...))
}

// IDNotIn applies the NotIn predicate on the ID field.
func IDNotIn(ids ...int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldNotIn(FieldID, ids...))
}

// IDGT applies the GT predicate on the ID field.
func IDGT(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldGT(FieldID, id))
}

// IDGTE applies the GTE predicate on the ID field.
func IDGTE(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldGTE(FieldID, id))
}

// IDLT applies the LT predicate on the ID field.
func IDLT(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldLT(FieldID, id))
}

// IDLTE applies the LTE predicate on the ID field.
func IDLTE(id int64) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldLTE(FieldID, id))
}

// TypeName applies equality check predicate on the "type_name" field. It's identical to TypeNameEQ.
func TypeName(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldEQ(FieldTypeName, v))
}

// TypeNameEQ applies the EQ predicate on the "type_name" field.
func TypeNameEQ(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldEQ(FieldTypeName, v))
}

// TypeNameNEQ applies the NEQ predicate on the "type_name" field.
func TypeNameNEQ(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldNEQ(FieldTypeName, v))
}

// TypeNameIn applies the In predicate on the "type_name" field.
func TypeNameIn(vs ...string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldIn(FieldTypeName, vs...))
}

// TypeNameNotIn applies the NotIn predicate on the "type_name" field.
func TypeNameNotIn(vs ...string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldNotIn(FieldTypeName, vs...))
}

// TypeNameGT applies the GT predicate on the "type_name" field.
func TypeNameGT(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldGT(FieldTypeName, v))
}

// TypeNameGTE applies the GTE predicate on the "type_name" field.
func TypeNameGTE(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldGTE(FieldTypeName, v))
}

// TypeNameLT applies the LT predicate on the "type_name" field.
func TypeNameLT(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldLT(FieldTypeName, v))
}

// TypeNameLTE applies the LTE predicate on the "type_name" field.
func TypeNameLTE(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldLTE(FieldTypeName, v))
}

// TypeNameContains applies the Contains predicate on the "type_name" field.
func TypeNameContains(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldContains(FieldTypeName, v))
}

// TypeNameHasPrefix applies the HasPrefix predicate on the "type_name" field.
func TypeNameHasPrefix(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldHasPrefix(FieldTypeName, v))
}

// TypeNameHasSuffix applies the HasSuffix predicate on the "type_name" field.
func TypeNameHasSuffix(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldHasSuffix(FieldTypeName, v))
}

// TypeNameIsNil applies the IsNil predicate on the "type_name" field.
func TypeNameIsNil() predicate.NotificationType {
	return predicate.NotificationType(sql.FieldIsNull(FieldTypeName))
}

// TypeNameNotNil applies the NotNil predicate on the "type_name" field.
func TypeNameNotNil() predicate.NotificationType {
	return predicate.NotificationType(sql.FieldNotNull(FieldTypeName))
}

// TypeNameEqualFold applies the EqualFold predicate on the "type_name" field.
func TypeNameEqualFold(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldEqualFold(FieldTypeName, v))
}

// TypeNameContainsFold applies the ContainsFold predicate on the "type_name" field.
func TypeNameContainsFold(v string) predicate.NotificationType {
	return predicate.NotificationType(sql.FieldContainsFold(FieldTypeName, v))
}

// HasNotifications applies the HasEdge predicate on the "notifications" edge.
func HasNotifications() predicate.NotificationType {
	return predicate.NotificationType(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, NotificationsTable, NotificationsColumn),
		)
		sqlgraph.HasNeighbors(s, step)
	})
}

// HasNotificationsWith applies the HasEdge predicate on the "notifications" edge with a given conditions (other predicates).
func HasNotificationsWith(preds ...predicate.Notification) predicate.NotificationType {
	return predicate.NotificationType(func(s *sql.Selector) {
		step := sqlgraph.NewStep(
			sqlgraph.From(Table, FieldID),
			sqlgraph.To(NotificationsInverseTable, FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, NotificationsTable, NotificationsColumn),
		)
		sqlgraph.HasNeighborsWith(s, step, func(s *sql.Selector) {
			for _, p := range preds {
				p(s)
			}
		})
	})
}

// And groups predicates with the AND operator between them.
func And(predicates ...predicate.NotificationType) predicate.NotificationType {
	return predicate.NotificationType(func(s *sql.Selector) {
		s1 := s.Clone().SetP(nil)
		for _, p := range predicates {
			p(s1)
		}
		s.Where(s1.P())
	})
}

// Or groups predicates with the OR operator between them.
func Or(predicates ...predicate.NotificationType) predicate.NotificationType {
	return predicate.NotificationType(func(s *sql.Selector) {
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
func Not(p predicate.NotificationType) predicate.NotificationType {
	return predicate.NotificationType(func(s *sql.Selector) {
		p(s.Not())
	})
}
