// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// NotificationUserDelete is the builder for deleting a NotificationUser entity.
type NotificationUserDelete struct {
	config
	hooks    []Hook
	mutation *NotificationUserMutation
}

// Where appends a list predicates to the NotificationUserDelete builder.
func (nud *NotificationUserDelete) Where(ps ...predicate.NotificationUser) *NotificationUserDelete {
	nud.mutation.Where(ps...)
	return nud
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (nud *NotificationUserDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, NotificationUserMutation](ctx, nud.sqlExec, nud.mutation, nud.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (nud *NotificationUserDelete) ExecX(ctx context.Context) int {
	n, err := nud.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (nud *NotificationUserDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: notificationuser.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationuser.FieldID,
			},
		},
	}
	if ps := nud.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, nud.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	nud.mutation.done = true
	return affected, err
}

// NotificationUserDeleteOne is the builder for deleting a single NotificationUser entity.
type NotificationUserDeleteOne struct {
	nud *NotificationUserDelete
}

// Where appends a list predicates to the NotificationUserDelete builder.
func (nudo *NotificationUserDeleteOne) Where(ps ...predicate.NotificationUser) *NotificationUserDeleteOne {
	nudo.nud.mutation.Where(ps...)
	return nudo
}

// Exec executes the deletion query.
func (nudo *NotificationUserDeleteOne) Exec(ctx context.Context) error {
	n, err := nudo.nud.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{notificationuser.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (nudo *NotificationUserDeleteOne) ExecX(ctx context.Context) {
	if err := nudo.Exec(ctx); err != nil {
		panic(err)
	}
}
