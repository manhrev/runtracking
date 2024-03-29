package event

import (
	"context"

	"github.com/manhrev/runtracking/backend/event/internal/transformer"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
)

func (s *eventServer) ListEvents(ctx context.Context, request *event.ListEventsRequest) (*event.ListEventsReply, error) {
	entEvents, total, err := s.repository.Member.ListEvents(
		ctx,
		request.GetLimit(),
		request.GetOffset(),
		request.GetAscending(),
		request.GetGroupIds(),
		request.GetVisibility(),
		request.GetSearch(),
		request.GetSortBy(),
		request.GetIds(),
	)
	if err != nil {
		return nil, err
	}

	return &event.ListEventsReply{
		Events: transformer.TransformEventEntListToEventList(entEvents, request.GetYourGroupId()),
		Total:  total,
	}, nil
}
