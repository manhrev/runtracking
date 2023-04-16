package event

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *eventServer) JoinEvent(ctx context.Context, request *event.JoinEventRequest) (*event.JoinEventReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	// check if this user is admin of the group
	res, err := s.groupIClient.ListGroupI(ctx, &group.ListGroupIRequest{
		GroupIds: []int64{request.GetGroupId()},
	})
	if err != nil {
		log.Printf("Error JoinEvent: cannot get group: %v", err)
		return nil, status.Internal(err.Error())
	}

	if len(res.GetGroups()) != 0 {
		if res.GetGroups()[0].GetLeaderId() != userId {
			log.Printf("Error JoinEvent: player is not admin of the group")
			return nil, status.Internal("Player is not admin of the group")
		}
	} else {
		log.Printf("Error JoinEvent: group not found or duplicated")
		return nil, status.Internal("Cannot get group: group not found or duplicated")
	}

	err = s.repository.Admin.JoinEvent(
		ctx,
		request.GetEventId(),
		request.GetGroupId(),
	)
	if err != nil {
		return nil, err
	}

	return &event.JoinEventReply{}, nil
}
