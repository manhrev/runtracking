package transformer

import (
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

func TransformEntParticipateToGroup(entParticipate *ent.Participate) *event_pb.GroupInEvent {
	return &event_pb.GroupInEvent{
		Id:     entParticipate.EventGroupID,
		Status: event_pb.GroupStatus(entParticipate.Status),
	}
}

func TransformEntParticipateListToGroupList(entParticipates []*ent.Participate) []*event_pb.GroupInEvent {
	groups := make([]*event_pb.GroupInEvent, len(entParticipates))
	for i, entParticipate := range entParticipates {
		groups[i] = TransformEntParticipateToGroup(entParticipate)
	}
	return groups
}
