package plani

import (
	"context"
	"log"
	"time"

	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *planIServer) UpdatePlanProgress(ctx context.Context, request *plan.UpdatePlanProgressRequest) (*plan.UpdatePlanProgressReply, error) {

	userId, notificationMessage, err := s.repository.Plan.UpdateProgress(
		ctx,
		request.GetPlanId(),
		request.GetIncrementValue(),
		request.GetTime(),
	)
	if err != nil {
		return nil, err
	}

	if len(notificationMessage) > 0 {
		_, err = s.notificationIClient.PushNotification(ctx, &notification.PushNotiRequest{
			Messeage:      notificationMessage,
			Type:          notification.NOTIFICATION_TYPE_ONLYUSER,
			ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 10)),
			ReceivedId:    userId,
		})
		if err != nil {
			log.Printf("Error when push notification: %v", err)
		}
	}

	return &plan.UpdatePlanProgressReply{}, nil
}
