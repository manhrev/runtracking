package groupi

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/service"
	groupi "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func NewServer(entClient *ent.Client,
	authClient auth.AuthIClient,
	notificationIClient notification.NotificationIClient) groupi.GroupIServer {
	return &groupIServer{
		service:             service.New(entClient, authClient, notificationIClient),
		notificationIClient: notificationIClient,
		entClient:           entClient,
	}
}

type groupIServer struct {
	service             *service.Service
	notificationIClient notification.NotificationIClient
	entClient           *ent.Client
	// Other service client connection, db adapter go here
	groupi.UnimplementedGroupIServer
}
