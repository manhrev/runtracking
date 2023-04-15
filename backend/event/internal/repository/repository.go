package repository

import (
	"github.com/manhrev/runtracking/backend/event/internal/repository/admin"
	"github.com/manhrev/runtracking/backend/event/internal/repository/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

type Repository struct {
	entClient *ent.Client
	Event     event.Event
	Admin     admin.Admin
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		Event:     event.New(entClient),
		Admin:     admin.New(entClient),
	}
}
