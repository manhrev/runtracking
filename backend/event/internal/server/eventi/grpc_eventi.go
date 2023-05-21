package eventi

import (
	"github.com/manhrev/runtracking/backend/event/internal/repository"
	eventi "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

func NewServer(eventClient *ent.Client) eventi.EventIServer {
	return &eventIServer{
		repository: repository.New(eventClient),
	}
}

type eventIServer struct {
	repository *repository.Repository
	// Other service client connection, db adapter go here
	eventi.UnimplementedEventIServer
}
