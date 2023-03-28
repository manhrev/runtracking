package intermediaryi

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	receiver "github.com/manhrev/runtracking/backend/intermediary/internal/service/receiver"
	noti "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

func (s *intermediaryIHttpServer) PushNotification(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var message receiver.NotificationTransfer
	err := json.Unmarshal(reqBody, &message)
	if err != nil {
		log.Printf("PushNotification: Error read request body: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("500 - Internal server error, please try again later!"))
		return
	}

	receiverService := receiver.GetReceiver(noti.SOURCE_TYPE(message.SourceType), s.authClient)

	userInfos, err := receiverService.GetAllUsers(r.Context(), message)
	if err != nil {
		log.Printf("PushNotification: Error get user info: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("500 - Internal server error"))
		return
	}

	var userIds []int64
	for _, userInfo := range userInfos {
		userIds = append(userIds, userInfo.GetUserId())
	}

	responses, err := s.expoPush.PushBulkNotification(r.Context(), userIds, message)
	if err != nil {
		log.Printf("PushNotification: Error when push notification to expo: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("500 - Internal server error"))
		return
	}

	// save ent

	_, err = s.repository.Notification.Create(r.Context(), userIds, false, int64(message.Id))
	if err != nil {
		log.Printf("PushNotification: Error when save notification to DB: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("500 - Internal server error"))
		return
	}

	// Validate responses
	for _, response := range responses {
		if response.ValidateResponse() != nil {
			log.Printf("PushNotification: Id %s, message: %s failed", response.ID, response.Message)
		}
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("200 - Ok"))
	return
}
