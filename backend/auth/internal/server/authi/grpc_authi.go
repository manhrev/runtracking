package auth

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

func NewServer(entClient *ent.Client) auth.AuthIServer {
	return &authIServer{
		entClient: entClient,
	}
}

type authIServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	auth.UnimplementedAuthIServer
}
