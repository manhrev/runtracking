// Code generated by ent, DO NOT EDIT.

package migrate

import (
	"entgo.io/ent/dialect/sql/schema"
	"entgo.io/ent/schema/field"
)

var (
	// EventsColumns holds the columns for the "events" table.
	EventsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "owner_group_id", Type: field.TypeInt64},
		{Name: "name", Type: field.TypeString, Nullable: true},
		{Name: "created_at", Type: field.TypeTime},
		{Name: "start_at", Type: field.TypeTime},
		{Name: "updated_at", Type: field.TypeTime},
		{Name: "picture", Type: field.TypeString, Default: "https://placehold.jp/300x150.png"},
		{Name: "description", Type: field.TypeString, Nullable: true},
		{Name: "status", Type: field.TypeInt64, Default: 0},
		{Name: "is_global", Type: field.TypeBool, Default: false},
		{Name: "number_of_groups", Type: field.TypeUint32},
	}
	// EventsTable holds the schema information for the "events" table.
	EventsTable = &schema.Table{
		Name:       "events",
		Columns:    EventsColumns,
		PrimaryKey: []*schema.Column{EventsColumns[0]},
	}
	// EventGroupzsColumns holds the columns for the "event_groupzs" table.
	EventGroupzsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
	}
	// EventGroupzsTable holds the schema information for the "event_groupzs" table.
	EventGroupzsTable = &schema.Table{
		Name:       "event_groupzs",
		Columns:    EventGroupzsColumns,
		PrimaryKey: []*schema.Column{EventGroupzsColumns[0]},
	}
	// GroupzProgressesColumns holds the columns for the "groupz_progresses" table.
	GroupzProgressesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "group_id", Type: field.TypeInt64},
		{Name: "progress", Type: field.TypeInt64, Default: 0},
		{Name: "sub_event_group", Type: field.TypeInt64, Nullable: true},
	}
	// GroupzProgressesTable holds the schema information for the "groupz_progresses" table.
	GroupzProgressesTable = &schema.Table{
		Name:       "groupz_progresses",
		Columns:    GroupzProgressesColumns,
		PrimaryKey: []*schema.Column{GroupzProgressesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "groupz_progresses_sub_events_group",
				Columns:    []*schema.Column{GroupzProgressesColumns[3]},
				RefColumns: []*schema.Column{SubEventsColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// MemberProgressesColumns holds the columns for the "member_progresses" table.
	MemberProgressesColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "member_id", Type: field.TypeInt64},
		{Name: "user_id", Type: field.TypeInt64},
		{Name: "progress", Type: field.TypeInt64, Default: 0},
		{Name: "groupz_progress_member", Type: field.TypeInt64, Nullable: true},
	}
	// MemberProgressesTable holds the schema information for the "member_progresses" table.
	MemberProgressesTable = &schema.Table{
		Name:       "member_progresses",
		Columns:    MemberProgressesColumns,
		PrimaryKey: []*schema.Column{MemberProgressesColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "member_progresses_groupz_progresses_member",
				Columns:    []*schema.Column{MemberProgressesColumns[4]},
				RefColumns: []*schema.Column{GroupzProgressesColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// ParticipatesColumns holds the columns for the "participates" table.
	ParticipatesColumns = []*schema.Column{
		{Name: "joined_at", Type: field.TypeTime},
		{Name: "status", Type: field.TypeInt64, Default: 0},
		{Name: "event_id", Type: field.TypeInt64},
		{Name: "event_group_id", Type: field.TypeInt64},
	}
	// ParticipatesTable holds the schema information for the "participates" table.
	ParticipatesTable = &schema.Table{
		Name:       "participates",
		Columns:    ParticipatesColumns,
		PrimaryKey: []*schema.Column{ParticipatesColumns[2], ParticipatesColumns[3]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "participates_events_event",
				Columns:    []*schema.Column{ParticipatesColumns[2]},
				RefColumns: []*schema.Column{EventsColumns[0]},
				OnDelete:   schema.NoAction,
			},
			{
				Symbol:     "participates_event_groupzs_event_group",
				Columns:    []*schema.Column{ParticipatesColumns[3]},
				RefColumns: []*schema.Column{EventGroupzsColumns[0]},
				OnDelete:   schema.NoAction,
			},
		},
	}
	// SubEventsColumns holds the columns for the "sub_events" table.
	SubEventsColumns = []*schema.Column{
		{Name: "id", Type: field.TypeInt64, Increment: true},
		{Name: "name", Type: field.TypeString, Nullable: true},
		{Name: "picture", Type: field.TypeString, Default: "https://placehold.jp/300x200.png"},
		{Name: "start_date", Type: field.TypeTime},
		{Name: "end_date", Type: field.TypeTime},
		{Name: "description", Type: field.TypeString, Nullable: true},
		{Name: "goal", Type: field.TypeInt64, Default: 0},
		{Name: "rule", Type: field.TypeInt64},
		{Name: "activity_type", Type: field.TypeInt64},
		{Name: "status", Type: field.TypeInt64, Default: 1},
		{Name: "event_subevents", Type: field.TypeInt64, Nullable: true},
	}
	// SubEventsTable holds the schema information for the "sub_events" table.
	SubEventsTable = &schema.Table{
		Name:       "sub_events",
		Columns:    SubEventsColumns,
		PrimaryKey: []*schema.Column{SubEventsColumns[0]},
		ForeignKeys: []*schema.ForeignKey{
			{
				Symbol:     "sub_events_events_subevents",
				Columns:    []*schema.Column{SubEventsColumns[10]},
				RefColumns: []*schema.Column{EventsColumns[0]},
				OnDelete:   schema.SetNull,
			},
		},
	}
	// Tables holds all the tables in the schema.
	Tables = []*schema.Table{
		EventsTable,
		EventGroupzsTable,
		GroupzProgressesTable,
		MemberProgressesTable,
		ParticipatesTable,
		SubEventsTable,
	}
)

func init() {
	GroupzProgressesTable.ForeignKeys[0].RefTable = SubEventsTable
	MemberProgressesTable.ForeignKeys[0].RefTable = GroupzProgressesTable
	ParticipatesTable.ForeignKeys[0].RefTable = EventsTable
	ParticipatesTable.ForeignKeys[1].RefTable = EventGroupzsTable
	SubEventsTable.ForeignKeys[0].RefTable = EventsTable
}
