// Code generated by ent, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"log"

	"github.com/manhrev/runtracking/backend/plan/pkg/ent/migrate"

	"github.com/manhrev/runtracking/backend/plan/pkg/ent/plan"

	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/sql"
)

// Client is the client that holds all ent builders.
type Client struct {
	config
	// Schema is the client for creating, migrating and dropping schema.
	Schema *migrate.Schema
	// Plan is the client for interacting with the Plan builders.
	Plan *PlanClient
}

// NewClient creates a new client configured with the given options.
func NewClient(opts ...Option) *Client {
	cfg := config{log: log.Println, hooks: &hooks{}, inters: &inters{}}
	cfg.options(opts...)
	client := &Client{config: cfg}
	client.init()
	return client
}

func (c *Client) init() {
	c.Schema = migrate.NewSchema(c.driver)
	c.Plan = NewPlanClient(c.config)
}

// Open opens a database/sql.DB specified by the driver name and
// the data source name, and returns a new client attached to it.
// Optional parameters can be added for configuring the client.
func Open(driverName, dataSourceName string, options ...Option) (*Client, error) {
	switch driverName {
	case dialect.MySQL, dialect.Postgres, dialect.SQLite:
		drv, err := sql.Open(driverName, dataSourceName)
		if err != nil {
			return nil, err
		}
		return NewClient(append(options, Driver(drv))...), nil
	default:
		return nil, fmt.Errorf("unsupported driver: %q", driverName)
	}
}

// Tx returns a new transactional client. The provided context
// is used until the transaction is committed or rolled back.
func (c *Client) Tx(ctx context.Context) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := newTx(ctx, c.driver)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = tx
	return &Tx{
		ctx:    ctx,
		config: cfg,
		Plan:   NewPlanClient(cfg),
	}, nil
}

// BeginTx returns a transactional client with specified options.
func (c *Client) BeginTx(ctx context.Context, opts *sql.TxOptions) (*Tx, error) {
	if _, ok := c.driver.(*txDriver); ok {
		return nil, errors.New("ent: cannot start a transaction within a transaction")
	}
	tx, err := c.driver.(interface {
		BeginTx(context.Context, *sql.TxOptions) (dialect.Tx, error)
	}).BeginTx(ctx, opts)
	if err != nil {
		return nil, fmt.Errorf("ent: starting a transaction: %w", err)
	}
	cfg := c.config
	cfg.driver = &txDriver{tx: tx, drv: c.driver}
	return &Tx{
		ctx:    ctx,
		config: cfg,
		Plan:   NewPlanClient(cfg),
	}, nil
}

// Debug returns a new debug-client. It's used to get verbose logging on specific operations.
//
//	client.Debug().
//		Plan.
//		Query().
//		Count(ctx)
//
func (c *Client) Debug() *Client {
	if c.debug {
		return c
	}
	cfg := c.config
	cfg.driver = dialect.Debug(c.driver, c.log)
	client := &Client{config: cfg}
	client.init()
	return client
}

// Close closes the database connection and prevents new queries from starting.
func (c *Client) Close() error {
	return c.driver.Close()
}

// Use adds the mutation hooks to all the entity clients.
// In order to add hooks to a specific client, call: `client.Node.Use(...)`.
func (c *Client) Use(hooks ...Hook) {
	c.Plan.Use(hooks...)
}

// Intercept adds the query interceptors to all the entity clients.
// In order to add interceptors to a specific client, call: `client.Node.Intercept(...)`.
func (c *Client) Intercept(interceptors ...Interceptor) {
	c.Plan.Intercept(interceptors...)
}

// Mutate implements the ent.Mutator interface.
func (c *Client) Mutate(ctx context.Context, m Mutation) (Value, error) {
	switch m := m.(type) {
	case *PlanMutation:
		return c.Plan.mutate(ctx, m)
	default:
		return nil, fmt.Errorf("ent: unknown mutation type %T", m)
	}
}

// PlanClient is a client for the Plan schema.
type PlanClient struct {
	config
}

// NewPlanClient returns a client for the Plan from the given config.
func NewPlanClient(c config) *PlanClient {
	return &PlanClient{config: c}
}

// Use adds a list of mutation hooks to the hooks stack.
// A call to `Use(f, g, h)` equals to `plan.Hooks(f(g(h())))`.
func (c *PlanClient) Use(hooks ...Hook) {
	c.hooks.Plan = append(c.hooks.Plan, hooks...)
}

// Intercept adds a list of query interceptors to the interceptors stack.
// A call to `Intercept(f, g, h)` equals to `plan.Intercept(f(g(h())))`.
func (c *PlanClient) Intercept(interceptors ...Interceptor) {
	c.inters.Plan = append(c.inters.Plan, interceptors...)
}

// Create returns a builder for creating a Plan entity.
func (c *PlanClient) Create() *PlanCreate {
	mutation := newPlanMutation(c.config, OpCreate)
	return &PlanCreate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// CreateBulk returns a builder for creating a bulk of Plan entities.
func (c *PlanClient) CreateBulk(builders ...*PlanCreate) *PlanCreateBulk {
	return &PlanCreateBulk{config: c.config, builders: builders}
}

// Update returns an update builder for Plan.
func (c *PlanClient) Update() *PlanUpdate {
	mutation := newPlanMutation(c.config, OpUpdate)
	return &PlanUpdate{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOne returns an update builder for the given entity.
func (c *PlanClient) UpdateOne(pl *Plan) *PlanUpdateOne {
	mutation := newPlanMutation(c.config, OpUpdateOne, withPlan(pl))
	return &PlanUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// UpdateOneID returns an update builder for the given id.
func (c *PlanClient) UpdateOneID(id int64) *PlanUpdateOne {
	mutation := newPlanMutation(c.config, OpUpdateOne, withPlanID(id))
	return &PlanUpdateOne{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// Delete returns a delete builder for Plan.
func (c *PlanClient) Delete() *PlanDelete {
	mutation := newPlanMutation(c.config, OpDelete)
	return &PlanDelete{config: c.config, hooks: c.Hooks(), mutation: mutation}
}

// DeleteOne returns a builder for deleting the given entity.
func (c *PlanClient) DeleteOne(pl *Plan) *PlanDeleteOne {
	return c.DeleteOneID(pl.ID)
}

// DeleteOneID returns a builder for deleting the given entity by its id.
func (c *PlanClient) DeleteOneID(id int64) *PlanDeleteOne {
	builder := c.Delete().Where(plan.ID(id))
	builder.mutation.id = &id
	builder.mutation.op = OpDeleteOne
	return &PlanDeleteOne{builder}
}

// Query returns a query builder for Plan.
func (c *PlanClient) Query() *PlanQuery {
	return &PlanQuery{
		config: c.config,
		ctx:    &QueryContext{Type: TypePlan},
		inters: c.Interceptors(),
	}
}

// Get returns a Plan entity by its id.
func (c *PlanClient) Get(ctx context.Context, id int64) (*Plan, error) {
	return c.Query().Where(plan.ID(id)).Only(ctx)
}

// GetX is like Get, but panics if an error occurs.
func (c *PlanClient) GetX(ctx context.Context, id int64) *Plan {
	obj, err := c.Get(ctx, id)
	if err != nil {
		panic(err)
	}
	return obj
}

// Hooks returns the client hooks.
func (c *PlanClient) Hooks() []Hook {
	return c.hooks.Plan
}

// Interceptors returns the client interceptors.
func (c *PlanClient) Interceptors() []Interceptor {
	return c.inters.Plan
}

func (c *PlanClient) mutate(ctx context.Context, m *PlanMutation) (Value, error) {
	switch m.Op() {
	case OpCreate:
		return (&PlanCreate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdate:
		return (&PlanUpdate{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpUpdateOne:
		return (&PlanUpdateOne{config: c.config, hooks: c.Hooks(), mutation: m}).Save(ctx)
	case OpDelete, OpDeleteOne:
		return (&PlanDelete{config: c.config, hooks: c.Hooks(), mutation: m}).Exec(ctx)
	default:
		return nil, fmt.Errorf("ent: unknown Plan mutation op: %q", m.Op())
	}
}