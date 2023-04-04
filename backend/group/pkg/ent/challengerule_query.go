// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"database/sql/driver"
	"fmt"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
)

// ChallengeRuleQuery is the builder for querying ChallengeRule entities.
type ChallengeRuleQuery struct {
	config
	ctx                      *QueryContext
	order                    []OrderFunc
	inters                   []Interceptor
	predicates               []predicate.ChallengeRule
	withChallengeMemberRules *ChallengeMemberRuleQuery
	withChallenge            *ChallengeQuery
	withFKs                  bool
	modifiers                []func(*sql.Selector)
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the ChallengeRuleQuery builder.
func (crq *ChallengeRuleQuery) Where(ps ...predicate.ChallengeRule) *ChallengeRuleQuery {
	crq.predicates = append(crq.predicates, ps...)
	return crq
}

// Limit the number of records to be returned by this query.
func (crq *ChallengeRuleQuery) Limit(limit int) *ChallengeRuleQuery {
	crq.ctx.Limit = &limit
	return crq
}

// Offset to start from.
func (crq *ChallengeRuleQuery) Offset(offset int) *ChallengeRuleQuery {
	crq.ctx.Offset = &offset
	return crq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (crq *ChallengeRuleQuery) Unique(unique bool) *ChallengeRuleQuery {
	crq.ctx.Unique = &unique
	return crq
}

// Order specifies how the records should be ordered.
func (crq *ChallengeRuleQuery) Order(o ...OrderFunc) *ChallengeRuleQuery {
	crq.order = append(crq.order, o...)
	return crq
}

// QueryChallengeMemberRules chains the current query on the "challenge_member_rules" edge.
func (crq *ChallengeRuleQuery) QueryChallengeMemberRules() *ChallengeMemberRuleQuery {
	query := (&ChallengeMemberRuleClient{config: crq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := crq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := crq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(challengerule.Table, challengerule.FieldID, selector),
			sqlgraph.To(challengememberrule.Table, challengememberrule.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, challengerule.ChallengeMemberRulesTable, challengerule.ChallengeMemberRulesColumn),
		)
		fromU = sqlgraph.SetNeighbors(crq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// QueryChallenge chains the current query on the "challenge" edge.
func (crq *ChallengeRuleQuery) QueryChallenge() *ChallengeQuery {
	query := (&ChallengeClient{config: crq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := crq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := crq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(challengerule.Table, challengerule.FieldID, selector),
			sqlgraph.To(challenge.Table, challenge.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, challengerule.ChallengeTable, challengerule.ChallengeColumn),
		)
		fromU = sqlgraph.SetNeighbors(crq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first ChallengeRule entity from the query.
// Returns a *NotFoundError when no ChallengeRule was found.
func (crq *ChallengeRuleQuery) First(ctx context.Context) (*ChallengeRule, error) {
	nodes, err := crq.Limit(1).All(setContextOp(ctx, crq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{challengerule.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (crq *ChallengeRuleQuery) FirstX(ctx context.Context) *ChallengeRule {
	node, err := crq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first ChallengeRule ID from the query.
// Returns a *NotFoundError when no ChallengeRule ID was found.
func (crq *ChallengeRuleQuery) FirstID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = crq.Limit(1).IDs(setContextOp(ctx, crq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{challengerule.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (crq *ChallengeRuleQuery) FirstIDX(ctx context.Context) int64 {
	id, err := crq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single ChallengeRule entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one ChallengeRule entity is found.
// Returns a *NotFoundError when no ChallengeRule entities are found.
func (crq *ChallengeRuleQuery) Only(ctx context.Context) (*ChallengeRule, error) {
	nodes, err := crq.Limit(2).All(setContextOp(ctx, crq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{challengerule.Label}
	default:
		return nil, &NotSingularError{challengerule.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (crq *ChallengeRuleQuery) OnlyX(ctx context.Context) *ChallengeRule {
	node, err := crq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only ChallengeRule ID in the query.
// Returns a *NotSingularError when more than one ChallengeRule ID is found.
// Returns a *NotFoundError when no entities are found.
func (crq *ChallengeRuleQuery) OnlyID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = crq.Limit(2).IDs(setContextOp(ctx, crq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{challengerule.Label}
	default:
		err = &NotSingularError{challengerule.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (crq *ChallengeRuleQuery) OnlyIDX(ctx context.Context) int64 {
	id, err := crq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of ChallengeRules.
func (crq *ChallengeRuleQuery) All(ctx context.Context) ([]*ChallengeRule, error) {
	ctx = setContextOp(ctx, crq.ctx, "All")
	if err := crq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*ChallengeRule, *ChallengeRuleQuery]()
	return withInterceptors[[]*ChallengeRule](ctx, crq, qr, crq.inters)
}

// AllX is like All, but panics if an error occurs.
func (crq *ChallengeRuleQuery) AllX(ctx context.Context) []*ChallengeRule {
	nodes, err := crq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of ChallengeRule IDs.
func (crq *ChallengeRuleQuery) IDs(ctx context.Context) ([]int64, error) {
	var ids []int64
	ctx = setContextOp(ctx, crq.ctx, "IDs")
	if err := crq.Select(challengerule.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (crq *ChallengeRuleQuery) IDsX(ctx context.Context) []int64 {
	ids, err := crq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (crq *ChallengeRuleQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, crq.ctx, "Count")
	if err := crq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, crq, querierCount[*ChallengeRuleQuery](), crq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (crq *ChallengeRuleQuery) CountX(ctx context.Context) int {
	count, err := crq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (crq *ChallengeRuleQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, crq.ctx, "Exist")
	switch _, err := crq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (crq *ChallengeRuleQuery) ExistX(ctx context.Context) bool {
	exist, err := crq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the ChallengeRuleQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (crq *ChallengeRuleQuery) Clone() *ChallengeRuleQuery {
	if crq == nil {
		return nil
	}
	return &ChallengeRuleQuery{
		config:                   crq.config,
		ctx:                      crq.ctx.Clone(),
		order:                    append([]OrderFunc{}, crq.order...),
		inters:                   append([]Interceptor{}, crq.inters...),
		predicates:               append([]predicate.ChallengeRule{}, crq.predicates...),
		withChallengeMemberRules: crq.withChallengeMemberRules.Clone(),
		withChallenge:            crq.withChallenge.Clone(),
		// clone intermediate query.
		sql:  crq.sql.Clone(),
		path: crq.path,
	}
}

// WithChallengeMemberRules tells the query-builder to eager-load the nodes that are connected to
// the "challenge_member_rules" edge. The optional arguments are used to configure the query builder of the edge.
func (crq *ChallengeRuleQuery) WithChallengeMemberRules(opts ...func(*ChallengeMemberRuleQuery)) *ChallengeRuleQuery {
	query := (&ChallengeMemberRuleClient{config: crq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	crq.withChallengeMemberRules = query
	return crq
}

// WithChallenge tells the query-builder to eager-load the nodes that are connected to
// the "challenge" edge. The optional arguments are used to configure the query builder of the edge.
func (crq *ChallengeRuleQuery) WithChallenge(opts ...func(*ChallengeQuery)) *ChallengeRuleQuery {
	query := (&ChallengeClient{config: crq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	crq.withChallenge = query
	return crq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Goal int64 `json:"goal,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.ChallengeRule.Query().
//		GroupBy(challengerule.FieldGoal).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (crq *ChallengeRuleQuery) GroupBy(field string, fields ...string) *ChallengeRuleGroupBy {
	crq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &ChallengeRuleGroupBy{build: crq}
	grbuild.flds = &crq.ctx.Fields
	grbuild.label = challengerule.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Goal int64 `json:"goal,omitempty"`
//	}
//
//	client.ChallengeRule.Query().
//		Select(challengerule.FieldGoal).
//		Scan(ctx, &v)
//
func (crq *ChallengeRuleQuery) Select(fields ...string) *ChallengeRuleSelect {
	crq.ctx.Fields = append(crq.ctx.Fields, fields...)
	sbuild := &ChallengeRuleSelect{ChallengeRuleQuery: crq}
	sbuild.label = challengerule.Label
	sbuild.flds, sbuild.scan = &crq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a ChallengeRuleSelect configured with the given aggregations.
func (crq *ChallengeRuleQuery) Aggregate(fns ...AggregateFunc) *ChallengeRuleSelect {
	return crq.Select().Aggregate(fns...)
}

func (crq *ChallengeRuleQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range crq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, crq); err != nil {
				return err
			}
		}
	}
	for _, f := range crq.ctx.Fields {
		if !challengerule.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if crq.path != nil {
		prev, err := crq.path(ctx)
		if err != nil {
			return err
		}
		crq.sql = prev
	}
	return nil
}

func (crq *ChallengeRuleQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*ChallengeRule, error) {
	var (
		nodes       = []*ChallengeRule{}
		withFKs     = crq.withFKs
		_spec       = crq.querySpec()
		loadedTypes = [2]bool{
			crq.withChallengeMemberRules != nil,
			crq.withChallenge != nil,
		}
	)
	if crq.withChallenge != nil {
		withFKs = true
	}
	if withFKs {
		_spec.Node.Columns = append(_spec.Node.Columns, challengerule.ForeignKeys...)
	}
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*ChallengeRule).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &ChallengeRule{config: crq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	if len(crq.modifiers) > 0 {
		_spec.Modifiers = crq.modifiers
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, crq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := crq.withChallengeMemberRules; query != nil {
		if err := crq.loadChallengeMemberRules(ctx, query, nodes,
			func(n *ChallengeRule) { n.Edges.ChallengeMemberRules = []*ChallengeMemberRule{} },
			func(n *ChallengeRule, e *ChallengeMemberRule) {
				n.Edges.ChallengeMemberRules = append(n.Edges.ChallengeMemberRules, e)
			}); err != nil {
			return nil, err
		}
	}
	if query := crq.withChallenge; query != nil {
		if err := crq.loadChallenge(ctx, query, nodes, nil,
			func(n *ChallengeRule, e *Challenge) { n.Edges.Challenge = e }); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (crq *ChallengeRuleQuery) loadChallengeMemberRules(ctx context.Context, query *ChallengeMemberRuleQuery, nodes []*ChallengeRule, init func(*ChallengeRule), assign func(*ChallengeRule, *ChallengeMemberRule)) error {
	fks := make([]driver.Value, 0, len(nodes))
	nodeids := make(map[int64]*ChallengeRule)
	for i := range nodes {
		fks = append(fks, nodes[i].ID)
		nodeids[nodes[i].ID] = nodes[i]
		if init != nil {
			init(nodes[i])
		}
	}
	query.withFKs = true
	query.Where(predicate.ChallengeMemberRule(func(s *sql.Selector) {
		s.Where(sql.InValues(challengerule.ChallengeMemberRulesColumn, fks...))
	}))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		fk := n.challenge_rule_challenge_member_rules
		if fk == nil {
			return fmt.Errorf(`foreign-key "challenge_rule_challenge_member_rules" is nil for node %v`, n.ID)
		}
		node, ok := nodeids[*fk]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "challenge_rule_challenge_member_rules" returned %v for node %v`, *fk, n.ID)
		}
		assign(node, n)
	}
	return nil
}
func (crq *ChallengeRuleQuery) loadChallenge(ctx context.Context, query *ChallengeQuery, nodes []*ChallengeRule, init func(*ChallengeRule), assign func(*ChallengeRule, *Challenge)) error {
	ids := make([]int64, 0, len(nodes))
	nodeids := make(map[int64][]*ChallengeRule)
	for i := range nodes {
		if nodes[i].challenge_challenge_rules == nil {
			continue
		}
		fk := *nodes[i].challenge_challenge_rules
		if _, ok := nodeids[fk]; !ok {
			ids = append(ids, fk)
		}
		nodeids[fk] = append(nodeids[fk], nodes[i])
	}
	if len(ids) == 0 {
		return nil
	}
	query.Where(challenge.IDIn(ids...))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nodeids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "challenge_challenge_rules" returned %v`, n.ID)
		}
		for i := range nodes {
			assign(nodes[i], n)
		}
	}
	return nil
}

func (crq *ChallengeRuleQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := crq.querySpec()
	if len(crq.modifiers) > 0 {
		_spec.Modifiers = crq.modifiers
	}
	_spec.Node.Columns = crq.ctx.Fields
	if len(crq.ctx.Fields) > 0 {
		_spec.Unique = crq.ctx.Unique != nil && *crq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, crq.driver, _spec)
}

func (crq *ChallengeRuleQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   challengerule.Table,
			Columns: challengerule.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: challengerule.FieldID,
			},
		},
		From:   crq.sql,
		Unique: true,
	}
	if unique := crq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	}
	if fields := crq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, challengerule.FieldID)
		for i := range fields {
			if fields[i] != challengerule.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := crq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := crq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := crq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := crq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (crq *ChallengeRuleQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(crq.driver.Dialect())
	t1 := builder.Table(challengerule.Table)
	columns := crq.ctx.Fields
	if len(columns) == 0 {
		columns = challengerule.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if crq.sql != nil {
		selector = crq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if crq.ctx.Unique != nil && *crq.ctx.Unique {
		selector.Distinct()
	}
	for _, m := range crq.modifiers {
		m(selector)
	}
	for _, p := range crq.predicates {
		p(selector)
	}
	for _, p := range crq.order {
		p(selector)
	}
	if offset := crq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := crq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// Modify adds a query modifier for attaching custom logic to queries.
func (crq *ChallengeRuleQuery) Modify(modifiers ...func(s *sql.Selector)) *ChallengeRuleSelect {
	crq.modifiers = append(crq.modifiers, modifiers...)
	return crq.Select()
}

// ChallengeRuleGroupBy is the group-by builder for ChallengeRule entities.
type ChallengeRuleGroupBy struct {
	selector
	build *ChallengeRuleQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (crgb *ChallengeRuleGroupBy) Aggregate(fns ...AggregateFunc) *ChallengeRuleGroupBy {
	crgb.fns = append(crgb.fns, fns...)
	return crgb
}

// Scan applies the selector query and scans the result into the given value.
func (crgb *ChallengeRuleGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, crgb.build.ctx, "GroupBy")
	if err := crgb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*ChallengeRuleQuery, *ChallengeRuleGroupBy](ctx, crgb.build, crgb, crgb.build.inters, v)
}

func (crgb *ChallengeRuleGroupBy) sqlScan(ctx context.Context, root *ChallengeRuleQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(crgb.fns))
	for _, fn := range crgb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*crgb.flds)+len(crgb.fns))
		for _, f := range *crgb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*crgb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := crgb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// ChallengeRuleSelect is the builder for selecting fields of ChallengeRule entities.
type ChallengeRuleSelect struct {
	*ChallengeRuleQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (crs *ChallengeRuleSelect) Aggregate(fns ...AggregateFunc) *ChallengeRuleSelect {
	crs.fns = append(crs.fns, fns...)
	return crs
}

// Scan applies the selector query and scans the result into the given value.
func (crs *ChallengeRuleSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, crs.ctx, "Select")
	if err := crs.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*ChallengeRuleQuery, *ChallengeRuleSelect](ctx, crs.ChallengeRuleQuery, crs, crs.inters, v)
}

func (crs *ChallengeRuleSelect) sqlScan(ctx context.Context, root *ChallengeRuleQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(crs.fns))
	for _, fn := range crs.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*crs.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := crs.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// Modify adds a query modifier for attaching custom logic to queries.
func (crs *ChallengeRuleSelect) Modify(modifiers ...func(s *sql.Selector)) *ChallengeRuleSelect {
	crs.modifiers = append(crs.modifiers, modifiers...)
	return crs
}