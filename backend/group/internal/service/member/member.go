package member

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Member interface {
	JoinGroup(
		ctx context.Context,
		userId int64,
		groupId int64,
	) (*group.JoinGroupReply, error)
	AcceptMember(
		ctx context.Context,
		userId int64,
		request *group.AcceptMemberRequest,
	) (*group.AcceptMemberReply, error)

	BanMember(
		ctx context.Context,
		userId int64,
		request *group.BanMemberRequest,
	) (*group.BanMemberReply, error)
	LeaveGroup(
		ctx context.Context,
		userId int64,
		request *group.LeaveGroupRequest,
	) (*group.LeaveGroupReply, error)
}

type memberImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Member {
	return &memberImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}

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

func (m *memberImpl) BanMember(
	ctx context.Context,
	userId int64,
	request *group.BanMemberRequest,
) (*group.BanMemberReply, error) {
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
		group.Member_MEMBER_STATUS_BANNED)

	if err != nil {
		return nil, err
	}

	return &group.BanMemberReply{}, nil
}
