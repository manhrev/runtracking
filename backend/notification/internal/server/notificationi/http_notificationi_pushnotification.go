package notificationi

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	receiver "github.com/manhrev/runtracking/backend/notification/internal/service/receiver"
	"github.com/manhrev/runtracking/backend/notification/internal/status"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *notificationIHttpServer) PushNotification(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var message cloudtask.NotificationTransfer
	err := json.Unmarshal(reqBody, &message)

	receiverService := receiver.GetReceiver(noti.SOURCE_TYPE(message.SourceType), s.authClient)

	userInfos, err := receiverService.GetAllUsers(r.Context(), message)
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
