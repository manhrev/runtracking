package eventi

import (
	"context"

	event "github.com/manhrev/runtracking/backend/event/pkg/api"
)

func (s *eventIServer) UpdateEventProgress(ctx context.Context, request *event.UpdateEventProgressRequest) (*event.UpdateEventProgressReply, error) {
	_, err := s.repository.Event.UpdateEventProgress(
		ctx,
		request,
	)
	if err != nil {
		return nil, err
	}

	return &event.UpdateEventProgressReply{}, nil
}
