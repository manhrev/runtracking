package notification

import (
	"log"
	"net/http"

	"google.golang.org/protobuf/types/known/emptypb"
)

func (s *notificationHttpServer) PushNoti2AllUsers(w http.ResponseWriter, r *http.Request) {
	log.Println("router is called")
	user, err := s.authClient.GetAllUsers(r.Context(), &emptypb.Empty{})
	if err != nil {
		log.Fatalf("failed querying users: %v", err)
	}
	log.Println(user)
}
