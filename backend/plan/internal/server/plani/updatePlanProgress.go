package plani

import (
	"context"

	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planIServer) UpdatePlanProgress(ctx context.Context, request *plan.UpdatePlanProgressRequest) (*plan.UpdatePlanProgressReply, error) {

	err := s.repository.Plan.UpdateProgress(
		ctx,
		request.GetPlanId(),
		request.GetIncrementValue(),
		request.GetTime(),
	)
	if err != nil {
		return nil, err
	}

	return &plan.UpdatePlanProgressReply{}, nil
}
