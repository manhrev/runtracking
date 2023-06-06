package auth

import (
	"context"

	"github.com/manhrev/runtracking/backend/auth/internal/cache"
	"github.com/manhrev/runtracking/backend/auth/internal/feature/signin"
	"github.com/manhrev/runtracking/backend/auth/internal/feature/signup"
	"github.com/manhrev/runtracking/backend/auth/internal/repository"
	"github.com/manhrev/runtracking/backend/auth/internal/service/token"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	log "github.com/sirupsen/logrus"
)

func NewServer(entClient *ent.Client,
	token token.Token,
	signIn signin.SignIn,
	signUp signup.SignUp,
	cache *cache.Cache,
	extractor extractor.Extractor,
	notificationClient notification.NotificationIClient,
) auth.AuthServer {
	return &authServer{
		entClient:          entClient,
		token:              token,
		signIn:             signIn,
		signUp:             signUp,
		cache:              cache,
		extractor:          extractor,
		notificationClient: notificationClient,
		repository:         repository.New(entClient),
	}
}

type authServer struct {
	entClient          *ent.Client
	token              token.Token
	signIn             signin.SignIn
	signUp             signup.SignUp
	cache              *cache.Cache
	extractor          extractor.Extractor
	notificationClient notification.NotificationIClient

	repository *repository.Repository

	auth.UnimplementedAuthServer
}

func (s *authServer) cacheTokens(ctx context.Context, tokens *token.Tokens) {
	if tokens == nil {
		return
	}

	if tokens.AccessToken != nil {
		if err := s.cache.AccessToken().Set(ctx, tokens.AccessToken); err != nil {
			log.Warn("Could not set cache access token")
		}
	}
}
