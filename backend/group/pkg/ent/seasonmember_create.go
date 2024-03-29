// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

// SeasonMemberCreate is the builder for creating a SeasonMember entity.
type SeasonMemberCreate struct {
	config
	mutation *SeasonMemberMutation
	hooks    []Hook
}

// SetPoint sets the "point" field.
func (smc *SeasonMemberCreate) SetPoint(i int64) *SeasonMemberCreate {
	smc.mutation.SetPoint(i)
	return smc
}

// SetNillablePoint sets the "point" field if the given value is not nil.
func (smc *SeasonMemberCreate) SetNillablePoint(i *int64) *SeasonMemberCreate {
	if i != nil {
		smc.SetPoint(*i)
	}
	return smc
}

// SetMemberID sets the "member_id" field.
func (smc *SeasonMemberCreate) SetMemberID(i int64) *SeasonMemberCreate {
	smc.mutation.SetMemberID(i)
	return smc
}

// SetSeasonID sets the "season_id" field.
func (smc *SeasonMemberCreate) SetSeasonID(i int64) *SeasonMemberCreate {
	smc.mutation.SetSeasonID(i)
	return smc
}

// SetCreatedAt sets the "created_at" field.
func (smc *SeasonMemberCreate) SetCreatedAt(t time.Time) *SeasonMemberCreate {
	smc.mutation.SetCreatedAt(t)
	return smc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (smc *SeasonMemberCreate) SetNillableCreatedAt(t *time.Time) *SeasonMemberCreate {
	if t != nil {
		smc.SetCreatedAt(*t)
	}
	return smc
}

// SetUpdatedAt sets the "updated_at" field.
func (smc *SeasonMemberCreate) SetUpdatedAt(t time.Time) *SeasonMemberCreate {
	smc.mutation.SetUpdatedAt(t)
	return smc
}

// SetNillableUpdatedAt sets the "updated_at" field if the given value is not nil.
func (smc *SeasonMemberCreate) SetNillableUpdatedAt(t *time.Time) *SeasonMemberCreate {
	if t != nil {
		smc.SetUpdatedAt(*t)
	}
	return smc
}

// SetCompletedChallengeCount sets the "completed_challenge_count" field.
func (smc *SeasonMemberCreate) SetCompletedChallengeCount(i int64) *SeasonMemberCreate {
	smc.mutation.SetCompletedChallengeCount(i)
	return smc
}

// SetNillableCompletedChallengeCount sets the "completed_challenge_count" field if the given value is not nil.
func (smc *SeasonMemberCreate) SetNillableCompletedChallengeCount(i *int64) *SeasonMemberCreate {
	if i != nil {
		smc.SetCompletedChallengeCount(*i)
	}
	return smc
}

// SetID sets the "id" field.
func (smc *SeasonMemberCreate) SetID(i int64) *SeasonMemberCreate {
	smc.mutation.SetID(i)
	return smc
}

// SetSeason sets the "season" edge to the Season entity.
func (smc *SeasonMemberCreate) SetSeason(s *Season) *SeasonMemberCreate {
	return smc.SetSeasonID(s.ID)
}

// SetMember sets the "member" edge to the Member entity.
func (smc *SeasonMemberCreate) SetMember(m *Member) *SeasonMemberCreate {
	return smc.SetMemberID(m.ID)
}

// Mutation returns the SeasonMemberMutation object of the builder.
func (smc *SeasonMemberCreate) Mutation() *SeasonMemberMutation {
	return smc.mutation
}

// Save creates the SeasonMember in the database.
func (smc *SeasonMemberCreate) Save(ctx context.Context) (*SeasonMember, error) {
	smc.defaults()
	return withHooks[*SeasonMember, SeasonMemberMutation](ctx, smc.sqlSave, smc.mutation, smc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (smc *SeasonMemberCreate) SaveX(ctx context.Context) *SeasonMember {
	v, err := smc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (smc *SeasonMemberCreate) Exec(ctx context.Context) error {
	_, err := smc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (smc *SeasonMemberCreate) ExecX(ctx context.Context) {
	if err := smc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (smc *SeasonMemberCreate) defaults() {
	if _, ok := smc.mutation.Point(); !ok {
		v := seasonmember.DefaultPoint
		smc.mutation.SetPoint(v)
	}
	if _, ok := smc.mutation.CreatedAt(); !ok {
		v := seasonmember.DefaultCreatedAt
		smc.mutation.SetCreatedAt(v)
	}
	if _, ok := smc.mutation.UpdatedAt(); !ok {
		v := seasonmember.DefaultUpdatedAt()
		smc.mutation.SetUpdatedAt(v)
	}
	if _, ok := smc.mutation.CompletedChallengeCount(); !ok {
		v := seasonmember.DefaultCompletedChallengeCount
		smc.mutation.SetCompletedChallengeCount(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (smc *SeasonMemberCreate) check() error {
	if _, ok := smc.mutation.Point(); !ok {
		return &ValidationError{Name: "point", err: errors.New(`ent: missing required field "SeasonMember.point"`)}
	}
	if _, ok := smc.mutation.MemberID(); !ok {
		return &ValidationError{Name: "member_id", err: errors.New(`ent: missing required field "SeasonMember.member_id"`)}
	}
	if _, ok := smc.mutation.SeasonID(); !ok {
		return &ValidationError{Name: "season_id", err: errors.New(`ent: missing required field "SeasonMember.season_id"`)}
	}
	if _, ok := smc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "SeasonMember.created_at"`)}
	}
	if _, ok := smc.mutation.UpdatedAt(); !ok {
		return &ValidationError{Name: "updated_at", err: errors.New(`ent: missing required field "SeasonMember.updated_at"`)}
	}
	if _, ok := smc.mutation.CompletedChallengeCount(); !ok {
		return &ValidationError{Name: "completed_challenge_count", err: errors.New(`ent: missing required field "SeasonMember.completed_challenge_count"`)}
	}
	if _, ok := smc.mutation.SeasonID(); !ok {
		return &ValidationError{Name: "season", err: errors.New(`ent: missing required edge "SeasonMember.season"`)}
	}
	if _, ok := smc.mutation.MemberID(); !ok {
		return &ValidationError{Name: "member", err: errors.New(`ent: missing required edge "SeasonMember.member"`)}
	}
	return nil
}

func (smc *SeasonMemberCreate) sqlSave(ctx context.Context) (*SeasonMember, error) {
	if err := smc.check(); err != nil {
		return nil, err
	}
	_node, _spec := smc.createSpec()
	if err := sqlgraph.CreateNode(ctx, smc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	smc.mutation.id = &_node.ID
	smc.mutation.done = true
	return _node, nil
}

func (smc *SeasonMemberCreate) createSpec() (*SeasonMember, *sqlgraph.CreateSpec) {
	var (
		_node = &SeasonMember{config: smc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: seasonmember.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: seasonmember.FieldID,
			},
		}
	)
	if id, ok := smc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := smc.mutation.Point(); ok {
		_spec.SetField(seasonmember.FieldPoint, field.TypeInt64, value)
		_node.Point = value
	}
	if value, ok := smc.mutation.CreatedAt(); ok {
		_spec.SetField(seasonmember.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	if value, ok := smc.mutation.UpdatedAt(); ok {
		_spec.SetField(seasonmember.FieldUpdatedAt, field.TypeTime, value)
		_node.UpdatedAt = value
	}
	if value, ok := smc.mutation.CompletedChallengeCount(); ok {
		_spec.SetField(seasonmember.FieldCompletedChallengeCount, field.TypeInt64, value)
		_node.CompletedChallengeCount = value
	}
	if nodes := smc.mutation.SeasonIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   seasonmember.SeasonTable,
			Columns: []string{seasonmember.SeasonColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: season.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.SeasonID = nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := smc.mutation.MemberIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   seasonmember.MemberTable,
			Columns: []string{seasonmember.MemberColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: member.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.MemberID = nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// SeasonMemberCreateBulk is the builder for creating many SeasonMember entities in bulk.
type SeasonMemberCreateBulk struct {
	config
	builders []*SeasonMemberCreate
}

// Save creates the SeasonMember entities in the database.
func (smcb *SeasonMemberCreateBulk) Save(ctx context.Context) ([]*SeasonMember, error) {
	specs := make([]*sqlgraph.CreateSpec, len(smcb.builders))
	nodes := make([]*SeasonMember, len(smcb.builders))
	mutators := make([]Mutator, len(smcb.builders))
	for i := range smcb.builders {
		func(i int, root context.Context) {
			builder := smcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*SeasonMemberMutation)
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
					_, err = mutators[i+1].Mutate(root, smcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, smcb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, smcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (smcb *SeasonMemberCreateBulk) SaveX(ctx context.Context) []*SeasonMember {
	v, err := smcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (smcb *SeasonMemberCreateBulk) Exec(ctx context.Context) error {
	_, err := smcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (smcb *SeasonMemberCreateBulk) ExecX(ctx context.Context) {
	if err := smcb.Exec(ctx); err != nil {
		panic(err)
	}
}
