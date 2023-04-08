package authi

import (
	"context"
	"errors"
	"fmt"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authIServer) GetUserById(ctx context.Context, request *auth.GetByIdRequest) (*auth.GetUserReply, error) {
	user, err := s.entClient.User.Get(ctx, request.Id)

	if err != nil {
		return nil, errors.New(fmt.Sprintf("Error when fetching user: %s", err.Error()))
	}

	return &auth.GetUserReply{
		UserInfo: &auth.UserInfo{
			UserId:      user.ID,
			Username:    user.Username,
			Email:       user.Email,
			DisplayName: user.DisplayName,
		},
	}, nil
}
