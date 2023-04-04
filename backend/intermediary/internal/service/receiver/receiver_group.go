package receiver

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/intermediary/helper"
	"google.golang.org/protobuf/types/known/emptypb"
)

type receiverGroup struct {
	authClient auth.AuthIClient
}

func (r *receiverGroup) GetAllUsers(ctx context.Context, message NotificationTransfer) ([]*auth.UserInfo, error) {
	var users *auth.GetAllUsersReply
	var err error
	if len(message.ReceivedIds) > 0 {
		users, err = r.authClient.GetUsersByIds(ctx, &auth.GetByIdsRequest{
			Ids: helper.ConvertIntsToInt64s(message.ReceivedIds)})
	} else {
		users, err = r.authClient.GetAllUsers(ctx, &emptypb.Empty{})
	}

	if err != nil {
		return nil, err
	}

	return users.Users, nil
}
