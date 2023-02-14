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
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationtype"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// NotificationUserQuery is the builder for querying NotificationUser entities.
type NotificationUserQuery struct {
	config
	ctx               *QueryContext
	order             []OrderFunc
	inters            []Interceptor
	predicates        []predicate.NotificationUser
	withNotifications *NotificationTypeQuery
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the NotificationUserQuery builder.
func (nuq *NotificationUserQuery) Where(ps ...predicate.NotificationUser) *NotificationUserQuery {
	nuq.predicates = append(nuq.predicates, ps...)
	return nuq
}

// Limit the number of records to be returned by this query.
func (nuq *NotificationUserQuery) Limit(limit int) *NotificationUserQuery {
	nuq.ctx.Limit = &limit
	return nuq
}

// Offset to start from.
func (nuq *NotificationUserQuery) Offset(offset int) *NotificationUserQuery {
	nuq.ctx.Offset = &offset
	return nuq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (nuq *NotificationUserQuery) Unique(unique bool) *NotificationUserQuery {
	nuq.ctx.Unique = &unique
	return nuq
}

// Order specifies how the records should be ordered.
func (nuq *NotificationUserQuery) Order(o ...OrderFunc) *NotificationUserQuery {
	nuq.order = append(nuq.order, o...)
	return nuq
}

// QueryNotifications chains the current query on the "notifications" edge.
func (nuq *NotificationUserQuery) QueryNotifications() *NotificationTypeQuery {
	query := (&NotificationTypeClient{config: nuq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := nuq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := nuq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(notificationuser.Table, notificationuser.FieldID, selector),
			sqlgraph.To(notificationtype.Table, notificationtype.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, notificationuser.NotificationsTable, notificationuser.NotificationsColumn),
		)
		fromU = sqlgraph.SetNeighbors(nuq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first NotificationUser entity from the query.
// Returns a *NotFoundError when no NotificationUser was found.
func (nuq *NotificationUserQuery) First(ctx context.Context) (*NotificationUser, error) {
	nodes, err := nuq.Limit(1).All(setContextOp(ctx, nuq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{notificationuser.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (nuq *NotificationUserQuery) FirstX(ctx context.Context) *NotificationUser {
	node, err := nuq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first NotificationUser ID from the query.
// Returns a *NotFoundError when no NotificationUser ID was found.
func (nuq *NotificationUserQuery) FirstID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = nuq.Limit(1).IDs(setContextOp(ctx, nuq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{notificationuser.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (nuq *NotificationUserQuery) FirstIDX(ctx context.Context) int64 {
	id, err := nuq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single NotificationUser entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one NotificationUser entity is found.
// Returns a *NotFoundError when no NotificationUser entities are found.
func (nuq *NotificationUserQuery) Only(ctx context.Context) (*NotificationUser, error) {
	nodes, err := nuq.Limit(2).All(setContextOp(ctx, nuq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{notificationuser.Label}
	default:
		return nil, &NotSingularError{notificationuser.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (nuq *NotificationUserQuery) OnlyX(ctx context.Context) *NotificationUser {
	node, err := nuq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only NotificationUser ID in the query.
// Returns a *NotSingularError when more than one NotificationUser ID is found.
// Returns a *NotFoundError when no entities are found.
func (nuq *NotificationUserQuery) OnlyID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = nuq.Limit(2).IDs(setContextOp(ctx, nuq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{notificationuser.Label}
	default:
		err = &NotSingularError{notificationuser.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (nuq *NotificationUserQuery) OnlyIDX(ctx context.Context) int64 {
	id, err := nuq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of NotificationUsers.
func (nuq *NotificationUserQuery) All(ctx context.Context) ([]*NotificationUser, error) {
	ctx = setContextOp(ctx, nuq.ctx, "All")
	if err := nuq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*NotificationUser, *NotificationUserQuery]()
	return withInterceptors[[]*NotificationUser](ctx, nuq, qr, nuq.inters)
}

// AllX is like All, but panics if an error occurs.
func (nuq *NotificationUserQuery) AllX(ctx context.Context) []*NotificationUser {
	nodes, err := nuq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of NotificationUser IDs.
func (nuq *NotificationUserQuery) IDs(ctx context.Context) ([]int64, error) {
	var ids []int64
	ctx = setContextOp(ctx, nuq.ctx, "IDs")
	if err := nuq.Select(notificationuser.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (nuq *NotificationUserQuery) IDsX(ctx context.Context) []int64 {
	ids, err := nuq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (nuq *NotificationUserQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, nuq.ctx, "Count")
	if err := nuq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, nuq, querierCount[*NotificationUserQuery](), nuq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (nuq *NotificationUserQuery) CountX(ctx context.Context) int {
	count, err := nuq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (nuq *NotificationUserQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, nuq.ctx, "Exist")
	switch _, err := nuq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (nuq *NotificationUserQuery) ExistX(ctx context.Context) bool {
	exist, err := nuq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the NotificationUserQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (nuq *NotificationUserQuery) Clone() *NotificationUserQuery {
	if nuq == nil {
		return nil
	}
	return &NotificationUserQuery{
		config:            nuq.config,
		ctx:               nuq.ctx.Clone(),
		order:             append([]OrderFunc{}, nuq.order...),
		inters:            append([]Interceptor{}, nuq.inters...),
		predicates:        append([]predicate.NotificationUser{}, nuq.predicates...),
		withNotifications: nuq.withNotifications.Clone(),
		// clone intermediate query.
		sql:  nuq.sql.Clone(),
		path: nuq.path,
	}
}

// WithNotifications tells the query-builder to eager-load the nodes that are connected to
// the "notifications" edge. The optional arguments are used to configure the query builder of the edge.
func (nuq *NotificationUserQuery) WithNotifications(opts ...func(*NotificationTypeQuery)) *NotificationUserQuery {
	query := (&NotificationTypeClient{config: nuq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	nuq.withNotifications = query
	return nuq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		UserID int64 `json:"user_id,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.NotificationUser.Query().
//		GroupBy(notificationuser.FieldUserID).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (nuq *NotificationUserQuery) GroupBy(field string, fields ...string) *NotificationUserGroupBy {
	nuq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &NotificationUserGroupBy{build: nuq}
	grbuild.flds = &nuq.ctx.Fields
	grbuild.label = notificationuser.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		UserID int64 `json:"user_id,omitempty"`
//	}
//
//	client.NotificationUser.Query().
//		Select(notificationuser.FieldUserID).
//		Scan(ctx, &v)
//
func (nuq *NotificationUserQuery) Select(fields ...string) *NotificationUserSelect {
	nuq.ctx.Fields = append(nuq.ctx.Fields, fields...)
	sbuild := &NotificationUserSelect{NotificationUserQuery: nuq}
	sbuild.label = notificationuser.Label
	sbuild.flds, sbuild.scan = &nuq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a NotificationUserSelect configured with the given aggregations.
func (nuq *NotificationUserQuery) Aggregate(fns ...AggregateFunc) *NotificationUserSelect {
	return nuq.Select().Aggregate(fns...)
}

func (nuq *NotificationUserQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range nuq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, nuq); err != nil {
				return err
			}
		}
	}
	for _, f := range nuq.ctx.Fields {
		if !notificationuser.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if nuq.path != nil {
		prev, err := nuq.path(ctx)
		if err != nil {
			return err
		}
		nuq.sql = prev
	}
	return nil
}

func (nuq *NotificationUserQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*NotificationUser, error) {
	var (
		nodes       = []*NotificationUser{}
		_spec       = nuq.querySpec()
		loadedTypes = [1]bool{
			nuq.withNotifications != nil,
		}
	)
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*NotificationUser).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &NotificationUser{config: nuq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, nuq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := nuq.withNotifications; query != nil {
		if err := nuq.loadNotifications(ctx, query, nodes,
			func(n *NotificationUser) { n.Edges.Notifications = []*NotificationType{} },
			func(n *NotificationUser, e *NotificationType) {
				n.Edges.Notifications = append(n.Edges.Notifications, e)
			}); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (nuq *NotificationUserQuery) loadNotifications(ctx context.Context, query *NotificationTypeQuery, nodes []*NotificationUser, init func(*NotificationUser), assign func(*NotificationUser, *NotificationType)) error {
	fks := make([]driver.Value, 0, len(nodes))
	nodeids := make(map[int64]*NotificationUser)
	for i := range nodes {
		fks = append(fks, nodes[i].ID)
		nodeids[nodes[i].ID] = nodes[i]
		if init != nil {
			init(nodes[i])
		}
	}
	query.withFKs = true
	query.Where(predicate.NotificationType(func(s *sql.Selector) {
		s.Where(sql.InValues(notificationuser.NotificationsColumn, fks...))
	}))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		fk := n.notification_user_notifications
		if fk == nil {
			return fmt.Errorf(`foreign-key "notification_user_notifications" is nil for node %v`, n.ID)
		}
		node, ok := nodeids[*fk]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "notification_user_notifications" returned %v for node %v`, *fk, n.ID)
		}
		assign(node, n)
	}
	return nil
}

func (nuq *NotificationUserQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := nuq.querySpec()
	_spec.Node.Columns = nuq.ctx.Fields
	if len(nuq.ctx.Fields) > 0 {
		_spec.Unique = nuq.ctx.Unique != nil && *nuq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, nuq.driver, _spec)
}

func (nuq *NotificationUserQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   notificationuser.Table,
			Columns: notificationuser.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationuser.FieldID,
			},
		},
		From:   nuq.sql,
		Unique: true,
	}
	if unique := nuq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	}
	if fields := nuq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, notificationuser.FieldID)
		for i := range fields {
			if fields[i] != notificationuser.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := nuq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := nuq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := nuq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := nuq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (nuq *NotificationUserQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(nuq.driver.Dialect())
	t1 := builder.Table(notificationuser.Table)
	columns := nuq.ctx.Fields
	if len(columns) == 0 {
		columns = notificationuser.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if nuq.sql != nil {
		selector = nuq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if nuq.ctx.Unique != nil && *nuq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range nuq.predicates {
		p(selector)
	}
	for _, p := range nuq.order {
		p(selector)
	}
	if offset := nuq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := nuq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// NotificationUserGroupBy is the group-by builder for NotificationUser entities.
type NotificationUserGroupBy struct {
	selector
	build *NotificationUserQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (nugb *NotificationUserGroupBy) Aggregate(fns ...AggregateFunc) *NotificationUserGroupBy {
	nugb.fns = append(nugb.fns, fns...)
	return nugb
}

// Scan applies the selector query and scans the result into the given value.
func (nugb *NotificationUserGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, nugb.build.ctx, "GroupBy")
	if err := nugb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*NotificationUserQuery, *NotificationUserGroupBy](ctx, nugb.build, nugb, nugb.build.inters, v)
}

func (nugb *NotificationUserGroupBy) sqlScan(ctx context.Context, root *NotificationUserQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(nugb.fns))
	for _, fn := range nugb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*nugb.flds)+len(nugb.fns))
		for _, f := range *nugb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*nugb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := nugb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// NotificationUserSelect is the builder for selecting fields of NotificationUser entities.
type NotificationUserSelect struct {
	*NotificationUserQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (nus *NotificationUserSelect) Aggregate(fns ...AggregateFunc) *NotificationUserSelect {
	nus.fns = append(nus.fns, fns...)
	return nus
}

// Scan applies the selector query and scans the result into the given value.
func (nus *NotificationUserSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, nus.ctx, "Select")
	if err := nus.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*NotificationUserQuery, *NotificationUserSelect](ctx, nus.NotificationUserQuery, nus, nus.inters, v)
}

func (nus *NotificationUserSelect) sqlScan(ctx context.Context, root *NotificationUserQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(nus.fns))
	for _, fn := range nus.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*nus.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := nus.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
