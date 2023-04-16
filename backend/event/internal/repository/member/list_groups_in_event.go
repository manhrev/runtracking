package member

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/participate"
)

func (m *memberImpl) ListGroupsInEvent(
	ctx context.Context,
	eventId int64,
	limit uint32,
	offset uint64,
) ([]*ent.Participate, int64, error) {
	query := m.entClient.Participate.Query().
		Where(
			participate.EventIDEQ(eventId),
		)

	total, err := query.Count(ctx)
	if err != nil {
		log.Printf("Error ListGroupsInEvent: can't count events: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	//limit offset
	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	participate, err := query.All(ctx)
	if err != nil {
		log.Printf("Error ListGroupsInEvent: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	return participate, int64(total), nil
}
