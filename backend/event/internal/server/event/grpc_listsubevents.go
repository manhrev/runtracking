package event

import (
	"context"

	"github.com/manhrev/runtracking/backend/event/internal/transformer"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
)

func (s *eventServer) ListSubEvents(ctx context.Context, request *event.ListSubEventsRequest) (*event.ListSubEventsReply, error) {
	// maybe check user participated in this event or not

	entEvents, err := s.repository.Member.ListSubEvents(
		ctx,
		request.GetEventId(),
	)
	if err != nil {
		return nil, err
	}

	return &event.ListSubEventsReply{
		SubEvents: transformer.TransformSubEventEntListToSubEventList(entEvents),
	}, nil
}
