// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/memberprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

// GroupProgressUpdate is the builder for updating GroupProgress entities.
type GroupProgressUpdate struct {
	config
	hooks     []Hook
	mutation  *GroupProgressMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the GroupProgressUpdate builder.
func (gpu *GroupProgressUpdate) Where(ps ...predicate.GroupProgress) *GroupProgressUpdate {
	gpu.mutation.Where(ps...)
	return gpu
}

// SetGroupID sets the "group_id" field.
func (gpu *GroupProgressUpdate) SetGroupID(i int64) *GroupProgressUpdate {
	gpu.mutation.ResetGroupID()
	gpu.mutation.SetGroupID(i)
	return gpu
}

// AddGroupID adds i to the "group_id" field.
func (gpu *GroupProgressUpdate) AddGroupID(i int64) *GroupProgressUpdate {
	gpu.mutation.AddGroupID(i)
	return gpu
}

// SetProgress sets the "progress" field.
func (gpu *GroupProgressUpdate) SetProgress(i int64) *GroupProgressUpdate {
	gpu.mutation.ResetProgress()
	gpu.mutation.SetProgress(i)
	return gpu
}

// SetNillableProgress sets the "progress" field if the given value is not nil.
func (gpu *GroupProgressUpdate) SetNillableProgress(i *int64) *GroupProgressUpdate {
	if i != nil {
		gpu.SetProgress(*i)
	}
	return gpu
}

// AddProgress adds i to the "progress" field.
func (gpu *GroupProgressUpdate) AddProgress(i int64) *GroupProgressUpdate {
	gpu.mutation.AddProgress(i)
	return gpu
}

// SetSubEventID sets the "sub_event" edge to the SubEvent entity by ID.
func (gpu *GroupProgressUpdate) SetSubEventID(id int64) *GroupProgressUpdate {
	gpu.mutation.SetSubEventID(id)
	return gpu
}

// SetNillableSubEventID sets the "sub_event" edge to the SubEvent entity by ID if the given value is not nil.
func (gpu *GroupProgressUpdate) SetNillableSubEventID(id *int64) *GroupProgressUpdate {
	if id != nil {
		gpu = gpu.SetSubEventID(*id)
	}
	return gpu
}

// SetSubEvent sets the "sub_event" edge to the SubEvent entity.
func (gpu *GroupProgressUpdate) SetSubEvent(s *SubEvent) *GroupProgressUpdate {
	return gpu.SetSubEventID(s.ID)
}

// AddMemberIDs adds the "member" edge to the MemberProgress entity by IDs.
func (gpu *GroupProgressUpdate) AddMemberIDs(ids ...int64) *GroupProgressUpdate {
	gpu.mutation.AddMemberIDs(ids...)
	return gpu
}

// AddMember adds the "member" edges to the MemberProgress entity.
func (gpu *GroupProgressUpdate) AddMember(m ...*MemberProgress) *GroupProgressUpdate {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gpu.AddMemberIDs(ids...)
}

// Mutation returns the GroupProgressMutation object of the builder.
func (gpu *GroupProgressUpdate) Mutation() *GroupProgressMutation {
	return gpu.mutation
}

// ClearSubEvent clears the "sub_event" edge to the SubEvent entity.
func (gpu *GroupProgressUpdate) ClearSubEvent() *GroupProgressUpdate {
	gpu.mutation.ClearSubEvent()
	return gpu
}

// ClearMember clears all "member" edges to the MemberProgress entity.
func (gpu *GroupProgressUpdate) ClearMember() *GroupProgressUpdate {
	gpu.mutation.ClearMember()
	return gpu
}

// RemoveMemberIDs removes the "member" edge to MemberProgress entities by IDs.
func (gpu *GroupProgressUpdate) RemoveMemberIDs(ids ...int64) *GroupProgressUpdate {
	gpu.mutation.RemoveMemberIDs(ids...)
	return gpu
}

// RemoveMember removes "member" edges to MemberProgress entities.
func (gpu *GroupProgressUpdate) RemoveMember(m ...*MemberProgress) *GroupProgressUpdate {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gpu.RemoveMemberIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (gpu *GroupProgressUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, GroupProgressMutation](ctx, gpu.sqlSave, gpu.mutation, gpu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (gpu *GroupProgressUpdate) SaveX(ctx context.Context) int {
	affected, err := gpu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (gpu *GroupProgressUpdate) Exec(ctx context.Context) error {
	_, err := gpu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gpu *GroupProgressUpdate) ExecX(ctx context.Context) {
	if err := gpu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (gpu *GroupProgressUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *GroupProgressUpdate {
	gpu.modifiers = append(gpu.modifiers, modifiers...)
	return gpu
}

func (gpu *GroupProgressUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(groupprogress.Table, groupprogress.Columns, sqlgraph.NewFieldSpec(groupprogress.FieldID, field.TypeInt64))
	if ps := gpu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := gpu.mutation.GroupID(); ok {
		_spec.SetField(groupprogress.FieldGroupID, field.TypeInt64, value)
	}
	if value, ok := gpu.mutation.AddedGroupID(); ok {
		_spec.AddField(groupprogress.FieldGroupID, field.TypeInt64, value)
	}
	if value, ok := gpu.mutation.Progress(); ok {
		_spec.SetField(groupprogress.FieldProgress, field.TypeInt64, value)
	}
	if value, ok := gpu.mutation.AddedProgress(); ok {
		_spec.AddField(groupprogress.FieldProgress, field.TypeInt64, value)
	}
	if gpu.mutation.SubEventCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   groupprogress.SubEventTable,
			Columns: []string{groupprogress.SubEventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpu.mutation.SubEventIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   groupprogress.SubEventTable,
			Columns: []string{groupprogress.SubEventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if gpu.mutation.MemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpu.mutation.RemovedMemberIDs(); len(nodes) > 0 && !gpu.mutation.MemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpu.mutation.MemberIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(gpu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, gpu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{groupprogress.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	gpu.mutation.done = true
	return n, nil
}

// GroupProgressUpdateOne is the builder for updating a single GroupProgress entity.
type GroupProgressUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *GroupProgressMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetGroupID sets the "group_id" field.
func (gpuo *GroupProgressUpdateOne) SetGroupID(i int64) *GroupProgressUpdateOne {
	gpuo.mutation.ResetGroupID()
	gpuo.mutation.SetGroupID(i)
	return gpuo
}

// AddGroupID adds i to the "group_id" field.
func (gpuo *GroupProgressUpdateOne) AddGroupID(i int64) *GroupProgressUpdateOne {
	gpuo.mutation.AddGroupID(i)
	return gpuo
}

// SetProgress sets the "progress" field.
func (gpuo *GroupProgressUpdateOne) SetProgress(i int64) *GroupProgressUpdateOne {
	gpuo.mutation.ResetProgress()
	gpuo.mutation.SetProgress(i)
	return gpuo
}

// SetNillableProgress sets the "progress" field if the given value is not nil.
func (gpuo *GroupProgressUpdateOne) SetNillableProgress(i *int64) *GroupProgressUpdateOne {
	if i != nil {
		gpuo.SetProgress(*i)
	}
	return gpuo
}

// AddProgress adds i to the "progress" field.
func (gpuo *GroupProgressUpdateOne) AddProgress(i int64) *GroupProgressUpdateOne {
	gpuo.mutation.AddProgress(i)
	return gpuo
}

// SetSubEventID sets the "sub_event" edge to the SubEvent entity by ID.
func (gpuo *GroupProgressUpdateOne) SetSubEventID(id int64) *GroupProgressUpdateOne {
	gpuo.mutation.SetSubEventID(id)
	return gpuo
}

// SetNillableSubEventID sets the "sub_event" edge to the SubEvent entity by ID if the given value is not nil.
func (gpuo *GroupProgressUpdateOne) SetNillableSubEventID(id *int64) *GroupProgressUpdateOne {
	if id != nil {
		gpuo = gpuo.SetSubEventID(*id)
	}
	return gpuo
}

// SetSubEvent sets the "sub_event" edge to the SubEvent entity.
func (gpuo *GroupProgressUpdateOne) SetSubEvent(s *SubEvent) *GroupProgressUpdateOne {
	return gpuo.SetSubEventID(s.ID)
}

// AddMemberIDs adds the "member" edge to the MemberProgress entity by IDs.
func (gpuo *GroupProgressUpdateOne) AddMemberIDs(ids ...int64) *GroupProgressUpdateOne {
	gpuo.mutation.AddMemberIDs(ids...)
	return gpuo
}

// AddMember adds the "member" edges to the MemberProgress entity.
func (gpuo *GroupProgressUpdateOne) AddMember(m ...*MemberProgress) *GroupProgressUpdateOne {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gpuo.AddMemberIDs(ids...)
}

// Mutation returns the GroupProgressMutation object of the builder.
func (gpuo *GroupProgressUpdateOne) Mutation() *GroupProgressMutation {
	return gpuo.mutation
}

// ClearSubEvent clears the "sub_event" edge to the SubEvent entity.
func (gpuo *GroupProgressUpdateOne) ClearSubEvent() *GroupProgressUpdateOne {
	gpuo.mutation.ClearSubEvent()
	return gpuo
}

// ClearMember clears all "member" edges to the MemberProgress entity.
func (gpuo *GroupProgressUpdateOne) ClearMember() *GroupProgressUpdateOne {
	gpuo.mutation.ClearMember()
	return gpuo
}

// RemoveMemberIDs removes the "member" edge to MemberProgress entities by IDs.
func (gpuo *GroupProgressUpdateOne) RemoveMemberIDs(ids ...int64) *GroupProgressUpdateOne {
	gpuo.mutation.RemoveMemberIDs(ids...)
	return gpuo
}

// RemoveMember removes "member" edges to MemberProgress entities.
func (gpuo *GroupProgressUpdateOne) RemoveMember(m ...*MemberProgress) *GroupProgressUpdateOne {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gpuo.RemoveMemberIDs(ids...)
}

// Where appends a list predicates to the GroupProgressUpdate builder.
func (gpuo *GroupProgressUpdateOne) Where(ps ...predicate.GroupProgress) *GroupProgressUpdateOne {
	gpuo.mutation.Where(ps...)
	return gpuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (gpuo *GroupProgressUpdateOne) Select(field string, fields ...string) *GroupProgressUpdateOne {
	gpuo.fields = append([]string{field}, fields...)
	return gpuo
}

// Save executes the query and returns the updated GroupProgress entity.
func (gpuo *GroupProgressUpdateOne) Save(ctx context.Context) (*GroupProgress, error) {
	return withHooks[*GroupProgress, GroupProgressMutation](ctx, gpuo.sqlSave, gpuo.mutation, gpuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (gpuo *GroupProgressUpdateOne) SaveX(ctx context.Context) *GroupProgress {
	node, err := gpuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (gpuo *GroupProgressUpdateOne) Exec(ctx context.Context) error {
	_, err := gpuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gpuo *GroupProgressUpdateOne) ExecX(ctx context.Context) {
	if err := gpuo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (gpuo *GroupProgressUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *GroupProgressUpdateOne {
	gpuo.modifiers = append(gpuo.modifiers, modifiers...)
	return gpuo
}

func (gpuo *GroupProgressUpdateOne) sqlSave(ctx context.Context) (_node *GroupProgress, err error) {
	_spec := sqlgraph.NewUpdateSpec(groupprogress.Table, groupprogress.Columns, sqlgraph.NewFieldSpec(groupprogress.FieldID, field.TypeInt64))
	id, ok := gpuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "GroupProgress.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := gpuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, groupprogress.FieldID)
		for _, f := range fields {
			if !groupprogress.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != groupprogress.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := gpuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := gpuo.mutation.GroupID(); ok {
		_spec.SetField(groupprogress.FieldGroupID, field.TypeInt64, value)
	}
	if value, ok := gpuo.mutation.AddedGroupID(); ok {
		_spec.AddField(groupprogress.FieldGroupID, field.TypeInt64, value)
	}
	if value, ok := gpuo.mutation.Progress(); ok {
		_spec.SetField(groupprogress.FieldProgress, field.TypeInt64, value)
	}
	if value, ok := gpuo.mutation.AddedProgress(); ok {
		_spec.AddField(groupprogress.FieldProgress, field.TypeInt64, value)
	}
	if gpuo.mutation.SubEventCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   groupprogress.SubEventTable,
			Columns: []string{groupprogress.SubEventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpuo.mutation.SubEventIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   groupprogress.SubEventTable,
			Columns: []string{groupprogress.SubEventColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(subevent.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if gpuo.mutation.MemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpuo.mutation.RemovedMemberIDs(); len(nodes) > 0 && !gpuo.mutation.MemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gpuo.mutation.MemberIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupprogress.MemberTable,
			Columns: []string{groupprogress.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64),
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(gpuo.modifiers...)
	_node = &GroupProgress{config: gpuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, gpuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{groupprogress.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	gpuo.mutation.done = true
	return _node, nil
}
