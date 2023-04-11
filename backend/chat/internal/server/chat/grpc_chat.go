package chat

import (
	"github.com/manhrev/runtracking/backend/chat/internal/repository"
	chat "github.com/manhrev/runtracking/backend/chat/pkg/api"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
)

func NewServer(entClient *ent.Client) chat.ChatServer {
	return &chatServer{
		entClient:  entClient,
		repository: repository.New(entClient),
	}
}

type chatServer struct {
	entClient  *ent.Client
	repository *repository.Repository
	// Other service client connection, db adapter go here
	chat.UnimplementedChatServer
}
