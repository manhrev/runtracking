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
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// GroupzUpdate is the builder for updating Groupz entities.
type GroupzUpdate struct {
	config
	hooks     []Hook
	mutation  *GroupzMutation
	modifiers []func(*sql.UpdateBuilder)
}

// Where appends a list predicates to the GroupzUpdate builder.
func (gu *GroupzUpdate) Where(ps ...predicate.Groupz) *GroupzUpdate {
	gu.mutation.Where(ps...)
	return gu
}

// SetName sets the "name" field.
func (gu *GroupzUpdate) SetName(s string) *GroupzUpdate {
	gu.mutation.SetName(s)
	return gu
}

// SetNillableName sets the "name" field if the given value is not nil.
func (gu *GroupzUpdate) SetNillableName(s *string) *GroupzUpdate {
	if s != nil {
		gu.SetName(*s)
	}
	return gu
}

// ClearName clears the value of the "name" field.
func (gu *GroupzUpdate) ClearName() *GroupzUpdate {
	gu.mutation.ClearName()
	return gu
}

// SetDescription sets the "description" field.
func (gu *GroupzUpdate) SetDescription(s string) *GroupzUpdate {
	gu.mutation.SetDescription(s)
	return gu
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (gu *GroupzUpdate) SetNillableDescription(s *string) *GroupzUpdate {
	if s != nil {
		gu.SetDescription(*s)
	}
	return gu
}

// ClearDescription clears the value of the "description" field.
func (gu *GroupzUpdate) ClearDescription() *GroupzUpdate {
	gu.mutation.ClearDescription()
	return gu
}

// SetBackgroundPicture sets the "background_picture" field.
func (gu *GroupzUpdate) SetBackgroundPicture(s string) *GroupzUpdate {
	gu.mutation.SetBackgroundPicture(s)
	return gu
}

// SetNillableBackgroundPicture sets the "background_picture" field if the given value is not nil.
func (gu *GroupzUpdate) SetNillableBackgroundPicture(s *string) *GroupzUpdate {
	if s != nil {
		gu.SetBackgroundPicture(*s)
	}
	return gu
}

// SetCreatedAt sets the "created_at" field.
func (gu *GroupzUpdate) SetCreatedAt(t time.Time) *GroupzUpdate {
	gu.mutation.SetCreatedAt(t)
	return gu
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (gu *GroupzUpdate) SetNillableCreatedAt(t *time.Time) *GroupzUpdate {
	if t != nil {
		gu.SetCreatedAt(*t)
	}
	return gu
}

// SetLeaderID sets the "leader_id" field.
func (gu *GroupzUpdate) SetLeaderID(i int64) *GroupzUpdate {
	gu.mutation.ResetLeaderID()
	gu.mutation.SetLeaderID(i)
	return gu
}

// AddLeaderID adds i to the "leader_id" field.
func (gu *GroupzUpdate) AddLeaderID(i int64) *GroupzUpdate {
	gu.mutation.AddLeaderID(i)
	return gu
}

// AddMemberIDs adds the "members" edge to the Member entity by IDs.
func (gu *GroupzUpdate) AddMemberIDs(ids ...int64) *GroupzUpdate {
	gu.mutation.AddMemberIDs(ids...)
	return gu
}

// AddMembers adds the "members" edges to the Member entity.
func (gu *GroupzUpdate) AddMembers(m ...*Member) *GroupzUpdate {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gu.AddMemberIDs(ids...)
}

// AddChallengeIDs adds the "challenges" edge to the Challenge entity by IDs.
func (gu *GroupzUpdate) AddChallengeIDs(ids ...int64) *GroupzUpdate {
	gu.mutation.AddChallengeIDs(ids...)
	return gu
}

// AddChallenges adds the "challenges" edges to the Challenge entity.
func (gu *GroupzUpdate) AddChallenges(c ...*Challenge) *GroupzUpdate {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return gu.AddChallengeIDs(ids...)
}

// Mutation returns the GroupzMutation object of the builder.
func (gu *GroupzUpdate) Mutation() *GroupzMutation {
	return gu.mutation
}

// ClearMembers clears all "members" edges to the Member entity.
func (gu *GroupzUpdate) ClearMembers() *GroupzUpdate {
	gu.mutation.ClearMembers()
	return gu
}

// RemoveMemberIDs removes the "members" edge to Member entities by IDs.
func (gu *GroupzUpdate) RemoveMemberIDs(ids ...int64) *GroupzUpdate {
	gu.mutation.RemoveMemberIDs(ids...)
	return gu
}

// RemoveMembers removes "members" edges to Member entities.
func (gu *GroupzUpdate) RemoveMembers(m ...*Member) *GroupzUpdate {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return gu.RemoveMemberIDs(ids...)
}

// ClearChallenges clears all "challenges" edges to the Challenge entity.
func (gu *GroupzUpdate) ClearChallenges() *GroupzUpdate {
	gu.mutation.ClearChallenges()
	return gu
}

// RemoveChallengeIDs removes the "challenges" edge to Challenge entities by IDs.
func (gu *GroupzUpdate) RemoveChallengeIDs(ids ...int64) *GroupzUpdate {
	gu.mutation.RemoveChallengeIDs(ids...)
	return gu
}

// RemoveChallenges removes "challenges" edges to Challenge entities.
func (gu *GroupzUpdate) RemoveChallenges(c ...*Challenge) *GroupzUpdate {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return gu.RemoveChallengeIDs(ids...)
}

// Save executes the query and returns the number of nodes affected by the update operation.
func (gu *GroupzUpdate) Save(ctx context.Context) (int, error) {
	var (
		err      error
		affected int
	)
	if len(gu.hooks) == 0 {
		affected, err = gu.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*GroupzMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			gu.mutation = mutation
			affected, err = gu.sqlSave(ctx)
			mutation.done = true
			return affected, err
		})
		for i := len(gu.hooks) - 1; i >= 0; i-- {
			if gu.hooks[i] == nil {
				return 0, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = gu.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, gu.mutation); err != nil {
			return 0, err
		}
	}
	return affected, err
}

// SaveX is like Save, but panics if an error occurs.
func (gu *GroupzUpdate) SaveX(ctx context.Context) int {
	affected, err := gu.Save(ctx)
	if err != nil {
		panic(err)
	}
	return affected
}

// Exec executes the query.
func (gu *GroupzUpdate) Exec(ctx context.Context) error {
	_, err := gu.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (gu *GroupzUpdate) ExecX(ctx context.Context) {
	if err := gu.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (gu *GroupzUpdate) Modify(modifiers ...func(u *sql.UpdateBuilder)) *GroupzUpdate {
	gu.modifiers = append(gu.modifiers, modifiers...)
	return gu
}

func (gu *GroupzUpdate) sqlSave(ctx context.Context) (n int, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   groupz.Table,
			Columns: groupz.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: groupz.FieldID,
			},
		},
	}
	if ps := gu.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := gu.mutation.Name(); ok {
		_spec.SetField(groupz.FieldName, field.TypeString, value)
	}
	if gu.mutation.NameCleared() {
		_spec.ClearField(groupz.FieldName, field.TypeString)
	}
	if value, ok := gu.mutation.Description(); ok {
		_spec.SetField(groupz.FieldDescription, field.TypeString, value)
	}
	if gu.mutation.DescriptionCleared() {
		_spec.ClearField(groupz.FieldDescription, field.TypeString)
	}
	if value, ok := gu.mutation.BackgroundPicture(); ok {
		_spec.SetField(groupz.FieldBackgroundPicture, field.TypeString, value)
	}
	if value, ok := gu.mutation.CreatedAt(); ok {
		_spec.SetField(groupz.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := gu.mutation.LeaderID(); ok {
		_spec.SetField(groupz.FieldLeaderID, field.TypeInt64, value)
	}
	if value, ok := gu.mutation.AddedLeaderID(); ok {
		_spec.AddField(groupz.FieldLeaderID, field.TypeInt64, value)
	}
	if gu.mutation.MembersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: member.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gu.mutation.RemovedMembersIDs(); len(nodes) > 0 && !gu.mutation.MembersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gu.mutation.MembersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if gu.mutation.ChallengesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challenge.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gu.mutation.RemovedChallengesIDs(); len(nodes) > 0 && !gu.mutation.ChallengesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := gu.mutation.ChallengesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(gu.modifiers...)
	if n, err = sqlgraph.UpdateNodes(ctx, gu.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{groupz.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return 0, err
	}
	return n, nil
}

// GroupzUpdateOne is the builder for updating a single Groupz entity.
type GroupzUpdateOne struct {
	config
	fields    []string
	hooks     []Hook
	mutation  *GroupzMutation
	modifiers []func(*sql.UpdateBuilder)
}

// SetName sets the "name" field.
func (guo *GroupzUpdateOne) SetName(s string) *GroupzUpdateOne {
	guo.mutation.SetName(s)
	return guo
}

// SetNillableName sets the "name" field if the given value is not nil.
func (guo *GroupzUpdateOne) SetNillableName(s *string) *GroupzUpdateOne {
	if s != nil {
		guo.SetName(*s)
	}
	return guo
}

// ClearName clears the value of the "name" field.
func (guo *GroupzUpdateOne) ClearName() *GroupzUpdateOne {
	guo.mutation.ClearName()
	return guo
}

// SetDescription sets the "description" field.
func (guo *GroupzUpdateOne) SetDescription(s string) *GroupzUpdateOne {
	guo.mutation.SetDescription(s)
	return guo
}

// SetNillableDescription sets the "description" field if the given value is not nil.
func (guo *GroupzUpdateOne) SetNillableDescription(s *string) *GroupzUpdateOne {
	if s != nil {
		guo.SetDescription(*s)
	}
	return guo
}

// ClearDescription clears the value of the "description" field.
func (guo *GroupzUpdateOne) ClearDescription() *GroupzUpdateOne {
	guo.mutation.ClearDescription()
	return guo
}

// SetBackgroundPicture sets the "background_picture" field.
func (guo *GroupzUpdateOne) SetBackgroundPicture(s string) *GroupzUpdateOne {
	guo.mutation.SetBackgroundPicture(s)
	return guo
}

// SetNillableBackgroundPicture sets the "background_picture" field if the given value is not nil.
func (guo *GroupzUpdateOne) SetNillableBackgroundPicture(s *string) *GroupzUpdateOne {
	if s != nil {
		guo.SetBackgroundPicture(*s)
	}
	return guo
}

// SetCreatedAt sets the "created_at" field.
func (guo *GroupzUpdateOne) SetCreatedAt(t time.Time) *GroupzUpdateOne {
	guo.mutation.SetCreatedAt(t)
	return guo
}

// SetNillableCreatedAt sets the "created_at" field if the given value is not nil.
func (guo *GroupzUpdateOne) SetNillableCreatedAt(t *time.Time) *GroupzUpdateOne {
	if t != nil {
		guo.SetCreatedAt(*t)
	}
	return guo
}

// SetLeaderID sets the "leader_id" field.
func (guo *GroupzUpdateOne) SetLeaderID(i int64) *GroupzUpdateOne {
	guo.mutation.ResetLeaderID()
	guo.mutation.SetLeaderID(i)
	return guo
}

// AddLeaderID adds i to the "leader_id" field.
func (guo *GroupzUpdateOne) AddLeaderID(i int64) *GroupzUpdateOne {
	guo.mutation.AddLeaderID(i)
	return guo
}

// AddMemberIDs adds the "members" edge to the Member entity by IDs.
func (guo *GroupzUpdateOne) AddMemberIDs(ids ...int64) *GroupzUpdateOne {
	guo.mutation.AddMemberIDs(ids...)
	return guo
}

// AddMembers adds the "members" edges to the Member entity.
func (guo *GroupzUpdateOne) AddMembers(m ...*Member) *GroupzUpdateOne {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return guo.AddMemberIDs(ids...)
}

// AddChallengeIDs adds the "challenges" edge to the Challenge entity by IDs.
func (guo *GroupzUpdateOne) AddChallengeIDs(ids ...int64) *GroupzUpdateOne {
	guo.mutation.AddChallengeIDs(ids...)
	return guo
}

// AddChallenges adds the "challenges" edges to the Challenge entity.
func (guo *GroupzUpdateOne) AddChallenges(c ...*Challenge) *GroupzUpdateOne {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return guo.AddChallengeIDs(ids...)
}

// Mutation returns the GroupzMutation object of the builder.
func (guo *GroupzUpdateOne) Mutation() *GroupzMutation {
	return guo.mutation
}

// ClearMembers clears all "members" edges to the Member entity.
func (guo *GroupzUpdateOne) ClearMembers() *GroupzUpdateOne {
	guo.mutation.ClearMembers()
	return guo
}

// RemoveMemberIDs removes the "members" edge to Member entities by IDs.
func (guo *GroupzUpdateOne) RemoveMemberIDs(ids ...int64) *GroupzUpdateOne {
	guo.mutation.RemoveMemberIDs(ids...)
	return guo
}

// RemoveMembers removes "members" edges to Member entities.
func (guo *GroupzUpdateOne) RemoveMembers(m ...*Member) *GroupzUpdateOne {
	ids := make([]int64, len(m))
	for i := range m {
		ids[i] = m[i].ID
	}
	return guo.RemoveMemberIDs(ids...)
}

// ClearChallenges clears all "challenges" edges to the Challenge entity.
func (guo *GroupzUpdateOne) ClearChallenges() *GroupzUpdateOne {
	guo.mutation.ClearChallenges()
	return guo
}

// RemoveChallengeIDs removes the "challenges" edge to Challenge entities by IDs.
func (guo *GroupzUpdateOne) RemoveChallengeIDs(ids ...int64) *GroupzUpdateOne {
	guo.mutation.RemoveChallengeIDs(ids...)
	return guo
}

// RemoveChallenges removes "challenges" edges to Challenge entities.
func (guo *GroupzUpdateOne) RemoveChallenges(c ...*Challenge) *GroupzUpdateOne {
	ids := make([]int64, len(c))
	for i := range c {
		ids[i] = c[i].ID
	}
	return guo.RemoveChallengeIDs(ids...)
}

// Select allows selecting one or more fields (columns) of the returned entity.
// The default is selecting all fields defined in the entity schema.
func (guo *GroupzUpdateOne) Select(field string, fields ...string) *GroupzUpdateOne {
	guo.fields = append([]string{field}, fields...)
	return guo
}

// Save executes the query and returns the updated Groupz entity.
func (guo *GroupzUpdateOne) Save(ctx context.Context) (*Groupz, error) {
	var (
		err  error
		node *Groupz
	)
	if len(guo.hooks) == 0 {
		node, err = guo.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*GroupzMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			guo.mutation = mutation
			node, err = guo.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(guo.hooks) - 1; i >= 0; i-- {
			if guo.hooks[i] == nil {
				return nil, fmt.Errorf("ent: uninitialized hook (forgotten import ent/runtime?)")
			}
			mut = guo.hooks[i](mut)
		}
		v, err := mut.Mutate(ctx, guo.mutation)
		if err != nil {
			return nil, err
		}
		nv, ok := v.(*Groupz)
		if !ok {
			return nil, fmt.Errorf("unexpected node type %T returned from GroupzMutation", v)
		}
		node = nv
	}
	return node, err
}

// SaveX is like Save, but panics if an error occurs.
func (guo *GroupzUpdateOne) SaveX(ctx context.Context) *Groupz {
	node, err := guo.Save(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// Exec executes the query on the entity.
func (guo *GroupzUpdateOne) Exec(ctx context.Context) error {
	_, err := guo.Save(ctx)
	return err
}

// ExecX is like Exec, but panics if an error occurs.
func (guo *GroupzUpdateOne) ExecX(ctx context.Context) {
	if err := guo.Exec(ctx); err != nil {
		panic(err)
	}
}

// Modify adds a statement modifier for attaching custom logic to the UPDATE statement.
func (guo *GroupzUpdateOne) Modify(modifiers ...func(u *sql.UpdateBuilder)) *GroupzUpdateOne {
	guo.modifiers = append(guo.modifiers, modifiers...)
	return guo
}

func (guo *GroupzUpdateOne) sqlSave(ctx context.Context) (_node *Groupz, err error) {
	_spec := &sqlgraph.UpdateSpec{
		Node: &sqlgraph.NodeSpec{
			Table:   groupz.Table,
			Columns: groupz.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: groupz.FieldID,
			},
		},
	}
	id, ok := guo.mutation.ID()
	if !ok {
		return nil, &ValidationError{Name: "id", err: errors.New(`ent: missing "Groupz.id" for update`)}
	}
	_spec.Node.ID.Value = id
	if fields := guo.fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, groupz.FieldID)
		for _, f := range fields {
			if !groupz.ValidColumn(f) {
				return nil, &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
			}
			if f != groupz.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, f)
			}
		}
	}
	if ps := guo.mutation.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if value, ok := guo.mutation.Name(); ok {
		_spec.SetField(groupz.FieldName, field.TypeString, value)
	}
	if guo.mutation.NameCleared() {
		_spec.ClearField(groupz.FieldName, field.TypeString)
	}
	if value, ok := guo.mutation.Description(); ok {
		_spec.SetField(groupz.FieldDescription, field.TypeString, value)
	}
	if guo.mutation.DescriptionCleared() {
		_spec.ClearField(groupz.FieldDescription, field.TypeString)
	}
	if value, ok := guo.mutation.BackgroundPicture(); ok {
		_spec.SetField(groupz.FieldBackgroundPicture, field.TypeString, value)
	}
	if value, ok := guo.mutation.CreatedAt(); ok {
		_spec.SetField(groupz.FieldCreatedAt, field.TypeTime, value)
	}
	if value, ok := guo.mutation.LeaderID(); ok {
		_spec.SetField(groupz.FieldLeaderID, field.TypeInt64, value)
	}
	if value, ok := guo.mutation.AddedLeaderID(); ok {
		_spec.AddField(groupz.FieldLeaderID, field.TypeInt64, value)
	}
	if guo.mutation.MembersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: member.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := guo.mutation.RemovedMembersIDs(); len(nodes) > 0 && !guo.mutation.MembersCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := guo.mutation.MembersIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.MembersTable,
			Columns: []string{groupz.MembersColumn},
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	if guo.mutation.ChallengesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
			Bidi:    false,
			Target: &sqlgraph.EdgeTarget{
				IDSpec: &sqlgraph.FieldSpec{
					Type:   field.TypeInt64,
					Column: challenge.FieldID,
				},
			},
		}
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := guo.mutation.RemovedChallengesIDs(); len(nodes) > 0 && !guo.mutation.ChallengesCleared() {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
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
		_spec.Edges.Clear = append(_spec.Edges.Clear, edge)
	}
	if nodes := guo.mutation.ChallengesIDs(); len(nodes) > 0 {
		edge := &sqlgraph.EdgeSpec{
			Rel:     sqlgraph.O2M,
			Inverse: false,
			Table:   groupz.ChallengesTable,
			Columns: []string{groupz.ChallengesColumn},
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
		_spec.Edges.Add = append(_spec.Edges.Add, edge)
	}
	_spec.AddModifiers(guo.modifiers...)
	_node = &Groupz{config: guo.config}
	_spec.Assign = _node.assignValues
	_spec.ScanValues = _node.scanValues
	if err = sqlgraph.UpdateNode(ctx, guo.driver, _spec); err != nil {
		if _, ok := err.(*sqlgraph.NotFoundError); ok {
			err = &NotFoundError{groupz.Label}
		} else if sqlgraph.IsConstraintError(err) {
			err = &ConstraintError{msg: err.Error(), wrap: err}
		}
		return nil, err
	}
	return _node, nil
}