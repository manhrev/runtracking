package event

import (
	"context"

	event "github.com/manhrev/runtracking/backend/event/pkg/api"
)

func (s *eventServer) ListGroupProgressInEvent(ctx context.Context, request *event.ListGroupProgressInEventRequest) (*event.ListGroupProgressInEventReply, error) {
	subEventProgress, err := s.repository.Member.ListGroupProgressInEvent(
		ctx,
		request.GetEventId(),
	)
	if err != nil {
		return nil, err
	}

	return &event.ListGroupProgressInEventReply{
		SubEventProgress: subEventProgress,
	}, nil
}
