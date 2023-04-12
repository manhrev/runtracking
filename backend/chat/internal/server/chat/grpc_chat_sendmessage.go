package chat

import (
	"context"
	"fmt"
	"log"
	"time"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/chat/internal/status"
	chatpb "github.com/manhrev/runtracking/backend/chat/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *chatServer) SendMessage(ctx context.Context, request *chatpb.SendMessageRequest) (*chatpb.SendMessageReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Message.Create(ctx, userId, request.ToUserId, request.Time, request.Message)
	if err != nil {
		return nil, err
	}

	userInfos, err := s.authClient.GetUsersByIds(ctx, &auth.GetByIdsRequest{Ids: []int64{request.ToUserId, userId}})

	if err != nil {
		return nil, err
	}

	if len(userInfos.GetUsers()) < 1 {
		return nil, status.Internal(fmt.Sprintf("UserId: %d not found", userId))
	}

	userInfoMap := make(map[int64]*auth.UserInfo)
	for _, userInfo := range userInfos.Users {
		userInfoMap[userInfo.UserId] = userInfo
	}

	go func() {
		//Push notification to user
		ctxNoti, cancel := context.WithTimeout(context.Background(), time.Duration(time.Millisecond*80))
		defer cancel()
		_, err = s.notificationClient.PushNotification(ctxNoti, &notification.PushNotiRequest{
			Messeage:      fmt.Sprintf("%s has recently sent you a message", userInfoMap[request.ToUserId].DisplayName),
			SourceType:    notification.SOURCE_TYPE_PERSONAL,
			ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 5)),
			ReceiveIds:    []int64{request.ToUserId},
			SourceId:      userId,
			SourceImage:   userInfoMap[userId].ProfilePicture,
		})

		if err != nil {
			log.Println("There are something mistaken when push notification ", err)
		}
	}()

	return &chatpb.SendMessageReply{}, nil
}
