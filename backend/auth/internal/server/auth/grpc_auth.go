package auth

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

func NewServer(entClient *ent.Client) auth.AuthServer {
	return &authServer{
		entClient: entClient,
	}
}

type authServer struct {
	entClient *ent.Client

	auth.UnimplementedAuthServer
}
