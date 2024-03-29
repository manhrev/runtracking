// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/participate"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
)

// ParticipateDelete is the builder for deleting a Participate entity.
type ParticipateDelete struct {
	config
	hooks    []Hook
	mutation *ParticipateMutation
}

// Where appends a list predicates to the ParticipateDelete builder.
func (pd *ParticipateDelete) Where(ps ...predicate.Participate) *ParticipateDelete {
	pd.mutation.Where(ps...)
	return pd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (pd *ParticipateDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, ParticipateMutation](ctx, pd.sqlExec, pd.mutation, pd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (pd *ParticipateDelete) ExecX(ctx context.Context) int {
	n, err := pd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (pd *ParticipateDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(participate.Table, nil)
	if ps := pd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, pd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	pd.mutation.done = true
	return affected, err
}

// ParticipateDeleteOne is the builder for deleting a single Participate entity.
type ParticipateDeleteOne struct {
	pd *ParticipateDelete
}

// Where appends a list predicates to the ParticipateDelete builder.
func (pdo *ParticipateDeleteOne) Where(ps ...predicate.Participate) *ParticipateDeleteOne {
	pdo.pd.mutation.Where(ps...)
	return pdo
}

// Exec executes the deletion query.
func (pdo *ParticipateDeleteOne) Exec(ctx context.Context) error {
	n, err := pdo.pd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{participate.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (pdo *ParticipateDeleteOne) ExecX(ctx context.Context) {
	if err := pdo.Exec(ctx); err != nil {
		panic(err)
	}
}
