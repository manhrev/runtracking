package auth

import (
	"context"
	"errors"

	"fmt"

	"github.com/manhrev/runtracking/backend/auth/internal/status"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authServer) UpdateUserInfo(ctx context.Context, request *auth.UpdateUserInfoRequest) (*auth.UpdateUserInfoReply, error) {
	userID, err := s.extractor.GetUserID(ctx)
	if err != nil {
		return nil, status.Unauthenticated
	}

	_, err = s.entClient.User.UpdateOneID(userID).
		SetDisplayName(request.UserInfo.DisplayName).
		SetUsername(request.UserInfo.Username).
		SetEmail(request.UserInfo.Email).
		SetPhone(request.UserInfo.PhoneNumber).
		SetHeight(request.UserInfo.Height).
		SetWeight(request.UserInfo.Weight).
		SetAge(request.UserInfo.Age).
		SetProfilePicture(request.UserInfo.ProfilePicture).
		Save(ctx)

	if err != nil {
		return nil, errors.New(fmt.Sprintf("Error when update users: %s", err.Error()))
	}

	return &auth.UpdateUserInfoReply{}, nil
}
