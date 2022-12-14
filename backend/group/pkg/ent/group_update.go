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
	"github.com/google/uuid"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/group"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// GroupUpdate is the builder for updating Group entities.
type GroupUpdate struct {
	config
	hooks    []Hook
	mutation *GroupMutation
}

// Where appends a list predicates to the GroupUpdate builder.
func (gu *GroupUpdate) Where(ps ...predicate.Group) *GroupUpdate {
	gu.mutation.Where(ps...)
	return gu
}

// SetName sets the "name" field.
func (gu *GroupUpdate) SetName(s string) *GroupUpdate {
	gu.mutation.SetName(s)
	return gu
}

// SetNillableName sets the "name" field if the given value is not nil.
func (gu *GroupUpdate) SetNillableName(s *string) *GroupUpdate {
	if s != nil {
		gu.SetName(*s)
	}
	return gu
}

// ClearName clears the value of the "name" field.
func (gu *GroupUpdate) ClearName() *GroupUpdate {
	gu.mutation.ClearName()
	return gu
}

// SetDescription sets the "description" field.
func (gu *GroupUpdate) SetDescription(s string) *GroupUpdate {
	gu.mutation.SetDescription(s)
	return gu
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (gu *GroupUpdate) SetNillableDescription(s *string) *GroupUpdate {
	if s != nil {
		gu.SetDescription(*s)
	}
	return gu
}

// ClearDescription clears the value of the "description" field.
func (gu *GroupUpdate) ClearDescription() *GroupUpdate {
	gu.mutation.ClearDescription()
	return gu
}

// SetBackgroundPicture sets the "background_picture" field.
func (gu *GroupUpdate) SetBackgroundPicture(s string) *GroupUpdate {
	gu.mutation.SetBackgroundPicture(s)
	return gu
}

// SetNillableBackgroundPicture sets the "background_picture" field if the given value is not nil.
func (gu *GroupUpdate) SetNillableBackgroundPicture(s *string) *GroupUpdate {
	if s != nil {
		gu.SetBackgroundPicture(*s)
	}
	return gu
}

// SetCreatedAt sets the "created_at" field.
func (gu *GroupUpdate) SetCreatedAt(t time.Time) *GroupUpdate {
	gu.mutation.SetCreatedAt(t)
	return gu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (gu *GroupUpdate) SetNillableCreatedAt(t *time.Time) *GroupUpdate {
	if t != nil {
		gu.SetCreatedAt(*t)
	}
	return gu
}

// SetLeaderID sets the "leader_id" field.
func (gu *GroupUpdate) SetLeaderID(u uuid.UUID) *GroupUpdate {
	gu.mutation.SetLeaderID(u)
	return gu
}

// SetNillableLeaderID sets the "leader_id" field if the given value is not nil.
func (gu *GroupUpdate) SetNillableLeaderID(u *uuid.UUID) *GroupUpdate {
	if u != nil {
		gu.SetLeaderID(*u)
	}
	return gu
}

// Mutation returns the GroupMutation object of the builder.
func (gu *GroupUpdate) Mutation() *GroupMutation {
	return gu.mutation
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (gu *GroupUpdate) Save(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(gu.hooks) == 0 {
		affected, err = gu.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*GroupMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			gu.mutation = mutation
			affected, err = gu.sqlSave(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(gu.hooks) - 1; i >= 0; i-- {
			if gu.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = gu.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, gu.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// SaveX is like Save, but panics if an error occurs.
func (gu *GroupUpdate) SaveX(ctx context.Context) int {
	affected, err := gu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (gu *GroupUpdate) Exec(ctx context.Context) error {
	_, err := gu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gu *GroupUpdate) ExecX(ctx context.Context) {
	if err := gu.Exec(ctx); err != nil {
		panic(err)
	}
}

func (gu *GroupUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   group.Table,
			Columns: group.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: group.FieldID,
			},
		},
	}
	if ps := gu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := gu.mutation.Name(); ok {
		_spec.SetField(group.FieldName, field.TypeString, value)
	}
	if gu.mutation.NameCleared() {
		_spec.ClearField(group.FieldName, field.TypeString)
	}
	if value, ok := gu.mutation.Description(); ok {
		_spec.SetField(group.FieldDescription, field.TypeString, value)
	}
	if gu.mutation.DescriptionCleared() {
		_spec.ClearField(group.FieldDescription, field.TypeString)
	}
	if value, ok := gu.mutation.BackgroundPicture(); ok {
		_spec.SetField(group.FieldBackgroundPicture, field.TypeString, value)
	}
	if value, ok := gu.mutation.CreatedAt(); ok {
		_spec.SetField(group.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := gu.mutation.LeaderID(); ok {
		_spec.SetField(group.FieldLeaderID, field.TypeUUID, value)
	}
	if n, err = sqlgraph.UpdateNodes(ctx, gu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{group.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	return n, nil
}

// GroupUpdateOne is the builder for updating a single Group entity.
type GroupUpdateOne struct {
	config
	fields   []string
	hooks    []Hook
	mutation *GroupMutation
}

// SetName sets the "name" field.
func (guo *GroupUpdateOne) SetName(s string) *GroupUpdateOne {
	guo.mutation.SetName(s)
	return guo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (guo *GroupUpdateOne) SetNillableName(s *string) *GroupUpdateOne {
	if s != nil {
		guo.SetName(*s)
	}
	return guo
}

// ClearName clears the value of the "name" field.
func (guo *GroupUpdateOne) ClearName() *GroupUpdateOne {
	guo.mutation.ClearName()
	return guo
}

// SetDescription sets the "description" field.
func (guo *GroupUpdateOne) SetDescription(s string) *GroupUpdateOne {
	guo.mutation.SetDescription(s)
	return guo
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (guo *GroupUpdateOne) SetNillableDescription(s *string) *GroupUpdateOne {
	if s != nil {
		guo.SetDescription(*s)
	}
	return guo
}

// ClearDescription clears the value of the "description" field.
func (guo *GroupUpdateOne) ClearDescription() *GroupUpdateOne {
	guo.mutation.ClearDescription()
	return guo
}

// SetBackgroundPicture sets the "background_picture" field.
func (guo *GroupUpdateOne) SetBackgroundPicture(s string) *GroupUpdateOne {
	guo.mutation.SetBackgroundPicture(s)
	return guo
}

// SetNillableBackgroundPicture sets the "background_picture" field if the given value is not nil.
func (guo *GroupUpdateOne) SetNillableBackgroundPicture(s *string) *GroupUpdateOne {
	if s != nil {
		guo.SetBackgroundPicture(*s)
	}
	return guo
}

// SetCreatedAt sets the "created_at" field.
func (guo *GroupUpdateOne) SetCreatedAt(t time.Time) *GroupUpdateOne {
	guo.mutation.SetCreatedAt(t)
	return guo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (guo *GroupUpdateOne) SetNillableCreatedAt(t *time.Time) *GroupUpdateOne {
	if t != nil {
		guo.SetCreatedAt(*t)
	}
	return guo
}

// SetLeaderID sets the "leader_id" field.
func (guo *GroupUpdateOne) SetLeaderID(u uuid.UUID) *GroupUpdateOne {
	guo.mutation.SetLeaderID(u)
	return guo
}

// SetNillableLeaderID sets the "leader_id" field if the given value is not nil.
func (guo *GroupUpdateOne) SetNillableLeaderID(u *uuid.UUID) *GroupUpdateOne {
	if u != nil {
		guo.SetLeaderID(*u)
	}
	return guo
}

// Mutation returns the GroupMutation object of the builder.
func (guo *GroupUpdateOne) Mutation() *GroupMutation {
	return guo.mutation
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (guo *GroupUpdateOne) Select(field string, fields ...string) *GroupUpdateOne {
	guo.fields = append([]string{field}, fields...)
	return guo
}

// Save executes the query and returns the updated Group entity.
func (guo *GroupUpdateOne) Save(ctx context.Context) (*Group, error) {
	var (
		err  error
		node *Group
	)
	if len(guo.hooks) == 0 {
		node, err = guo.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*GroupMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			guo.mutation = mutation
			node, err = guo.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(guo.hooks) - 1; i >= 0; i-- {
			if guo.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = guo.hooks[i](mut)
		}
		v, err := mut.Mutate(ctx, guo.mutation)
		if err != nil {
			return nil, err
		}
		nv, ok := v.(*Group)
		if !ok {
			return nil, fmt.Errorf("unexpected node type %T returned from GroupMutation", v)
		}
		node = nv
	}
	return node, err
}

// SaveX is like Save, but panics if an error occurs.
func (guo *GroupUpdateOne) SaveX(ctx context.Context) *Group {
	node, err := guo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (guo *GroupUpdateOne) Exec(ctx context.Context) error {
	_, err := guo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (guo *GroupUpdateOne) ExecX(ctx context.Context) {
	if err := guo.Exec(ctx); err != nil {
		panic(err)
	}
}

func (guo *GroupUpdateOne) sqlSave(ctx context.Context) (_node *Group, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   group.Table,
			Columns: group.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeUUID,
				Column: group.FieldID,
			},
		},
	}
	id, ok := guo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Group.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := guo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, group.FieldID)
		for _, f := range fields {
			if !group.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != group.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := guo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := guo.mutation.Name(); ok {
		_spec.SetField(group.FieldName, field.TypeString, value)
	}
	if guo.mutation.NameCleared() {
		_spec.ClearField(group.FieldName, field.TypeString)
	}
	if value, ok := guo.mutation.Description(); ok {
		_spec.SetField(group.FieldDescription, field.TypeString, value)
	}
	if guo.mutation.DescriptionCleared() {
		_spec.ClearField(group.FieldDescription, field.TypeString)
	}
	if value, ok := guo.mutation.BackgroundPicture(); ok {
		_spec.SetField(group.FieldBackgroundPicture, field.TypeString, value)
	}
	if value, ok := guo.mutation.CreatedAt(); ok {
		_spec.SetField(group.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := guo.mutation.LeaderID(); ok {
		_spec.SetField(group.FieldLeaderID, field.TypeUUID, value)
	}
	_node = &Group{config: guo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, guo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{group.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	return _node, nil
}
