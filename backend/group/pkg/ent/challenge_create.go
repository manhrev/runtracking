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
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
)

// ChallengeCreate is the builder for creating a Challenge entity.
type ChallengeCreate struct {
	config
	mutation *ChallengeMutation
	hooks    []Hook
}

// SetCreatedAt sets the "created_at" field.
func (cc *ChallengeCreate) SetCreatedAt(t time.Time) *ChallengeCreate {
	cc.mutation.SetCreatedAt(t)
	return cc
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (cc *ChallengeCreate) SetNillableCreatedAt(t *time.Time) *ChallengeCreate {
	if t != nil {
		cc.SetCreatedAt(*t)
	}
	return cc
}

// SetStartTime sets the "start_time" field.
func (cc *ChallengeCreate) SetStartTime(t time.Time) *ChallengeCreate {
	cc.mutation.SetStartTime(t)
	return cc
}

// SetNillableStartTime sets the "start_time" field if the given value is not nil.
func (cc *ChallengeCreate) SetNillableStartTime(t *time.Time) *ChallengeCreate {
	if t != nil {
		cc.SetStartTime(*t)
	}
	return cc
}

// SetEndTime sets the "end_time" field.
func (cc *ChallengeCreate) SetEndTime(t time.Time) *ChallengeCreate {
	cc.mutation.SetEndTime(t)
	return cc
}

// SetNillableEndTime sets the "end_time" field if the given value is not nil.
func (cc *ChallengeCreate) SetNillableEndTime(t *time.Time) *ChallengeCreate {
	if t != nil {
		cc.SetEndTime(*t)
	}
	return cc
}

// SetDescription sets the "description" field.
func (cc *ChallengeCreate) SetDescription(s string) *ChallengeCreate {
	cc.mutation.SetDescription(s)
	return cc
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (cc *ChallengeCreate) SetNillableDescription(s *string) *ChallengeCreate {
	if s != nil {
		cc.SetDescription(*s)
	}
	return cc
}

// SetTypeID sets the "type_id" field.
func (cc *ChallengeCreate) SetTypeID(i int64) *ChallengeCreate {
	cc.mutation.SetTypeID(i)
	return cc
}

// SetCompletedFirstMemberID sets the "completed_first_member_id" field.
func (cc *ChallengeCreate) SetCompletedFirstMemberID(i int64) *ChallengeCreate {
	cc.mutation.SetCompletedFirstMemberID(i)
	return cc
}

// SetNillableCompletedFirstMemberID sets the "completed_first_member_id" field if the given value is not nil.
func (cc *ChallengeCreate) SetNillableCompletedFirstMemberID(i *int64) *ChallengeCreate {
	if i != nil {
		cc.SetCompletedFirstMemberID(*i)
	}
	return cc
}

// SetID sets the "id" field.
func (cc *ChallengeCreate) SetID(i int64) *ChallengeCreate {
	cc.mutation.SetID(i)
	return cc
}

// AddChallengeMemberIDs adds the "challenge_members" edge to the ChallengeMember entity by IDs.
func (cc *ChallengeCreate) AddChallengeMemberIDs(ids ...int64) *ChallengeCreate {
	cc.mutation.AddChallengeMemberIDs(ids...)
	return cc
}

// AddChallengeMembers adds the "challenge_members" edges to the ChallengeMember entity.
func (cc *ChallengeCreate) AddChallengeMembers(c ...*ChallengeMember) *ChallengeCreate {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return cc.AddChallengeMemberIDs(ids...)
}

// SetGroupzID sets the "groupz" edge to the Groupz entity by ID.
func (cc *ChallengeCreate) SetGroupzID(id int64) *ChallengeCreate {
	cc.mutation.SetGroupzID(id)
	return cc
}

// SetNillableGroupzID sets the "groupz" edge to the Groupz entity by ID if the given value is not nil.
func (cc *ChallengeCreate) SetNillableGroupzID(id *int64) *ChallengeCreate {
	if id != nil {
		cc = cc.SetGroupzID(*id)
	}
	return cc
}

// SetGroupz sets the "groupz" edge to the Groupz entity.
func (cc *ChallengeCreate) SetGroupz(g *Groupz) *ChallengeCreate {
	return cc.SetGroupzID(g.ID)
}

// AddChallengeRuleIDs adds the "challenge_rules" edge to the ChallengeRule entity by IDs.
func (cc *ChallengeCreate) AddChallengeRuleIDs(ids ...int64) *ChallengeCreate {
	cc.mutation.AddChallengeRuleIDs(ids...)
	return cc
}

// AddChallengeRules adds the "challenge_rules" edges to the ChallengeRule entity.
func (cc *ChallengeCreate) AddChallengeRules(c ...*ChallengeRule) *ChallengeCreate {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return cc.AddChallengeRuleIDs(ids...)
}

// Mutation returns the ChallengeMutation object of the builder.
func (cc *ChallengeCreate) Mutation() *ChallengeMutation {
	return cc.mutation
}

// Save creates the Challenge in the database.
func (cc *ChallengeCreate) Save(ctx context.Context) (*Challenge, error) {
	cc.defaults()
	return withHooks[*Challenge, ChallengeMutation](ctx, cc.sqlSave, cc.mutation, cc.hooks)
}

// SaveX calls Save and panics if Save returns an error.
func (cc *ChallengeCreate) SaveX(ctx context.Context) *Challenge {
	v, err := cc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (cc *ChallengeCreate) Exec(ctx context.Context) error {
	_, err := cc.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (cc *ChallengeCreate) ExecX(ctx context.Context) {
	if err := cc.Exec(ctx); err != nil {
		panic(err)
	}
}

// defaults sets the default values of the builder before save.
func (cc *ChallengeCreate) defaults() {
	if _, ok := cc.mutation.CreatedAt(); !ok {
		v := challenge.DefaultCreatedAt()
		cc.mutation.SetCreatedAt(v)
	}
}

// check runs all checks and user-defined validators on the builder.
func (cc *ChallengeCreate) check() error {
	if _, ok := cc.mutation.CreatedAt(); !ok {
		return &ValidationError{Name: "created_at", err: errors.New(`ent: missing required field "Challenge.created_at"`)}
	}
	if _, ok := cc.mutation.TypeID(); !ok {
		return &ValidationError{Name: "type_id", err: errors.New(`ent: missing required field "Challenge.type_id"`)}
	}
	return nil
}

func (cc *ChallengeCreate) sqlSave(ctx context.Context) (*Challenge, error) {
	if err := cc.check(); err != nil {
		return nil, err
	}
	_node, _spec := cc.createSpec()
	if err := sqlgraph.CreateNode(ctx, cc.driver, _spec); err != nil {
		if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	if _spec.ID.Value != _node.ID {
		id := _spec.ID.Value.(int64)
		_node.ID = int64(id)
	}
	cc.mutation.id = &_node.ID
	cc.mutation.done = true
	return _node, nil
}

func (cc *ChallengeCreate) createSpec() (*Challenge, *sqlgraph.CreateSpec) {
	var (
		_node = &Challenge{config: cc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: challenge.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challenge.FieldID,
			},
		}
	)
	if id, ok := cc.mutation.ID(); ok {
		_node.ID = id
		_spec.ID.Value = id
	}
	if value, ok := cc.mutation.CreatedAt(); ok {
		_spec.SetField(challenge.FieldCreatedAt, field.TypeTime, value)
		_node.CreatedAt = value
	}
	if value, ok := cc.mutation.StartTime(); ok {
		_spec.SetField(challenge.FieldStartTime, field.TypeTime, value)
		_node.StartTime = value
	}
	if value, ok := cc.mutation.EndTime(); ok {
		_spec.SetField(challenge.FieldEndTime, field.TypeTime, value)
		_node.EndTime = value
	}
	if value, ok := cc.mutation.Description(); ok {
		_spec.SetField(challenge.FieldDescription, field.TypeString, value)
		_node.Description = value
	}
	if value, ok := cc.mutation.TypeID(); ok {
		_spec.SetField(challenge.FieldTypeID, field.TypeInt64, value)
		_node.TypeID = value
	}
	if value, ok := cc.mutation.CompletedFirstMemberID(); ok {
		_spec.SetField(challenge.FieldCompletedFirstMemberID, field.TypeInt64, value)
		_node.CompletedFirstMemberID = value
	}
	if nodes := cc.mutation.ChallengeMembersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   challenge.ChallengeMembersTable,
			Columns: []string{challenge.ChallengeMembersColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengemember.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := cc.mutation.GroupzIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.M2O,
			Inverse: true,
			Table:   challenge.GroupzTable,
			Columns: []string{challenge.GroupzColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: groupz.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_node.groupz_challenges = &nodes[0]
		_spec.Edges = append(_spec.Edges, edge)
	}
	if nodes := cc.mutation.ChallengeRulesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   challenge.ChallengeRulesTable,
			Columns: []string{challenge.ChallengeRulesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challengerule.FieldID,
				},
			},
		}
		for _, k := range nodes {
			edge.Target.Nodes = append(edge.Target.Nodes, k)
		}
		_spec.Edges = append(_spec.Edges, edge)
	}
	return _node, _spec
}

// ChallengeCreateBulk is the builder for creating many Challenge entities in bulk.
type ChallengeCreateBulk struct {
	config
	builders []*ChallengeCreate
}

// Save creates the Challenge entities in the database.
func (ccb *ChallengeCreateBulk) Save(ctx context.Context) ([]*Challenge, error) {
	specs := make([]*sqlgraph.CreateSpec, len(ccb.builders))
	nodes := make([]*Challenge, len(ccb.builders))
	mutators := make([]Mutator, len(ccb.builders))
	for i := range ccb.builders {
		func(i int, root context.Context) {
			builder := ccb.builders[i]
			builder.defaults()
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				mutation, ok := m.(*ChallengeMutation)
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
					_, err = mutators[i+1].Mutate(root, ccb.builders[i+1].mutation)
				} else {
					spec := &sqlgraph.BatchCreateSpec{Nodes: specs}
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, ccb.driver, spec); err != nil {
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
		if _, err := mutators[0].Mutate(ctx, ccb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX is like Save, but panics if an error occurs.
func (ccb *ChallengeCreateBulk) SaveX(ctx context.Context) []*Challenge {
	v, err := ccb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

// Exec executes the query.
func (ccb *ChallengeCreateBulk) Exec(ctx context.Context) error {
	_, err := ccb.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (ccb *ChallengeCreateBulk) ExecX(ctx context.Context) {
	if err := ccb.Exec(ctx); err != nil {
		panic(err)
	}
}
