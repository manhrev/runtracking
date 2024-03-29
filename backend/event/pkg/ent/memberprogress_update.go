// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/memberprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
)

// MemberProgressUpdate is the builder for updating MemberProgress entities.
type MemberProgressUpdate struct {
	config
	hooks     []Hook
	mutation  *MemberProgressMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the MemberProgressUpdate builder.
func (mpu *MemberProgressUpdate) Where(ps ...predicate.MemberProgress) *MemberProgressUpdate {
	mpu.mutation.Where(ps...)
	return mpu
}

// SetMemberID sets the "member_id" field.
func (mpu *MemberProgressUpdate) SetMemberID(i int64) *MemberProgressUpdate {
	mpu.mutation.ResetMemberID()
	mpu.mutation.SetMemberID(i)
	return mpu
}

// AddMemberID adds i to the "member_id" field.
func (mpu *MemberProgressUpdate) AddMemberID(i int64) *MemberProgressUpdate {
	mpu.mutation.AddMemberID(i)
	return mpu
}

// SetUserID sets the "user_id" field.
func (mpu *MemberProgressUpdate) SetUserID(i int64) *MemberProgressUpdate {
	mpu.mutation.ResetUserID()
	mpu.mutation.SetUserID(i)
	return mpu
}

// AddUserID adds i to the "user_id" field.
func (mpu *MemberProgressUpdate) AddUserID(i int64) *MemberProgressUpdate {
	mpu.mutation.AddUserID(i)
	return mpu
}

// SetProgress sets the "progress" field.
func (mpu *MemberProgressUpdate) SetProgress(i int64) *MemberProgressUpdate {
	mpu.mutation.ResetProgress()
	mpu.mutation.SetProgress(i)
	return mpu
}

// SetNillableProgress sets the "progress" field if the given value is not nil.
func (mpu *MemberProgressUpdate) SetNillableProgress(i *int64) *MemberProgressUpdate {
	if i != nil {
		mpu.SetProgress(*i)
	}
	return mpu
}

// AddProgress adds i to the "progress" field.
func (mpu *MemberProgressUpdate) AddProgress(i int64) *MemberProgressUpdate {
	mpu.mutation.AddProgress(i)
	return mpu
}

// SetGroupID sets the "group" edge to the GroupzProgress entity by ID.
func (mpu *MemberProgressUpdate) SetGroupID(id int64) *MemberProgressUpdate {
	mpu.mutation.SetGroupID(id)
	return mpu
}

// SetNillableGroupID sets the "group" edge to the GroupzProgress entity by ID if the given value is not nil.
func (mpu *MemberProgressUpdate) SetNillableGroupID(id *int64) *MemberProgressUpdate {
	if id != nil {
		mpu = mpu.SetGroupID(*id)
	}
	return mpu
}

// SetGroup sets the "group" edge to the GroupzProgress entity.
func (mpu *MemberProgressUpdate) SetGroup(g *GroupzProgress) *MemberProgressUpdate {
	return mpu.SetGroupID(g.ID)
}

// Mutation returns the MemberProgressMutation object of the builder.
func (mpu *MemberProgressUpdate) Mutation() *MemberProgressMutation {
	return mpu.mutation
}

// ClearGroup clears the "group" edge to the GroupzProgress entity.
func (mpu *MemberProgressUpdate) ClearGroup() *MemberProgressUpdate {
	mpu.mutation.ClearGroup()
	return mpu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (mpu *MemberProgressUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, MemberProgressMutation](ctx, mpu.sqlSave, mpu.mutation, mpu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (mpu *MemberProgressUpdate) SaveX(ctx context.Context) int {
	affected, err := mpu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (mpu *MemberProgressUpdate) Exec(ctx context.Context) error {
	_, err := mpu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mpu *MemberProgressUpdate) ExecX(ctx context.Context) {
	if err := mpu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (mpu *MemberProgressUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *MemberProgressUpdate {
	mpu.modifiers = append(mpu.modifiers, modifiers...)
	return mpu
}

func (mpu *MemberProgressUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(memberprogress.Table, memberprogress.Columns, sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64))
	if ps := mpu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := mpu.mutation.MemberID(); ok {
		_spec.SetField(memberprogress.FieldMemberID, field.TypeInt64, value)
	}
	if value, ok := mpu.mutation.AddedMemberID(); ok {
		_spec.AddField(memberprogress.FieldMemberID, field.TypeInt64, value)
	}
	if value, ok := mpu.mutation.UserID(); ok {
		_spec.SetField(memberprogress.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := mpu.mutation.AddedUserID(); ok {
		_spec.AddField(memberprogress.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := mpu.mutation.Progress(); ok {
		_spec.SetField(memberprogress.FieldProgress, field.TypeInt64, value)
	}
	if value, ok := mpu.mutation.AddedProgress(); ok {
		_spec.AddField(memberprogress.FieldProgress, field.TypeInt64, value)
	}
	if mpu.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   memberprogress.GroupTable,
			Columns: []string{memberprogress.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := mpu.mutation.GroupIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   memberprogress.GroupTable,
			Columns: []string{memberprogress.GroupColumn},
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
	_spec.AddModifiers(mpu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, mpu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{memberprogress.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	mpu.mutation.done = true
	return n, nil
}

// MemberProgressUpdateOne is the builder for updating a single MemberProgress entity.
type MemberProgressUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *MemberProgressMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetMemberID sets the "member_id" field.
func (mpuo *MemberProgressUpdateOne) SetMemberID(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.ResetMemberID()
	mpuo.mutation.SetMemberID(i)
	return mpuo
}

// AddMemberID adds i to the "member_id" field.
func (mpuo *MemberProgressUpdateOne) AddMemberID(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.AddMemberID(i)
	return mpuo
}

// SetUserID sets the "user_id" field.
func (mpuo *MemberProgressUpdateOne) SetUserID(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.ResetUserID()
	mpuo.mutation.SetUserID(i)
	return mpuo
}

// AddUserID adds i to the "user_id" field.
func (mpuo *MemberProgressUpdateOne) AddUserID(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.AddUserID(i)
	return mpuo
}

// SetProgress sets the "progress" field.
func (mpuo *MemberProgressUpdateOne) SetProgress(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.ResetProgress()
	mpuo.mutation.SetProgress(i)
	return mpuo
}

// SetNillableProgress sets the "progress" field if the given value is not nil.
func (mpuo *MemberProgressUpdateOne) SetNillableProgress(i *int64) *MemberProgressUpdateOne {
	if i != nil {
		mpuo.SetProgress(*i)
	}
	return mpuo
}

// AddProgress adds i to the "progress" field.
func (mpuo *MemberProgressUpdateOne) AddProgress(i int64) *MemberProgressUpdateOne {
	mpuo.mutation.AddProgress(i)
	return mpuo
}

// SetGroupID sets the "group" edge to the GroupzProgress entity by ID.
func (mpuo *MemberProgressUpdateOne) SetGroupID(id int64) *MemberProgressUpdateOne {
	mpuo.mutation.SetGroupID(id)
	return mpuo
}

// SetNillableGroupID sets the "group" edge to the GroupzProgress entity by ID if the given value is not nil.
func (mpuo *MemberProgressUpdateOne) SetNillableGroupID(id *int64) *MemberProgressUpdateOne {
	if id != nil {
		mpuo = mpuo.SetGroupID(*id)
	}
	return mpuo
}

// SetGroup sets the "group" edge to the GroupzProgress entity.
func (mpuo *MemberProgressUpdateOne) SetGroup(g *GroupzProgress) *MemberProgressUpdateOne {
	return mpuo.SetGroupID(g.ID)
}

// Mutation returns the MemberProgressMutation object of the builder.
func (mpuo *MemberProgressUpdateOne) Mutation() *MemberProgressMutation {
	return mpuo.mutation
}

// ClearGroup clears the "group" edge to the GroupzProgress entity.
func (mpuo *MemberProgressUpdateOne) ClearGroup() *MemberProgressUpdateOne {
	mpuo.mutation.ClearGroup()
	return mpuo
}

// Where appends a list predicates to the MemberProgressUpdate builder.
func (mpuo *MemberProgressUpdateOne) Where(ps ...predicate.MemberProgress) *MemberProgressUpdateOne {
	mpuo.mutation.Where(ps...)
	return mpuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (mpuo *MemberProgressUpdateOne) Select(field string, fields ...string) *MemberProgressUpdateOne {
	mpuo.fields = append([]string{field}, fields...)
	return mpuo
}

// Save executes the query and returns the updated MemberProgress entity.
func (mpuo *MemberProgressUpdateOne) Save(ctx context.Context) (*MemberProgress, error) {
	return withHooks[*MemberProgress, MemberProgressMutation](ctx, mpuo.sqlSave, mpuo.mutation, mpuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (mpuo *MemberProgressUpdateOne) SaveX(ctx context.Context) *MemberProgress {
	node, err := mpuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (mpuo *MemberProgressUpdateOne) Exec(ctx context.Context) error {
	_, err := mpuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mpuo *MemberProgressUpdateOne) ExecX(ctx context.Context) {
	if err := mpuo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (mpuo *MemberProgressUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *MemberProgressUpdateOne {
	mpuo.modifiers = append(mpuo.modifiers, modifiers...)
	return mpuo
}

func (mpuo *MemberProgressUpdateOne) sqlSave(ctx context.Context) (_node *MemberProgress, err error) {
	_spec := sqlgraph.NewUpdateSpec(memberprogress.Table, memberprogress.Columns, sqlgraph.NewFieldSpec(memberprogress.FieldID, field.TypeInt64))
	id, ok := mpuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "MemberProgress.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := mpuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, memberprogress.FieldID)
		for _, f := range fields {
			if !memberprogress.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != memberprogress.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := mpuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := mpuo.mutation.MemberID(); ok {
		_spec.SetField(memberprogress.FieldMemberID, field.TypeInt64, value)
	}
	if value, ok := mpuo.mutation.AddedMemberID(); ok {
		_spec.AddField(memberprogress.FieldMemberID, field.TypeInt64, value)
	}
	if value, ok := mpuo.mutation.UserID(); ok {
		_spec.SetField(memberprogress.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := mpuo.mutation.AddedUserID(); ok {
		_spec.AddField(memberprogress.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := mpuo.mutation.Progress(); ok {
		_spec.SetField(memberprogress.FieldProgress, field.TypeInt64, value)
	}
	if value, ok := mpuo.mutation.AddedProgress(); ok {
		_spec.AddField(memberprogress.FieldProgress, field.TypeInt64, value)
	}
	if mpuo.mutation.GroupCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   memberprogress.GroupTable,
			Columns: []string{memberprogress.GroupColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64),
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := mpuo.mutation.GroupIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   memberprogress.GroupTable,
			Columns: []string{memberprogress.GroupColumn},
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
	_spec.AddModifiers(mpuo.modifiers...)
	_node = &MemberProgress{config: mpuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, mpuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{memberprogress.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	mpuo.mutation.done = true
	return _node, nil
}
