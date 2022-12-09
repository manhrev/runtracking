package user

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *userServer) SetHealthRecord(ctx context.Context, request *auth.HealthRecordRequest) (*emptypb.Empty, error) {
	userID, err := s.extractor.GetUserID(ctx)
	if err != nil {
		return nil, status.Unauthenticated
	}

	height := request.GetHeight()
	weight := request.GetWeight()

	s.entClient.User.UpdateOneID(userID).
		SetHeight(height).
		SetWeight(weight).
		Save(ctx)

	return &emptypb.Empty{}, nil

}
