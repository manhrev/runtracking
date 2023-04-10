package activity

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func NewServer(entClient *ent.Client, planIClient plan.PlanIClient, groupIClient group.GroupIClient) activity.ActivityServer {
	return &activityServer{
		repository:   repository.New(entClient),
		planIClient:  planIClient,
		groupIClient: groupIClient,
	}
}

type activityServer struct {
	repository   *repository.Repository
	planIClient  plan.PlanIClient
	groupIClient group.GroupIClient
	// Other service client connection, db adapter go here
	activity.UnimplementedActivityServer
}
