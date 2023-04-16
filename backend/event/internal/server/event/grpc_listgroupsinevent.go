package event

import (
	"context"

	"github.com/manhrev/runtracking/backend/event/internal/transformer"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
)

func (s *eventServer) ListGroupsInEvent(ctx context.Context, request *event.ListGroupsInEventRequest) (*event.ListGroupsInEventReply, error) {
	participate, total, err := s.repository.Member.ListGroupsInEvent(
		ctx,
		request.GetEventId(),
		request.GetLimit(),
		request.GetOffset(),
	)
	if err != nil {
		return nil, err
	}

	return &event.ListGroupsInEventReply{
		Groups: transformer.TransformEntParticipateListToGroupList(participate),
		Total:  total,
	}, nil
}
