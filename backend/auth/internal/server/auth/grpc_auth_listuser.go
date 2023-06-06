package auth

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/transformer"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authServer) ListUser(ctx context.Context, request *auth.ListUserInfoRequest) (*auth.ListUserInfoReply, error) {
	userEntList, total, err := s.repository.User.List(ctx, auth.ListUserRequest_UserSortBy(request.GetSortBy()),
		request.GetUserIds(),
		request.GetSearchByName(),
		request.GetAscending(),
		request.GetLimit(),
		request.GetOffset())

	if err != nil {
		return nil, err
	}

	return &auth.ListUserInfoReply{
		Users: transformer.TransformUserListEntToUserList(userEntList),
		Total: total,
	}, nil
}
