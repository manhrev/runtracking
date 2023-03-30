// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
)

// ChallengeRuleCreate is the builder for creating a ChallengeRule entity.
type ChallengeRuleCreate struct {
	config
	mutation *ChallengeRuleMutation
	hooks    []Hook
}

// SetGoal sets the "goal" field.
func (crc *ChallengeRuleCreate) SetGoal(i int64) *ChallengeRuleCreate {
	crc.mutation.SetGoal(i)
	return crc
}

// SetNillableGoal sets the "goal" field if the given value is not nil.
func (crc *ChallengeRuleCreate) SetNillableGoal(i *int64) *ChallengeRuleCreate {
	if i != nil {
		crc.SetGoal(*i)
	}
	return crc
}

// SetRuleID sets the "rule_id" field.
func (crc *ChallengeRuleCreate) SetRuleID(i int64) *ChallengeRuleCreate {
	crc.mutation.SetRuleID(i)
	return crc
}

// SetCreatedAt sets the "created_at" field.
func (crc *ChallengeRuleCreate) SetCreatedAt(t time.Time) *ChallengeRuleCreate {
	crc.mutation.SetCreatedAt(t)
	return crc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (crc *ChallengeRuleCreate) SetNillableCreatedAt(t *time.Time) *ChallengeRuleCreate {
	if t != nil {
		crc.SetCreatedAt(*t)
	}
	return crc
}

// SetID sets the "id" field.
func (crc *ChallengeRuleCreate) SetID(i int64) *ChallengeRuleCreate {
	crc.mutation.SetID(i)
	return crc
}

// AddChallengeMemberRuleIDs adds the "challenge_member_rules" edge to the ChallengeMemberRule entity by IDs.
func (crc *ChallengeRuleCreate) AddChallengeMemberRuleIDs(ids ...int64) *ChallengeRuleCreate {
	crc.mutation.AddChallengeMemberRuleIDs(ids...)
	return crc
}

// AddChallengeMemberRules adds the "challenge_member_rules" edges to the ChallengeMemberRule entity.
func (crc *ChallengeRuleCreate) AddChallengeMemberRules(c ...*ChallengeMemberRule) *ChallengeRuleCreate {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return crc.AddChallengeMemberRuleIDs(ids...)
}

// SetChallengeID sets the "challenge" edge to the Challenge entity by ID.
func (crc *ChallengeRuleCreate) SetChallengeID(id int64) *ChallengeRuleCreate {
	crc.mutation.SetChallengeID(id)
	return crc
}

// SetNillableChallengeID sets the "challenge" edge to the Challenge entity by ID if the given value is not nil.
func (crc *ChallengeRuleCreate) SetNillableChallengeID(id *int64) *ChallengeRuleCreate {
	if id != nil {
		crc = crc.SetChallengeID(*id)
	}
	return crc
}

// SetChallenge sets the "challenge" edge to the Challenge entity.
func (crc *ChallengeRuleCreate) SetChallenge(c *Challenge) *ChallengeRuleCreate {
	return crc.SetChallengeID(c.ID)
}

// Mutation returns the ChallengeRuleMutation object of the builder.
func (crc *ChallengeRuleCreate) Mutation() *ChallengeRuleMutation {
	return crc.mutation
}

// Save creates the ChallengeRule in the database.
func (crc *ChallengeRuleCreate) Save(ctx context.Context) (*ChallengeRule, error) {
	crc.defaults()
	return withHooks[*ChallengeRule, ChallengeRuleMutation](ctx, crc.sqlSave, crc.mutation, crc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (crc *ChallengeRuleCreate) SaveX(ctx context.Context) *ChallengeRule {
	v, err := crc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (crc *ChallengeRuleCreate) Exec(ctx context.Context) error {
	_, err := crc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (crc *ChallengeRuleCreate) ExecX(ctx context.Context) {
	if err := crc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (crc *ChallengeRuleCreate) defaults() {
	if _, ok := crc.mutation.Goal(); !ok {
		v := challengerule.DefaultGoal
		crc.mutation.SetGoal(v)
	}
	if _, ok := crc.mutation.CreatedAt(); !ok {
		v := challengerule.DefaultCreatedAt
		crc.mutation.SetCreatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (crc *ChallengeRuleCreate) check() error {
	if _, ok := crc.mutation.Goal(); !ok {
		return &ValidationError{Name: "goal", err: errors.New(`ent: missing required field "ChallengeRule.goal"`)}
	}
	if _, ok := crc.mutation.RuleID(); !ok {
		return &ValidationError{Name: "rule_id", err: errors.New(`ent: missing required field "ChallengeRule.rule_id"`)}
	}
	if _, ok := crc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "ChallengeRule.created_at"`)}
	}
	return nil
}

func (crc *ChallengeRuleCreate) sqlSave(ctx context.Context) (*ChallengeRule, error) {
	if err := crc.check(); err != nil {
		return nil, err
	}
	_node, _spec := crc.createSpec()
	if err := sqlgraph.CreateNode(ctx, crc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	crc.mutation.id = &_node.ID
	crc.mutation.done = true
	return _node, nil
}

func (crc *ChallengeRuleCreate) createSpec() (*ChallengeRule, *sqlgraph.CreateSpec) {
	var (
		_node = &ChallengeRule{config: crc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: challengerule.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challengerule.FieldID,
			},
		}
	)
	if id, ok := crc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := crc.mutation.Goal(); ok {
		_spec.SetField(challengerule.FieldGoal, field.TypeInt64, value)
		_node.Goal = value
	}
	if value, ok := crc.mutation.RuleID(); ok {
		_spec.SetField(challengerule.FieldRuleID, field.TypeInt64, value)
		_node.RuleID = value
	}
	if value, ok := crc.mutation.CreatedAt(); ok {
		_spec.SetField(challengerule.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	if nodes := crc.mutation.ChallengeMemberRulesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   challengerule.ChallengeMemberRulesTable,
			Columns: []string{challengerule.ChallengeMemberRulesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengememberrule.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := crc.mutation.ChallengeIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challengerule.ChallengeTable,
			Columns: []string{challengerule.ChallengeColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challenge.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.challenge_challenge_rules = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// ChallengeRuleCreateBulk is the builder for creating many ChallengeRule entities in bulk.
type ChallengeRuleCreateBulk struct {
	config
	builders []*ChallengeRuleCreate
}

// Save creates the ChallengeRule entities in the database.
func (crcb *ChallengeRuleCreateBulk) Save(ctx context.Context) ([]*ChallengeRule, error) {
	specs := make([]*sqlgraph.CreateSpec, len(crcb.builders))
	nodes := make([]*ChallengeRule, len(crcb.builders))
	mutators := make([]Mutator, len(crcb.builders))
	for i := range crcb.builders {
		func(i int, root context.Context) {
			builder := crcb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ChallengeRuleMutation)
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
					_, err = mutators[i+1].Mutate(root, crcb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, crcb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, crcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (crcb *ChallengeRuleCreateBulk) SaveX(ctx context.Context) []*ChallengeRule {
	v, err := crcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (crcb *ChallengeRuleCreateBulk) Exec(ctx context.Context) error {
	_, err := crcb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (crcb *ChallengeRuleCreateBulk) ExecX(ctx context.Context) {
	if err := crcb.Exec(ctx); err != nil {
		panic(err)
	}
}
