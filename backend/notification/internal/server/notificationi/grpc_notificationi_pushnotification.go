package notificationi

import (
	"context"
	"errors"
	"fmt"
	"os"

	"github.com/manhrev/runtracking/backend/notification/helper"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

var (
	intermediary_url    string = os.Getenv("INTERMEDIARY_URL")
	intermediary_scheme string = os.Getenv("INTERMEDIARY_SCHEME")
)

func (s *notificationIServer) PushNotification(ctx context.Context, request *noti.PushNotiRequest) (*emptypb.Empty, error) {

	query := s.entClient.Notification.Create().
		SetMessage(request.GetMesseage()).
		SetScheduledTime(request.GetScheduledTime().AsTime()).
		SetSourceType(int64(request.GetSourceType())).
		SetSourceID(request.GetSourceId()).
		SetReceiveIds(request.GetReceiveIds())

	if request.SourceImage != "" {
		query.SetSourceImage(request.SourceImage)
	}

	notification, err := query.Save(ctx)

	if err != nil {
		return nil, errors.New("fail when save data to notification database " + err.Error())
	}

	message := cloudtask.NotificationTransfer{
		Id:          int(notification.ID),
		Message:     request.GetMesseage(),
		ReceivedIds: helper.ConvertInt64sToInts(request.GetReceiveIds()),
		SourceType:  int(request.GetSourceType()),
		SourceId:    int(request.GetSourceId()),
	}

	cloudTask := cloudtask.NewCloudTask()
	_, err = cloudTask.CreateHTTPTask(
		fmt.Sprintf("%s://%s/notification/pushnotification",
			intermediary_scheme,
			intermediary_url),
		message, request.ScheduledTime)

	if err != nil {
		return nil, errors.New(err.Error())
	}

	return &emptypb.Empty{}, nil
}
