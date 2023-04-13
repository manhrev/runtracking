package chat

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/chat/internal/repository"
	chat "github.com/manhrev/runtracking/backend/chat/pkg/api"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func NewServer(entClient *ent.Client,
	notificationClient notification.NotificationIClient,
	authClient auth.AuthIClient) chat.ChatServer {
	return &chatServer{
		entClient:          entClient,
		repository:         repository.New(entClient),
		notificationClient: notificationClient,
		authClient:         authClient,
	}
}

type chatServer struct {
	entClient          *ent.Client
	repository         *repository.Repository
	notificationClient notification.NotificationIClient
	authClient         auth.AuthIClient
	// Other service client connection, db adapter go here
	chat.UnimplementedChatServer
}
