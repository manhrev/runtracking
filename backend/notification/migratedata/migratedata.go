package migratedata

import (
	"context"
	"fmt"

	"ariga.io/atlas/sql/migrate"
	"entgo.io/ent/dialect"
	"entgo.io/ent/dialect/sql/schema"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

// SeedUsers add the initial users to the database.
func SeedNotificationType(dir *migrate.LocalDir) error {
	w := &schema.DirWriter{Dir: dir}
	client := ent.NewClient(ent.Driver(schema.NewWriteDriver(dialect.MySQL, w)))

	// The statement that generates the INSERT statement.
	err := client.NotificationType.CreateBulk(
		client.NotificationType.Create().SetTypeName("ALLUSERS"),
		client.NotificationType.Create().SetTypeName("MEMBERS_OF_GROUP"),
		client.NotificationType.Create().SetTypeName("GROUPS_OF_EVENT"),
		client.NotificationType.Create().SetTypeName("ONLYUSER"),
	).Exec(context.Background())
	if err != nil {
		return fmt.Errorf("failed generating statement: %w", err)
	}

	// Write the content to the migration directory.
	return w.FlushChange(
		"seed_notification_type",
		"Add the initial notification type to the database.",
	)
}
