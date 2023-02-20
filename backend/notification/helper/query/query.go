package query

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

type Query interface {
	GetAllUsers(ctx context.Context, id int64) ([]*auth.UserInfo, error)
}
