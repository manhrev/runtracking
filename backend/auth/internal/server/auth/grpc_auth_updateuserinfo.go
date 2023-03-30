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
	query := s.entClient.User.UpdateOneID(userID)
	if request.GetUserInfo().GetDisplayName() != "" {
		query.SetDisplayName(request.UserInfo.DisplayName)
	}

	if request.GetUserInfo().GetEmail() != "" {
		query.SetEmail(request.UserInfo.Email)
	}

	if request.GetUserInfo().GetPhoneNumber() != "" {
		query.SetPhone(request.UserInfo.PhoneNumber)
	}

	if request.GetUserInfo().GetHeight() != 0 {
		query.SetHeight(request.UserInfo.Height)
	}

	if request.GetUserInfo().GetWeight() != 0 {
		query.SetWeight(request.UserInfo.Weight)
	}

	if request.GetUserInfo().GetAge() != 0 {
		query.SetAge(request.UserInfo.Age)
	}

	if request.GetUserInfo().GetProfilePicture() != "" {
		query.SetProfilePicture(request.UserInfo.ProfilePicture)
	}

	_, err = query.Save(ctx)

	if err != nil {
		return nil, errors.New(fmt.Sprintf("Error when update users: %s", err.Error()))
	}

	return &auth.UpdateUserInfoReply{}, nil
}
