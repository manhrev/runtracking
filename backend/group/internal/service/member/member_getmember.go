package member

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func (m *memberImpl) GetMember(
	ctx context.Context,
	memberId int64,
) (*ent.Member, error) {
	memberEnt, err := m.entClient.Member.Get(ctx, memberId)

	if err != nil {
		return nil, err
	}

	return memberEnt, nil
}
