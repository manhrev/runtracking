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

	groupInfo, err := s.service.Group.Get(ctx, userId, &group.GetGroupRequest{GroupId: request.GetGroupId()})

	if err != nil {
		return nil, err
	}

	userInfos, err := s.authClient.GetUsersByIds(ctx, &auth.GetByIdsRequest{Ids: []int64{userId}})

	if err != nil {
		return nil, err
	}

	if len(userInfos.GetUsers()) < 1 {
		return nil, status.Internal(fmt.Sprintf("UserId: %d not found", userId))
	}

	go func() {
		//Push notification to user
		ctxNoti, cancel := context.WithTimeout(context.Background(), time.Duration(time.Millisecond*80))
		defer cancel()
		_, err = s.notificationClient.PushNotification(ctxNoti, &notification.PushNotiRequest{
			Messeage:      fmt.Sprintf("%s has recently sent a join group request to your group", userInfos.GetUsers()[0].DisplayName),
			SourceType:    notification.SOURCE_TYPE_PERSONAL,
			ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 5)),
			ReceiveIds:    []int64{groupInfo.LeaderId},
		})

		if err != nil {
			log.Println("There are something mistaken when push notification ", err)
		}
	}()

	return res, nil
}
