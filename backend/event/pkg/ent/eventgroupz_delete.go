// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
)

// EventGroupzDelete is the builder for deleting a EventGroupz entity.
type EventGroupzDelete struct {
	config
	hooks    []Hook
	mutation *EventGroupzMutation
}

// Where appends a list predicates to the EventGroupzDelete builder.
func (egd *EventGroupzDelete) Where(ps ...predicate.EventGroupz) *EventGroupzDelete {
	egd.mutation.Where(ps...)
	return egd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (egd *EventGroupzDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, EventGroupzMutation](ctx, egd.sqlExec, egd.mutation, egd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (egd *EventGroupzDelete) ExecX(ctx context.Context) int {
	n, err := egd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (egd *EventGroupzDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(eventgroupz.Table, sqlgraph.NewFieldSpec(eventgroupz.FieldID, field.TypeInt64))
	if ps := egd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, egd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	egd.mutation.done = true
	return affected, err
}

// EventGroupzDeleteOne is the builder for deleting a single EventGroupz entity.
type EventGroupzDeleteOne struct {
	egd *EventGroupzDelete
}

// Where appends a list predicates to the EventGroupzDelete builder.
func (egdo *EventGroupzDeleteOne) Where(ps ...predicate.EventGroupz) *EventGroupzDeleteOne {
	egdo.egd.mutation.Where(ps...)
	return egdo
}

// Exec executes the deletion query.
func (egdo *EventGroupzDeleteOne) Exec(ctx context.Context) error {
	n, err := egdo.egd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{eventgroupz.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (egdo *EventGroupzDeleteOne) ExecX(ctx context.Context) {
	if err := egdo.Exec(ctx); err != nil {
		panic(err)
	}
}
