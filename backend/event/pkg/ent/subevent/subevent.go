// Code generated by ent, DO NOT EDIT.

package subevent

import (
	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
)

const (
	// Label holds the string label denoting the subevent type in the database.
	Label = "sub_event"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldName holds the string denoting the name field in the database.
	FieldName = "name"
	// FieldPicture holds the string denoting the picture field in the database.
	FieldPicture = "picture"
	// FieldStartDate holds the string denoting the start_date field in the database.
	FieldStartDate = "start_date"
	// FieldEndDate holds the string denoting the end_date field in the database.
	FieldEndDate = "end_date"
	// FieldDescription holds the string denoting the description field in the database.
	FieldDescription = "description"
	// FieldGoal holds the string denoting the goal field in the database.
	FieldGoal = "goal"
	// FieldRuleID holds the string denoting the rule_id field in the database.
	FieldRuleID = "rule_id"
	// FieldStatus holds the string denoting the status field in the database.
	FieldStatus = "status"
	// EdgeEvent holds the string denoting the event edge name in mutations.
	EdgeEvent = "event"
	// EdgeGroup holds the string denoting the group edge name in mutations.
	EdgeGroup = "group"
	// Table holds the table name of the subevent in the database.
	Table = "sub_events"
	// EventTable is the table that holds the event relation/edge.
	EventTable = "sub_events"
	// EventInverseTable is the table name for the Event entity.
	// It exists in this package in order to avoid circular dependency with the "event" package.
	EventInverseTable = "events"
	// EventColumn is the table column denoting the event relation/edge.
	EventColumn = "event_subevents"
	// GroupTable is the table that holds the group relation/edge.
	GroupTable = "groupz_progresses"
	// GroupInverseTable is the table name for the GroupzProgress entity.
	// It exists in this package in order to avoid circular dependency with the "groupzprogress" package.
	GroupInverseTable = "groupz_progresses"
	// GroupColumn is the table column denoting the group relation/edge.
	GroupColumn = "sub_event_group"
)

// Columns holds all SQL columns for subevent fields.
var Columns = []string{
	FieldID,
	FieldName,
	FieldPicture,
	FieldStartDate,
	FieldEndDate,
	FieldDescription,
	FieldGoal,
	FieldRuleID,
	FieldStatus,
}

// ForeignKeys holds the SQL foreign-keys that are owned by the "sub_events"
// table and are not defined as standalone fields in the schema.
var ForeignKeys = []string{
	"event_subevents",
}

// ValidColumn reports if the column name is valid (part of the table columns).
func ValidColumn(column string) bool {
	for i := range Columns {
		if column == Columns[i] {
			return true
		}
	}
	for i := range ForeignKeys {
		if column == ForeignKeys[i] {
			return true
		}
	}
	return false
}

var (
	// DefaultPicture holds the default value on creation for the "picture" field.
	DefaultPicture string
	// DefaultGoal holds the default value on creation for the "goal" field.
	DefaultGoal int64
	// DefaultStatus holds the default value on creation for the "status" field.
	DefaultStatus int64
)

// Order defines the ordering method for the SubEvent queries.
type Order func(*sql.Selector)

// ByID orders the results by the id field.
func ByID(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldID, opts...).ToFunc()
}

// ByName orders the results by the name field.
func ByName(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldName, opts...).ToFunc()
}

// ByPicture orders the results by the picture field.
func ByPicture(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldPicture, opts...).ToFunc()
}

// ByStartDate orders the results by the start_date field.
func ByStartDate(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldStartDate, opts...).ToFunc()
}

// ByEndDate orders the results by the end_date field.
func ByEndDate(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldEndDate, opts...).ToFunc()
}

// ByDescription orders the results by the description field.
func ByDescription(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldDescription, opts...).ToFunc()
}

// ByGoal orders the results by the goal field.
func ByGoal(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldGoal, opts...).ToFunc()
}

// ByRuleID orders the results by the rule_id field.
func ByRuleID(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldRuleID, opts...).ToFunc()
}

// ByStatus orders the results by the status field.
func ByStatus(opts ...sql.OrderTermOption) Order {
	return sql.OrderByField(FieldStatus, opts...).ToFunc()
}

// ByEventField orders the results by event field.
func ByEventField(field string, opts ...sql.OrderTermOption) Order {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newEventStep(), sql.OrderByField(field, opts...))
	}
}

// ByGroupCount orders the results by group count.
func ByGroupCount(opts ...sql.OrderTermOption) Order {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborsCount(s, newGroupStep(), opts...)
	}
}

// ByGroup orders the results by group terms.
func ByGroup(term sql.OrderTerm, terms ...sql.OrderTerm) Order {
	return func(s *sql.Selector) {
		sqlgraph.OrderByNeighborTerms(s, newGroupStep(), append([]sql.OrderTerm{term}, terms...)...)
	}
}
func newEventStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(EventInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.M2O, true, EventTable, EventColumn),
	)
}
func newGroupStep() *sqlgraph.Step {
	return sqlgraph.NewStep(
		sqlgraph.From(Table, FieldID),
		sqlgraph.To(GroupInverseTable, FieldID),
		sqlgraph.Edge(sqlgraph.O2M, false, GroupTable, GroupColumn),
	)
}
