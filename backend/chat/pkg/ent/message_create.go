// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent/message"
)

// MessageCreate is the builder for creating a Message entity.
type MessageCreate struct {
	config
	mutation *MessageMutation
	hooks    []Hook
}

// SetFromUserID sets the "from_user_id" field.
func (mc *MessageCreate) SetFromUserID(i int64) *MessageCreate {
	mc.mutation.SetFromUserID(i)
	return mc
}

// SetToUserID sets the "to_user_id" field.
func (mc *MessageCreate) SetToUserID(i int64) *MessageCreate {
	mc.mutation.SetToUserID(i)
	return mc
}

// SetMessage sets the "message" field.
func (mc *MessageCreate) SetMessage(s string) *MessageCreate {
	mc.mutation.SetMessage(s)
	return mc
}

// SetNillableMessage sets the "message" field if the given value is not nil.
func (mc *MessageCreate) SetNillableMessage(s *string) *MessageCreate {
	if s != nil {
		mc.SetMessage(*s)
	}
	return mc
}

// SetIsSeenFromUserID sets the "is_seen_from_user_id" field.
func (mc *MessageCreate) SetIsSeenFromUserID(b bool) *MessageCreate {
	mc.mutation.SetIsSeenFromUserID(b)
	return mc
}

// SetNillableIsSeenFromUserID sets the "is_seen_from_user_id" field if the given value is not nil.
func (mc *MessageCreate) SetNillableIsSeenFromUserID(b *bool) *MessageCreate {
	if b != nil {
		mc.SetIsSeenFromUserID(*b)
	}
	return mc
}

// SetIsSeenToUserID sets the "is_seen_to_user_id" field.
func (mc *MessageCreate) SetIsSeenToUserID(b bool) *MessageCreate {
	mc.mutation.SetIsSeenToUserID(b)
	return mc
}

// SetNillableIsSeenToUserID sets the "is_seen_to_user_id" field if the given value is not nil.
func (mc *MessageCreate) SetNillableIsSeenToUserID(b *bool) *MessageCreate {
	if b != nil {
		mc.SetIsSeenToUserID(*b)
	}
	return mc
}

// SetSoftDeleteFromUserID sets the "soft_delete_from_user_id" field.
func (mc *MessageCreate) SetSoftDeleteFromUserID(b bool) *MessageCreate {
	mc.mutation.SetSoftDeleteFromUserID(b)
	return mc
}

// SetNillableSoftDeleteFromUserID sets the "soft_delete_from_user_id" field if the given value is not nil.
func (mc *MessageCreate) SetNillableSoftDeleteFromUserID(b *bool) *MessageCreate {
	if b != nil {
		mc.SetSoftDeleteFromUserID(*b)
	}
	return mc
}

// SetSoftDeleteToUserID sets the "soft_delete_to_user_id" field.
func (mc *MessageCreate) SetSoftDeleteToUserID(b bool) *MessageCreate {
	mc.mutation.SetSoftDeleteToUserID(b)
	return mc
}

// SetNillableSoftDeleteToUserID sets the "soft_delete_to_user_id" field if the given value is not nil.
func (mc *MessageCreate) SetNillableSoftDeleteToUserID(b *bool) *MessageCreate {
	if b != nil {
		mc.SetSoftDeleteToUserID(*b)
	}
	return mc
}

// SetCreatedAt sets the "created_at" field.
func (mc *MessageCreate) SetCreatedAt(t time.Time) *MessageCreate {
	mc.mutation.SetCreatedAt(t)
	return mc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (mc *MessageCreate) SetNillableCreatedAt(t *time.Time) *MessageCreate {
	if t != nil {
		mc.SetCreatedAt(*t)
	}
	return mc
}

// SetID sets the "id" field.
func (mc *MessageCreate) SetID(i int64) *MessageCreate {
	mc.mutation.SetID(i)
	return mc
}

// Mutation returns the MessageMutation object of the builder.
func (mc *MessageCreate) Mutation() *MessageMutation {
	return mc.mutation
}

// Save creates the Message in the database.
func (mc *MessageCreate) Save(ctx context.Context) (*Message, error) {
	mc.defaults()
	return withHooks[*Message, MessageMutation](ctx, mc.sqlSave, mc.mutation, mc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (mc *MessageCreate) SaveX(ctx context.Context) *Message {
	v, err := mc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (mc *MessageCreate) Exec(ctx context.Context) error {
	_, err := mc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mc *MessageCreate) ExecX(ctx context.Context) {
	if err := mc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (mc *MessageCreate) defaults() {
	if _, ok := mc.mutation.IsSeenFromUserID(); !ok {
		v := message.DefaultIsSeenFromUserID
		mc.mutation.SetIsSeenFromUserID(v)
	}
	if _, ok := mc.mutation.IsSeenToUserID(); !ok {
		v := message.DefaultIsSeenToUserID
		mc.mutation.SetIsSeenToUserID(v)
	}
	if _, ok := mc.mutation.SoftDeleteFromUserID(); !ok {
		v := message.DefaultSoftDeleteFromUserID
		mc.mutation.SetSoftDeleteFromUserID(v)
	}
	if _, ok := mc.mutation.SoftDeleteToUserID(); !ok {
		v := message.DefaultSoftDeleteToUserID
		mc.mutation.SetSoftDeleteToUserID(v)
	}
	if _, ok := mc.mutation.CreatedAt(); !ok {
		v := message.DefaultCreatedAt()
		mc.mutation.SetCreatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (mc *MessageCreate) check() error {
	if _, ok := mc.mutation.FromUserID(); !ok {
		return &ValidationError{Name: "from_user_id", err: errors.New(`ent: missing required field "Message.from_user_id"`)}
	}
	if _, ok := mc.mutation.ToUserID(); !ok {
		return &ValidationError{Name: "to_user_id", err: errors.New(`ent: missing required field "Message.to_user_id"`)}
	}
	if _, ok := mc.mutation.IsSeenFromUserID(); !ok {
		return &ValidationError{Name: "is_seen_from_user_id", err: errors.New(`ent: missing required field "Message.is_seen_from_user_id"`)}
	}
	if _, ok := mc.mutation.IsSeenToUserID(); !ok {
		return &ValidationError{Name: "is_seen_to_user_id", err: errors.New(`ent: missing required field "Message.is_seen_to_user_id"`)}
	}
	if _, ok := mc.mutation.SoftDeleteFromUserID(); !ok {
		return &ValidationError{Name: "soft_delete_from_user_id", err: errors.New(`ent: missing required field "Message.soft_delete_from_user_id"`)}
	}
	if _, ok := mc.mutation.SoftDeleteToUserID(); !ok {
		return &ValidationError{Name: "soft_delete_to_user_id", err: errors.New(`ent: missing required field "Message.soft_delete_to_user_id"`)}
	}
	if _, ok := mc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "Message.created_at"`)}
	}
	return nil
}

func (mc *MessageCreate) sqlSave(ctx context.Context) (*Message, error) {
	if err := mc.check(); err != nil {
		return nil, err
	}
	_node, _spec := mc.createSpec()
	if err := sqlgraph.CreateNode(ctx, mc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	mc.mutation.id = &_node.ID
	mc.mutation.done = true
	return _node, nil
}

func (mc *MessageCreate) createSpec() (*Message, *sqlgraph.CreateSpec) {
	var (
		_node = &Message{config: mc.config}
		_spec = sqlgraph.NewCreateSpec(message.Table, sqlgraph.NewFieldSpec(message.FieldID, field.TypeInt64))
	)
	if id, ok := mc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := mc.mutation.FromUserID(); ok {
		_spec.SetField(message.FieldFromUserID, field.TypeInt64, value)
		_node.FromUserID = value
	}
	if value, ok := mc.mutation.ToUserID(); ok {
		_spec.SetField(message.FieldToUserID, field.TypeInt64, value)
		_node.ToUserID = value
	}
	if value, ok := mc.mutation.Message(); ok {
		_spec.SetField(message.FieldMessage, field.TypeString, value)
		_node.Message = value
	}
	if value, ok := mc.mutation.IsSeenFromUserID(); ok {
		_spec.SetField(message.FieldIsSeenFromUserID, field.TypeBool, value)
		_node.IsSeenFromUserID = value
	}
	if value, ok := mc.mutation.IsSeenToUserID(); ok {
		_spec.SetField(message.FieldIsSeenToUserID, field.TypeBool, value)
		_node.IsSeenToUserID = value
	}
	if value, ok := mc.mutation.SoftDeleteFromUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteFromUserID, field.TypeBool, value)
		_node.SoftDeleteFromUserID = value
	}
	if value, ok := mc.mutation.SoftDeleteToUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteToUserID, field.TypeBool, value)
		_node.SoftDeleteToUserID = value
	}
	if value, ok := mc.mutation.CreatedAt(); ok {
		_spec.SetField(message.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	return _node, _spec
}

// MessageCreateBulk is the builder for creating many Message entities in bulk.
type MessageCreateBulk struct {
	config
	builders []*MessageCreate
}

// Save creates the Message entities in the database.
func (mcb *MessageCreateBulk) Save(ctx context.Context) ([]*Message, error) {
	specs := make([]*sqlgraph.CreateSpec, len(mcb.builders))
	nodes := make([]*Message, len(mcb.builders))
	mutators := make([]Mutator, len(mcb.builders))
	for i := range mcb.builders {
		func(i int, root context.Context) {
			builder := mcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*MessageMutation)
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
					_, err = mutators[i+1].Mutate(root, mcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, mcb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, mcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (mcb *MessageCreateBulk) SaveX(ctx context.Context) []*Message {
	v, err := mcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (mcb *MessageCreateBulk) Exec(ctx context.Context) error {
	_, err := mcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mcb *MessageCreateBulk) ExecX(ctx context.Context) {
	if err := mcb.Exec(ctx); err != nil {
		panic(err)
	}
}