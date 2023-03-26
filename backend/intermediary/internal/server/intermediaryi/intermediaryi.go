package intermediaryi

import (
	"net/http"

	"github.com/gorilla/mux"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/intermediary/internal/repository"
	"github.com/manhrev/runtracking/backend/intermediary/internal/service/expopush"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entNotificationClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	expopush expopush.ExpoPush) *intermediaryIHttpServer {
	return &intermediaryIHttpServer{
		entNotificationClient: entNotificationClient,
		router:                router,
		authClient:            authClient,
		expoPush:              expopush,
		repository:            repository.New(entNotificationClient),
	}
}

func RegisterRouteHttpServer(entClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	expoPush expopush.ExpoPush) {
	s := NewHttpServer(entClient, router, authClient, expoPush)
	s.router.HandleFunc("/notification/pushnotification", s.PushNotification).Methods(http.MethodPost)
}

type intermediaryIHttpServer struct {
	entNotificationClient *ent.Client
	// Other service client connection, db adapter go here
	router     *mux.Router
	authClient auth.AuthIClient
	expoPush   expopush.ExpoPush
	repository *repository.Repository
}
