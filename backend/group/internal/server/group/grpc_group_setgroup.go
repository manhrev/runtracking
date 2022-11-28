package group

import (
	"context"

	groupAPI "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) SetGroup(ctx context.Context, request *groupAPI.SetGroupRequest) (*groupAPI.SetGroupReply, error) {

	group, err := s.entClient.Group.Create().
		SetName(request.GetGroup().GetName()).
		Save(ctx)
	if err != nil {
		return nil, err
	}

	return &groupAPI.SetGroupReply{
		GroupId: group.ID.String(),
	}, nil
}
