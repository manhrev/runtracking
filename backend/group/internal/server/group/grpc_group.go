package group

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/service"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func NewServer(entClient *ent.Client, authClient auth.AuthIClient) group.GroupServer {
	return &groupServer{
		service: service.New(entClient, authClient),
	}
}

type groupServer struct {
	service *service.Service
	// Other service client connection, db adapter go here
	group.UnimplementedGroupServer
}
