package notification

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/manhrev/runtracking/backend/notification/helper/query"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *notificationHttpServer) PushNotification(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var message cloudtask.NotificationTransfer
	err := json.Unmarshal(reqBody, &message)

	var q query.Query

	switch message.NotificationType {
	case int(noti.PushNotiRequest_ALLUSERS):
		q = query.AllUsersQuery(s.authClient)
	case int(noti.PushNotiRequest_ONLYUSER):
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

	responses, _ := s.expoPush.PushBulkNotification(r.Context(), userIds, message)
	if err != nil {
		panic(err)
	}

	// Validate responses
	for _, response := range responses {
		if response.ValidateResponse() != nil {
			log.Println(response.PushMessage.To, "failed")
		}
	}
}
