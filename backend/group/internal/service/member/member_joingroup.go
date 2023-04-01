package member

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *memberImpl) JoinGroup(
	ctx context.Context,
	userId int64,
	groupId int64,
) (*group.JoinGroupReply, error) {
	_, err := m.repository.Member.Create(ctx, userId, groupId, group.Member_MEMBER_STATUS_WAITING)

	if err != nil {
		return nil, err
	}

	return &group.JoinGroupReply{}, nil
}
