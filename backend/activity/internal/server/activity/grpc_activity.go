package activity

import (
	activity "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
)

func NewServer(entClient *ent.Client) activity.ActivityServer {
	return &sampleServer{
		entClient: entClient,
	}
}

type sampleServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	activity.UnimplementedActivityServer
}
