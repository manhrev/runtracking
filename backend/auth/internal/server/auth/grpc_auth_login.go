package auth

import (
	"context"
	"log"
	"time"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *authServer) Login(ctx context.Context, request *auth.LoginRequest) (*auth.LoginReply, error) {
	reply, tokens, err := s.signIn.SignIn(ctx, request)
	if err != nil {
		return reply, err
	}

	s.cacheTokens(ctx, tokens)
	//Push notification to user
	_, err = s.notificationClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      "You have been logged in to Go Tracker ...",
		SourceType:    notification.SOURCE_TYPE_PERSONAL,
		ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 10)),
		ReceiveIds:    []int64{reply.GetUserId()},
	})

	if err != nil {
		log.Println("There are something mistaken when push notification ", err)
	}

	return &auth.LoginReply{
		UserId:      reply.UserId,
		AccessToken: tokens.AccessToken.Raw,
	}, nil
}
