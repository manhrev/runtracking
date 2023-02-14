package notification

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entClient *ent.Client, router *mux.Router) *notificationHttpServer {
	return &notificationHttpServer{
		entClient: entClient,
		router:    router,
	}
}

func RegisterRouteHttpServer(entClient *ent.Client, router *mux.Router) {
	s := NewHttpServer(entClient, router)
	s.router.HandleFunc("/notification/pushnoti2allusers", s.PushNoti2AllUsers).Methods(http.MethodGet)
}

type notificationHttpServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	router *mux.Router
}
