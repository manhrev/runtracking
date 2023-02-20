package transformer

import (
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformActivityListEntToActivityList(notificationList []*ent.NotificationUser) []*notification.NotificationInfo {
	notificationInfoList := []*notification.NotificationInfo{}
	for _, notificationEnt := range notificationList {
		notificationInfo := &notification.NotificationInfo{
			Id:          notificationEnt.ID,
			Message:     notificationEnt.Edges.Notification.Message,
			Type:        notification.NOTIFICATION_TYPE(notificationEnt.Edges.Notification.Type),
			ReferenceId: notificationEnt.Edges.Notification.ReceivedID,
			Image:       "",
			IsSeen:      notificationEnt.IsSeen,
			Time:        timestamppb.New(notificationEnt.CreatedAt),
		}
		notificationInfoList = append(notificationInfoList, notificationInfo)
	}
	return notificationInfoList
}
