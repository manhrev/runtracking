package activity

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func NewServer(
	entClient *ent.Client,
	planIClient plan.PlanIClient,
	groupIClient group.GroupIClient,
	eventIClient event.EventIClient,
) activity.ActivityServer {
	return &activityServer{
		repository:   repository.New(entClient),
		planIClient:  planIClient,
		groupIClient: groupIClient,
		eventIClient: eventIClient,
	}
}

type activityServer struct {
	repository   *repository.Repository
	planIClient  plan.PlanIClient
	groupIClient group.GroupIClient
	eventIClient event.EventIClient
	// Other service client connection, db adapter go here
	activity.UnimplementedActivityServer
}
