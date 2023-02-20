package notification

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/manhrev/runtracking/backend/notification/helper/query"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *notificationHttpServer) PushNotification(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var message cloudtask.NotificationTransfer
	err := json.Unmarshal(reqBody, &message)

	var q query.Query

	switch message.NotificationType {
	case int(noti.NOTIFICATION_TYPE_ALLUSERS):
		q = query.AllUsersQuery(s.authClient)
	case int(noti.NOTIFICATION_TYPE_ONLYUSER):
		q = query.OnlyUserQuery(s.authClient)
	default:
		q = query.AllUsersQuery(s.authClient)
	}

	userInfos, err := q.GetAllUsers(r.Context(), int64(message.ReceivedId))
	log.Println(userInfos)
	if err != nil {
		panic(err)
	}

	var userIds []int64
	for _, userInfo := range userInfos {
		userIds = append(userIds, userInfo.GetUserId())
	}

	responses, err := s.expoPush.PushBulkNotification(r.Context(), userIds, message)
	if err != nil {
		panic(err)
	}

	// save ent

	_, err = s.repository.Notification.Create(r.Context(), userIds, false, int64(message.Id))
	if err != nil {
		panic(status.Internal(err.Error()))
	}

	// Validate responses
	for _, response := range responses {
		if response.ValidateResponse() != nil {
			log.Println(response.PushMessage.To, "failed")
		}
	}
}
