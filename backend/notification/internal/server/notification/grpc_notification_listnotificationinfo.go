package notification

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	"github.com/manhrev/runtracking/backend/notification/internal/transformer"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *notificationServer) ListNotificationInfo(ctx context.Context, request *noti.ListNotificationInfoRequest) (*noti.ListNotificationInfoReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	notificationList, total, err := s.repository.Notification.List(
		ctx,
		userId,
		request.GetLimit(),
		request.GetOffset(),
	)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return &noti.ListNotificationInfoReply{
		NotificationList: transformer.TransformNotificationListEntToNotificationList(notificationList),
		Total:            total,
	}, nil
}
