package auth

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *authServer) SetHealthRecord(ctx context.Context, request *auth.HealthRecordRequest) (*emptypb.Empty, error) {
	userID, err := s.extractor.GetUserID(ctx)
	if err != nil {
		return nil, status.Unauthenticated
	}

	height := request.GetHeight()
	weight := request.GetWeight()
	age := request.GetAge()

	s.entClient.User.UpdateOneID(userID).
		SetHeight(height).
		SetWeight(weight).
		SetAge(age).
		Save(ctx)

	return &emptypb.Empty{}, nil

}
