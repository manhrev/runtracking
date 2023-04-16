package event

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *eventServer) ApproveJoinEvent(ctx context.Context, request *event.ApproveJoinEventRequest) (*event.ApproveJoinEventReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	entEvent, err := s.repository.Event.GetEvent(ctx, request.GetEventId())
	if err != nil {
		log.Printf("Error ApproveJoinEvent: cannot get event: %v", err)
		return nil, err
	}
	ownerGroupId := entEvent.OwnerGroupID

	// check if this user is admin of the owner group (owner of the event)
	res, err := s.groupIClient.ListGroupI(ctx, &group.ListGroupIRequest{
		GroupIds: []int64{ownerGroupId},
	})
	if err != nil {
		log.Printf("Error ApproveJoinEvent: cannot get owner group info: %v", err)
		return nil, status.Internal(err.Error())
	}

	if len(res.GetGroups()) != 0 {
		if res.GetGroups()[0].GetLeaderId() != userId {
			log.Printf("Error ApproveJoinEvent: user is not admin of the owner group")
			return nil, status.Internal("User is not admin of the owner group")
		}
	} else {
		log.Printf("Error ApproveJoinEvent: ownergroup not found or duplicated")
		return nil, status.Internal("Cannot get ownergroup: group not found or duplicated")
	}

	err = s.repository.Admin.ApproveJoinEvent(
		ctx,
		request.GetEventId(),
		request.GetGroupId(),
	)
	if err != nil {
		return nil, err
	}

	return &event.ApproveJoinEventReply{}, nil
}
