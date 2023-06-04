package event

import (
	"github.com/manhrev/runtracking/backend/event/internal/repository"
	plan "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func NewServer(entClient *ent.Client, groupIClient group.GroupIClient, notificationIClient notification.NotificationIClient) plan.EventServer {
	return &eventServer{
		repository:          repository.New(entClient),
		groupIClient:        groupIClient,
		notificationIClient: notificationIClient,
	}
}

type eventServer struct {
	repository          *repository.Repository
	groupIClient        group.GroupIClient
	notificationIClient notification.NotificationIClient
	// Other service client connection, db adapter go here
	plan.UnimplementedEventServer
}
