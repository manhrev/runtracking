package repository

import (
	"github.com/manhrev/runtracking/backend/event/internal/repository/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

type Repository struct {
	entClient *ent.Client
	Event     event.Event
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		Event:     event.New(entClient),
	}
}
