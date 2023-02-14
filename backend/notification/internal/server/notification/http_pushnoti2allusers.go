package notification

import (
	"fmt"
	"io"
	"net/http"
)

func (s *notificationHttpServer) PushNoti2AllUsers(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website for notification test!\n")
}
