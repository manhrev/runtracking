package notification

import (
	"context"
	"errors"
	"fmt"
	"log"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) RemoveExpoPushToken(ctx context.Context, request *noti.ExpoPushTokenRequest) (*emptypb.Empty, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	log.Println(fmt.Sprintf("User ID: %s | token: %s", userId, request.GetExpoPushToken()))

	_, err = s.entClient.UserDevice.Delete().
		Where(userdevice.ExpoPushTokenEQ(request.GetExpoPushToken()),
			userdevice.UserIDEQ(userId)).
		Exec(ctx)

	if err != nil {
		return nil, errors.New(fmt.Sprintf("Can not delete expo push token ent: %s", err.Error()))
	}

	return &emptypb.Empty{}, nil
}
