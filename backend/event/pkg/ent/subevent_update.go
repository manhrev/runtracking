// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

// SubEventUpdate is the builder for updating SubEvent entities.
type SubEventUpdate struct {
	config
	hooks     []Hook
	mutation  *SubEventMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the SubEventUpdate builder.
func (seu *SubEventUpdate) Where(ps ...predicate.SubEvent) *SubEventUpdate {
	seu.mutation.Where(ps...)
	return seu
}

// SetName sets the "name" field.
func (seu *SubEventUpdate) SetName(s string) *SubEventUpdate {
	seu.mutation.SetName(s)
	return seu
}

// SetNillableName sets the "name" field if the given value is not nil.
func (seu *SubEventUpdate) SetNillableName(s *string) *SubEventUpdate {
	if s != nil {
		seu.SetName(*s)
	}
	return seu
}

// ClearName clears the value of the "name" field.
func (seu *SubEventUpdate) ClearName() *SubEventUpdate {
	seu.mutation.ClearName()
	return seu
}

// SetPicture sets the "picture" field.
func (seu *SubEventUpdate) SetPicture(s string) *SubEventUpdate {
	seu.mutation.SetPicture(s)
	return seu
}

// SetNillablePicture sets the "picture" field if the given value is not nil.
func (seu *SubEventUpdate) SetNillablePicture(s *string) *SubEventUpdate {
	if s != nil {
		seu.SetPicture(*s)
	}
	return seu
}

// SetStartDate sets the "start_date" field.
func (seu *SubEventUpdate) SetStartDate(t time.Time) *SubEventUpdate {
	seu.mutation.SetStartDate(t)
	return seu
}

// SetEndDate sets the "end_date" field.
func (seu *SubEventUpdate) SetEndDate(t time.Time) *SubEventUpdate {
	seu.mutation.SetEndDate(t)
	return seu
}

// SetDescription sets the "description" field.
func (seu *SubEventUpdate) SetDescription(s string) *SubEventUpdate {
	seu.mutation.SetDescription(s)
	return seu
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (seu *SubEventUpdate) SetNillableDescription(s *string) *SubEventUpdate {
	if s != nil {
		seu.SetDescription(*s)
	}
	return seu
}

// ClearDescription clears the value of the "description" field.
func (seu *SubEventUpdate) ClearDescription() *SubEventUpdate {
	seu.mutation.ClearDescription()
	return seu
}

// SetGoal sets the "goal" field.
func (seu *SubEventUpdate) SetGoal(i int64) *SubEventUpdate {
	seu.mutation.ResetGoal()
	seu.mutation.SetGoal(i)
	return seu
}

// SetNillableGoal sets the "goal" field if the given value is not nil.
func (seu *SubEventUpdate) SetNillableGoal(i *int64) *SubEventUpdate {
	if i != nil {
		seu.SetGoal(*i)
	}
	return seu
}

// AddGoal adds i to the "goal" field.
func (seu *SubEventUpdate) AddGoal(i int64) *SubEventUpdate {
	seu.mutation.AddGoal(i)
	return seu
}

// SetRule sets the "rule" field.
func (seu *SubEventUpdate) SetRule(i int64) *SubEventUpdate {
	seu.mutation.ResetRule()
	seu.mutation.SetRule(i)
	return seu
}

// AddRule adds i to the "rule" field.
func (seu *SubEventUpdate) AddRule(i int64) *SubEventUpdate {
	seu.mutation.AddRule(i)
	return seu
}

// SetActivityType sets the "activity_type" field.
func (seu *SubEventUpdate) SetActivityType(i int64) *SubEventUpdate {
	seu.mutation.ResetActivityType()
	seu.mutation.SetActivityType(i)
	return seu
}

// AddActivityType adds i to the "activity_type" field.
func (seu *SubEventUpdate) AddActivityType(i int64) *SubEventUpdate {
	seu.mutation.AddActivityType(i)
	return seu
}

// SetStatus sets the "status" field.
func (seu *SubEventUpdate) SetStatus(i int64) *SubEventUpdate {
	seu.mutation.ResetStatus()
	seu.mutation.SetStatus(i)
	return seu
}

// SetNillableStatus sets the "status" field if the given value is not nil.
func (seu *SubEventUpdate) SetNillableStatus(i *int64) *SubEventUpdate {
	if i != nil {
		seu.SetStatus(*i)
	}
	return seu
}

// AddStatus adds i to the "status" field.
func (seu *SubEventUpdate) AddStatus(i int64) *SubEventUpdate {
	seu.mutation.AddStatus(i)
	return seu
}

// SetEventID sets the "event" edge to the Event entity by ID.
func (seu *SubEventUpdate) SetEventID(id int64) *SubEventUpdate {
	seu.mutation.SetEventID(id)
	return seu
}

// SetNillableEventID sets the "event" edge to the Event entity by ID if the given value is not nil.
func (seu *SubEventUpdate) SetNillableEventID(id *int64) *SubEventUpdate {
	if id != nil {
		seu = seu.SetEventID(*id)
	}
	return seu
}

// SetEvent sets the "event" edge to the Event entity.
func (seu *SubEventUpdate) SetEvent(e *Event) *SubEventUpdate {
	return seu.SetEventID(e.ID)
}

// AddGroupIDs adds the "group" edge to the GroupzProgress entity by IDs.
func (seu *SubEventUpdate) AddGroupIDs(ids ...int64) *SubEventUpdate {
	seu.mutation.AddGroupIDs(ids...)
	return seu
}

// AddGroup adds the "group" edges to the GroupzProgress entity.
func (seu *SubEventUpdate) AddGroup(g ...*GroupzProgress) *SubEventUpdate {
	ids := make([]int64, len(g))
	for i := range g {
		ids[i] = g[i].ID
	}
	return seu.AddGroupIDs(ids...)
}

// Mutation returns the SubEventMutation object of the builder.
func (seu *SubEventUpdate) Mutation() *SubEventMutation {
	return seu.mutation
}

// ClearEvent clears the "event" edge to the Event entity.
func (seu *SubEventUpdate) ClearEvent() *SubEventUpdate {
	seu.mutation.ClearEvent()
	return seu
}

// ClearGroup clears all "group" edges to the GroupzProgress entity.
func (seu *SubEventUpdate) ClearGroup() *SubEventUpdate {
	seu.mutation.ClearGroup()
	return seu
}

// RemoveGroupIDs removes the "group" edge to GroupzProgress entities by IDs.
func (seu *SubEventUpdate) RemoveGroupIDs(ids ...int64) *SubEventUpdate {
	seu.mutation.RemoveGroupIDs(ids...)
	return seu
}

// RemoveGroup removes "group" edges to GroupzProgress entities.
func (seu *SubEventUpdate) RemoveGroup(g ...*GroupzProgress) *SubEventUpdate {
	ids := make([]int64, len(g))
	for i := range g {
		ids[i] = g[i].ID
	}
	return seu.RemoveGroupIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (seu *SubEventUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, SubEventMutation](ctx, seu.sqlSave, seu.mutation, seu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (seu *SubEventUpdate) SaveX(ctx context.Context) int {
	affected, err := seu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (seu *SubEventUpdate) Exec(ctx context.Context) error {
	_, err := seu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (seu *SubEventUpdate) ExecX(ctx context.Context) {
	if err := seu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (seu *SubEventUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *SubEventUpdate {
	seu.modifiers = append(seu.modifiers, modifiers...)
	return seu
}

func (seu *SubEventUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(subevent.Table, subevent.Columns, sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64))
	if ps := seu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := seu.mutation.Name(); ok {
		_spec.SetField(subevent.FieldName, field.TypeString, value)
	}
	if seu.mutation.NameCleared() {
		_spec.ClearField(subevent.FieldName, field.TypeString)
	}
	if value, ok := seu.mutation.Picture(); ok {
		_spec.SetField(subevent.FieldPicture, field.TypeString, value)
	}
	if value, ok := seu.mutation.StartDate(); ok {
		_spec.SetField(subevent.FieldStartDate, field.TypeTime, value)
	}
	if value, ok := seu.mutation.EndDate(); ok {
		_spec.SetField(subevent.FieldEndDate, field.TypeTime, value)
	}
	if value, ok := seu.mutation.Description(); ok {
		_spec.SetField(subevent.FieldDescription, field.TypeString, value)
	}
	if seu.mutation.DescriptionCleared() {
		_spec.ClearField(subevent.FieldDescription, field.TypeString)
	}
	if value, ok := seu.mutation.Goal(); ok {
		_spec.SetField(subevent.FieldGoal, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.AddedGoal(); ok {
		_spec.AddField(subevent.FieldGoal, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.Rule(); ok {
		_spec.SetField(subevent.FieldRule, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.AddedRule(); ok {
		_spec.AddField(subevent.FieldRule, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.ActivityType(); ok {
		_spec.SetField(subevent.FieldActivityType, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.AddedActivityType(); ok {
		_spec.AddField(subevent.FieldActivityType, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.Status(); ok {
		_spec.SetField(subevent.FieldStatus, field.TypeInt64, value)
	}
	if value, ok := seu.mutation.AddedStatus(); ok {
		_spec.AddField(subevent.FieldStatus, field.TypeInt64, value)
	}
	if seu.mutation.EventCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   subevent.EventTable,
			Columns: []string{subevent.EventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(event.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seu.mutation.EventIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   subevent.EventTable,
			Columns: []string{subevent.EventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(event.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if seu.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seu.mutation.RemovedGroupIDs(); len(nodes) > 0 && !seu.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seu.mutation.GroupIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(seu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, seu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{subevent.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	seu.mutation.done = true
	return n, nil
}

// SubEventUpdateOne is the builder for updating a single SubEvent entity.
type SubEventUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *SubEventMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetName sets the "name" field.
func (seuo *SubEventUpdateOne) SetName(s string) *SubEventUpdateOne {
	seuo.mutation.SetName(s)
	return seuo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillableName(s *string) *SubEventUpdateOne {
	if s != nil {
		seuo.SetName(*s)
	}
	return seuo
}

// ClearName clears the value of the "name" field.
func (seuo *SubEventUpdateOne) ClearName() *SubEventUpdateOne {
	seuo.mutation.ClearName()
	return seuo
}

// SetPicture sets the "picture" field.
func (seuo *SubEventUpdateOne) SetPicture(s string) *SubEventUpdateOne {
	seuo.mutation.SetPicture(s)
	return seuo
}

// SetNillablePicture sets the "picture" field if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillablePicture(s *string) *SubEventUpdateOne {
	if s != nil {
		seuo.SetPicture(*s)
	}
	return seuo
}

// SetStartDate sets the "start_date" field.
func (seuo *SubEventUpdateOne) SetStartDate(t time.Time) *SubEventUpdateOne {
	seuo.mutation.SetStartDate(t)
	return seuo
}

// SetEndDate sets the "end_date" field.
func (seuo *SubEventUpdateOne) SetEndDate(t time.Time) *SubEventUpdateOne {
	seuo.mutation.SetEndDate(t)
	return seuo
}

// SetDescription sets the "description" field.
func (seuo *SubEventUpdateOne) SetDescription(s string) *SubEventUpdateOne {
	seuo.mutation.SetDescription(s)
	return seuo
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillableDescription(s *string) *SubEventUpdateOne {
	if s != nil {
		seuo.SetDescription(*s)
	}
	return seuo
}

// ClearDescription clears the value of the "description" field.
func (seuo *SubEventUpdateOne) ClearDescription() *SubEventUpdateOne {
	seuo.mutation.ClearDescription()
	return seuo
}

// SetGoal sets the "goal" field.
func (seuo *SubEventUpdateOne) SetGoal(i int64) *SubEventUpdateOne {
	seuo.mutation.ResetGoal()
	seuo.mutation.SetGoal(i)
	return seuo
}

// SetNillableGoal sets the "goal" field if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillableGoal(i *int64) *SubEventUpdateOne {
	if i != nil {
		seuo.SetGoal(*i)
	}
	return seuo
}

// AddGoal adds i to the "goal" field.
func (seuo *SubEventUpdateOne) AddGoal(i int64) *SubEventUpdateOne {
	seuo.mutation.AddGoal(i)
	return seuo
}

// SetRule sets the "rule" field.
func (seuo *SubEventUpdateOne) SetRule(i int64) *SubEventUpdateOne {
	seuo.mutation.ResetRule()
	seuo.mutation.SetRule(i)
	return seuo
}

// AddRule adds i to the "rule" field.
func (seuo *SubEventUpdateOne) AddRule(i int64) *SubEventUpdateOne {
	seuo.mutation.AddRule(i)
	return seuo
}

// SetActivityType sets the "activity_type" field.
func (seuo *SubEventUpdateOne) SetActivityType(i int64) *SubEventUpdateOne {
	seuo.mutation.ResetActivityType()
	seuo.mutation.SetActivityType(i)
	return seuo
}

// AddActivityType adds i to the "activity_type" field.
func (seuo *SubEventUpdateOne) AddActivityType(i int64) *SubEventUpdateOne {
	seuo.mutation.AddActivityType(i)
	return seuo
}

// SetStatus sets the "status" field.
func (seuo *SubEventUpdateOne) SetStatus(i int64) *SubEventUpdateOne {
	seuo.mutation.ResetStatus()
	seuo.mutation.SetStatus(i)
	return seuo
}

// SetNillableStatus sets the "status" field if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillableStatus(i *int64) *SubEventUpdateOne {
	if i != nil {
		seuo.SetStatus(*i)
	}
	return seuo
}

// AddStatus adds i to the "status" field.
func (seuo *SubEventUpdateOne) AddStatus(i int64) *SubEventUpdateOne {
	seuo.mutation.AddStatus(i)
	return seuo
}

// SetEventID sets the "event" edge to the Event entity by ID.
func (seuo *SubEventUpdateOne) SetEventID(id int64) *SubEventUpdateOne {
	seuo.mutation.SetEventID(id)
	return seuo
}

// SetNillableEventID sets the "event" edge to the Event entity by ID if the given value is not nil.
func (seuo *SubEventUpdateOne) SetNillableEventID(id *int64) *SubEventUpdateOne {
	if id != nil {
		seuo = seuo.SetEventID(*id)
	}
	return seuo
}

// SetEvent sets the "event" edge to the Event entity.
func (seuo *SubEventUpdateOne) SetEvent(e *Event) *SubEventUpdateOne {
	return seuo.SetEventID(e.ID)
}

// AddGroupIDs adds the "group" edge to the GroupzProgress entity by IDs.
func (seuo *SubEventUpdateOne) AddGroupIDs(ids ...int64) *SubEventUpdateOne {
	seuo.mutation.AddGroupIDs(ids...)
	return seuo
}

// AddGroup adds the "group" edges to the GroupzProgress entity.
func (seuo *SubEventUpdateOne) AddGroup(g ...*GroupzProgress) *SubEventUpdateOne {
	ids := make([]int64, len(g))
	for i := range g {
		ids[i] = g[i].ID
	}
	return seuo.AddGroupIDs(ids...)
}

// Mutation returns the SubEventMutation object of the builder.
func (seuo *SubEventUpdateOne) Mutation() *SubEventMutation {
	return seuo.mutation
}

// ClearEvent clears the "event" edge to the Event entity.
func (seuo *SubEventUpdateOne) ClearEvent() *SubEventUpdateOne {
	seuo.mutation.ClearEvent()
	return seuo
}

// ClearGroup clears all "group" edges to the GroupzProgress entity.
func (seuo *SubEventUpdateOne) ClearGroup() *SubEventUpdateOne {
	seuo.mutation.ClearGroup()
	return seuo
}

// RemoveGroupIDs removes the "group" edge to GroupzProgress entities by IDs.
func (seuo *SubEventUpdateOne) RemoveGroupIDs(ids ...int64) *SubEventUpdateOne {
	seuo.mutation.RemoveGroupIDs(ids...)
	return seuo
}

// RemoveGroup removes "group" edges to GroupzProgress entities.
func (seuo *SubEventUpdateOne) RemoveGroup(g ...*GroupzProgress) *SubEventUpdateOne {
	ids := make([]int64, len(g))
	for i := range g {
		ids[i] = g[i].ID
	}
	return seuo.RemoveGroupIDs(ids...)
}

// Where appends a list predicates to the SubEventUpdate builder.
func (seuo *SubEventUpdateOne) Where(ps ...predicate.SubEvent) *SubEventUpdateOne {
	seuo.mutation.Where(ps...)
	return seuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (seuo *SubEventUpdateOne) Select(field string, fields ...string) *SubEventUpdateOne {
	seuo.fields = append([]string{field}, fields...)
	return seuo
}

// Save executes the query and returns the updated SubEvent entity.
func (seuo *SubEventUpdateOne) Save(ctx context.Context) (*SubEvent, error) {
	return withHooks[*SubEvent, SubEventMutation](ctx, seuo.sqlSave, seuo.mutation, seuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (seuo *SubEventUpdateOne) SaveX(ctx context.Context) *SubEvent {
	node, err := seuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (seuo *SubEventUpdateOne) Exec(ctx context.Context) error {
	_, err := seuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (seuo *SubEventUpdateOne) ExecX(ctx context.Context) {
	if err := seuo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (seuo *SubEventUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *SubEventUpdateOne {
	seuo.modifiers = append(seuo.modifiers, modifiers...)
	return seuo
}

func (seuo *SubEventUpdateOne) sqlSave(ctx context.Context) (_node *SubEvent, err error) {
	_spec := sqlgraph.NewUpdateSpec(subevent.Table, subevent.Columns, sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64))
	id, ok := seuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "SubEvent.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := seuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, subevent.FieldID)
		for _, f := range fields {
			if !subevent.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != subevent.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := seuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := seuo.mutation.Name(); ok {
		_spec.SetField(subevent.FieldName, field.TypeString, value)
	}
	if seuo.mutation.NameCleared() {
		_spec.ClearField(subevent.FieldName, field.TypeString)
	}
	if value, ok := seuo.mutation.Picture(); ok {
		_spec.SetField(subevent.FieldPicture, field.TypeString, value)
	}
	if value, ok := seuo.mutation.StartDate(); ok {
		_spec.SetField(subevent.FieldStartDate, field.TypeTime, value)
	}
	if value, ok := seuo.mutation.EndDate(); ok {
		_spec.SetField(subevent.FieldEndDate, field.TypeTime, value)
	}
	if value, ok := seuo.mutation.Description(); ok {
		_spec.SetField(subevent.FieldDescription, field.TypeString, value)
	}
	if seuo.mutation.DescriptionCleared() {
		_spec.ClearField(subevent.FieldDescription, field.TypeString)
	}
	if value, ok := seuo.mutation.Goal(); ok {
		_spec.SetField(subevent.FieldGoal, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.AddedGoal(); ok {
		_spec.AddField(subevent.FieldGoal, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.Rule(); ok {
		_spec.SetField(subevent.FieldRule, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.AddedRule(); ok {
		_spec.AddField(subevent.FieldRule, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.ActivityType(); ok {
		_spec.SetField(subevent.FieldActivityType, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.AddedActivityType(); ok {
		_spec.AddField(subevent.FieldActivityType, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.Status(); ok {
		_spec.SetField(subevent.FieldStatus, field.TypeInt64, value)
	}
	if value, ok := seuo.mutation.AddedStatus(); ok {
		_spec.AddField(subevent.FieldStatus, field.TypeInt64, value)
	}
	if seuo.mutation.EventCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   subevent.EventTable,
			Columns: []string{subevent.EventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(event.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seuo.mutation.EventIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   subevent.EventTable,
			Columns: []string{subevent.EventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(event.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if seuo.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seuo.mutation.RemovedGroupIDs(); len(nodes) > 0 && !seuo.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := seuo.mutation.GroupIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   subevent.GroupTable,
			Columns: []string{subevent.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(seuo.modifiers...)
	_node = &SubEvent{config: seuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, seuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{subevent.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	seuo.mutation.done = true
	return _node, nil
}
