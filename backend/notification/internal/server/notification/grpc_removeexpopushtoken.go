package notification

import (
	"context"
	"errors"

	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) RemoveExpoPushToken(ctx context.Context, request *noti.ExpoPushTokenRequest) (*emptypb.Empty, error) {

	_, err := s.entClient.UserDevice.Delete().
		Where(userdevice.ExpoPushTokenEQ(request.GetExpoPushToken()),
			userdevice.UserIDEQ(request.UserId)).
		Exec(ctx)

	if err != nil {
		return nil, errors.New("Can not delete ent")
	}

	return &emptypb.Empty{}, nil
}
