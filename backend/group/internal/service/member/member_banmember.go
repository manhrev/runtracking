package member

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *memberImpl) BanMember(
	ctx context.Context,
	userId int64,
	request *group.BanMemberRequest,
) (*group.BanMemberReply, error) {
	groupEntity, err := m.repository.Group.Get(ctx, request.GetGroupId(), false, false)
	if err != nil {
		return nil, err
	}

	if userId != groupEntity.LeaderID {
		return nil, status.Internal("User is not an admin of group")
	}

	err = m.repository.Member.Update(ctx,
		request.GetMemberId(),
		request.GetGroupId(),
		group.Member_MEMBER_STATUS_BANNED)

	if err != nil {
		return nil, err
	}

	return &group.BanMemberReply{}, nil
}
