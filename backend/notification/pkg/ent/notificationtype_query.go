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
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationtype"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/predicate"
)

// NotificationTypeQuery is the builder for querying NotificationType entities.
type NotificationTypeQuery struct {
	config
	ctx               *QueryContext
	order             []OrderFunc
	inters            []Interceptor
	predicates        []predicate.NotificationType
	withNotifications *NotificationQuery
	withFKs           bool
	// intermediate query (i.e. traversal path).
	sql  *sql.Selector
	path func(context.Context) (*sql.Selector, error)
}

// Where adds a new predicate for the NotificationTypeQuery builder.
func (ntq *NotificationTypeQuery) Where(ps ...predicate.NotificationType) *NotificationTypeQuery {
	ntq.predicates = append(ntq.predicates, ps...)
	return ntq
}

// Limit the number of records to be returned by this query.
func (ntq *NotificationTypeQuery) Limit(limit int) *NotificationTypeQuery {
	ntq.ctx.Limit = &limit
	return ntq
}

// Offset to start from.
func (ntq *NotificationTypeQuery) Offset(offset int) *NotificationTypeQuery {
	ntq.ctx.Offset = &offset
	return ntq
}

// Unique configures the query builder to filter duplicate records on query.
// By default, unique is set to true, and can be disabled using this method.
func (ntq *NotificationTypeQuery) Unique(unique bool) *NotificationTypeQuery {
	ntq.ctx.Unique = &unique
	return ntq
}

// Order specifies how the records should be ordered.
func (ntq *NotificationTypeQuery) Order(o ...OrderFunc) *NotificationTypeQuery {
	ntq.order = append(ntq.order, o...)
	return ntq
}

// QueryNotifications chains the current query on the "notifications" edge.
func (ntq *NotificationTypeQuery) QueryNotifications() *NotificationQuery {
	query := (&NotificationClient{config: ntq.config}).Query()
	query.path = func(ctx context.Context) (fromU *sql.Selector, err error) {
		if err := ntq.prepareQuery(ctx); err != nil {
			return nil, err
		}
		selector := ntq.sqlQuery(ctx)
		if err := selector.Err(); err != nil {
			return nil, err
		}
		step := sqlgraph.NewStep(
			sqlgraph.From(notificationtype.Table, notificationtype.FieldID, selector),
			sqlgraph.To(notification.Table, notification.FieldID),
			sqlgraph.Edge(sqlgraph.O2M, false, notificationtype.NotificationsTable, notificationtype.NotificationsColumn),
		)
		fromU = sqlgraph.SetNeighbors(ntq.driver.Dialect(), step)
		return fromU, nil
	}
	return query
}

// First returns the first NotificationType entity from the query.
// Returns a *NotFoundError when no NotificationType was found.
func (ntq *NotificationTypeQuery) First(ctx context.Context) (*NotificationType, error) {
	nodes, err := ntq.Limit(1).All(setContextOp(ctx, ntq.ctx, "First"))
	if err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nil, &NotFoundError{notificationtype.Label}
	}
	return nodes[0], nil
}

// FirstX is like First, but panics if an error occurs.
func (ntq *NotificationTypeQuery) FirstX(ctx context.Context) *NotificationType {
	node, err := ntq.First(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return node
}

// FirstID returns the first NotificationType ID from the query.
// Returns a *NotFoundError when no NotificationType ID was found.
func (ntq *NotificationTypeQuery) FirstID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = ntq.Limit(1).IDs(setContextOp(ctx, ntq.ctx, "FirstID")); err != nil {
		return
	}
	if len(ids) == 0 {
		err = &NotFoundError{notificationtype.Label}
		return
	}
	return ids[0], nil
}

// FirstIDX is like FirstID, but panics if an error occurs.
func (ntq *NotificationTypeQuery) FirstIDX(ctx context.Context) int64 {
	id, err := ntq.FirstID(ctx)
	if err != nil && !IsNotFound(err) {
		panic(err)
	}
	return id
}

// Only returns a single NotificationType entity found by the query, ensuring it only returns one.
// Returns a *NotSingularError when more than one NotificationType entity is found.
// Returns a *NotFoundError when no NotificationType entities are found.
func (ntq *NotificationTypeQuery) Only(ctx context.Context) (*NotificationType, error) {
	nodes, err := ntq.Limit(2).All(setContextOp(ctx, ntq.ctx, "Only"))
	if err != nil {
		return nil, err
	}
	switch len(nodes) {
	case 1:
		return nodes[0], nil
	case 0:
		return nil, &NotFoundError{notificationtype.Label}
	default:
		return nil, &NotSingularError{notificationtype.Label}
	}
}

// OnlyX is like Only, but panics if an error occurs.
func (ntq *NotificationTypeQuery) OnlyX(ctx context.Context) *NotificationType {
	node, err := ntq.Only(ctx)
	if err != nil {
		panic(err)
	}
	return node
}

// OnlyID is like Only, but returns the only NotificationType ID in the query.
// Returns a *NotSingularError when more than one NotificationType ID is found.
// Returns a *NotFoundError when no entities are found.
func (ntq *NotificationTypeQuery) OnlyID(ctx context.Context) (id int64, err error) {
	var ids []int64
	if ids, err = ntq.Limit(2).IDs(setContextOp(ctx, ntq.ctx, "OnlyID")); err != nil {
		return
	}
	switch len(ids) {
	case 1:
		id = ids[0]
	case 0:
		err = &NotFoundError{notificationtype.Label}
	default:
		err = &NotSingularError{notificationtype.Label}
	}
	return
}

// OnlyIDX is like OnlyID, but panics if an error occurs.
func (ntq *NotificationTypeQuery) OnlyIDX(ctx context.Context) int64 {
	id, err := ntq.OnlyID(ctx)
	if err != nil {
		panic(err)
	}
	return id
}

// All executes the query and returns a list of NotificationTypes.
func (ntq *NotificationTypeQuery) All(ctx context.Context) ([]*NotificationType, error) {
	ctx = setContextOp(ctx, ntq.ctx, "All")
	if err := ntq.prepareQuery(ctx); err != nil {
		return nil, err
	}
	qr := querierAll[[]*NotificationType, *NotificationTypeQuery]()
	return withInterceptors[[]*NotificationType](ctx, ntq, qr, ntq.inters)
}

// AllX is like All, but panics if an error occurs.
func (ntq *NotificationTypeQuery) AllX(ctx context.Context) []*NotificationType {
	nodes, err := ntq.All(ctx)
	if err != nil {
		panic(err)
	}
	return nodes
}

// IDs executes the query and returns a list of NotificationType IDs.
func (ntq *NotificationTypeQuery) IDs(ctx context.Context) ([]int64, error) {
	var ids []int64
	ctx = setContextOp(ctx, ntq.ctx, "IDs")
	if err := ntq.Select(notificationtype.FieldID).Scan(ctx, &ids); err != nil {
		return nil, err
	}
	return ids, nil
}

// IDsX is like IDs, but panics if an error occurs.
func (ntq *NotificationTypeQuery) IDsX(ctx context.Context) []int64 {
	ids, err := ntq.IDs(ctx)
	if err != nil {
		panic(err)
	}
	return ids
}

// Count returns the count of the given query.
func (ntq *NotificationTypeQuery) Count(ctx context.Context) (int, error) {
	ctx = setContextOp(ctx, ntq.ctx, "Count")
	if err := ntq.prepareQuery(ctx); err != nil {
		return 0, err
	}
	return withInterceptors[int](ctx, ntq, querierCount[*NotificationTypeQuery](), ntq.inters)
}

// CountX is like Count, but panics if an error occurs.
func (ntq *NotificationTypeQuery) CountX(ctx context.Context) int {
	count, err := ntq.Count(ctx)
	if err != nil {
		panic(err)
	}
	return count
}

// Exist returns true if the query has elements in the graph.
func (ntq *NotificationTypeQuery) Exist(ctx context.Context) (bool, error) {
	ctx = setContextOp(ctx, ntq.ctx, "Exist")
	switch _, err := ntq.FirstID(ctx); {
	case IsNotFound(err):
		return false, nil
	case err != nil:
		return false, fmt.Errorf("ent: check existence: %w", err)
	default:
		return true, nil
	}
}

// ExistX is like Exist, but panics if an error occurs.
func (ntq *NotificationTypeQuery) ExistX(ctx context.Context) bool {
	exist, err := ntq.Exist(ctx)
	if err != nil {
		panic(err)
	}
	return exist
}

// Clone returns a duplicate of the NotificationTypeQuery builder, including all associated steps. It can be
// used to prepare common query builders and use them differently after the clone is made.
func (ntq *NotificationTypeQuery) Clone() *NotificationTypeQuery {
	if ntq == nil {
		return nil
	}
	return &NotificationTypeQuery{
		config:            ntq.config,
		ctx:               ntq.ctx.Clone(),
		order:             append([]OrderFunc{}, ntq.order...),
		inters:            append([]Interceptor{}, ntq.inters...),
		predicates:        append([]predicate.NotificationType{}, ntq.predicates...),
		withNotifications: ntq.withNotifications.Clone(),
		// clone intermediate query.
		sql:  ntq.sql.Clone(),
		path: ntq.path,
	}
}

// WithNotifications tells the query-builder to eager-load the nodes that are connected to
// the "notifications" edge. The optional arguments are used to configure the query builder of the edge.
func (ntq *NotificationTypeQuery) WithNotifications(opts ...func(*NotificationQuery)) *NotificationTypeQuery {
	query := (&NotificationClient{config: ntq.config}).Query()
	for _, opt := range opts {
		opt(query)
	}
	ntq.withNotifications = query
	return ntq
}

// GroupBy is used to group vertices by one or more fields/columns.
// It is often used with aggregate functions, like: count, max, mean, min, sum.
//
// Example:
//
//	var v []struct {
//		TypeName string `json:"type_name,omitempty"`
//		Count int `json:"count,omitempty"`
//	}
//
//	client.NotificationType.Query().
//		GroupBy(notificationtype.FieldTypeName).
//		Aggregate(ent.Count()).
//		Scan(ctx, &v)
//
func (ntq *NotificationTypeQuery) GroupBy(field string, fields ...string) *NotificationTypeGroupBy {
	ntq.ctx.Fields = append([]string{field}, fields...)
	grbuild := &NotificationTypeGroupBy{build: ntq}
	grbuild.flds = &ntq.ctx.Fields
	grbuild.label = notificationtype.Label
	grbuild.scan = grbuild.Scan
	return grbuild
}

// Select allows the selection one or more fields/columns for the given query,
// instead of selecting all fields in the entity.
//
// Example:
//
//	var v []struct {
//		TypeName string `json:"type_name,omitempty"`
//	}
//
//	client.NotificationType.Query().
//		Select(notificationtype.FieldTypeName).
//		Scan(ctx, &v)
//
func (ntq *NotificationTypeQuery) Select(fields ...string) *NotificationTypeSelect {
	ntq.ctx.Fields = append(ntq.ctx.Fields, fields...)
	sbuild := &NotificationTypeSelect{NotificationTypeQuery: ntq}
	sbuild.label = notificationtype.Label
	sbuild.flds, sbuild.scan = &ntq.ctx.Fields, sbuild.Scan
	return sbuild
}

// Aggregate returns a NotificationTypeSelect configured with the given aggregations.
func (ntq *NotificationTypeQuery) Aggregate(fns ...AggregateFunc) *NotificationTypeSelect {
	return ntq.Select().Aggregate(fns...)
}

func (ntq *NotificationTypeQuery) prepareQuery(ctx context.Context) error {
	for _, inter := range ntq.inters {
		if inter == nil {
			return fmt.Errorf("ent: uninitialized interceptor (forgotten import ent/runtime?)")
		}
		if trv, ok := inter.(Traverser); ok {
			if err := trv.Traverse(ctx, ntq); err != nil {
				return err
			}
		}
	}
	for _, f := range ntq.ctx.Fields {
		if !notificationtype.ValidColumn(f) {
			return &ValidationError{Name: f, err: fmt.Errorf("ent: invalid field %q for query", f)}
		}
	}
	if ntq.path != nil {
		prev, err := ntq.path(ctx)
		if err != nil {
			return err
		}
		ntq.sql = prev
	}
	return nil
}

func (ntq *NotificationTypeQuery) sqlAll(ctx context.Context, hooks ...queryHook) ([]*NotificationType, error) {
	var (
		nodes       = []*NotificationType{}
		withFKs     = ntq.withFKs
		_spec       = ntq.querySpec()
		loadedTypes = [1]bool{
			ntq.withNotifications != nil,
		}
	)
	if withFKs {
		_spec.Node.Columns = append(_spec.Node.Columns, notificationtype.ForeignKeys...)
	}
	_spec.ScanValues = func(columns []string) ([]any, error) {
		return (*NotificationType).scanValues(nil, columns)
	}
	_spec.Assign = func(columns []string, values []any) error {
		node := &NotificationType{config: ntq.config}
		nodes = append(nodes, node)
		node.Edges.loadedTypes = loadedTypes
		return node.assignValues(columns, values)
	}
	for i := range hooks {
		hooks[i](ctx, _spec)
	}
	if err := sqlgraph.QueryNodes(ctx, ntq.driver, _spec); err != nil {
		return nil, err
	}
	if len(nodes) == 0 {
		return nodes, nil
	}
	if query := ntq.withNotifications; query != nil {
		if err := ntq.loadNotifications(ctx, query, nodes,
			func(n *NotificationType) { n.Edges.Notifications = []*Notification{} },
			func(n *NotificationType, e *Notification) { n.Edges.Notifications = append(n.Edges.Notifications, e) }); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

func (ntq *NotificationTypeQuery) loadNotifications(ctx context.Context, query *NotificationQuery, nodes []*NotificationType, init func(*NotificationType), assign func(*NotificationType, *Notification)) error {
	fks := make([]driver.Value, 0, len(nodes))
	nodeids := make(map[int64]*NotificationType)
	for i := range nodes {
		fks = append(fks, nodes[i].ID)
		nodeids[nodes[i].ID] = nodes[i]
		if init != nil {
			init(nodes[i])
		}
	}
	query.withFKs = true
	query.Where(predicate.Notification(func(s *sql.Selector) {
		s.Where(sql.InValues(notificationtype.NotificationsColumn, fks...))
	}))
	neighbors, err := query.All(ctx)
	if err != nil {
		return err
	}
	for _, n := range neighbors {
		fk := n.notification_type_notifications
		if fk == nil {
			return fmt.Errorf(`foreign-key "notification_type_notifications" is nil for node %v`, n.ID)
		}
		node, ok := nodeids[*fk]
		if !ok {
			return fmt.Errorf(`unexpected foreign-key "notification_type_notifications" returned %v for node %v`, *fk, n.ID)
		}
		assign(node, n)
	}
	return nil
}

func (ntq *NotificationTypeQuery) sqlCount(ctx context.Context) (int, error) {
	_spec := ntq.querySpec()
	_spec.Node.Columns = ntq.ctx.Fields
	if len(ntq.ctx.Fields) > 0 {
		_spec.Unique = ntq.ctx.Unique != nil && *ntq.ctx.Unique
	}
	return sqlgraph.CountNodes(ctx, ntq.driver, _spec)
}

func (ntq *NotificationTypeQuery) querySpec() *sqlgraph.QuerySpec {
	_spec := &sqlgraph.QuerySpec{
		Node: &sqlgraph.NodeSpec{
			Table:   notificationtype.Table,
			Columns: notificationtype.Columns,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt64,
				Column: notificationtype.FieldID,
			},
		},
		From:   ntq.sql,
		Unique: true,
	}
	if unique := ntq.ctx.Unique; unique != nil {
		_spec.Unique = *unique
	}
	if fields := ntq.ctx.Fields; len(fields) > 0 {
		_spec.Node.Columns = make([]string, 0, len(fields))
		_spec.Node.Columns = append(_spec.Node.Columns, notificationtype.FieldID)
		for i := range fields {
			if fields[i] != notificationtype.FieldID {
				_spec.Node.Columns = append(_spec.Node.Columns, fields[i])
			}
		}
	}
	if ps := ntq.predicates; len(ps) > 0 {
		_spec.Predicate = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	if limit := ntq.ctx.Limit; limit != nil {
		_spec.Limit = *limit
	}
	if offset := ntq.ctx.Offset; offset != nil {
		_spec.Offset = *offset
	}
	if ps := ntq.order; len(ps) > 0 {
		_spec.Order = func(selector *sql.Selector) {
			for i := range ps {
				ps[i](selector)
			}
		}
	}
	return _spec
}

func (ntq *NotificationTypeQuery) sqlQuery(ctx context.Context) *sql.Selector {
	builder := sql.Dialect(ntq.driver.Dialect())
	t1 := builder.Table(notificationtype.Table)
	columns := ntq.ctx.Fields
	if len(columns) == 0 {
		columns = notificationtype.Columns
	}
	selector := builder.Select(t1.Columns(columns...)...).From(t1)
	if ntq.sql != nil {
		selector = ntq.sql
		selector.Select(selector.Columns(columns...)...)
	}
	if ntq.ctx.Unique != nil && *ntq.ctx.Unique {
		selector.Distinct()
	}
	for _, p := range ntq.predicates {
		p(selector)
	}
	for _, p := range ntq.order {
		p(selector)
	}
	if offset := ntq.ctx.Offset; offset != nil {
		// limit is mandatory for offset clause. We start
		// with default value, and override it below if needed.
		selector.Offset(*offset).Limit(math.MaxInt32)
	}
	if limit := ntq.ctx.Limit; limit != nil {
		selector.Limit(*limit)
	}
	return selector
}

// NotificationTypeGroupBy is the group-by builder for NotificationType entities.
type NotificationTypeGroupBy struct {
	selector
	build *NotificationTypeQuery
}

// Aggregate adds the given aggregation functions to the group-by query.
func (ntgb *NotificationTypeGroupBy) Aggregate(fns ...AggregateFunc) *NotificationTypeGroupBy {
	ntgb.fns = append(ntgb.fns, fns...)
	return ntgb
}

// Scan applies the selector query and scans the result into the given value.
func (ntgb *NotificationTypeGroupBy) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, ntgb.build.ctx, "GroupBy")
	if err := ntgb.build.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*NotificationTypeQuery, *NotificationTypeGroupBy](ctx, ntgb.build, ntgb, ntgb.build.inters, v)
}

func (ntgb *NotificationTypeGroupBy) sqlScan(ctx context.Context, root *NotificationTypeQuery, v any) error {
	selector := root.sqlQuery(ctx).Select()
	aggregation := make([]string, 0, len(ntgb.fns))
	for _, fn := range ntgb.fns {
		aggregation = append(aggregation, fn(selector))
	}
	if len(selector.SelectedColumns()) == 0 {
		columns := make([]string, 0, len(*ntgb.flds)+len(ntgb.fns))
		for _, f := range *ntgb.flds {
			columns = append(columns, selector.C(f))
		}
		columns = append(columns, aggregation...)
		selector.Select(columns...)
	}
	selector.GroupBy(selector.Columns(*ntgb.flds...)...)
	if err := selector.Err(); err != nil {
		return err
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := ntgb.build.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}

// NotificationTypeSelect is the builder for selecting fields of NotificationType entities.
type NotificationTypeSelect struct {
	*NotificationTypeQuery
	selector
}

// Aggregate adds the given aggregation functions to the selector query.
func (nts *NotificationTypeSelect) Aggregate(fns ...AggregateFunc) *NotificationTypeSelect {
	nts.fns = append(nts.fns, fns...)
	return nts
}

// Scan applies the selector query and scans the result into the given value.
func (nts *NotificationTypeSelect) Scan(ctx context.Context, v any) error {
	ctx = setContextOp(ctx, nts.ctx, "Select")
	if err := nts.prepareQuery(ctx); err != nil {
		return err
	}
	return scanWithInterceptors[*NotificationTypeQuery, *NotificationTypeSelect](ctx, nts.NotificationTypeQuery, nts, nts.inters, v)
}

func (nts *NotificationTypeSelect) sqlScan(ctx context.Context, root *NotificationTypeQuery, v any) error {
	selector := root.sqlQuery(ctx)
	aggregation := make([]string, 0, len(nts.fns))
	for _, fn := range nts.fns {
		aggregation = append(aggregation, fn(selector))
	}
	switch n := len(*nts.selector.flds); {
	case n == 0 && len(aggregation) > 0:
		selector.Select(aggregation...)
	case n != 0 && len(aggregation) > 0:
		selector.AppendSelect(aggregation...)
	}
	rows := &sql.Rows{}
	query, args := selector.Query()
	if err := nts.driver.Query(ctx, query, args, rows); err != nil {
		return err
	}
	defer rows.Close()
	return sql.ScanSlice(rows, v)
}
