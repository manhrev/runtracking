package repository

import (
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/internal/repository/plan"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

type Repository struct {
	entClient *ent.Client
	Plan      plan.Plan
}

func New(entClient *ent.Client, notificationIClient notification.NotificationIClient) *Repository {
	return &Repository{
		entClient: entClient,
		Plan:      plan.New(entClient, notificationIClient),
	}
}
