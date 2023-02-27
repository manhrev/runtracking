// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// PlansColumns holds the columns for the "plans" table.
	PlansColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "user_id", Type: field.TypeInt64},
		{Name: "rule", Type: field.TypeInt64, Default: 0},
		{Name: "activity_type", Type: field.TypeInt64, Default: 0},
		{Name: "start_time", Type: field.TypeTime},
		{Name: "end_time", Type: field.TypeTime},
		{Name: "total", Type: field.TypeInt64, Default: 0},
		{Name: "goal", Type: field.TypeInt64},
		{Name: "status", Type: field.TypeInt64, Default: 3},
		{Name: "progess", Type: field.TypeJSON, Nullable: true},
		{Name: "created_at", Type: field.TypeTime},
		{Name: "name", Type: field.TypeString},
		{Name: "note", Type: field.TypeString, Nullable: true},
		{Name: "time_zone", Type: field.TypeUint32},
	}
	// PlansTable holds the schema information for the "plans" table.
	PlansTable = &schema.Table{
		Name:       "plans",
		Columns:    PlansColumns,
		PrimaryKey: []*schema.Column{PlansColumns[0]},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		PlansTable,
	}
)

func init() {
}
