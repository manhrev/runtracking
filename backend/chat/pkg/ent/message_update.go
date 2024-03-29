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
	"github.com/manhrev/runtracking/backend/chat/pkg/ent/message"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent/predicate"
)

// MessageUpdate is the builder for updating Message entities.
type MessageUpdate struct {
	config
	hooks     []Hook
	mutation  *MessageMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the MessageUpdate builder.
func (mu *MessageUpdate) Where(ps ...predicate.Message) *MessageUpdate {
	mu.mutation.Where(ps...)
	return mu
}

// SetFromUserID sets the "from_user_id" field.
func (mu *MessageUpdate) SetFromUserID(i int64) *MessageUpdate {
	mu.mutation.ResetFromUserID()
	mu.mutation.SetFromUserID(i)
	return mu
}

// AddFromUserID adds i to the "from_user_id" field.
func (mu *MessageUpdate) AddFromUserID(i int64) *MessageUpdate {
	mu.mutation.AddFromUserID(i)
	return mu
}

// SetToUserID sets the "to_user_id" field.
func (mu *MessageUpdate) SetToUserID(i int64) *MessageUpdate {
	mu.mutation.ResetToUserID()
	mu.mutation.SetToUserID(i)
	return mu
}

// AddToUserID adds i to the "to_user_id" field.
func (mu *MessageUpdate) AddToUserID(i int64) *MessageUpdate {
	mu.mutation.AddToUserID(i)
	return mu
}

// SetMessage sets the "message" field.
func (mu *MessageUpdate) SetMessage(s string) *MessageUpdate {
	mu.mutation.SetMessage(s)
	return mu
}

// SetNillableMessage sets the "message" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableMessage(s *string) *MessageUpdate {
	if s != nil {
		mu.SetMessage(*s)
	}
	return mu
}

// ClearMessage clears the value of the "message" field.
func (mu *MessageUpdate) ClearMessage() *MessageUpdate {
	mu.mutation.ClearMessage()
	return mu
}

// SetIsSeenFromUserID sets the "is_seen_from_user_id" field.
func (mu *MessageUpdate) SetIsSeenFromUserID(b bool) *MessageUpdate {
	mu.mutation.SetIsSeenFromUserID(b)
	return mu
}

// SetNillableIsSeenFromUserID sets the "is_seen_from_user_id" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableIsSeenFromUserID(b *bool) *MessageUpdate {
	if b != nil {
		mu.SetIsSeenFromUserID(*b)
	}
	return mu
}

// SetIsSeenToUserID sets the "is_seen_to_user_id" field.
func (mu *MessageUpdate) SetIsSeenToUserID(b bool) *MessageUpdate {
	mu.mutation.SetIsSeenToUserID(b)
	return mu
}

// SetNillableIsSeenToUserID sets the "is_seen_to_user_id" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableIsSeenToUserID(b *bool) *MessageUpdate {
	if b != nil {
		mu.SetIsSeenToUserID(*b)
	}
	return mu
}

// SetSoftDeleteFromUserID sets the "soft_delete_from_user_id" field.
func (mu *MessageUpdate) SetSoftDeleteFromUserID(b bool) *MessageUpdate {
	mu.mutation.SetSoftDeleteFromUserID(b)
	return mu
}

// SetNillableSoftDeleteFromUserID sets the "soft_delete_from_user_id" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableSoftDeleteFromUserID(b *bool) *MessageUpdate {
	if b != nil {
		mu.SetSoftDeleteFromUserID(*b)
	}
	return mu
}

// SetSoftDeleteToUserID sets the "soft_delete_to_user_id" field.
func (mu *MessageUpdate) SetSoftDeleteToUserID(b bool) *MessageUpdate {
	mu.mutation.SetSoftDeleteToUserID(b)
	return mu
}

// SetNillableSoftDeleteToUserID sets the "soft_delete_to_user_id" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableSoftDeleteToUserID(b *bool) *MessageUpdate {
	if b != nil {
		mu.SetSoftDeleteToUserID(*b)
	}
	return mu
}

// SetCreatedAt sets the "created_at" field.
func (mu *MessageUpdate) SetCreatedAt(t time.Time) *MessageUpdate {
	mu.mutation.SetCreatedAt(t)
	return mu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (mu *MessageUpdate) SetNillableCreatedAt(t *time.Time) *MessageUpdate {
	if t != nil {
		mu.SetCreatedAt(*t)
	}
	return mu
}

// Mutation returns the MessageMutation object of the builder.
func (mu *MessageUpdate) Mutation() *MessageMutation {
	return mu.mutation
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (mu *MessageUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, MessageMutation](ctx, mu.sqlSave, mu.mutation, mu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (mu *MessageUpdate) SaveX(ctx context.Context) int {
	affected, err := mu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (mu *MessageUpdate) Exec(ctx context.Context) error {
	_, err := mu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (mu *MessageUpdate) ExecX(ctx context.Context) {
	if err := mu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (mu *MessageUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *MessageUpdate {
	mu.modifiers = append(mu.modifiers, modifiers...)
	return mu
}

func (mu *MessageUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := sqlgraph.NewUpdateSpec(message.Table, message.Columns, sqlgraph.NewFieldSpec(message.FieldID, field.TypeInt64))
	if ps := mu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := mu.mutation.FromUserID(); ok {
		_spec.SetField(message.FieldFromUserID, field.TypeInt64, value)
	}
	if value, ok := mu.mutation.AddedFromUserID(); ok {
		_spec.AddField(message.FieldFromUserID, field.TypeInt64, value)
	}
	if value, ok := mu.mutation.ToUserID(); ok {
		_spec.SetField(message.FieldToUserID, field.TypeInt64, value)
	}
	if value, ok := mu.mutation.AddedToUserID(); ok {
		_spec.AddField(message.FieldToUserID, field.TypeInt64, value)
	}
	if value, ok := mu.mutation.Message(); ok {
		_spec.SetField(message.FieldMessage, field.TypeString, value)
	}
	if mu.mutation.MessageCleared() {
		_spec.ClearField(message.FieldMessage, field.TypeString)
	}
	if value, ok := mu.mutation.IsSeenFromUserID(); ok {
		_spec.SetField(message.FieldIsSeenFromUserID, field.TypeBool, value)
	}
	if value, ok := mu.mutation.IsSeenToUserID(); ok {
		_spec.SetField(message.FieldIsSeenToUserID, field.TypeBool, value)
	}
	if value, ok := mu.mutation.SoftDeleteFromUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteFromUserID, field.TypeBool, value)
	}
	if value, ok := mu.mutation.SoftDeleteToUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteToUserID, field.TypeBool, value)
	}
	if value, ok := mu.mutation.CreatedAt(); ok {
		_spec.SetField(message.FieldCreatedAt, field.TypeTime, value)
	}
	_spec.AddModifiers(mu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, mu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{message.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	mu.mutation.done = true
	return n, nil
}

// MessageUpdateOne is the builder for updating a single Message entity.
type MessageUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *MessageMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetFromUserID sets the "from_user_id" field.
func (muo *MessageUpdateOne) SetFromUserID(i int64) *MessageUpdateOne {
	muo.mutation.ResetFromUserID()
	muo.mutation.SetFromUserID(i)
	return muo
}

// AddFromUserID adds i to the "from_user_id" field.
func (muo *MessageUpdateOne) AddFromUserID(i int64) *MessageUpdateOne {
	muo.mutation.AddFromUserID(i)
	return muo
}

// SetToUserID sets the "to_user_id" field.
func (muo *MessageUpdateOne) SetToUserID(i int64) *MessageUpdateOne {
	muo.mutation.ResetToUserID()
	muo.mutation.SetToUserID(i)
	return muo
}

// AddToUserID adds i to the "to_user_id" field.
func (muo *MessageUpdateOne) AddToUserID(i int64) *MessageUpdateOne {
	muo.mutation.AddToUserID(i)
	return muo
}

// SetMessage sets the "message" field.
func (muo *MessageUpdateOne) SetMessage(s string) *MessageUpdateOne {
	muo.mutation.SetMessage(s)
	return muo
}

// SetNillableMessage sets the "message" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableMessage(s *string) *MessageUpdateOne {
	if s != nil {
		muo.SetMessage(*s)
	}
	return muo
}

// ClearMessage clears the value of the "message" field.
func (muo *MessageUpdateOne) ClearMessage() *MessageUpdateOne {
	muo.mutation.ClearMessage()
	return muo
}

// SetIsSeenFromUserID sets the "is_seen_from_user_id" field.
func (muo *MessageUpdateOne) SetIsSeenFromUserID(b bool) *MessageUpdateOne {
	muo.mutation.SetIsSeenFromUserID(b)
	return muo
}

// SetNillableIsSeenFromUserID sets the "is_seen_from_user_id" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableIsSeenFromUserID(b *bool) *MessageUpdateOne {
	if b != nil {
		muo.SetIsSeenFromUserID(*b)
	}
	return muo
}

// SetIsSeenToUserID sets the "is_seen_to_user_id" field.
func (muo *MessageUpdateOne) SetIsSeenToUserID(b bool) *MessageUpdateOne {
	muo.mutation.SetIsSeenToUserID(b)
	return muo
}

// SetNillableIsSeenToUserID sets the "is_seen_to_user_id" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableIsSeenToUserID(b *bool) *MessageUpdateOne {
	if b != nil {
		muo.SetIsSeenToUserID(*b)
	}
	return muo
}

// SetSoftDeleteFromUserID sets the "soft_delete_from_user_id" field.
func (muo *MessageUpdateOne) SetSoftDeleteFromUserID(b bool) *MessageUpdateOne {
	muo.mutation.SetSoftDeleteFromUserID(b)
	return muo
}

// SetNillableSoftDeleteFromUserID sets the "soft_delete_from_user_id" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableSoftDeleteFromUserID(b *bool) *MessageUpdateOne {
	if b != nil {
		muo.SetSoftDeleteFromUserID(*b)
	}
	return muo
}

// SetSoftDeleteToUserID sets the "soft_delete_to_user_id" field.
func (muo *MessageUpdateOne) SetSoftDeleteToUserID(b bool) *MessageUpdateOne {
	muo.mutation.SetSoftDeleteToUserID(b)
	return muo
}

// SetNillableSoftDeleteToUserID sets the "soft_delete_to_user_id" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableSoftDeleteToUserID(b *bool) *MessageUpdateOne {
	if b != nil {
		muo.SetSoftDeleteToUserID(*b)
	}
	return muo
}

// SetCreatedAt sets the "created_at" field.
func (muo *MessageUpdateOne) SetCreatedAt(t time.Time) *MessageUpdateOne {
	muo.mutation.SetCreatedAt(t)
	return muo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (muo *MessageUpdateOne) SetNillableCreatedAt(t *time.Time) *MessageUpdateOne {
	if t != nil {
		muo.SetCreatedAt(*t)
	}
	return muo
}

// Mutation returns the MessageMutation object of the builder.
func (muo *MessageUpdateOne) Mutation() *MessageMutation {
	return muo.mutation
}

// Where appends a list predicates to the MessageUpdate builder.
func (muo *MessageUpdateOne) Where(ps ...predicate.Message) *MessageUpdateOne {
	muo.mutation.Where(ps...)
	return muo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (muo *MessageUpdateOne) Select(field string, fields ...string) *MessageUpdateOne {
	muo.fields = append([]string{field}, fields...)
	return muo
}

// Save executes the query and returns the updated Message entity.
func (muo *MessageUpdateOne) Save(ctx context.Context) (*Message, error) {
	return withHooks[*Message, MessageMutation](ctx, muo.sqlSave, muo.mutation, muo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (muo *MessageUpdateOne) SaveX(ctx context.Context) *Message {
	node, err := muo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (muo *MessageUpdateOne) Exec(ctx context.Context) error {
	_, err := muo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (muo *MessageUpdateOne) ExecX(ctx context.Context) {
	if err := muo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (muo *MessageUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *MessageUpdateOne {
	muo.modifiers = append(muo.modifiers, modifiers...)
	return muo
}

func (muo *MessageUpdateOne) sqlSave(ctx context.Context) (_node *Message, err error) {
	_spec := sqlgraph.NewUpdateSpec(message.Table, message.Columns, sqlgraph.NewFieldSpec(message.FieldID, field.TypeInt64))
	id, ok := muo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Message.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := muo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, message.FieldID)
		for _, f := range fields {
			if !message.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != message.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := muo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := muo.mutation.FromUserID(); ok {
		_spec.SetField(message.FieldFromUserID, field.TypeInt64, value)
	}
	if value, ok := muo.mutation.AddedFromUserID(); ok {
		_spec.AddField(message.FieldFromUserID, field.TypeInt64, value)
	}
	if value, ok := muo.mutation.ToUserID(); ok {
		_spec.SetField(message.FieldToUserID, field.TypeInt64, value)
	}
	if value, ok := muo.mutation.AddedToUserID(); ok {
		_spec.AddField(message.FieldToUserID, field.TypeInt64, value)
	}
	if value, ok := muo.mutation.Message(); ok {
		_spec.SetField(message.FieldMessage, field.TypeString, value)
	}
	if muo.mutation.MessageCleared() {
		_spec.ClearField(message.FieldMessage, field.TypeString)
	}
	if value, ok := muo.mutation.IsSeenFromUserID(); ok {
		_spec.SetField(message.FieldIsSeenFromUserID, field.TypeBool, value)
	}
	if value, ok := muo.mutation.IsSeenToUserID(); ok {
		_spec.SetField(message.FieldIsSeenToUserID, field.TypeBool, value)
	}
	if value, ok := muo.mutation.SoftDeleteFromUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteFromUserID, field.TypeBool, value)
	}
	if value, ok := muo.mutation.SoftDeleteToUserID(); ok {
		_spec.SetField(message.FieldSoftDeleteToUserID, field.TypeBool, value)
	}
	if value, ok := muo.mutation.CreatedAt(); ok {
		_spec.SetField(message.FieldCreatedAt, field.TypeTime, value)
	}
	_spec.AddModifiers(muo.modifiers...)
	_node = &Message{config: muo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, muo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{message.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	muo.mutation.done = true
	return _node, nil
}
