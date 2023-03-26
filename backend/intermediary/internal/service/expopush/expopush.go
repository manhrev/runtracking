package expopush

import (
	"context"
	"errors"
	"fmt"
	"log"

	"github.com/manhrev/runtracking/backend/intermediary/internal/service/receiver"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent/userdevice"
	expo "github.com/oliveroneill/exponent-server-sdk-golang/sdk"
)

type ExpoPush interface {
	PushBulkNotification(ctx context.Context, userIDs []int64, message receiver.NotificationTransfer) ([]expo.PushResponse, error)
}

type expoPush struct {
	entClient      *ent.Client
	expoPushClient *expo.PushClient
}

func NewExpoPushService(client *ent.Client) ExpoPush {
	return &expoPush{
		entClient:      client,
		expoPushClient: expo.NewPushClient(nil),
	}
}

func (e *expoPush) PushBulkNotification(ctx context.Context, userIds []int64, message receiver.NotificationTransfer) ([]expo.PushResponse, error) {
	userDevices, _ := e.entClient.UserDevice.Query().
		Where(userdevice.UserIDIn(userIds...)).
		All(ctx)

	var expoPushTokens []string
	for _, userDevice := range userDevices {
		expoPushTokens = append(expoPushTokens, userDevice.ExpoPushToken)
	}

	var messages []expo.PushMessage
	for _, userDevice := range userDevices {
		// expoPushTokens = append(expoPushTokens, userDevice.ExpoPushToken)
		pushToken, err := expo.NewExponentPushToken(userDevice.ExpoPushToken)
		if err != nil {
			return nil, errors.New("Fail when convert push token")
		}
		messages = append(messages, expo.PushMessage{
			To:       []expo.ExponentPushToken{pushToken},
			Body:     message.Message,
			Data:     map[string]string{"withSome": "data"},
			Sound:    "default",
			Title:    "Go Tracker Notification",
			Priority: expo.DefaultPriority,
		})
		log.Println(messages)
	}

	response, err := e.expoPushClient.PublishMultiple(messages)
	if err != nil {
		return nil, errors.New(fmt.Sprintf("Fail when push token: %s", err.Error()))
	}
	return response, nil

}
