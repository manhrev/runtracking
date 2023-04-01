package member

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *memberImpl) LeaveGroup(
	ctx context.Context,
	userId int64,
	request *group.LeaveGroupRequest,
) (*group.LeaveGroupReply, error) {
	memberEnt, err := m.repository.Member.GetByUserID(ctx, userId, request.GetGroupId())

	if err != nil {
		return nil, err
	}

	err = m.repository.Member.Delete(ctx, memberEnt.ID)

	if err != nil {
		return nil, err
	}

	return &group.LeaveGroupReply{}, nil
}
