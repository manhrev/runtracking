package receiver

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

type Receiver interface {
	GetAllUsers(ctx context.Context, message cloudtask.NotificationTransfer) ([]*auth.UserInfo, error)
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
