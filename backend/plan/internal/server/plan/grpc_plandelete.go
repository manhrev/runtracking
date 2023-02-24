package plan

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
)

func (s *planServer) DeletePlans(ctx context.Context, request *plan.DeletePlansRequest) (*plan.DeletePlansReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Plan.Delete(ctx, userId, request.GetIds())
	if err != nil {
		return nil, err
	}

	return &plan.DeletePlansReply{}, nil
}
