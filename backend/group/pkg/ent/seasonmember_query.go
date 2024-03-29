// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"fmt"
	"math"

	"entgo.io/ent/dialect/sql"
	"entgo.io/ent/dialect/sql/sqlgraph"
	"entgo.io/ent/schema/field"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/predicate"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

// SeasonMemberQuery is the builder for querying SeasonMember entities.
type SeasonMemberQuery struct {
	config
	ctx        *QueryContext
	order      []OrderFunc
	inters     []Interceptor
	predicates []predicate.SeasonMember
	withSeason *SeasonQuery
	withMember *MemberQuery
	modifiers  []func(*sql.Selector)
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the SeasonMemberQuery builder.
func (smq *SeasonMemberQuery) Where(ps ...predicate.SeasonMember) *SeasonMemberQuery {
	smq.predicates = append(smq.predicates, ps...)
	return smq
}

// Limit the number of records to be returned by this query.
func (smq *SeasonMemberQuery) Limit(limit int) *SeasonMemberQuery {
	smq.ctx.Limit = &limit
	return smq
}

// Offset to start from.
func (smq *SeasonMemberQuery) Offset(offset int) *SeasonMemberQuery {
	smq.ctx.Offset = &offset
	return smq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (smq *SeasonMemberQuery) Unique(unique bool) *SeasonMemberQuery {
	smq.ctx.Unique = &unique
	return smq
}

// Order specifies how the records should be ordered.
func (smq *SeasonMemberQuery) Order(o ...OrderFunc) *SeasonMemberQuery {
	smq.order = append(smq.order, o...)
	return smq
}

// QuerySeason chains the current query on the "season" edge.
func (smq *SeasonMemberQuery) QuerySeason() *SeasonQuery {
	query := (&SeasonClient{config: smq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := smq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := smq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(seasonmember.Table, seasonmember.FieldID, selector),
			sqlgraph.To(season.Table, season.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, seasonmember.SeasonTable, seasonmember.SeasonColumn),
		)
		fromU = sqlgraph.SetNeighbors(smq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// QueryMember chains the current query on the "member" edge.
func (smq *SeasonMemberQuery) QueryMember() *MemberQuery {
	query := (&MemberClient{config: smq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := smq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := smq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(seasonmember.Table, seasonmember.FieldID, selector),
			sqlgraph.To(member.Table, member.FieldID),
			sqlgraph.Edge(sqlgraph.M2O, true, seasonmember.MemberTable, seasonmember.MemberColumn),
		)
		fromU = sqlgraph.SetNeighbors(smq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first SeasonMember entity from the query.
// Returns a *NotFoundError when no SeasonMember was found.
func (smq *SeasonMemberQuery) First(ctx context.Context) (*SeasonMember, error) {
	nodes, err := smq.Limit(1).All(setContextOp(ctx, smq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{seasonmember.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (smq *SeasonMemberQuery) FirstX(ctx context.Context) *SeasonMember {
	node, err := smq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first SeasonMember ID from the query.
// Returns a *NotFoundError when no SeasonMember ID was found.
func (smq *SeasonMemberQuery) FirstID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = smq.Limit(1).IDs(setContextOp(ctx, smq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{seasonmember.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (smq *SeasonMemberQuery) FirstIDX(ctx context.Context) int64 {
	id, err := smq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single SeasonMember entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one SeasonMember entity is found.
// Returns a *NotFoundError when no SeasonMember entities are found.
func (smq *SeasonMemberQuery) Only(ctx context.Context) (*SeasonMember, error) {
	nodes, err := smq.Limit(2).All(setContextOp(ctx, smq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{seasonmember.Label}
	default:
		return nil, &NotSingularError{seasonmember.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (smq *SeasonMemberQuery) OnlyX(ctx context.Context) *SeasonMember {
	node, err := smq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only SeasonMember ID in the query.
// Returns a *NotSingularError when more than one SeasonMember ID is found.
// Returns a *NotFoundError when no entities are found.
func (smq *SeasonMemberQuery) OnlyID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = smq.Limit(2).IDs(setContextOp(ctx, smq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{seasonmember.Label}
	default:
		err = &NotSingularError{seasonmember.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (smq *SeasonMemberQuery) OnlyIDX(ctx context.Context) int64 {
	id, err := smq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of SeasonMembers.
func (smq *SeasonMemberQuery) All(ctx context.Context) ([]*SeasonMember, error) {
	ctx = setContextOp(ctx, smq.ctx, "All")
	if err := smq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*SeasonMember, *SeasonMemberQuery]()
	return withInterceptors[[]*SeasonMember](ctx, smq, qr, smq.inters)
}

// AllX is like All, but panics if an error occurs.
func (smq *SeasonMemberQuery) AllX(ctx context.Context) []*SeasonMember {
	nodes, err := smq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of SeasonMember IDs.
func (smq *SeasonMemberQuery) IDs(ctx context.Context) ([]int64, error) {
	var ids []int64
	ctx = setContextOp(ctx, smq.ctx, "IDs")
	if err := smq.Select(seasonmember.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (smq *SeasonMemberQuery) IDsX(ctx context.Context) []int64 {
	ids, err := smq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (smq *SeasonMemberQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, smq.ctx, "Count")
	if err := smq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, smq, querierCount[*SeasonMemberQuery](), smq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (smq *SeasonMemberQuery) CountX(ctx context.Context) int {
	count, err := smq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (smq *SeasonMemberQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, smq.ctx, "Exist")
	switch _, err := smq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (smq *SeasonMemberQuery) ExistX(ctx context.Context) bool {
	exist, err := smq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the SeasonMemberQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (smq *SeasonMemberQuery) Clone() *SeasonMemberQuery {
	if smq == nil {
		return nil
	}
	return &SeasonMemberQuery{
		config:     smq.config,
		ctx:        smq.ctx.Clone(),
		order:      append([]OrderFunc{}, smq.order...),
		inters:     append([]Interceptor{}, smq.inters...),
		predicates: append([]predicate.SeasonMember{}, smq.predicates...),
		withSeason: smq.withSeason.Clone(),
		withMember: smq.withMember.Clone(),
		// clone intermediate query.
		sql:  smq.sql.Clone(),
		path: smq.path,
	}
}

// WithSeason tells the query-builder to eager-load the nodes that are connected to
// the "season" edge. The optional arguments are used to configure the query builder of the edge.
func (smq *SeasonMemberQuery) WithSeason(opts ...func(*SeasonQuery)) *SeasonMemberQuery {
	query := (&SeasonClient{config: smq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	smq.withSeason = query
	return smq
}

// WithMember tells the query-builder to eager-load the nodes that are connected to
// the "member" edge. The optional arguments are used to configure the query builder of the edge.
func (smq *SeasonMemberQuery) WithMember(opts ...func(*MemberQuery)) *SeasonMemberQuery {
	query := (&MemberClient{config: smq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	smq.withMember = query
	return smq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		Point int64 `json:"point,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.SeasonMember.Query().
//		GroupBy(seasonmember.FieldPoint).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (smq *SeasonMemberQuery) GroupBy(field string, fields ...string) *SeasonMemberGroupBy {
	smq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &SeasonMemberGroupBy{build: smq}
	grbuild.flds = &smq.ctx.Fields
	grbuild.label = seasonmember.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		Point int64 `json:"point,omitempty"`
//	}
//
//	client.SeasonMember.Query().
//		Select(seasonmember.FieldPoint).
//		Scan(ctx, &v)
//
func (smq *SeasonMemberQuery) Select(fields ...string) *SeasonMemberSelect {
	smq.ctx.Fields = append(smq.ctx.Fields, fields...)
	sbuild := &SeasonMemberSelect{SeasonMemberQuery: smq}
	sbuild.label = seasonmember.Label
	sbuild.flds, sbuild.scan = &smq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a SeasonMemberSelect configured with the given aggregations.
func (smq *SeasonMemberQuery) Aggregate(fns ...AggregateFunc) *SeasonMemberSelect {
	return smq.Select().Aggregate(fns...)
}

func (smq *SeasonMemberQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range smq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, smq); err != nil {
				return err
			}
		}
	}
	for _, f := range smq.ctx.Fields {
		if !seasonmember.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if smq.path != nil {
		prev, err := smq.path(ctx)
		if err != nil {
			return err
		}
		smq.sql = prev
	}
	return nil
}

func (smq *SeasonMemberQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*SeasonMember, error) {
	var (
		nodes       = []*SeasonMember{}
		_spec       = smq.querySpec()
		loadedTypes = [2]bool{
			smq.withSeason != nil,
			smq.withMember != nil,
		}
	)
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*SeasonMember).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &SeasonMember{config: smq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	if len(smq.modifiers) > 0 {
		_spec.Modifiers = smq.modifiers
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, smq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := smq.withSeason; query != nil {
		if err := smq.loadSeason(ctx, query, nodes, nil,
			func(n *SeasonMember, e *Season) { n.Edges.Season = e }); err != nil {
			return nil, err
		}
	}
	if query := smq.withMember; query != nil {
		if err := smq.loadMember(ctx, query, nodes, nil,
			func(n *SeasonMember, e *Member) { n.Edges.Member = e }); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (smq *SeasonMemberQuery) loadSeason(ctx context.Context, query *SeasonQuery, nodes []*SeasonMember, init func(*SeasonMember), assign func(*SeasonMember, *Season)) error {
	ids := make([]int64, 0, len(nodes))
	nodeids := make(map[int64][]*SeasonMember)
	for i := range nodes {
		fk := nodes[i].SeasonID
		if _, ok := nodeids[fk]; !ok {
			ids = append(ids, fk)
		}
		nodeids[fk] = append(nodeids[fk], nodes[i])
	}
	if len(ids) == 0 {
		return nil
	}
	query.Where(season.IDIn(ids...))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nodeids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "season_id" returned %v`, n.ID)
		}
		for i := range nodes {
			assign(nodes[i], n)
		}
	}
	return nil
}
func (smq *SeasonMemberQuery) loadMember(ctx context.Context, query *MemberQuery, nodes []*SeasonMember, init func(*SeasonMember), assign func(*SeasonMember, *Member)) error {
	ids := make([]int64, 0, len(nodes))
	nodeids := make(map[int64][]*SeasonMember)
	for i := range nodes {
		fk := nodes[i].MemberID
		if _, ok := nodeids[fk]; !ok {
			ids = append(ids, fk)
		}
		nodeids[fk] = append(nodeids[fk], nodes[i])
	}
	if len(ids) == 0 {
		return nil
	}
	query.Where(member.IDIn(ids...))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		nodes, ok := nodeids[n.ID]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "member_id" returned %v`, n.ID)
		}
		for i := range nodes {
			assign(nodes[i], n)
		}
	}
	return nil
}

func (smq *SeasonMemberQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := smq.querySpec()
	if len(smq.modifiers) > 0 {
		_spec.Modifiers = smq.modifiers
	}
	_spec.Node.Columns = smq.ctx.Fields
	if len(smq.ctx.Fields) > 0 {
		_spec.Unique = smq.ctx.Unique != nil && *smq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, smq.driver, _spec)
}

func (smq *SeasonMemberQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   seasonmember.Table,
			Columns: seasonmember.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: seasonmember.FieldID,
			},
		},
		From:   smq.sql,
		Unique: true,
	}
	if unique := smq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	}
	if fields := smq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, seasonmember.FieldID)
		for i := range fields {
			if fields[i] != seasonmember.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := smq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := smq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := smq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := smq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (smq *SeasonMemberQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(smq.driver.Dialect())
	t1 := builder.Table(seasonmember.Table)
	columns := smq.ctx.Fields
	if len(columns) == 0 {
		columns = seasonmember.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if smq.sql != nil {
		selector = smq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if smq.ctx.Unique != nil && *smq.ctx.Unique {
		selector.Distinct()
	}
	for _, m := range smq.modifiers {
		m(selector)
	}
	for _, p := range smq.predicates {
		p(selector)
	}
	for _, p := range smq.order {
		p(selector)
	}
	if offset := smq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := smq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// Modify adds a query modifier for attaching custom logic to queries.
func (smq *SeasonMemberQuery) Modify(modifiers ...func(s *sql.Selector)) *SeasonMemberSelect {
	smq.modifiers = append(smq.modifiers, modifiers...)
	return smq.Select()
}

// SeasonMemberGroupBy is the group-by builder for SeasonMember entities.
type SeasonMemberGroupBy struct {
	selector
	build *SeasonMemberQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (smgb *SeasonMemberGroupBy) Aggregate(fns ...AggregateFunc) *SeasonMemberGroupBy {
	smgb.fns = append(smgb.fns, fns...)
	return smgb
}

// Scan applies the selector query and scans the result into the given value.
func (smgb *SeasonMemberGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, smgb.build.ctx, "GroupBy")
	if err := smgb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*SeasonMemberQuery, *SeasonMemberGroupBy](ctx, smgb.build, smgb, smgb.build.inters, v)
}

func (smgb *SeasonMemberGroupBy) sqlScan(ctx context.Context, root *SeasonMemberQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(smgb.fns))
	for _, fn := range smgb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*smgb.flds)+len(smgb.fns))
		for _, f := range *smgb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*smgb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := smgb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// SeasonMemberSelect is the builder for selecting fields of SeasonMember entities.
type SeasonMemberSelect struct {
	*SeasonMemberQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (sms *SeasonMemberSelect) Aggregate(fns ...AggregateFunc) *SeasonMemberSelect {
	sms.fns = append(sms.fns, fns...)
	return sms
}

// Scan applies the selector query and scans the result into the given value.
func (sms *SeasonMemberSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, sms.ctx, "Select")
	if err := sms.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*SeasonMemberQuery, *SeasonMemberSelect](ctx, sms.SeasonMemberQuery, sms, sms.inters, v)
}

func (sms *SeasonMemberSelect) sqlScan(ctx context.Context, root *SeasonMemberQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(sms.fns))
	for _, fn := range sms.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*sms.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := sms.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// Modify adds a query modifier for attaching custom logic to queries.
func (sms *SeasonMemberSelect) Modify(modifiers ...func(s *sql.Selector)) *SeasonMemberSelect {
	sms.modifiers = append(sms.modifiers, modifiers...)
	return sms
}
