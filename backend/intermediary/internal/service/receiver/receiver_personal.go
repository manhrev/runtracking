package receiver

import (
	"context"
	"errors"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
)

type receiverPersonal struct {
	authClient auth.AuthIClient
}

func (r *receiverPersonal) GetAllUsers(ctx context.Context, message NotificationTransfer) ([]*auth.UserInfo, error) {
	if len(message.ReceivedIds) <= 0 {
		return nil, errors.New("Not found user ID")
	}
	userId := message.ReceivedIds[0]
	return []*auth.UserInfo{
		{
			UserId: int64(userId),
		},
	}, nil
}
