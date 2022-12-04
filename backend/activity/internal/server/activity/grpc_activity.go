package activity

import (
	"github.com/manhrev/runtracking/backend/activity/internal/repository"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
)

func NewServer(entClient *ent.Client) activity.ActivityServer {
	return &activityServer{
		repository: repository.New(entClient),
	}
}

type activityServer struct {
	repository *repository.Repository
	// Other service client connection, db adapter go here
	activity.UnimplementedActivityServer
}
