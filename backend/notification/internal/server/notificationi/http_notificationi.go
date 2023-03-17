package notificationi

import (
	"net/http"

	"github.com/gorilla/mux"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/notification/internal/repository"
	"github.com/manhrev/runtracking/backend/notification/internal/service/expopush"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	expopush expopush.ExpoPush) *notificationIHttpServer {
	return &notificationIHttpServer{
		entClient:  entClient,
		router:     router,
		authClient: authClient,
		expoPush:   expopush,
		repository: repository.New(entClient),
	}
}

func RegisterRouteHttpServer(entClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	expoPush expopush.ExpoPush) {
	s := NewHttpServer(entClient, router, authClient, expoPush)
	s.router.HandleFunc("/notification/pushnotification", s.PushNotification).Methods(http.MethodPost)
}

type notificationIHttpServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	router     *mux.Router
	authClient auth.AuthIClient
	expoPush   expopush.ExpoPush
	repository *repository.Repository
}
