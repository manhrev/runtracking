package query

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

type onlyUserQuery struct {
	authClient auth.AuthClient
}

func OnlyUserQuery(authClient auth.AuthClient) Query {
	return &onlyUserQuery{
		authClient: authClient,
	}
}

func (q *onlyUserQuery) GetAllUsers(ctx context.Context, id int64) ([]*auth.UserInfo, error) {
	return []*auth.UserInfo{
		{
			UserId: id,
		},
	}, nil
}
