package query

import (
	"context"
	"errors"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"google.golang.org/protobuf/types/known/emptypb"
)

type allUsersQuery struct {
	authClient auth.AuthClient
}

func AllUsersQuery(authClient auth.AuthClient) Query {
	return &allUsersQuery{
		authClient: authClient,
	}
}

func (q *allUsersQuery) GetAllUsers(ctx context.Context, id int64) ([]*auth.UserInfo, error) {
	users, err := q.authClient.GetAllUsers(ctx, &emptypb.Empty{})
	if err != nil {
		return nil, errors.New("Error when fetching users")
	}

	return users.Users, nil
}
