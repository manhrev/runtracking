// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationtype"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// NotificationTypeDelete is the builder for deleting a NotificationType entity.
type NotificationTypeDelete struct {
	config
	hooks    []Hook
	mutation *NotificationTypeMutation
}

// Where appends a list predicates to the NotificationTypeDelete builder.
func (ntd *NotificationTypeDelete) Where(ps ...predicate.NotificationType) *NotificationTypeDelete {
	ntd.mutation.Where(ps...)
	return ntd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (ntd *NotificationTypeDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, NotificationTypeMutation](ctx, ntd.sqlExec, ntd.mutation, ntd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (ntd *NotificationTypeDelete) ExecX(ctx context.Context) int {
	n, err := ntd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (ntd *NotificationTypeDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: notificationtype.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationtype.FieldID,
			},
		},
	}
	if ps := ntd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, ntd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	ntd.mutation.done = true
	return affected, err
}

// NotificationTypeDeleteOne is the builder for deleting a single NotificationType entity.
type NotificationTypeDeleteOne struct {
	ntd *NotificationTypeDelete
}

// Where appends a list predicates to the NotificationTypeDelete builder.
func (ntdo *NotificationTypeDeleteOne) Where(ps ...predicate.NotificationType) *NotificationTypeDeleteOne {
	ntdo.ntd.mutation.Where(ps...)
	return ntdo
}

// Exec executes the deletion query.
func (ntdo *NotificationTypeDeleteOne) Exec(ctx context.Context) error {
	n, err := ntdo.ntd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{notificationtype.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (ntdo *NotificationTypeDeleteOne) ExecX(ctx context.Context) {
	if err := ntdo.Exec(ctx); err != nil {
		panic(err)
	}
}
