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
	_, err := m.repository.Member.Create(ctx, userId, groupId)

	if err != nil {
		return nil, err
	}

	return &group.JoinGroupReply{}, nil
}
