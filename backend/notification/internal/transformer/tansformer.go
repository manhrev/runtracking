package transformer

import (
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformNotificationListEntToNotificationList(notificationList []*ent.NotificationUser) []*notification.NotificationInfo {
	notificationInfoList := []*notification.NotificationInfo{}
	for _, notificationEnt := range notificationList {
		notificationInfo := &notification.NotificationInfo{
			Id:         notificationEnt.ID,
			Message:    notificationEnt.Edges.Notification.Message,
			SourceType: notification.SOURCE_TYPE(notificationEnt.Edges.Notification.SourceType),
			ReceiveIds: notificationEnt.Edges.Notification.ReceiveIds,
			SourceId:   notificationEnt.Edges.Notification.SourceID,
			Image:      notificationEnt.Edges.Notification.SourceImage,
			IsSeen:     notificationEnt.IsSeen,
			Time:       timestamppb.New(notificationEnt.CreatedAt),
		}
		notificationInfoList = append(notificationInfoList, notificationInfo)
	}
	return notificationInfoList
}
