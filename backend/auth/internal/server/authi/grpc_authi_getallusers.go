package authi

import (
	"context"
	"errors"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *authIServer) GetAllUsers(ctx context.Context, _ *emptypb.Empty) (*auth.GetAllUsersReply, error) {
	users, err := s.entClient.User.Query().
		All(ctx)

	if err != nil {
		return nil, errors.New("Error when fetching users")
	}

	var userInfos []*auth.UserInfo
	for _, user := range users {
		userInfos = append(userInfos, &auth.UserInfo{
			UserId:         user.ID,
			Username:       user.Username,
			Email:          user.Email,
			ProfilePicture: user.ProfilePicture,
			DisplayName:    user.DisplayName,
		})
	}

	return &auth.GetAllUsersReply{
		Users: userInfos,
	}, nil
}
