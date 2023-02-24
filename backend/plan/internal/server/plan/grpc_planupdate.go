package plan

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planServer) UpdatePlan(ctx context.Context, request *plan.UpdatePlanRequest) (*plan.UpdatePlanReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Plan.Update(
		ctx,
		userId,
		request.GetId(),
		request.GetEndTime(),
		request.GetGoal(),
		request.GetName(),
		request.GetNote(),
	)
	if err != nil {
		return nil, err
	}

	return &plan.UpdatePlanReply{}, nil
}
