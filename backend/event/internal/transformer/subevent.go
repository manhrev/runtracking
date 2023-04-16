package transformer

import (
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformSubEventEntToSubEvent(entEvent *ent.SubEvent) *event_pb.SubEvent {
	return &event_pb.SubEvent{
		Id:          entEvent.ID,
		Name:        entEvent.Name,
		Description: entEvent.Description,
		Picture:     entEvent.Picture,
		StartAt:     timestamppb.New(entEvent.StartDate),
		EndAt:       timestamppb.New(entEvent.EndDate),
		Goal:        entEvent.Goal,
		Rule:        event_pb.Rule(entEvent.RuleID),
		Status:      event_pb.SubEventStatus(entEvent.Status),
	}
}

func TransformSubEventEntListToSubEventList(entEvents []*ent.SubEvent) []*event_pb.SubEvent {
	events := make([]*event_pb.SubEvent, len(entEvents))
	for i, entEvent := range entEvents {
		events[i] = TransformSubEventEntToSubEvent(entEvent)
	}
	return events
}
