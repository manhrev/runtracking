package event

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *eventServer) CreateEvent(ctx context.Context, request *event.CreateEventRequest) (*event.CreateEventReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	// check if this user is admin of the group
	res, err := s.groupIClient.ListGroupI(ctx, &group.ListGroupIRequest{
		GroupIds: []int64{request.GetOwnerGroupId()},
	})
	if err != nil {
		log.Printf("Error CreateEvent: cannot get group: %v", err)
		return nil, status.Internal(err.Error())
	}

	if len(res.GetGroups()) != 0 {
		if res.GetGroups()[0].GetLeaderId() != userId {
			log.Printf("Error CreateEvent: player is not admin of the group")
			return nil, status.Internal("Player is not admin of the group")
		}
	} else {
		log.Printf("Error CreateEvent: group not found or duplicated")
		return nil, status.Internal("Cannot get group: group not found or duplicated")
	}

	idCreated, err := s.repository.Admin.CreateEvent(
		ctx,
		request.GetName(),
		request.GetDescription(),
		request.GetPicture(),
		request.GetStartAt(),
		request.GetIsGlobal(),
		request.GetSubEvents(),
		request.GetOwnerGroupId(),
	)

	return &event.CreateEventReply{
		IdCreated: idCreated,
	}, nil
}
