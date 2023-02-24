package notification

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
)

func (s *notificationServer) UpdateNotificationInfo(ctx context.Context, request *noti.UpdateNotificationInfoRequest) (*noti.UpdateNotificationInfoReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	_, err = s.entClient.NotificationUser.Update().
		Where(notificationuser.IDEQ(request.GetId()), notificationuser.UserIDEQ(userId)).
		SetIsSeen(request.GetIsSeen()).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return &noti.UpdateNotificationInfoReply{
		IdUpdated: request.GetId(),
	}, nil
}
