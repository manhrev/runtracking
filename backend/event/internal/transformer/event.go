package transformer

import (
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformEventEntToEvent(entEvent *ent.Event) *event_pb.EventDetail {
	length := len(entEvent.Edges.Subevents)
	endSubEvent := entEvent.Edges.Subevents[length-1]
	return &event_pb.EventDetail{
		Id:           entEvent.ID,
		Name:         entEvent.Name,
		Description:  entEvent.Description,
		Picture:      entEvent.Picture,
		IsGlobal:     entEvent.IsGlobal,
		StartAt:      timestamppb.New(entEvent.StartAt),
		EndAt:        timestamppb.New(endSubEvent.EndDate),
		OwnerGroupId: entEvent.OwnerGroupID,
		NumOfGroups:  entEvent.NumberOfGroups,
	}
}

func TransformEventEntListToEventList(entEvents []*ent.Event) []*event_pb.EventDetail {
	events := make([]*event_pb.EventDetail, len(entEvents))
	for i, entEvent := range entEvents {
		events[i] = TransformEventEntToEvent(entEvent)
	}
	return events
}