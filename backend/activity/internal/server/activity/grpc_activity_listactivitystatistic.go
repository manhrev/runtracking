package activity

import (
	"context"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activity_pb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *activityServer) GetActivityStatistic(
	ctx context.Context,
	request *activity_pb.GetActivityStatisticRequest,
) (*activity_pb.GetActivityStatisticReply, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	sliceOfPointers, err := s.repository.Activity.GetStatistic(
		ctx,
		userId,
		request.GetType(),
		request.GetFrom(),
		request.GetTo(),
		request.GetGroupBy(),
		request.GetTz(),
	)

	activityStatisticData := []*activity_pb.ActivityStatisticData{}
	for _, data := range sliceOfPointers {
		activityStatisticData = append(activityStatisticData, &activity_pb.ActivityStatisticData{
			Datetime:           timestamppb.New(data.Datetime),
			TotalDistance:      data.TotalDistance,
			TotalDuration:      data.TotalDuration,
			NumberOfActivities: data.NumberOfActivities,
		})
	}
	return &activity_pb.GetActivityStatisticReply{
		Data: activityStatisticData,
	}, nil
}
