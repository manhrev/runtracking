package season

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
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

func (m *seasonImpl) InitialSeasonRecordForMember(
	ctx context.Context,
	memberId int64,
) error {

	currentSeasonList, err := m.entClient.Season.Query().
		Where(season.StatusIn(int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS), int64(grouppb.RuleStatus_RULE_STATUS_COMING_SOON))).
		All(ctx)
	if err != nil {
		return status.Internal("Error when get current season list " + err.Error())
	}

	for _, currentSeason := range currentSeasonList {
		_, err = m.entClient.SeasonMember.Create().
			SetSeason(currentSeason).
			SetCreatedAt(currentSeason.StartTime).
			SetMemberID(memberId).
			SetPoint(0).
			Save(ctx)

		if err != nil {
			return status.Internal("Error when create season membre " + err.Error())
		}
	}

	return nil
}
