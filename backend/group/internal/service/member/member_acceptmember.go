package member

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *memberImpl) AcceptMember(
	ctx context.Context,
	userId int64,
	request *group.AcceptMemberRequest,
) (*group.AcceptMemberReply, error) {
	groupEntity, err := m.repository.Group.Get(ctx, request.GetGroupId())
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = m.repository.Member.Update(ctx,
		request.GetMemberId(),
		request.GetGroupId(),
		group.Member_MEMBER_STATUS_ACTIVE)

	if err != nil {
		return nil, err
	}

	return &group.AcceptMemberReply{}, nil
}
