// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/memberprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

// GroupProgressCreate is the builder for creating a GroupProgress entity.
type GroupProgressCreate struct {
	config
	mutation *GroupProgressMutation
	hooks    []Hook
}

// SetGroupID sets the "group_id" field.
func (gpc *GroupProgressCreate) SetGroupID(i int64) *GroupProgressCreate {
	gpc.mutation.SetGroupID(i)
	return gpc
}

// SetProgress sets the "progress" field.
func (gpc *GroupProgressCreate) SetProgress(i int64) *GroupProgressCreate {
	gpc.mutation.SetProgress(i)
	return gpc
}

// SetNillableProgress sets the "progress" field if the given value is not nil.
func (gpc *GroupProgressCreate) SetNillableProgress(i *int64) *GroupProgressCreate {
	if i != nil {
		gpc.SetProgress(*i)
	}
	return gpc
}

// SetID sets the "id" field.
func (gpc *GroupProgressCreate) SetID(i int64) *GroupProgressCreate {
	gpc.mutation.SetID(i)
	return gpc
}

// SetSubEventID sets the "sub_event" edge to the SubEvent entity by ID.
func (gpc *GroupProgressCreate) SetSubEventID(id int64) *GroupProgressCreate {
	gpc.mutation.SetSubEventID(id)
	return gpc
}

// SetNillableSubEventID sets the "sub_event" edge to the SubEvent entity by ID if the given value is not nil.
func (gpc *GroupProgressCreate) SetNillableSubEventID(id *int64) *GroupProgressCreate {
	if id != nil {
		gpc = gpc.SetSubEventID(*id)
	}
	return gpc
}

// SetSubEvent sets the "sub_event" edge to the SubEvent entity.
func (gpc *GroupProgressCreate) SetSubEvent(s *SubEvent) *GroupProgressCreate {
	return gpc.SetSubEventID(s.ID)
}

// AddMemberIDs adds the "member" edge to the MemberProgress entity by IDs.
func (gpc *GroupProgressCreate) AddMemberIDs(ids ...int64) *GroupProgressCreate {
	gpc.mutation.AddMemberIDs(ids...)
	return gpc
}

// AddMember adds the "member" edges to the MemberProgress entity.
func (gpc *GroupProgressCreate) AddMember(m ...*MemberProgress) *GroupProgressCreate {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gpc.AddMemberIDs(ids...)
}

// Mutation returns the GroupProgressMutation object of the builder.
func (gpc *GroupProgressCreate) Mutation() *GroupProgressMutation {
	return gpc.mutation
}

// Save creates the GroupProgress in the database.
func (gpc *GroupProgressCreate) Save(ctx context.Context) (*GroupProgress, error) {
	gpc.defaults()
	return withHooks[*GroupProgress, GroupProgressMutation](ctx, gpc.sqlSave, gpc.mutation, gpc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (gpc *GroupProgressCreate) SaveX(ctx context.Context) *GroupProgress {
	v, err := gpc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (gpc *GroupProgressCreate) Exec(ctx context.Context) error {
	_, err := gpc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gpc *GroupProgressCreate) ExecX(ctx context.Context) {
	if err := gpc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (gpc *GroupProgressCreate) defaults() {
	if _, ok := gpc.mutation.Progress(); !ok {
		v := groupprogress.DefaultProgress
		gpc.mutation.SetProgress(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (gpc *GroupProgressCreate) check() error {
	if _, ok := gpc.mutation.GroupID(); !ok {
		return &ValidationError{Name: "group_id", err: errors.New(`ent: missing required field "GroupProgress.group_id"`)}
	}
	if _, ok := gpc.mutation.Progress(); !ok {
		return &ValidationError{Name: "progress", err: errors.New(`ent: missing required field "GroupProgress.progress"`)}
	}
	return nil
}

func (gpc *GroupProgressCreate) sqlSave(ctx context.Context) (*GroupProgress, error) {
	if err := gpc.check(); err != nil {
		return nil, err
	}
	_node, _spec := gpc.createSpec()
	if err := sqlgraph.CreateNode(ctx, gpc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	gpc.mutation.id = &_node.ID
	gpc.mutation.done = true
	return _node, nil
}

func (gpc *GroupProgressCreate) createSpec() (*GroupProgress, *sqlgraph.CreateSpec) {
	var (
		_node = &GroupProgress{config: gpc.config}
		_spec = sqlgraph.NewCreateSpec(groupprogress.Table, sqlgraph.NewFieldSpec(groupprogress.FieldID, field.TypeInt64))
	)
	if id, ok := gpc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := gpc.mutation.GroupID(); ok {
		_spec.SetField(groupprogress.FieldGroupID, field.TypeInt64, value)
		_node.GroupID = value
	}
	if value, ok := gpc.mutation.Progress(); ok {
		_spec.SetField(groupprogress.FieldProgress, field.TypeInt64, value)
		_node.Progress = value
	}
	if nodes := gpc.mutation.SubEventIDs(); len(nodes) > 0 {
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
		_node.sub_event_group = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := gpc.mutation.MemberIDs(); len(nodes) > 0 {
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
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// GroupProgressCreateBulk is the builder for creating many GroupProgress entities in bulk.
type GroupProgressCreateBulk struct {
	config
	builders []*GroupProgressCreate
}

// Save creates the GroupProgress entities in the database.
func (gpcb *GroupProgressCreateBulk) Save(ctx context.Context) ([]*GroupProgress, error) {
	specs := make([]*sqlgraph.CreateSpec, len(gpcb.builders))
	nodes := make([]*GroupProgress, len(gpcb.builders))
	mutators := make([]Mutator, len(gpcb.builders))
	for i := range gpcb.builders {
		func(i int, root context.Context) {
			builder := gpcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*GroupProgressMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				var err error
				nodes[i], specs[i] = builder.createSpec()
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, gpcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, gpcb.driver, spec); err != nil {
						if sqlgraph.IsConstraintError(err) {
							err = &ConstraintError{msg: err.Error(), wrap: err}
						}
					}
				}
				if err != nil {
					return nil, err
				}
				mutation.id = &nodes[i].ID
				if specs[i].ID.Value != nil && nodes[i].ID == 0 {
					id := specs[i].ID.Value.(int64)
					nodes[i].ID = int64(id)
				}
				mutation.done = true
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, gpcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (gpcb *GroupProgressCreateBulk) SaveX(ctx context.Context) []*GroupProgress {
	v, err := gpcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (gpcb *GroupProgressCreateBulk) Exec(ctx context.Context) error {
	_, err := gpcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gpcb *GroupProgressCreateBulk) ExecX(ctx context.Context) {
	if err := gpcb.Exec(ctx); err != nil {
		panic(err)
	}
}