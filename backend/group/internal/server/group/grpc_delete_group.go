package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) DeleteGroup(
	ctx context.Context,
	request *group.DeleteGroupRequest,
) (*group.DeleteGroupReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.service.Group.Delete(ctx, userId, request.GetIdToDelete())
	if err != nil {
		return nil, err
	}

	return &group.DeleteGroupReply{}, nil
}
