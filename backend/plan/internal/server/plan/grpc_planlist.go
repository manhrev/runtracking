package plan

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	"github.com/manhrev/runtracking/backend/plan/internal/transformer"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planServer) ListPlan(ctx context.Context, request *plan.ListPlanRequest) (*plan.ListPlanReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	plans, total, err := s.repository.Plan.List(
		ctx,
		userId,
		request.GetLimit(),
		request.GetOffset(),
		request.GetAscending(),
		request.GetSortBy(),
		request.GetActivityType(),
		request.GetFrom(),
		request.GetTo(),
	)

	return &plan.ListPlanReply{
		Total: total,
		Plans: transformer.TransformPlanListEntToPlanList(plans),
	}, nil
}
