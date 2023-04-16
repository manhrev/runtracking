package member

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

func (m *memberImpl) ListSubEvents(
	ctx context.Context,
	eventId int64,
) ([]*ent.SubEvent, error) {
	subEvents, err := m.entClient.SubEvent.Query().
		Where(subevent.HasEventWith(
			event.IDEQ(eventId),
		)).
		Order(ent.Desc(subevent.FieldStartDate)).
		All(ctx)

	if err != nil {
		log.Printf("Error ListSubEvent: %v", err)
		return nil, status.Internal(err.Error())
	}

	return subEvents, nil
}
