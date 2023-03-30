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
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ChallengeMemberRuleUpdate is the builder for updating ChallengeMemberRule entities.
type ChallengeMemberRuleUpdate struct {
	config
	hooks     []Hook
	mutation  *ChallengeMemberRuleMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the ChallengeMemberRuleUpdate builder.
func (cmru *ChallengeMemberRuleUpdate) Where(ps ...predicate.ChallengeMemberRule) *ChallengeMemberRuleUpdate {
	cmru.mutation.Where(ps...)
	return cmru
}

// SetTotal sets the "total" field.
func (cmru *ChallengeMemberRuleUpdate) SetTotal(i int64) *ChallengeMemberRuleUpdate {
	cmru.mutation.ResetTotal()
	cmru.mutation.SetTotal(i)
	return cmru
}

// SetNillableTotal sets the "total" field if the given value is not nil.
func (cmru *ChallengeMemberRuleUpdate) SetNillableTotal(i *int64) *ChallengeMemberRuleUpdate {
	if i != nil {
		cmru.SetTotal(*i)
	}
	return cmru
}

// AddTotal adds i to the "total" field.
func (cmru *ChallengeMemberRuleUpdate) AddTotal(i int64) *ChallengeMemberRuleUpdate {
	cmru.mutation.AddTotal(i)
	return cmru
}

// SetRuleID sets the "rule_id" field.
func (cmru *ChallengeMemberRuleUpdate) SetRuleID(i int64) *ChallengeMemberRuleUpdate {
	cmru.mutation.ResetRuleID()
	cmru.mutation.SetRuleID(i)
	return cmru
}

// AddRuleID adds i to the "rule_id" field.
func (cmru *ChallengeMemberRuleUpdate) AddRuleID(i int64) *ChallengeMemberRuleUpdate {
	cmru.mutation.AddRuleID(i)
	return cmru
}

// SetIsCompleted sets the "is_completed" field.
func (cmru *ChallengeMemberRuleUpdate) SetIsCompleted(b bool) *ChallengeMemberRuleUpdate {
	cmru.mutation.SetIsCompleted(b)
	return cmru
}

// SetNillableIsCompleted sets the "is_completed" field if the given value is not nil.
func (cmru *ChallengeMemberRuleUpdate) SetNillableIsCompleted(b *bool) *ChallengeMemberRuleUpdate {
	if b != nil {
		cmru.SetIsCompleted(*b)
	}
	return cmru
}

// SetTimeCompleted sets the "time_completed" field.
func (cmru *ChallengeMemberRuleUpdate) SetTimeCompleted(t time.Time) *ChallengeMemberRuleUpdate {
	cmru.mutation.SetTimeCompleted(t)
	return cmru
}

// SetNillableTimeCompleted sets the "time_completed" field if the given value is not nil.
func (cmru *ChallengeMemberRuleUpdate) SetNillableTimeCompleted(t *time.Time) *ChallengeMemberRuleUpdate {
	if t != nil {
		cmru.SetTimeCompleted(*t)
	}
	return cmru
}

// ClearTimeCompleted clears the value of the "time_completed" field.
func (cmru *ChallengeMemberRuleUpdate) ClearTimeCompleted() *ChallengeMemberRuleUpdate {
	cmru.mutation.ClearTimeCompleted()
	return cmru
}

// SetUpdatedAt sets the "updated_at" field.
func (cmru *ChallengeMemberRuleUpdate) SetUpdatedAt(t time.Time) *ChallengeMemberRuleUpdate {
	cmru.mutation.SetUpdatedAt(t)
	return cmru
}

// SetChallengeMemberID sets the "challenge_member" edge to the ChallengeMember entity by ID.
func (cmru *ChallengeMemberRuleUpdate) SetChallengeMemberID(id int64) *ChallengeMemberRuleUpdate {
	cmru.mutation.SetChallengeMemberID(id)
	return cmru
}

// SetNillableChallengeMemberID sets the "challenge_member" edge to the ChallengeMember entity by ID if the given value is not nil.
func (cmru *ChallengeMemberRuleUpdate) SetNillableChallengeMemberID(id *int64) *ChallengeMemberRuleUpdate {
	if id != nil {
		cmru = cmru.SetChallengeMemberID(*id)
	}
	return cmru
}

// SetChallengeMember sets the "challenge_member" edge to the ChallengeMember entity.
func (cmru *ChallengeMemberRuleUpdate) SetChallengeMember(c *ChallengeMember) *ChallengeMemberRuleUpdate {
	return cmru.SetChallengeMemberID(c.ID)
}

// Mutation returns the ChallengeMemberRuleMutation object of the builder.
func (cmru *ChallengeMemberRuleUpdate) Mutation() *ChallengeMemberRuleMutation {
	return cmru.mutation
}

// ClearChallengeMember clears the "challenge_member" edge to the ChallengeMember entity.
func (cmru *ChallengeMemberRuleUpdate) ClearChallengeMember() *ChallengeMemberRuleUpdate {
	cmru.mutation.ClearChallengeMember()
	return cmru
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (cmru *ChallengeMemberRuleUpdate) Save(ctx context.Context) (int, error) {
	cmru.defaults()
	return withHooks[int, ChallengeMemberRuleMutation](ctx, cmru.sqlSave, cmru.mutation, cmru.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (cmru *ChallengeMemberRuleUpdate) SaveX(ctx context.Context) int {
	affected, err := cmru.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (cmru *ChallengeMemberRuleUpdate) Exec(ctx context.Context) error {
	_, err := cmru.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (cmru *ChallengeMemberRuleUpdate) ExecX(ctx context.Context) {
	if err := cmru.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (cmru *ChallengeMemberRuleUpdate) defaults() {
	if _, ok := cmru.mutation.UpdatedAt(); !ok {
		v := challengememberrule.UpdateDefaultUpdatedAt()
		cmru.mutation.SetUpdatedAt(v)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (cmru *ChallengeMemberRuleUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *ChallengeMemberRuleUpdate {
	cmru.modifiers = append(cmru.modifiers, modifiers...)
	return cmru
}

func (cmru *ChallengeMemberRuleUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   challengememberrule.Table,
			Columns: challengememberrule.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challengememberrule.FieldID,
			},
		},
	}
	if ps := cmru.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := cmru.mutation.Total(); ok {
		_spec.SetField(challengememberrule.FieldTotal, field.TypeInt64, value)
	}
	if value, ok := cmru.mutation.AddedTotal(); ok {
		_spec.AddField(challengememberrule.FieldTotal, field.TypeInt64, value)
	}
	if value, ok := cmru.mutation.RuleID(); ok {
		_spec.SetField(challengememberrule.FieldRuleID, field.TypeInt64, value)
	}
	if value, ok := cmru.mutation.AddedRuleID(); ok {
		_spec.AddField(challengememberrule.FieldRuleID, field.TypeInt64, value)
	}
	if value, ok := cmru.mutation.IsCompleted(); ok {
		_spec.SetField(challengememberrule.FieldIsCompleted, field.TypeBool, value)
	}
	if value, ok := cmru.mutation.TimeCompleted(); ok {
		_spec.SetField(challengememberrule.FieldTimeCompleted, field.TypeTime, value)
	}
	if cmru.mutation.TimeCompletedCleared() {
		_spec.ClearField(challengememberrule.FieldTimeCompleted, field.TypeTime)
	}
	if value, ok := cmru.mutation.UpdatedAt(); ok {
		_spec.SetField(challengememberrule.FieldUpdatedAt, field.TypeTime, value)
	}
	if cmru.mutation.ChallengeMemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challengememberrule.ChallengeMemberTable,
			Columns: []string{challengememberrule.ChallengeMemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengemember.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := cmru.mutation.ChallengeMemberIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challengememberrule.ChallengeMemberTable,
			Columns: []string{challengememberrule.ChallengeMemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengemember.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(cmru.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, cmru.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{challengememberrule.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	cmru.mutation.done = true
	return n, nil
}

// ChallengeMemberRuleUpdateOne is the builder for updating a single ChallengeMemberRule entity.
type ChallengeMemberRuleUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *ChallengeMemberRuleMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetTotal sets the "total" field.
func (cmruo *ChallengeMemberRuleUpdateOne) SetTotal(i int64) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.ResetTotal()
	cmruo.mutation.SetTotal(i)
	return cmruo
}

// SetNillableTotal sets the "total" field if the given value is not nil.
func (cmruo *ChallengeMemberRuleUpdateOne) SetNillableTotal(i *int64) *ChallengeMemberRuleUpdateOne {
	if i != nil {
		cmruo.SetTotal(*i)
	}
	return cmruo
}

// AddTotal adds i to the "total" field.
func (cmruo *ChallengeMemberRuleUpdateOne) AddTotal(i int64) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.AddTotal(i)
	return cmruo
}

// SetRuleID sets the "rule_id" field.
func (cmruo *ChallengeMemberRuleUpdateOne) SetRuleID(i int64) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.ResetRuleID()
	cmruo.mutation.SetRuleID(i)
	return cmruo
}

// AddRuleID adds i to the "rule_id" field.
func (cmruo *ChallengeMemberRuleUpdateOne) AddRuleID(i int64) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.AddRuleID(i)
	return cmruo
}

// SetIsCompleted sets the "is_completed" field.
func (cmruo *ChallengeMemberRuleUpdateOne) SetIsCompleted(b bool) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.SetIsCompleted(b)
	return cmruo
}

// SetNillableIsCompleted sets the "is_completed" field if the given value is not nil.
func (cmruo *ChallengeMemberRuleUpdateOne) SetNillableIsCompleted(b *bool) *ChallengeMemberRuleUpdateOne {
	if b != nil {
		cmruo.SetIsCompleted(*b)
	}
	return cmruo
}

// SetTimeCompleted sets the "time_completed" field.
func (cmruo *ChallengeMemberRuleUpdateOne) SetTimeCompleted(t time.Time) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.SetTimeCompleted(t)
	return cmruo
}

// SetNillableTimeCompleted sets the "time_completed" field if the given value is not nil.
func (cmruo *ChallengeMemberRuleUpdateOne) SetNillableTimeCompleted(t *time.Time) *ChallengeMemberRuleUpdateOne {
	if t != nil {
		cmruo.SetTimeCompleted(*t)
	}
	return cmruo
}

// ClearTimeCompleted clears the value of the "time_completed" field.
func (cmruo *ChallengeMemberRuleUpdateOne) ClearTimeCompleted() *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.ClearTimeCompleted()
	return cmruo
}

// SetUpdatedAt sets the "updated_at" field.
func (cmruo *ChallengeMemberRuleUpdateOne) SetUpdatedAt(t time.Time) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.SetUpdatedAt(t)
	return cmruo
}

// SetChallengeMemberID sets the "challenge_member" edge to the ChallengeMember entity by ID.
func (cmruo *ChallengeMemberRuleUpdateOne) SetChallengeMemberID(id int64) *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.SetChallengeMemberID(id)
	return cmruo
}

// SetNillableChallengeMemberID sets the "challenge_member" edge to the ChallengeMember entity by ID if the given value is not nil.
func (cmruo *ChallengeMemberRuleUpdateOne) SetNillableChallengeMemberID(id *int64) *ChallengeMemberRuleUpdateOne {
	if id != nil {
		cmruo = cmruo.SetChallengeMemberID(*id)
	}
	return cmruo
}

// SetChallengeMember sets the "challenge_member" edge to the ChallengeMember entity.
func (cmruo *ChallengeMemberRuleUpdateOne) SetChallengeMember(c *ChallengeMember) *ChallengeMemberRuleUpdateOne {
	return cmruo.SetChallengeMemberID(c.ID)
}

// Mutation returns the ChallengeMemberRuleMutation object of the builder.
func (cmruo *ChallengeMemberRuleUpdateOne) Mutation() *ChallengeMemberRuleMutation {
	return cmruo.mutation
}

// ClearChallengeMember clears the "challenge_member" edge to the ChallengeMember entity.
func (cmruo *ChallengeMemberRuleUpdateOne) ClearChallengeMember() *ChallengeMemberRuleUpdateOne {
	cmruo.mutation.ClearChallengeMember()
	return cmruo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (cmruo *ChallengeMemberRuleUpdateOne) Select(field string, fields ...string) *ChallengeMemberRuleUpdateOne {
	cmruo.fields = append([]string{field}, fields...)
	return cmruo
}

// Save executes the query and returns the updated ChallengeMemberRule entity.
func (cmruo *ChallengeMemberRuleUpdateOne) Save(ctx context.Context) (*ChallengeMemberRule, error) {
	cmruo.defaults()
	return withHooks[*ChallengeMemberRule, ChallengeMemberRuleMutation](ctx, cmruo.sqlSave, cmruo.mutation, cmruo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (cmruo *ChallengeMemberRuleUpdateOne) SaveX(ctx context.Context) *ChallengeMemberRule {
	node, err := cmruo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (cmruo *ChallengeMemberRuleUpdateOne) Exec(ctx context.Context) error {
	_, err := cmruo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (cmruo *ChallengeMemberRuleUpdateOne) ExecX(ctx context.Context) {
	if err := cmruo.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (cmruo *ChallengeMemberRuleUpdateOne) defaults() {
	if _, ok := cmruo.mutation.UpdatedAt(); !ok {
		v := challengememberrule.UpdateDefaultUpdatedAt()
		cmruo.mutation.SetUpdatedAt(v)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (cmruo *ChallengeMemberRuleUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *ChallengeMemberRuleUpdateOne {
	cmruo.modifiers = append(cmruo.modifiers, modifiers...)
	return cmruo
}

func (cmruo *ChallengeMemberRuleUpdateOne) sqlSave(ctx context.Context) (_node *ChallengeMemberRule, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   challengememberrule.Table,
			Columns: challengememberrule.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challengememberrule.FieldID,
			},
		},
	}
	id, ok := cmruo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "ChallengeMemberRule.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := cmruo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, challengememberrule.FieldID)
		for _, f := range fields {
			if !challengememberrule.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != challengememberrule.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := cmruo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := cmruo.mutation.Total(); ok {
		_spec.SetField(challengememberrule.FieldTotal, field.TypeInt64, value)
	}
	if value, ok := cmruo.mutation.AddedTotal(); ok {
		_spec.AddField(challengememberrule.FieldTotal, field.TypeInt64, value)
	}
	if value, ok := cmruo.mutation.RuleID(); ok {
		_spec.SetField(challengememberrule.FieldRuleID, field.TypeInt64, value)
	}
	if value, ok := cmruo.mutation.AddedRuleID(); ok {
		_spec.AddField(challengememberrule.FieldRuleID, field.TypeInt64, value)
	}
	if value, ok := cmruo.mutation.IsCompleted(); ok {
		_spec.SetField(challengememberrule.FieldIsCompleted, field.TypeBool, value)
	}
	if value, ok := cmruo.mutation.TimeCompleted(); ok {
		_spec.SetField(challengememberrule.FieldTimeCompleted, field.TypeTime, value)
	}
	if cmruo.mutation.TimeCompletedCleared() {
		_spec.ClearField(challengememberrule.FieldTimeCompleted, field.TypeTime)
	}
	if value, ok := cmruo.mutation.UpdatedAt(); ok {
		_spec.SetField(challengememberrule.FieldUpdatedAt, field.TypeTime, value)
	}
	if cmruo.mutation.ChallengeMemberCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challengememberrule.ChallengeMemberTable,
			Columns: []string{challengememberrule.ChallengeMemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengemember.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := cmruo.mutation.ChallengeMemberIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challengememberrule.ChallengeMemberTable,
			Columns: []string{challengememberrule.ChallengeMemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengemember.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(cmruo.modifiers...)
	_node = &ChallengeMemberRule{config: cmruo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, cmruo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{challengememberrule.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	cmruo.mutation.done = true
	return _node, nil
}
