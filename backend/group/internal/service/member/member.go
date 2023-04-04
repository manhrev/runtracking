package member

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
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

	GetMember(
		ctx context.Context,
		memberId int64,
	) (*ent.Member, error)
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
