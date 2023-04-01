package group

import (
	"context"
	"fmt"
	"log"
	"time"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *groupServer) JoinGroup(
	ctx context.Context,
	request *group.JoinGroupRequest,
) (*group.JoinGroupReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	res, err := s.service.Member.JoinGroup(ctx, userId, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	groupEnt, err := s.service.Group.Get(ctx, &group.GetGroupRequest{GroupId: request.GetGroupId()})

	if err != nil {
		return nil, err
	}

	userInfos, err := s.authClient.GetUsersByIds(ctx, &auth.GetByIdsRequest{Ids: []int64{userId}})

	if err != nil {
		return nil, err
	}

	if len(userInfos.GetUsers()) < 1 {
		return nil, status.Internal(fmt.Sprintf("UserId: %s not found", userId))
	}
	//Push notification to user
	_, err = s.notificationClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      fmt.Sprintf("%s has recently sent a join group request to you group", userInfos.GetUsers()[0].Username),
		SourceType:    notification.SOURCE_TYPE_PERSONAL,
		ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 5)),
		ReceiveIds:    []int64{groupEnt.LeaderID},
	})

	if err != nil {
		log.Println("There are something mistaken when push notification ", err)
	}

	return res, nil
}
