package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *groupImpl) Update(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) error {
	groupEntity, err := m.repository.Group.Get(ctx, groupInfo.GetId(), false, false)
	if err != nil {
		return err
	}

	if userId != groupEntity.LeaderID {
		return status.Internal("User is not an admin of group")
	}

	return m.repository.Group.Update(ctx, userId, groupInfo)
}
