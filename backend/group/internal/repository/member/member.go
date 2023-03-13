package member

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Member interface {
	Create(
		ctx context.Context,
		userId int64,
		groupId int64,
	) (*ent.Member, error)
}
type memberImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Member {
	return &memberImpl{
		entClient: entClient,
	}
}

func (m *memberImpl) Create(
	ctx context.Context,
	userId int64,
	groupId int64,
) (*ent.Member, error) {
	newMember, err := m.entClient.Member.Create().
		SetUserID(userId).
		SetGroupzID(groupId).
		SetStatus(uint32(group.Member_MEMBER_STATUS_WAITING)).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newMember, nil
}
