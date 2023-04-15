// Code generated by ent, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroup"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/memberprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/schema"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	eventFields := schema.Event{}.Fields()
	_ = eventFields
	// eventDescCreatedAt is the schema descriptor for created_at field.
	eventDescCreatedAt := eventFields[3].Descriptor()
	// event.DefaultCreatedAt holds the default value on creation for the created_at field.
	event.DefaultCreatedAt = eventDescCreatedAt.Default.(func() time.Time)
	// eventDescUpdatedAt is the schema descriptor for updated_at field.
	eventDescUpdatedAt := eventFields[4].Descriptor()
	// event.DefaultUpdatedAt holds the default value on creation for the updated_at field.
	event.DefaultUpdatedAt = eventDescUpdatedAt.Default.(func() time.Time)
	// eventDescPicture is the schema descriptor for picture field.
	eventDescPicture := eventFields[5].Descriptor()
	// event.DefaultPicture holds the default value on creation for the picture field.
	event.DefaultPicture = eventDescPicture.Default.(string)
	// eventDescStatus is the schema descriptor for status field.
	eventDescStatus := eventFields[7].Descriptor()
	// event.DefaultStatus holds the default value on creation for the status field.
	event.DefaultStatus = eventDescStatus.Default.(int64)
	// eventDescIsGlobal is the schema descriptor for is_global field.
	eventDescIsGlobal := eventFields[8].Descriptor()
	// event.DefaultIsGlobal holds the default value on creation for the is_global field.
	event.DefaultIsGlobal = eventDescIsGlobal.Default.(bool)
	eventgroupFields := schema.EventGroup{}.Fields()
	_ = eventgroupFields
	// eventgroupDescJoinedAt is the schema descriptor for joined_at field.
	eventgroupDescJoinedAt := eventgroupFields[2].Descriptor()
	// eventgroup.DefaultJoinedAt holds the default value on creation for the joined_at field.
	eventgroup.DefaultJoinedAt = eventgroupDescJoinedAt.Default.(func() time.Time)
	// eventgroupDescStatus is the schema descriptor for status field.
	eventgroupDescStatus := eventgroupFields[3].Descriptor()
	// eventgroup.DefaultStatus holds the default value on creation for the status field.
	eventgroup.DefaultStatus = eventgroupDescStatus.Default.(int64)
	groupprogressFields := schema.GroupProgress{}.Fields()
	_ = groupprogressFields
	// groupprogressDescProgress is the schema descriptor for progress field.
	groupprogressDescProgress := groupprogressFields[2].Descriptor()
	// groupprogress.DefaultProgress holds the default value on creation for the progress field.
	groupprogress.DefaultProgress = groupprogressDescProgress.Default.(int64)
	memberprogressFields := schema.MemberProgress{}.Fields()
	_ = memberprogressFields
	// memberprogressDescProgress is the schema descriptor for progress field.
	memberprogressDescProgress := memberprogressFields[3].Descriptor()
	// memberprogress.DefaultProgress holds the default value on creation for the progress field.
	memberprogress.DefaultProgress = memberprogressDescProgress.Default.(int64)
	subeventFields := schema.SubEvent{}.Fields()
	_ = subeventFields
	// subeventDescPicture is the schema descriptor for picture field.
	subeventDescPicture := subeventFields[2].Descriptor()
	// subevent.DefaultPicture holds the default value on creation for the picture field.
	subevent.DefaultPicture = subeventDescPicture.Default.(string)
	// subeventDescGoal is the schema descriptor for goal field.
	subeventDescGoal := subeventFields[6].Descriptor()
	// subevent.DefaultGoal holds the default value on creation for the goal field.
	subevent.DefaultGoal = subeventDescGoal.Default.(int64)
	// subeventDescStatus is the schema descriptor for status field.
	subeventDescStatus := subeventFields[8].Descriptor()
	// subevent.DefaultStatus holds the default value on creation for the status field.
	subevent.DefaultStatus = subeventDescStatus.Default.(int64)
}