package auth

import (
	"context"
	"errors"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent/user"
)

func (s *authServer) GetUsersPublicInfo(ctx context.Context, request *auth.GetUsersPublicInfoRequest) (*auth.GetUsersPublicInfoReply, error) {

	users, err := s.entClient.User.Query().
		Where(user.IDIn(request.UserIds...)).All(ctx)

	if err != nil {
		return nil, errors.New("Error when query users")
	}

	var userInfos []*auth.UserPublicInfo
	for _, user := range users {
		userInfos = append(userInfos, &auth.UserPublicInfo{
			UserId:         user.ID,
			Username:       user.Username,
			DisplayName:    user.DisplayName,
			ProfilePicture: user.ProfilePicture,
		})
	}

	return &auth.GetUsersPublicInfoReply{
		Users: userInfos,
	}, nil
}
