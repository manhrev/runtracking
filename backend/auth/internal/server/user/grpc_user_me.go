package user

import (
	"context"
	"errors"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent/user"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *userServer) Me(ctx context.Context, _ *emptypb.Empty) (*auth.MeReply, error) {
	userID, err := s.extractor.GetUserID(ctx)
	if err != nil {
		return nil, status.Unauthenticated
	}

	user, err := s.entClient.User.Query().
		Where(user.ID(userID)).
		Only(ctx)

	if err != nil {
		return nil, errors.New("User not found")
	}

	return &auth.MeReply{
		User: &auth.UserInfo{
			Username:    user.Username,
			Email:       user.Email,
			PhoneNumber: user.Phone,
			Height:      user.Height,
			Weight:      user.Weight,
		},
	}, nil

}
