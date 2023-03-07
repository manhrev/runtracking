package activity

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func NewServer(entClient *ent.Client, planIClient plan.PlanIClient) activity.ActivityServer {
	return &activityServer{
		repository:  repository.New(entClient),
		planIClient: planIClient,
	}
}

type activityServer struct {
	repository  *repository.Repository
	planIClient plan.PlanIClient
	// Other service client connection, db adapter go here
	activity.UnimplementedActivityServer
}
