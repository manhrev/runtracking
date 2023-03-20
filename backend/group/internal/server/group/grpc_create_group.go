package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) CreateGroup(
	ctx context.Context,
	request *group.CreateGroupRequest,
) (*group.CreateGroupReply, error) {

	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	_, err = s.service.Group.Create(ctx, userId, request.GetGroupInfo())
	if err != nil {
		return nil, err
	}
	return &group.CreateGroupReply{}, nil
}
