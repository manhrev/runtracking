package repository

import (
	"github.com/manhrev/runtracking/backend/notification/internal/repository/notification"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

type Repository struct {
	entClient *ent.Client

	Notification notification.Notification
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient:    entClient,
		Notification: notification.New(entClient),
	}
}
