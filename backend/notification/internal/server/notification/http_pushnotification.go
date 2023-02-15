package notification

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	_ "github.com/manhrev/runtracking/backend/notification/helper/query"
	"github.com/manhrev/runtracking/backend/notification/internal/service/cloudtask"
	expo "github.com/oliveroneill/exponent-server-sdk-golang/sdk"
)

func (s *notificationHttpServer) PushNotification(w http.ResponseWriter, r *http.Request) {
	// user, err := s.authClient.GetAllUsers(r.Context(), &emptypb.Empty{})
	// if err != nil {
	// 	log.Fatalf("failed querying users: %v", err)
	// }
	// log.Println(user)
	reqBody, _ := ioutil.ReadAll(r.Body)
	var message cloudtask.NotificationTransfer
	err := json.Unmarshal(reqBody, &message)

	log.Println(message)

	// var q query.Query

	// switch r.Body {
	// case 1:
	// 	q = query.OnlyUserQuery()
	// default:
	// 	q = query.OnlyUserQuery()
	// }

	// q.GetAllUsers()

	// To check the token is valid
	pushToken, err := expo.NewExponentPushToken("ExponentPushToken[_KD210IqYSrmAgN2nItFrm]")
	if err != nil {
		panic(err)
	}

	// Create a new Expo SDK client
	client := expo.NewPushClient(nil)

	// Publish message
	response, err := client.Publish(
		&expo.PushMessage{
			To:       []expo.ExponentPushToken{pushToken},
			Body:     "This is a test notification",
			Data:     map[string]string{"withSome": "data"},
			Sound:    "default",
			Title:    "Notification Title",
			Priority: expo.DefaultPriority,
		},
	)

	// Check errors
	if err != nil {
		panic(err)
	}

	// Validate responses
	if response.ValidateResponse() != nil {
		log.Println(response.PushMessage.To, "failed")
	}
}
