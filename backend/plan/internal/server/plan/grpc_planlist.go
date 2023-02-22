package plan

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planServer) ListPlan(ctx context.Context, request *plan.ListPlanRequest) (*plan.ListPlanReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	println(userId)

	return &plan.ListPlanReply{}, nil
}
