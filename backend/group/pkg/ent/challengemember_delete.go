// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ChallengeMemberDelete is the builder for deleting a ChallengeMember entity.
type ChallengeMemberDelete struct {
	config
	hooks    []Hook
	mutation *ChallengeMemberMutation
}

// Where appends a list predicates to the ChallengeMemberDelete builder.
func (cmd *ChallengeMemberDelete) Where(ps ...predicate.ChallengeMember) *ChallengeMemberDelete {
	cmd.mutation.Where(ps...)
	return cmd
}

// Exec executes the deletion query and returns how many vertices were deleted.
func (cmd *ChallengeMemberDelete) Exec(ctx context.Context) (int, error) {
	return withHooks[int, ChallengeMemberMutation](ctx, cmd.sqlExec, cmd.mutation, cmd.hooks)
}

// ExecX is like Exec, but panics if an error occurs.
func (cmd *ChallengeMemberDelete) ExecX(ctx context.Context) int {
	n, err := cmd.Exec(ctx)
	if err != nil {
		panic(err)
	}
	return n
}

func (cmd *ChallengeMemberDelete) sqlExec(ctx context.Context) (int, error) {
	_spec := &sqlgraph.DeleteSpec{
		Node: &sqlgraph.NodeSpec{
			Table: challengemember.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challengemember.FieldID,
			},
		},
	}
	if ps := cmd.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	affected, err := sqlgraph.DeleteNodes(ctx, cmd.driver, _spec)
	if err != nil && sqlgraph.IsConstraintError(err) {
		err = &ConstraintError{msg: err.Error(), wrap: err}
	}
	cmd.mutation.done = true
	return affected, err
}

// ChallengeMemberDeleteOne is the builder for deleting a single ChallengeMember entity.
type ChallengeMemberDeleteOne struct {
	cmd *ChallengeMemberDelete
}

// Where appends a list predicates to the ChallengeMemberDelete builder.
func (cmdo *ChallengeMemberDeleteOne) Where(ps ...predicate.ChallengeMember) *ChallengeMemberDeleteOne {
	cmdo.cmd.mutation.Where(ps...)
	return cmdo
}

// Exec executes the deletion query.
func (cmdo *ChallengeMemberDeleteOne) Exec(ctx context.Context) error {
	n, err := cmdo.cmd.Exec(ctx)
	switch {
	case err != nil:
		return err
	case n == 0:
		return &NotFoundError{challengemember.Label}
	default:
		return nil
	}
}

// ExecX is like Exec, but panics if an error occurs.
func (cmdo *ChallengeMemberDeleteOne) ExecX(ctx context.Context) {
	if err := cmdo.Exec(ctx); err != nil {
		panic(err)
	}
}
