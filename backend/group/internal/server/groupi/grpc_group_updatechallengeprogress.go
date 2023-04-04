package groupi

import (
	"context"
	"time"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *groupIServer) UpdateChallengeProgress(
	ctx context.Context,
	request *group.UpdateChallengeProgressRequest,
) (*group.UpdateChallengeProgressReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	message, err := s.service.Challenge.UpdateChallengeProgress(ctx, userId, request)

	if err != nil {
		return nil, err
	}

	if message != "" {
		_, err = s.notificationIClient.PushNotification(ctx,
			&notification.PushNotiRequest{
				Messeage:      message,
				SourceType:    notification.SOURCE_TYPE_GROUP,
				ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 10)),
				ReceiveIds:    []int64{userId},
			})
		if err != nil {
			return nil, err
		}
	}

	return &group.UpdateChallengeProgressReply{}, nil
}
