// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/predicate"
)

// GroupzProgressDelete is the builder for deleting a GroupzProgress entity.
type GroupzProgressDelete struct {
	config
	hooks    []Hook
	mutation *GroupzProgressMutation
}

// Where appends a list predicates to the GroupzProgressDelete builder.
func (gpd *GroupzProgressDelete) Where(ps ...predicate.GroupzProgress) *GroupzProgressDelete {
	gpd.mutation.Where(ps...)
	return gpd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (gpd *GroupzProgressDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, GroupzProgressMutation](ctx, gpd.sqlExec, gpd.mutation, gpd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (gpd *GroupzProgressDelete) ExecX(ctx context.Context) int {
	n, err := gpd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (gpd *GroupzProgressDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := sqlgraph.NewDeleteSpec(groupzprogress.Table, sqlgraph.NewFieldSpec(groupzprogress.FieldID, field.TypeInt64))
	if ps := gpd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, gpd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	gpd.mutation.done = true
	return affected, err
}

// GroupzProgressDeleteOne is the builder for deleting a single GroupzProgress entity.
type GroupzProgressDeleteOne struct {
	gpd *GroupzProgressDelete
}

// Where appends a list predicates to the GroupzProgressDelete builder.
func (gpdo *GroupzProgressDeleteOne) Where(ps ...predicate.GroupzProgress) *GroupzProgressDeleteOne {
	gpdo.gpd.mutation.Where(ps...)
	return gpdo
}

// Exec executes the deletion query.
func (gpdo *GroupzProgressDeleteOne) Exec(ctx context.Context) error {
	n, err := gpdo.gpd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{groupzprogress.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (gpdo *GroupzProgressDeleteOne) ExecX(ctx context.Context) {
	if err := gpdo.Exec(ctx); err != nil {
		panic(err)
	}
}