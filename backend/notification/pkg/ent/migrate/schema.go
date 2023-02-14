// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// NotificationsColumns holds the columns for the "notifications" table.
	NotificationsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "message", Type: field.TypeString, Nullable: true},
		{Name: "type_id", Type: field.TypeInt64},
		{Name: "scheduled_time", Type: field.TypeTime, Nullable: true},
		{Name: "notification_type_notifications", Type: field.TypeInt64, Nullable: true},
	}
	// NotificationsTable holds the schema information for the "notifications" table.
	NotificationsTable = &schema.Table{
		Name:       "notifications",
		Columns:    NotificationsColumns,
		PrimaryKey: []*schema.Column{NotificationsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "notifications_notification_types_notifications",
				Columns:    []*schema.Column{NotificationsColumns[4]},
				RefColumns: []*schema.Column{NotificationTypesColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// NotificationTypesColumns holds the columns for the "notification_types" table.
	NotificationTypesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "type_name", Type: field.TypeString, Nullable: true},
		{Name: "notification_user_notifications", Type: field.TypeInt64, Nullable: true},
	}
	// NotificationTypesTable holds the schema information for the "notification_types" table.
	NotificationTypesTable = &schema.Table{
		Name:       "notification_types",
		Columns:    NotificationTypesColumns,
		PrimaryKey: []*schema.Column{NotificationTypesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "notification_types_notification_users_notifications",
				Columns:    []*schema.Column{NotificationTypesColumns[2]},
				RefColumns: []*schema.Column{NotificationUsersColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// NotificationUsersColumns holds the columns for the "notification_users" table.
	NotificationUsersColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "user_id", Type: field.TypeInt64},
		{Name: "is_seen", Type: field.TypeBool, Nullable: true},
		{Name: "created_at", Type: field.TypeTime},
	}
	// NotificationUsersTable holds the schema information for the "notification_users" table.
	NotificationUsersTable = &schema.Table{
		Name:       "notification_users",
		Columns:    NotificationUsersColumns,
		PrimaryKey: []*schema.Column{NotificationUsersColumns[0]},
	}
	// UserDevicesColumns holds the columns for the "user_devices" table.
	UserDevicesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "user_id", Type: field.TypeInt64},
		{Name: "expo_push_token", Type: field.TypeString, Nullable: true},
	}
	// UserDevicesTable holds the schema information for the "user_devices" table.
	UserDevicesTable = &schema.Table{
		Name:       "user_devices",
		Columns:    UserDevicesColumns,
		PrimaryKey: []*schema.Column{UserDevicesColumns[0]},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		NotificationsTable,
		NotificationTypesTable,
		NotificationUsersTable,
		UserDevicesTable,
	}
)

func init() {
	NotificationsTable.ForeignKeys[0].RefTable = NotificationTypesTable
	NotificationTypesTable.ForeignKeys[0].RefTable = NotificationUsersTable
}