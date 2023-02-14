package notification

import (
	"context"

	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationtype"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) PushNoti2AllUsers(ctx context.Context, request *noti.PushNoti2AllUsersRequest) (*emptypb.Empty, error) {
	// get notification type
	notiType, err := s.entClient.NotificationType.Query().
		Where(notificationtype.TypeName("ALLUSERS")).
		Only(ctx)

	notiReq := request.GetNotify()
	_, err = s.entClient.Notification.Create().
		SetMessage(notiReq.GetMesseage()).
		SetScheduledTime(notiReq.GetScheduledTime().AsTime()).
		SetNotificationType(notiType).
		SetTypeID(1).
		Save(ctx)

	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, nil
}
