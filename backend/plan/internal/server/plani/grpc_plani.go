package plani

import (
	"github.com/manhrev/runtracking/backend/plan/internal/repository"
	plani "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

func NewServer(entClient *ent.Client) plani.PlanIServer {
	return &planIServer{
		repository: repository.New(entClient),
	}
}

type planIServer struct {
	repository *repository.Repository
	// Other service client connection, db adapter go here
	plani.UnimplementedPlanIServer
}
