package auth

import (
	"context"
	"errors"
	"log"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *authServer) Me(ctx context.Context, _ *emptypb.Empty) (*auth.MeReply, error) {
	userID, err := s.extractor.GetUserID(ctx)
	if err != nil {
		return nil, status.Unauthenticated
	}

	user, err := s.cache.User().Get(ctx, userID)
	if err != nil {
		log.Println("User not found")
		return nil, errors.New("User not found")
	}

	return &auth.MeReply{
		User: &auth.UserInfo{
			UserId:      user.UserId,
			Username:    user.UserName,
			Email:       user.Email,
			PhoneNumber: user.PhoneNumber,
		},
	}, nil
}
