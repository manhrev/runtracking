package group

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/service"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func NewServer(entClient *ent.Client,
	authClient auth.AuthIClient,
	notificationClient notification.NotificationIClient) group.GroupServer {
	return &groupServer{
		service:            service.New(entClient, authClient, notificationClient),
		notificationClient: notificationClient,
		authClient:         authClient,
	}
}

type groupServer struct {
	service            *service.Service
	notificationClient notification.NotificationIClient
	authClient         auth.AuthIClient
	// Other service client connection, db adapter go here
	group.UnimplementedGroupServer
}
