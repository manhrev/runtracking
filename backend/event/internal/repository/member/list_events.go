package member

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
)

func (m *memberImpl) ListEvents(
	ctx context.Context,
	limit uint32,
	offset uint64,
	ascending bool,
	group_id int64,
	sort_by event_pb.ListEventsRequest_SortBy,
	ids []int64,
) ([]*ent.Event, int64, error) {
	query := m.entClient.Event.Query()

	if group_id > 0 {
		query.Where(
			event.HasGroupsWith(
				eventgroupz.IDEQ(group_id),
			),
		)
	}

	if len(ids) > 0 {
		query.Where(event.IDIn(ids...))
	}

	byField := ""
	switch sort_by {
	case event_pb.ListEventsRequest_SORT_BY_UNSPECIFIED:
		byField = event.FieldStartAt
	case event_pb.ListEventsRequest_SORT_BY_START_AT:
		byField = event.FieldStartAt
	case event_pb.ListEventsRequest_SORT_BY_NAME:
		byField = event.FieldName
	case event_pb.ListEventsRequest_SORT_BY_NUM_OF_GROUPS:
		byField = event.FieldNumberOfGroups
	}

	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	total, err := query.Count(ctx)
	if err != nil {
		log.Printf("Error ListEvent: can't count events: %v", err)
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

	events, err := query.WithSubevents().All(ctx)
	if err != nil {
		log.Printf("Error ListEvent: can't query events: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	return events, int64(total), nil
}
