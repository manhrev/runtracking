package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
)

func (m *groupImpl) Delete(ctx context.Context, userId int64, groupId int64) error {
	groupEntity, err := m.repository.Group.Get(ctx, groupId, false, false)
	if err != nil {
		return err
	}

	if userId != groupEntity.LeaderID {
		return status.Internal("User is not an admin of group")
	}

	return m.repository.Group.Delete(ctx, userId, groupId)
}
