package notification

import (
	"context"
	"fmt"
	"log"

	"github.com/manhrev/runtracking/backend/notification/internal/status"
	"github.com/manhrev/runtracking/backend/notification/pkg/code"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/ent/notificationuser"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"
type Notification interface {
	Create(ctx context.Context,
		userIds []int64,
		isSeen bool,
		notiId int64,
	) ([]*ent.NotificationUser, error)
	List(
		ctx context.Context,
		userId int64,
		limit uint32,
		offset uint64,
	) (notificationList []*ent.NotificationUser, total int64, err error)
	Delete(ctx context.Context, userId int64, notificationId int64) error
}

type notificationImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Notification {
	return &notificationImpl{
		entClient: entClient,
	}
}

func (m *notificationImpl) Create(ctx context.Context,
	userIds []int64,
	isSeen bool,
	notiId int64,
) ([]*ent.NotificationUser, error) {
	bulk := make([]*ent.NotificationUserCreate, len(userIds))
	for i, userId := range userIds {
		bulk[i] = m.entClient.NotificationUser.Create().
			SetIsSeen(false).
			SetUserID(userId).
			SetNotificationID(notiId)
	}

	notifications, err := m.entClient.NotificationUser.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	return notifications, nil
}

func (m *notificationImpl) List(
	ctx context.Context,
	userId int64,
	limit uint32,
	offset uint64,
) ([]*ent.NotificationUser, int64, error) {

	query := m.entClient.NotificationUser.Query().
		WithNotification().
		Where(notification.UserID(userId)).
		Order(ent.Desc(notification.FieldCreatedAt))

	// Count number of records
	total, err := query.Count(ctx)
	if err != nil {
		return nil, 0, status.Error(code.Code_INTERNAL)
	}

	//limit offset
	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	notifications, err := query.All(ctx)
	for _, noti := range notifications {
		fmt.Print(noti.Edges.Notification.Message)
	}

	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return notifications, int64(total), nil
}

func (m *notificationImpl) Delete(ctx context.Context, userId int64, notificationId int64) error {
	deletedCount, err := m.entClient.NotificationUser.Delete().
		Where(
			notification.UserIDEQ(userId),
			notification.IDEQ(notificationId),
		).
		Exec(ctx)

	log.Println(deletedCount)
	if err != nil {
		return status.Internal(err.Error())
	}

	if deletedCount == 0 {
		return status.Internal("no records were deleted")
	}

	return nil
}

func GetTimeZoneStr(tz int32) string {
	if tz < 0 {
		return fmt.Sprintf("-%02d:00", -tz)
	}

	return fmt.Sprintf("+%02d:00", tz)
}
