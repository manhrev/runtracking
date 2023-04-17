package member

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

func (m *memberImpl) ListGroupProgressInEvent(
	ctx context.Context,
	eventId int64,
) ([]*event_pb.SubEventProgress, error) {
	subEvents, err := m.entClient.SubEvent.Query().
		Where(
			subevent.HasEventWith(
				event.IDEQ(eventId),
			),
		).
		Order(ent.Desc(subevent.FieldStartDate)).
		WithGroup(
			func(gpq *ent.GroupzProgressQuery) {
				gpq.Order(ent.Desc(groupzprogress.FieldProgress))
			},
		).
		All(ctx)
	if err != nil {
		log.Printf("Error ListGroupProgressInEvent: %v", err)
		return nil, status.Internal(err.Error())
	}

	SubEventProgress := make([]*event_pb.SubEventProgress, len(subEvents))
	for idx, subEvents := range subEvents {
		groupProgress := make([]*event_pb.GroupProgressInSubEvent, len(subEvents.Edges.Group))
		for idx, group := range subEvents.Edges.Group {
			groupProgress[idx] = &event_pb.GroupProgressInSubEvent{
				GroupId:  group.GroupID,
				Progress: group.Progress,
			}
		}
		SubEventProgress[idx] = &event_pb.SubEventProgress{
			SubEventId:    subEvents.ID,
			GroupProgress: groupProgress,
		}
	}

	return SubEventProgress, nil
}
