package notification

import (
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewServer(entClient *ent.Client) notification.NotificationServer {
	return &notificationServer{
		entClient: entClient,
	}
}

type notificationServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	notification.UnimplementedNotificationServer
}
