package notification

import (
	"net/http"

	"github.com/gorilla/mux"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/internal/service/expopush"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthClient,
	expopush expopush.ExpoPush) *notificationHttpServer {
	return &notificationHttpServer{
		entClient:  entClient,
		router:     router,
		authClient: authClient,
		expoPush:   expopush,
	}
}

func RegisterRouteHttpServer(entClient *ent.Client, router *mux.Router, authClient auth.AuthClient, expoPush expopush.ExpoPush) {
	s := NewHttpServer(entClient, router, authClient, expoPush)
	s.router.HandleFunc("/notification/pushnotification", s.PushNotification).Methods(http.MethodPost)
}

type notificationHttpServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	router     *mux.Router
	authClient auth.AuthClient
	expoPush   expopush.ExpoPush
}
