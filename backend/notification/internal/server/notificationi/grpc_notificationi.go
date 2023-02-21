package notificationi

import (
	"github.com/manhrev/runtracking/backend/notification/internal/repository"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewServer(entClient *ent.Client) notification.NotificationIServer {
	return &notificationIServer{
		entClient:  entClient,
		repository: repository.New(entClient),
	}
}

type notificationIServer struct {
	entClient  *ent.Client
	repository *repository.Repository
	// Other service client connection, db adapter go here
	notification.UnimplementedNotificationIServer
}
