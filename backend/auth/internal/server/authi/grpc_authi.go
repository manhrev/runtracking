package authi

import (
	"github.com/manhrev/runtracking/backend/auth/internal/repository"
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

func NewServer(entClient *ent.Client) auth.AuthIServer {
	return &authIServer{
		entClient:  entClient,
		repository: repository.New(entClient),
	}
}

type authIServer struct {
	entClient *ent.Client

	repository *repository.Repository
	// Other service client connection, db adapter go here
	auth.UnimplementedAuthIServer
}
