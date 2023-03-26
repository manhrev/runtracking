package receiver

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

type Receiver interface {
	GetAllUsers(ctx context.Context, message NotificationTransfer) ([]*auth.UserInfo, error)
}

type NotificationTransfer struct {
	Id          int    `json:"id"`
	Message     string `json:"message"`
	ReceivedIds []int  `json:"received_ids"`
	SourceType  int    `json:"source_type"`
	SourceId    int    `json:"source_id"`
}

func GetReceiver(sourceType noti.SOURCE_TYPE, authClient auth.AuthIClient) Receiver {
	switch sourceType {
	case noti.SOURCE_TYPE_ADMIN:
		return &receiverAdmin{
			authClient: authClient,
		}
	default:
		return &receiverPersonal{
			authClient: authClient,
		}

	}
}
