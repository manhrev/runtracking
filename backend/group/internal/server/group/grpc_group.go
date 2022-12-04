package group

import (
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func NewServer(entClient *ent.Client) group.GroupServer {
	return &groupServer{
		entClient: entClient,
	}
}

type groupServer struct {
	entClient *ent.Client
	// Other service client connection, db adapter go here
	group.UnimplementedGroupServer
}
