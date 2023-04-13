package repository

import (
	"github.com/manhrev/runtracking/backend/chat/internal/repository/message"
	"github.com/manhrev/runtracking/backend/chat/pkg/ent"
)

type Repository struct {
	entClient *ent.Client

	Message message.Message
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		Message:   message.New(entClient),
	}
}
