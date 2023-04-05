package season

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/code"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/seasonmember"
)

func (m *seasonImpl) UpdateMemberPoint(
	ctx context.Context,
	point int,
	isCompletedChallenge bool,
	inProgressSeasonEnt *ent.Season,
	memberEnt *ent.Member,
) error {

	query := m.entClient.SeasonMember.Update().
		Where(seasonmember.HasMemberWith(member.IDEQ(memberEnt.ID)),
			seasonmember.SeasonIDEQ(inProgressSeasonEnt.ID)).
		AddPoint(int64(point))

	if isCompletedChallenge {
		query.AddCompletedChallengeCount(1)
	}

	err := query.Exec(ctx)

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

func (m *seasonImpl) ListSeasonMemberOfGroup(
	ctx context.Context,
	groupId int64,
	seasonId int64,
	sortBy group.ListUserRankingRequest_SortBy,
	ascending bool,
	limit uint32,
	offset uint64,
) ([]*ent.SeasonMember, int64, error) {
	var (
		byField string
	)

	query := m.entClient.SeasonMember.Query().
		Where(seasonmember.HasMemberWith(member.HasGroupzWith(groupz.IDEQ(groupId))),
			seasonmember.SeasonIDEQ(seasonId)).
		WithMember()

	// sort by type
	switch sortBy {
	case group.ListUserRankingRequest_SORT_BY_COUNT_CHALLENGE_COMPLETED:
		byField = seasonmember.FieldCompletedChallengeCount
	default:
		byField = seasonmember.FieldPoint
	}

	// ascending?
	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	// Count number of records
	total, err := query.Count(ctx)
	if err != nil {
		return nil, 0, status.Error(code.Code_INTERNAL)
	}

	//limit offset
	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	seasonMembers, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return seasonMembers, int64(total), nil
}
