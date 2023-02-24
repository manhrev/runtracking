package notification

import (
	"context"
	"log"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *notificationServer) DeleteNotificationInfo(ctx context.Context, request *noti.IdRequest) (*noti.IdReply, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.repository.Notification.Delete(ctx, userId, request.GetId())
	if err != nil {
		return nil, err
	}

	log.Printf("Notification %d has been deleted \n", request.GetId())

	return &noti.IdReply{
		Id: request.GetId(),
	}, nil
}
