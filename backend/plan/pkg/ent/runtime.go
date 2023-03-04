// Code generated by ent, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/manhrev/runtracking/backend/plan/pkg/ent/plan"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/schema"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	planFields := schema.Plan{}.Fields()
	_ = planFields
	// planDescRule is the schema descriptor for rule field.
	planDescRule := planFields[2].Descriptor()
	// plan.DefaultRule holds the default value on creation for the rule field.
	plan.DefaultRule = planDescRule.Default.(int64)
	// planDescActivityType is the schema descriptor for activity_type field.
	planDescActivityType := planFields[3].Descriptor()
	// plan.DefaultActivityType holds the default value on creation for the activity_type field.
	plan.DefaultActivityType = planDescActivityType.Default.(int64)
	// planDescTotal is the schema descriptor for total field.
	planDescTotal := planFields[6].Descriptor()
	// plan.DefaultTotal holds the default value on creation for the total field.
	plan.DefaultTotal = planDescTotal.Default.(int64)
	// planDescStatus is the schema descriptor for status field.
	planDescStatus := planFields[8].Descriptor()
	// plan.DefaultStatus holds the default value on creation for the status field.
	plan.DefaultStatus = planDescStatus.Default.(int64)
	// planDescCreatedAt is the schema descriptor for created_at field.
	planDescCreatedAt := planFields[10].Descriptor()
	// plan.DefaultCreatedAt holds the default value on creation for the created_at field.
	plan.DefaultCreatedAt = planDescCreatedAt.Default.(time.Time)
}