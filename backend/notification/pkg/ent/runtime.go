// Code generated by ent, DO NOT EDIT.

package ent

import (
	"time"

	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/schema"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	notificationFields := schema.Notification{}.Fields()
	_ = notificationFields
	// notificationDescSourceImage is the schema descriptor for source_image field.
	notificationDescSourceImage := notificationFields[4].Descriptor()
	// notification.DefaultSourceImage holds the default value on creation for the source_image field.
	notification.DefaultSourceImage = notificationDescSourceImage.Default.(string)
	notificationuserFields := schema.NotificationUser{}.Fields()
	_ = notificationuserFields
	// notificationuserDescCreatedAt is the schema descriptor for created_at field.
	notificationuserDescCreatedAt := notificationuserFields[3].Descriptor()
	// notificationuser.DefaultCreatedAt holds the default value on creation for the created_at field.
	notificationuser.DefaultCreatedAt = notificationuserDescCreatedAt.Default.(func() time.Time)
}
