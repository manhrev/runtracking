package plani

import (
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/internal/repository"
	plani "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

func NewServer(entClient *ent.Client, notificationIClient notification.NotificationIClient) plani.PlanIServer {
	return &planIServer{
		repository:          repository.New(entClient),
		notificationIClient: notificationIClient,
	}
}

type planIServer struct {
	repository          *repository.Repository
	notificationIClient notification.NotificationIClient
	// Other service client connection, db adapter go here
	plani.UnimplementedPlanIServer
}
