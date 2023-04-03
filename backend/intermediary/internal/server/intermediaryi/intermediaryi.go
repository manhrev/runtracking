package intermediaryi

import (
	"net/http"

	"github.com/gorilla/mux"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	plan "github.com/manhrev/runtracking/backend/plan/pkg/api"

	"github.com/manhrev/runtracking/backend/intermediary/internal/repository"
	"github.com/manhrev/runtracking/backend/intermediary/internal/service/expopush"
	"github.com/manhrev/runtracking/backend/notification/pkg/ent"
)

func NewHttpServer(entNotificationClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	planIClient plan.PlanIClient,
	groupIClient group.GroupIClient,
	expopush expopush.ExpoPush) *intermediaryIHttpServer {
	return &intermediaryIHttpServer{
		entNotificationClient: entNotificationClient,
		router:                router,
		authClient:            authClient,
		planIClient:           planIClient,
		expoPush:              expopush,
		repository:            repository.New(entNotificationClient),
		groupIClient:          groupIClient,
	}
}

func RegisterRouteHttpServer(
	entClient *ent.Client,
	router *mux.Router,
	authClient auth.AuthIClient,
	planIClient plan.PlanIClient,
	groupIClient group.GroupIClient,
	expoPush expopush.ExpoPush) {
	s := NewHttpServer(entClient, router, authClient, planIClient, groupIClient, expoPush)
	s.router.HandleFunc("/notification/pushnotification", s.PushNotification).Methods(http.MethodPost)
	s.router.HandleFunc("/plan/checkplandaily", s.CheckDailyPlan).Methods(http.MethodPost)
	s.router.HandleFunc("/challenge/checkchallengedaily", s.CheckDailyChallenge).Methods(http.MethodPost)
}

type intermediaryIHttpServer struct {
	entNotificationClient *ent.Client
	// Other service client connection, db adapter go here
	router       *mux.Router
	authClient   auth.AuthIClient
	planIClient  plan.PlanIClient
	expoPush     expopush.ExpoPush
	repository   *repository.Repository
	groupIClient group.GroupIClient
}
