package group

import (
	"context"

	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func (m *groupImpl) Get(ctx context.Context, request *grouppb.GetGroupRequest) (*ent.Groupz, error) {
	groupz, err := m.repository.Group.Get(ctx, request.GetGroupId())

	if err != nil {
		return nil, err
	}
	return groupz, nil
}
