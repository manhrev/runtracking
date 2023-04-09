// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
)

// NotificationCreate is the builder for creating a Notification entity.
type NotificationCreate struct {
	config
	mutation *NotificationMutation
	hooks    []Hook
}

// SetMessage sets the "message" field.
func (nc *NotificationCreate) SetMessage(s string) *NotificationCreate {
	nc.mutation.SetMessage(s)
	return nc
}

// SetNillableMessage sets the "message" field if the given value is not nil.
func (nc *NotificationCreate) SetNillableMessage(s *string) *NotificationCreate {
	if s != nil {
		nc.SetMessage(*s)
	}
	return nc
}

// SetSourceType sets the "source_type" field.
func (nc *NotificationCreate) SetSourceType(i int64) *NotificationCreate {
	nc.mutation.SetSourceType(i)
	return nc
}

// SetNillableSourceType sets the "source_type" field if the given value is not nil.
func (nc *NotificationCreate) SetNillableSourceType(i *int64) *NotificationCreate {
	if i != nil {
		nc.SetSourceType(*i)
	}
	return nc
}

// SetSourceID sets the "source_id" field.
func (nc *NotificationCreate) SetSourceID(i int64) *NotificationCreate {
	nc.mutation.SetSourceID(i)
	return nc
}

// SetNillableSourceID sets the "source_id" field if the given value is not nil.
func (nc *NotificationCreate) SetNillableSourceID(i *int64) *NotificationCreate {
	if i != nil {
		nc.SetSourceID(*i)
	}
	return nc
}

// SetSourceImage sets the "source_image" field.
func (nc *NotificationCreate) SetSourceImage(s string) *NotificationCreate {
	nc.mutation.SetSourceImage(s)
	return nc
}

// SetNillableSourceImage sets the "source_image" field if the given value is not nil.
func (nc *NotificationCreate) SetNillableSourceImage(s *string) *NotificationCreate {
	if s != nil {
		nc.SetSourceImage(*s)
	}
	return nc
}

// SetReceiveIds sets the "receive_ids" field.
func (nc *NotificationCreate) SetReceiveIds(i []int64) *NotificationCreate {
	nc.mutation.SetReceiveIds(i)
	return nc
}

// SetScheduledTime sets the "scheduled_time" field.
func (nc *NotificationCreate) SetScheduledTime(t time.Time) *NotificationCreate {
	nc.mutation.SetScheduledTime(t)
	return nc
}

// SetNillableScheduledTime sets the "scheduled_time" field if the given value is not nil.
func (nc *NotificationCreate) SetNillableScheduledTime(t *time.Time) *NotificationCreate {
	if t != nil {
		nc.SetScheduledTime(*t)
	}
	return nc
}

// SetID sets the "id" field.
func (nc *NotificationCreate) SetID(i int64) *NotificationCreate {
	nc.mutation.SetID(i)
	return nc
}

// AddNotificationUserIDs adds the "notification_users" edge to the NotificationUser entity by IDs.
func (nc *NotificationCreate) AddNotificationUserIDs(ids ...int64) *NotificationCreate {
	nc.mutation.AddNotificationUserIDs(ids...)
	return nc
}

// AddNotificationUsers adds the "notification_users" edges to the NotificationUser entity.
func (nc *NotificationCreate) AddNotificationUsers(n ...*NotificationUser) *NotificationCreate {
	ids := make([]int64, len(n))
	for i := range n {
		ids[i] = n[i].ID
	}
	return nc.AddNotificationUserIDs(ids...)
}

// Mutation returns the NotificationMutation object of the builder.
func (nc *NotificationCreate) Mutation() *NotificationMutation {
	return nc.mutation
}

// Save creates the Notification in the database.
func (nc *NotificationCreate) Save(ctx context.Context) (*Notification, error) {
	nc.defaults()
	return withHooks[*Notification, NotificationMutation](ctx, nc.sqlSave, nc.mutation, nc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (nc *NotificationCreate) SaveX(ctx context.Context) *Notification {
	v, err := nc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (nc *NotificationCreate) Exec(ctx context.Context) error {
	_, err := nc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (nc *NotificationCreate) ExecX(ctx context.Context) {
	if err := nc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (nc *NotificationCreate) defaults() {
	if _, ok := nc.mutation.SourceImage(); !ok {
		v := notification.DefaultSourceImage
		nc.mutation.SetSourceImage(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (nc *NotificationCreate) check() error {
	if _, ok := nc.mutation.SourceImage(); !ok {
		return &ValidationError{Name: "source_image", err: errors.New(`ent: missing required field "Notification.source_image"`)}
	}
	return nil
}

func (nc *NotificationCreate) sqlSave(ctx context.Context) (*Notification, error) {
	if err := nc.check(); err != nil {
		return nil, err
	}
	_node, _spec := nc.createSpec()
	if err := sqlgraph.CreateNode(ctx, nc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	nc.mutation.id = &_node.ID
	nc.mutation.done = true
	return _node, nil
}

func (nc *NotificationCreate) createSpec() (*Notification, *sqlgraph.CreateSpec) {
	var (
		_node = &Notification{config: nc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: notification.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notification.FieldID,
			},
		}
	)
	if id, ok := nc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := nc.mutation.Message(); ok {
		_spec.SetField(notification.FieldMessage, field.TypeString, value)
		_node.Message = value
	}
	if value, ok := nc.mutation.SourceType(); ok {
		_spec.SetField(notification.FieldSourceType, field.TypeInt64, value)
		_node.SourceType = value
	}
	if value, ok := nc.mutation.SourceID(); ok {
		_spec.SetField(notification.FieldSourceID, field.TypeInt64, value)
		_node.SourceID = value
	}
	if value, ok := nc.mutation.SourceImage(); ok {
		_spec.SetField(notification.FieldSourceImage, field.TypeString, value)
		_node.SourceImage = value
	}
	if value, ok := nc.mutation.ReceiveIds(); ok {
		_spec.SetField(notification.FieldReceiveIds, field.TypeJSON, value)
		_node.ReceiveIds = value
	}
	if value, ok := nc.mutation.ScheduledTime(); ok {
		_spec.SetField(notification.FieldScheduledTime, field.TypeTime, value)
		_node.ScheduledTime = value
	}
	if nodes := nc.mutation.NotificationUsersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   notification.NotificationUsersTable,
			Columns: []string{notification.NotificationUsersColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: notificationuser.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// NotificationCreateBulk is the builder for creating many Notification entities in bulk.
type NotificationCreateBulk struct {
	config
	builders []*NotificationCreate
}

// Save creates the Notification entities in the database.
func (ncb *NotificationCreateBulk) Save(ctx context.Context) ([]*Notification, error) {
	specs := make([]*sqlgraph.CreateSpec, len(ncb.builders))
	nodes := make([]*Notification, len(ncb.builders))
	mutators := make([]Mutator, len(ncb.builders))
	for i := range ncb.builders {
		func(i int, root context.Context) {
			builder := ncb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*NotificationMutation)
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
					_, err = mutators[i+1].Mutate(root, ncb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, ncb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, ncb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (ncb *NotificationCreateBulk) SaveX(ctx context.Context) []*Notification {
	v, err := ncb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ncb *NotificationCreateBulk) Exec(ctx context.Context) error {
	_, err := ncb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ncb *NotificationCreateBulk) ExecX(ctx context.Context) {
	if err := ncb.Exec(ctx); err != nil {
		panic(err)
	}
}
