package user

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
	"github.com/manhrev/runtracking/backend/auth/pkg/extractor"
)

type userServer struct {
	entClient *ent.Client
	extractor extractor.Extractor

	auth.UnimplementedUserServer
}

func NewServer(entClient *ent.Client,
	extractor extractor.Extractor,
) *userServer {
	return &userServer{
		entClient: entClient,
		extractor: extractor,
	}
}
