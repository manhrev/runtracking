package group

import (
	"context"
	"fmt"
	"log"
	"time"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *groupServer) AcceptMember(
	ctx context.Context,
	request *group.AcceptMemberRequest,
) (*group.AcceptMemberReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	reply, err := s.service.Member.AcceptMember(ctx, userId, request)
	if err != nil {
		return nil, err
	}

	memberEnt, err := s.service.Member.GetMember(ctx, request.MemberId)
	if err != nil {
		return nil, err
	}

	groupEnt, err := s.service.Group.Get(ctx, userId, &group.GetGroupRequest{
		GroupId: request.GroupId,
	})
	if err != nil {
		return nil, err
	}

	//Push notification to user
	_, err = s.notificationClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      fmt.Sprintf("Your request to %s has been accepted", groupEnt.Name),
		SourceType:    notification.SOURCE_TYPE_GROUP,
		ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 5)),
		ReceiveIds:    []int64{memberEnt.UserID},
	})

	if err != nil {
		log.Println("There are something mistaken when push notification ", err)
	}

	return reply, nil
}
