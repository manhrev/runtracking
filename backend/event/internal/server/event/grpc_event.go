package event

import (
	"github.com/manhrev/runtracking/backend/event/internal/repository"
	plan "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

func NewServer(entClient *ent.Client) plan.EventServer {
	return &eventServer{
		repository: repository.New(entClient),
	}
}

type eventServer struct {
	repository *repository.Repository
	// Other service client connection, db adapter go here
	plan.UnimplementedEventServer
}
