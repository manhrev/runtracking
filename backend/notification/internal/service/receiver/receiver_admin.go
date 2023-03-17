package receiver

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/helper"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	"google.golang.org/protobuf/types/known/emptypb"
)

type receiverAdmin struct {
	authClient auth.AuthIClient
}

func (r *receiverAdmin) GetAllUsers(ctx context.Context, message cloudtask.NotificationTransfer) ([]*auth.UserInfo, error) {
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
