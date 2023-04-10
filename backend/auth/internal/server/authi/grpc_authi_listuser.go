package authi

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/transformer"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

func (s *authIServer) ListUser(ctx context.Context, request *auth.ListUserRequest) (*auth.ListUserReply, error) {
	userEntList, total, err := s.repository.User.List(ctx, request.GetSortBy(),
		request.GetUserIds(),
		request.GetSearchByName(),
		request.GetAscending(),
		request.GetLimit(),
		request.GetOffset())

	if err != nil {
		return nil, err
	}

	return &auth.ListUserReply{
		Users: transformer.TransformUserListEntToUserList(userEntList),
		Total: total,
	}, nil
}
