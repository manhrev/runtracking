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
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// NotificationUserUpdate is the builder for updating NotificationUser entities.
type NotificationUserUpdate struct {
	config
	hooks     []Hook
	mutation  *NotificationUserMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the NotificationUserUpdate builder.
func (nuu *NotificationUserUpdate) Where(ps ...predicate.NotificationUser) *NotificationUserUpdate {
	nuu.mutation.Where(ps...)
	return nuu
}

// SetUserID sets the "user_id" field.
func (nuu *NotificationUserUpdate) SetUserID(i int64) *NotificationUserUpdate {
	nuu.mutation.ResetUserID()
	nuu.mutation.SetUserID(i)
	return nuu
}

// AddUserID adds i to the "user_id" field.
func (nuu *NotificationUserUpdate) AddUserID(i int64) *NotificationUserUpdate {
	nuu.mutation.AddUserID(i)
	return nuu
}

// SetIsSeen sets the "is_seen" field.
func (nuu *NotificationUserUpdate) SetIsSeen(b bool) *NotificationUserUpdate {
	nuu.mutation.SetIsSeen(b)
	return nuu
}

// SetNillableIsSeen sets the "is_seen" field if the given value is not nil.
func (nuu *NotificationUserUpdate) SetNillableIsSeen(b *bool) *NotificationUserUpdate {
	if b != nil {
		nuu.SetIsSeen(*b)
	}
	return nuu
}

// ClearIsSeen clears the value of the "is_seen" field.
func (nuu *NotificationUserUpdate) ClearIsSeen() *NotificationUserUpdate {
	nuu.mutation.ClearIsSeen()
	return nuu
}

// SetCreatedAt sets the "created_at" field.
func (nuu *NotificationUserUpdate) SetCreatedAt(t time.Time) *NotificationUserUpdate {
	nuu.mutation.SetCreatedAt(t)
	return nuu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (nuu *NotificationUserUpdate) SetNillableCreatedAt(t *time.Time) *NotificationUserUpdate {
	if t != nil {
		nuu.SetCreatedAt(*t)
	}
	return nuu
}

// SetNotificationID sets the "notification" edge to the Notification entity by ID.
func (nuu *NotificationUserUpdate) SetNotificationID(id int64) *NotificationUserUpdate {
	nuu.mutation.SetNotificationID(id)
	return nuu
}

// SetNillableNotificationID sets the "notification" edge to the Notification entity by ID if the given value is not nil.
func (nuu *NotificationUserUpdate) SetNillableNotificationID(id *int64) *NotificationUserUpdate {
	if id != nil {
		nuu = nuu.SetNotificationID(*id)
	}
	return nuu
}

// SetNotification sets the "notification" edge to the Notification entity.
func (nuu *NotificationUserUpdate) SetNotification(n *Notification) *NotificationUserUpdate {
	return nuu.SetNotificationID(n.ID)
}

// Mutation returns the NotificationUserMutation object of the builder.
func (nuu *NotificationUserUpdate) Mutation() *NotificationUserMutation {
	return nuu.mutation
}

// ClearNotification clears the "notification" edge to the Notification entity.
func (nuu *NotificationUserUpdate) ClearNotification() *NotificationUserUpdate {
	nuu.mutation.ClearNotification()
	return nuu
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (nuu *NotificationUserUpdate) Save(ctx context.Context) (int, error) {
	return withHooks[int, NotificationUserMutation](ctx, nuu.sqlSave, nuu.mutation, nuu.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (nuu *NotificationUserUpdate) SaveX(ctx context.Context) int {
	affected, err := nuu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (nuu *NotificationUserUpdate) Exec(ctx context.Context) error {
	_, err := nuu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (nuu *NotificationUserUpdate) ExecX(ctx context.Context) {
	if err := nuu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (nuu *NotificationUserUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *NotificationUserUpdate {
	nuu.modifiers = append(nuu.modifiers, modifiers...)
	return nuu
}

func (nuu *NotificationUserUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   notificationuser.Table,
			Columns: notificationuser.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationuser.FieldID,
			},
		},
	}
	if ps := nuu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := nuu.mutation.UserID(); ok {
		_spec.SetField(notificationuser.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := nuu.mutation.AddedUserID(); ok {
		_spec.AddField(notificationuser.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := nuu.mutation.IsSeen(); ok {
		_spec.SetField(notificationuser.FieldIsSeen, field.TypeBool, value)
	}
	if nuu.mutation.IsSeenCleared() {
		_spec.ClearField(notificationuser.FieldIsSeen, field.TypeBool)
	}
	if value, ok := nuu.mutation.CreatedAt(); ok {
		_spec.SetField(notificationuser.FieldCreatedAt, field.TypeTime, value)
	}
	if nuu.mutation.NotificationCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   notificationuser.NotificationTable,
			Columns: []string{notificationuser.NotificationColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: notification.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := nuu.mutation.NotificationIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   notificationuser.NotificationTable,
			Columns: []string{notificationuser.NotificationColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: notification.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(nuu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, nuu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{notificationuser.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	nuu.mutation.done = true
	return n, nil
}

// NotificationUserUpdateOne is the builder for updating a single NotificationUser entity.
type NotificationUserUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *NotificationUserMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetUserID sets the "user_id" field.
func (nuuo *NotificationUserUpdateOne) SetUserID(i int64) *NotificationUserUpdateOne {
	nuuo.mutation.ResetUserID()
	nuuo.mutation.SetUserID(i)
	return nuuo
}

// AddUserID adds i to the "user_id" field.
func (nuuo *NotificationUserUpdateOne) AddUserID(i int64) *NotificationUserUpdateOne {
	nuuo.mutation.AddUserID(i)
	return nuuo
}

// SetIsSeen sets the "is_seen" field.
func (nuuo *NotificationUserUpdateOne) SetIsSeen(b bool) *NotificationUserUpdateOne {
	nuuo.mutation.SetIsSeen(b)
	return nuuo
}

// SetNillableIsSeen sets the "is_seen" field if the given value is not nil.
func (nuuo *NotificationUserUpdateOne) SetNillableIsSeen(b *bool) *NotificationUserUpdateOne {
	if b != nil {
		nuuo.SetIsSeen(*b)
	}
	return nuuo
}

// ClearIsSeen clears the value of the "is_seen" field.
func (nuuo *NotificationUserUpdateOne) ClearIsSeen() *NotificationUserUpdateOne {
	nuuo.mutation.ClearIsSeen()
	return nuuo
}

// SetCreatedAt sets the "created_at" field.
func (nuuo *NotificationUserUpdateOne) SetCreatedAt(t time.Time) *NotificationUserUpdateOne {
	nuuo.mutation.SetCreatedAt(t)
	return nuuo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (nuuo *NotificationUserUpdateOne) SetNillableCreatedAt(t *time.Time) *NotificationUserUpdateOne {
	if t != nil {
		nuuo.SetCreatedAt(*t)
	}
	return nuuo
}

// SetNotificationID sets the "notification" edge to the Notification entity by ID.
func (nuuo *NotificationUserUpdateOne) SetNotificationID(id int64) *NotificationUserUpdateOne {
	nuuo.mutation.SetNotificationID(id)
	return nuuo
}

// SetNillableNotificationID sets the "notification" edge to the Notification entity by ID if the given value is not nil.
func (nuuo *NotificationUserUpdateOne) SetNillableNotificationID(id *int64) *NotificationUserUpdateOne {
	if id != nil {
		nuuo = nuuo.SetNotificationID(*id)
	}
	return nuuo
}

// SetNotification sets the "notification" edge to the Notification entity.
func (nuuo *NotificationUserUpdateOne) SetNotification(n *Notification) *NotificationUserUpdateOne {
	return nuuo.SetNotificationID(n.ID)
}

// Mutation returns the NotificationUserMutation object of the builder.
func (nuuo *NotificationUserUpdateOne) Mutation() *NotificationUserMutation {
	return nuuo.mutation
}

// ClearNotification clears the "notification" edge to the Notification entity.
func (nuuo *NotificationUserUpdateOne) ClearNotification() *NotificationUserUpdateOne {
	nuuo.mutation.ClearNotification()
	return nuuo
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (nuuo *NotificationUserUpdateOne) Select(field string, fields ...string) *NotificationUserUpdateOne {
	nuuo.fields = append([]string{field}, fields...)
	return nuuo
}

// Save executes the query and returns the updated NotificationUser entity.
func (nuuo *NotificationUserUpdateOne) Save(ctx context.Context) (*NotificationUser, error) {
	return withHooks[*NotificationUser, NotificationUserMutation](ctx, nuuo.sqlSave, nuuo.mutation, nuuo.hooks)
}

// SaveX is like Save, but panics if an error occurs.
func (nuuo *NotificationUserUpdateOne) SaveX(ctx context.Context) *NotificationUser {
	node, err := nuuo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (nuuo *NotificationUserUpdateOne) Exec(ctx context.Context) error {
	_, err := nuuo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (nuuo *NotificationUserUpdateOne) ExecX(ctx context.Context) {
	if err := nuuo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (nuuo *NotificationUserUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *NotificationUserUpdateOne {
	nuuo.modifiers = append(nuuo.modifiers, modifiers...)
	return nuuo
}

func (nuuo *NotificationUserUpdateOne) sqlSave(ctx context.Context) (_node *NotificationUser, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   notificationuser.Table,
			Columns: notificationuser.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationuser.FieldID,
			},
		},
	}
	id, ok := nuuo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "NotificationUser.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := nuuo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, notificationuser.FieldID)
		for _, f := range fields {
			if !notificationuser.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != notificationuser.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := nuuo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := nuuo.mutation.UserID(); ok {
		_spec.SetField(notificationuser.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := nuuo.mutation.AddedUserID(); ok {
		_spec.AddField(notificationuser.FieldUserID, field.TypeInt64, value)
	}
	if value, ok := nuuo.mutation.IsSeen(); ok {
		_spec.SetField(notificationuser.FieldIsSeen, field.TypeBool, value)
	}
	if nuuo.mutation.IsSeenCleared() {
		_spec.ClearField(notificationuser.FieldIsSeen, field.TypeBool)
	}
	if value, ok := nuuo.mutation.CreatedAt(); ok {
		_spec.SetField(notificationuser.FieldCreatedAt, field.TypeTime, value)
	}
	if nuuo.mutation.NotificationCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   notificationuser.NotificationTable,
			Columns: []string{notificationuser.NotificationColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: notification.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := nuuo.mutation.NotificationIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   notificationuser.NotificationTable,
			Columns: []string{notificationuser.NotificationColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: notification.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(nuuo.modifiers...)
	_node = &NotificationUser{config: nuuo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, nuuo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{notificationuser.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	nuuo.mutation.done = true
	return _node, nil
}
