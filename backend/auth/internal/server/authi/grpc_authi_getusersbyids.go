package authi

import (
	"context"
	"errors"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	user "github.com/manhrev/runtracking/backend/auth/pkg/ent/user"
)

func (s *authIServer) GetUsersByIds(ctx context.Context, request *auth.GetByIdsRequest) (*auth.GetAllUsersReply, error) {
	ids := request.GetIds()
	users, err := s.entClient.User.Query().
		Where(user.IDIn(ids...)).
		All(ctx)

	if err != nil {
		return nil, errors.New("Error when fetching users")
	}

	var userInfos []*auth.UserInfo
	for _, user := range users {
		userInfos = append(userInfos, &auth.UserInfo{
			UserId:      user.ID,
			Username:    user.Username,
			Email:       user.Email,
			DisplayName: user.DisplayName,
		})
	}

	return &auth.GetAllUsersReply{
		Users: userInfos,
	}, nil
}
