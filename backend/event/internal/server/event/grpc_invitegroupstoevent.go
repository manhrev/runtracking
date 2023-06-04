package event

import (
	"context"
	"fmt"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *eventServer) InviteGroupsToEvent(ctx context.Context, request *event.InviteGroupsToEventRequest) (*event.InviteGroupsToEventReply, error) {
	res, err := s.groupIClient.ListGroupI(ctx, &group.ListGroupIRequest{
		GroupIds: []int64{request.GetOwnerGroupId()},
	})
	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Cannot invite: cannot get group name: %v", err.Error()))
	}

	eventRes, err := s.repository.Event.GetEvent(ctx, request.GetEventId())
	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Cannot invite: cannot get event: %v", err.Error()))
	}

	_, err = s.notificationIClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      `Your group has been invited to join "` + eventRes.Name + "` event by " + res.Groups[0].Name + " group.",
		ScheduledTime: timestamppb.New(time.Now().Add(5 * time.Second)),
		SourceType:    notification.SOURCE_TYPE_EVENT,
		SourceId:      request.GetEventId(),
		ReceiveIds:    request.GetGroupIds(),
		SourceImage:   "https://media.istockphoto.com/id/1151187641/vector/red-flag-icon.jpg?s=612x612&w=0&k=20&c=TZdiR3nWkzz7jpmfXZRIx8gt4vPV66hP-JUBIw7euTg=",
	})
	if err != nil {
		return nil, status.Internal(fmt.Sprintf("Cannot invite: %v", err.Error()))
	}

	return &event.InviteGroupsToEventReply{}, nil
}
