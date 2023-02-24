package plan

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planServer) CreatePlan(ctx context.Context, request *plan.CreatePlanRequest) (*plan.CreatePlanReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Plan.Create(
		ctx,
		userId,
		request.GetRule(),
		request.GetActivityType(),
		request.GetGoal(),
		request.GetName(),
		request.GetNote(),
		request.GetStartTime(),
		request.GetEndTime(),
	)

	if err != nil {
		return nil, err
	}

	return &plan.CreatePlanReply{}, nil
}
