package group

import (
	"context"

	"github.com/google/uuid"
	groupAPI "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/group"
)

func (s *groupServer) GetGroup(ctx context.Context, request *groupAPI.GetGroupRequest) (*groupAPI.GetGroupReply, error) {
	groupID, _ := uuid.Parse(request.GetId())

	group, err := s.entClient.Group.Query().Where(group.ID(groupID)).Only(ctx)
	if err != nil {
		return nil, err
	}

	return &groupAPI.GetGroupReply{
		Group: &groupAPI.GroupInfo{
			Id:   group.ID.String(),
			Name: group.Name,
		},
	}, nil
}
