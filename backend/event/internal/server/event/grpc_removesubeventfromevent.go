package event

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *eventServer) RemoveSubEventFromEvent(ctx context.Context, request *event.RemoveSubEventFromEventRequest) (*event.RemoveSubEventFromEventReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	eventEnt, err := s.repository.Event.GetEventWithSubEvents(ctx, request.GetEventId())
	if err != nil {
		return nil, err
	}
	ownerGroupId := eventEnt.OwnerGroupID

	// check if this user is admin of the group
	res, err := s.groupIClient.ListGroupI(ctx, &group.ListGroupIRequest{
		GroupIds: []int64{ownerGroupId},
	})
	if err != nil {
		log.Printf("Error RemoveSubEventFromEvent: cannot get group: %v", err)
		return nil, status.Internal(err.Error())
	}

	if len(res.GetGroups()) != 0 {
		if res.GetGroups()[0].GetLeaderId() != userId {
			log.Printf("Error RemoveSubEventFromEvent: player is not admin of the group")
			return nil, status.Internal("Player is not admin of the group")
		}
	} else {
		log.Printf("Error RemoveSubEventFromEvent: group not found or duplicated")
		return nil, status.Internal("Cannot get group: group not found or duplicated")
	}

	err = s.repository.Admin.RemoveSubEventFromEvent(
		ctx,
		eventEnt,
		request.GetSubEventId(),
	)
	if err != nil {
		return nil, err
	}

	return &event.RemoveSubEventFromEventReply{}, nil
}
