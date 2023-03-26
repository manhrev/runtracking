package notification

import (
	"context"
	"log"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) CheckIfExistOrSaveExpoPushToken(ctx context.Context, request *noti.ExpoPushTokenRequest) (*emptypb.Empty, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	userDevice, _ := s.entClient.UserDevice.Query().
		Where(userdevice.ExpoPushTokenEQ(request.GetExpoPushToken()),
			userdevice.UserIDEQ(userId)).
		Only(ctx)

	if userDevice == nil {
		s.entClient.UserDevice.Create().
			SetUserID(userId).
			SetExpoPushToken(request.GetExpoPushToken()).
			Save(ctx)

		log.Println("New expo push token have been created")
	}

	return &emptypb.Empty{}, nil
}
