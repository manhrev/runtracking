package repository

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository/activity"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
)

type Repository struct {
	entClient *ent.Client

	Activity activity.Activity
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		Activity:  activity.New(entClient),
	}
}
