// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"

	entactivity "github.com/manhrev/runtracking/backend/activity/pkg/ent/activity"
)

// ActivityCreate is the builder for creating a Activity entity.
type ActivityCreate struct {
	config
	mutation *ActivityMutation
	hooks    []Hook
}

// SetUserID sets the "user_id" field.
func (ac *ActivityCreate) SetUserID(i int64) *ActivityCreate {
	ac.mutation.SetUserID(i)
	return ac
}

// SetType sets the "type" field.
func (ac *ActivityCreate) SetType(u uint32) *ActivityCreate {
	ac.mutation.SetType(u)
	return ac
}

// SetNillableType sets the "type" field if the given value is not nil.
func (ac *ActivityCreate) SetNillableType(u *uint32) *ActivityCreate {
	if u != nil {
		ac.SetType(*u)
	}
	return ac
}

// SetTotalDistance sets the "total_distance" field.
func (ac *ActivityCreate) SetTotalDistance(f float64) *ActivityCreate {
	ac.mutation.SetTotalDistance(f)
	return ac
}

// SetKcal sets the "kcal" field.
func (ac *ActivityCreate) SetKcal(f float32) *ActivityCreate {
	ac.mutation.SetKcal(f)
	return ac
}

// SetStartTime sets the "start_time" field.
func (ac *ActivityCreate) SetStartTime(t time.Time) *ActivityCreate {
	ac.mutation.SetStartTime(t)
	return ac
}

// SetEndTime sets the "end_time" field.
func (ac *ActivityCreate) SetEndTime(t time.Time) *ActivityCreate {
	ac.mutation.SetEndTime(t)
	return ac
}

// SetDuration sets the "duration" field.
func (ac *ActivityCreate) SetDuration(u uint64) *ActivityCreate {
	ac.mutation.SetDuration(u)
	return ac
}

// SetRoute sets the "route" field.
func (ac *ActivityCreate) SetRoute(ap []activity.TrackPoint) *ActivityCreate {
	ac.mutation.SetRoute(ap)
	return ac
}

// SetCreatedAt sets the "created_at" field.
func (ac *ActivityCreate) SetCreatedAt(t time.Time) *ActivityCreate {
	ac.mutation.SetCreatedAt(t)
	return ac
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (ac *ActivityCreate) SetNillableCreatedAt(t *time.Time) *ActivityCreate {
	if t != nil {
		ac.SetCreatedAt(*t)
	}
	return ac
}

// SetID sets the "id" field.
func (ac *ActivityCreate) SetID(i int64) *ActivityCreate {
	ac.mutation.SetID(i)
	return ac
}

// Mutation returns the ActivityMutation object of the builder.
func (ac *ActivityCreate) Mutation() *ActivityMutation {
	return ac.mutation
}

// Save creates the Activity in the database.
func (ac *ActivityCreate) Save(ctx context.Context) (*Activity, error) {
	var (
		err  error
		node *Activity
	)
	ac.defaults()
	if len(ac.hooks) == 0 {
		if err = ac.check(); err != nil {
			return nil, err
		}
		node, err = ac.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*ActivityMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			if err = ac.check(); err != nil {
				return nil, err
			}
			ac.mutation = mutation
			if node, err = ac.sqlSave(ctx); err != nil {
				return nil, err
			}
			mutation.id = &node.ID
			mutation.done = true
			return node, err
		})
		for i := len(ac.hooks) - 1; i >= 0; i-- {
			if ac.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = ac.hooks[i](mut)
		}
		v, err := mut.Mutate(ctx, ac.mutation)
		if err != nil {
			return nil, err
		}
		nv, ok := v.(*Activity)
		if !ok {
			return nil, fmt.Errorf("unexpected node type %T returned from ActivityMutation", v)
		}
		node = nv
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (ac *ActivityCreate) SaveX(ctx context.Context) *Activity {
	v, err := ac.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ac *ActivityCreate) Exec(ctx context.Context) error {
	_, err := ac.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ac *ActivityCreate) ExecX(ctx context.Context) {
	if err := ac.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (ac *ActivityCreate) defaults() {
	if _, ok := ac.mutation.GetType(); !ok {
		v := entactivity.DefaultType
		ac.mutation.SetType(v)
	}
	if _, ok := ac.mutation.CreatedAt(); !ok {
		v := entactivity.DefaultCreatedAt
		ac.mutation.SetCreatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (ac *ActivityCreate) check() error {
	if _, ok := ac.mutation.UserID(); !ok {
		return &ValidationError{Name: "user_id", err: errors.New(`ent: missing required field "Activity.user_id"`)}
	}
	if _, ok := ac.mutation.GetType(); !ok {
		return &ValidationError{Name: "type", err: errors.New(`ent: missing required field "Activity.type"`)}
	}
	if _, ok := ac.mutation.TotalDistance(); !ok {
		return &ValidationError{Name: "total_distance", err: errors.New(`ent: missing required field "Activity.total_distance"`)}
	}
	if _, ok := ac.mutation.Kcal(); !ok {
		return &ValidationError{Name: "kcal", err: errors.New(`ent: missing required field "Activity.kcal"`)}
	}
	if _, ok := ac.mutation.StartTime(); !ok {
		return &ValidationError{Name: "start_time", err: errors.New(`ent: missing required field "Activity.start_time"`)}
	}
	if _, ok := ac.mutation.EndTime(); !ok {
		return &ValidationError{Name: "end_time", err: errors.New(`ent: missing required field "Activity.end_time"`)}
	}
	if _, ok := ac.mutation.Duration(); !ok {
		return &ValidationError{Name: "duration", err: errors.New(`ent: missing required field "Activity.duration"`)}
	}
	if _, ok := ac.mutation.Route(); !ok {
		return &ValidationError{Name: "route", err: errors.New(`ent: missing required field "Activity.route"`)}
	}
	if _, ok := ac.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "Activity.created_at"`)}
	}
	return nil
}

func (ac *ActivityCreate) sqlSave(ctx context.Context) (*Activity, error) {
	_node, _spec := ac.createSpec()
	if err := sqlgraph.CreateNode(ctx, ac.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	return _node, nil
}

func (ac *ActivityCreate) createSpec() (*Activity, *sqlgraph.CreateSpec) {
	var (
		_node = &Activity{config: ac.config}
		_spec = &sqlgraph.CreateSpec{
			Table: entactivity.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: entactivity.FieldID,
			},
		}
	)
	if id, ok := ac.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := ac.mutation.UserID(); ok {
		_spec.SetField(entactivity.FieldUserID, field.TypeInt64, value)
		_node.UserID = value
	}
	if value, ok := ac.mutation.GetType(); ok {
		_spec.SetField(entactivity.FieldType, field.TypeUint32, value)
		_node.Type = value
	}
	if value, ok := ac.mutation.TotalDistance(); ok {
		_spec.SetField(entactivity.FieldTotalDistance, field.TypeFloat64, value)
		_node.TotalDistance = value
	}
	if value, ok := ac.mutation.Kcal(); ok {
		_spec.SetField(entactivity.FieldKcal, field.TypeFloat32, value)
		_node.Kcal = value
	}
	if value, ok := ac.mutation.StartTime(); ok {
		_spec.SetField(entactivity.FieldStartTime, field.TypeTime, value)
		_node.StartTime = value
	}
	if value, ok := ac.mutation.EndTime(); ok {
		_spec.SetField(entactivity.FieldEndTime, field.TypeTime, value)
		_node.EndTime = value
	}
	if value, ok := ac.mutation.Duration(); ok {
		_spec.SetField(entactivity.FieldDuration, field.TypeUint64, value)
		_node.Duration = value
	}
	if value, ok := ac.mutation.Route(); ok {
		_spec.SetField(entactivity.FieldRoute, field.TypeJSON, value)
		_node.Route = value
	}
	if value, ok := ac.mutation.CreatedAt(); ok {
		_spec.SetField(entactivity.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	return _node, _spec
}

// ActivityCreateBulk is the builder for creating many Activity entities in bulk.
type ActivityCreateBulk struct {
	config
	builders []*ActivityCreate
}

// Save creates the Activity entities in the database.
func (acb *ActivityCreateBulk) Save(ctx context.Context) ([]*Activity, error) {
	specs := make([]*sqlgraph.CreateSpec, len(acb.builders))
	nodes := make([]*Activity, len(acb.builders))
	mutators := make([]Mutator, len(acb.builders))
	for i := range acb.builders {
		func(i int, root context.Context) {
			builder := acb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ActivityMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				if err := builder.check(); err != nil {
					return nil, err
				}
				builder.mutation = mutation
				nodes[i], specs[i] = builder.createSpec()
				var err error
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, acb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, acb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, acb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (acb *ActivityCreateBulk) SaveX(ctx context.Context) []*Activity {
	v, err := acb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (acb *ActivityCreateBulk) Exec(ctx context.Context) error {
	_, err := acb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (acb *ActivityCreateBulk) ExecX(ctx context.Context) {
	if err := acb.Exec(ctx); err != nil {
		panic(err)
	}
}
