package notification

import (
	"net/http"

	"github.com/gorilla/mux"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entClient *ent.Client, router *mux.Router, authClient auth.AuthClient) *notificationHttpServer {
	return &notificationHttpServer{
		entClient:  entClient,
		router:     router,
		authClient: authClient,
	}
}

func RegisterRouteHttpServer(entClient *ent.Client, router *mux.Router, authClient auth.AuthClient) {
	s := NewHttpServer(entClient, router, authClient)
	s.router.HandleFunc("/notification/pushnotification", s.PushNotification).Methods(http.MethodPost)
}

type notificationHttpServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	router     *mux.Router
	authClient auth.AuthClient
}
