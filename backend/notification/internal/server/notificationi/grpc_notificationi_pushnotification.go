package notificationi

import (
	"context"
	"errors"
	"log"

	"github.com/manhrev/runtracking/backend/notification/helper"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationIServer) PushNotification(ctx context.Context, request *noti.PushNotiRequest) (*emptypb.Empty, error) {

	notification, err := s.entClient.Notification.Create().
		SetMessage(request.GetMesseage()).
		SetScheduledTime(request.GetScheduledTime().AsTime()).
		SetSourceType(int64(request.GetSourceType())).
		SetSourceID(request.GetSourceId()).
		SetReceiveIds(request.GetReceiveIds()).
		Save(ctx)

	if err != nil {
		return nil, errors.New("fail when save data to notification database " + err.Error())
	}
	log.Printf("IDS: %v \n: ", request.GetReceiveIds())
	log.Printf("IDS INT: %v \n: ", helper.ConvertInt64sToInts(request.GetReceiveIds()))

	message := cloudtask.NotificationTransfer{
		Id:          int(notification.ID),
		Message:     request.GetMesseage(),
		ReceivedIds: helper.ConvertInt64sToInts(request.GetReceiveIds()),
		SourceType:  int(request.GetSourceType()),
		SourceId:    int(request.GetSourceId()),
	}

	cloudTask := cloudtask.NewCloudTask()
	_, err = cloudTask.CreateHTTPTask("http://notification:8000/notification/pushnotification", message, request.ScheduledTime)

	if err != nil {
		return nil, errors.New("error when use cloud task")
	}

	return &emptypb.Empty{}, nil
}
