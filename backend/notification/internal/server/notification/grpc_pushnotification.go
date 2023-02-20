package notification

import (
	"context"
	"errors"

	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationServer) PushNotification(ctx context.Context, request *noti.PushNotiRequest) (*emptypb.Empty, error) {

	notification, err := s.entClient.Notification.Create().
		SetMessage(request.GetMesseage()).
		SetScheduledTime(request.GetScheduledTime().AsTime()).
		SetReceivedID(request.GetReceivedId()).
		SetType(int64(request.GetType())).
		Save(ctx)

	if err != nil {
		return nil, errors.New("fail when save data to notification database " + err.Error())
	}

	message := cloudtask.NotificationTransfer{
		Id:               int(notification.ID),
		Message:          request.GetMesseage(),
		ReceivedId:       int(request.GetReceivedId()),
		NotificationType: int(request.GetType()),
	}

	cloudTask := cloudtask.NewCloudTask()
	_, err = cloudTask.CreateHTTPTask("http://notification:8000/notification/pushnotification", message, request.ScheduledTime)

	if err != nil {
		return nil, errors.New("error when use cloud task")
	}

	return &emptypb.Empty{}, nil
}
