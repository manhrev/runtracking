package group

import (
	"context"

	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (m *groupImpl) Create(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) error {
	groupz, err := m.repository.Group.Create(ctx, userId, groupInfo)

	if err != nil {
		return err
	}

	memberEnt, err := m.repository.Member.Create(ctx, userId, groupz.ID, group.Member_MEMBER_STATUS_ACTIVE)
	if err != nil {
		return err
	}

	err = m.repository.Season.InitialSeasonRecordForMember(ctx, memberEnt.ID)
	if err != nil {
		return err
	}

	return nil
}
