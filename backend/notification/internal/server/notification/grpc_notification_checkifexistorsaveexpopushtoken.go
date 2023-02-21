package notification

import (
	"context"
	"log"

	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) CheckIfExistOrSaveExpoPushToken(ctx context.Context, request *noti.ExpoPushTokenRequest) (*emptypb.Empty, error) {

	userDevice, _ := s.entClient.UserDevice.Query().
		Where(userdevice.ExpoPushTokenEQ(request.GetExpoPushToken()),
			userdevice.UserIDEQ(request.UserId)).
		Only(ctx)

	if userDevice == nil {
		s.entClient.UserDevice.Create().
			SetUserID(request.GetUserId()).
			SetExpoPushToken(request.GetExpoPushToken()).
			Save(ctx)

		log.Println("New expo push token have been created")
	}

	return &emptypb.Empty{}, nil
}
