package season

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

func (m *seasonImpl) UpdateMemberPoint(
	ctx context.Context,
	point int,
	inProgressSeasonEnt *ent.Season,
	memberEnt *ent.Member,
) error {

	err := m.entClient.SeasonMember.Update().
		Where(seasonmember.HasMemberWith(member.IDEQ(memberEnt.ID)),
			seasonmember.SeasonIDEQ(inProgressSeasonEnt.ID)).
		AddPoint(int64(point)).
		Exec(ctx)

	if err != nil {
		return status.Internal(fmt.Sprintf("Error when add point for member season: %v", err))
	}

	return nil
}
