package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) UpdateGroup(
	ctx context.Context,
	request *group.UpdateGroupRequest,
) (*group.UpdateGroupReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	err = s.service.Group.Update(
		ctx,
		userId,
		request.GetGroupInfo(),
	)

	if err != nil {
		return nil, err
	}

	return &group.UpdateGroupReply{}, nil
}
