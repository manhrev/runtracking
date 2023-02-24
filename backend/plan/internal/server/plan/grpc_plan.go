package plan

import (
	"github.com/manhrev/runtracking/backend/plan/internal/repository"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
)

func NewServer(entClient *ent.Client) plan.PlanServer {
	return &planServer{
		repository: repository.New(entClient),
	}
}

type planServer struct {
	repository *repository.Repository
	// Other service client connection, db adapter go here
	plan.UnimplementedPlanServer
}
