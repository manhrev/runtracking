package season

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/code"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/season"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Season interface {
	Create(
		ctx context.Context,
		seasonInfo *group.SeasonInfo,
	) (*ent.Season, error)

	Update(
		ctx context.Context,
		seasonInfo *group.SeasonInfo,
	) error

	Delete(
		ctx context.Context,
		seasonId int64,
	) error

	List(
		ctx context.Context,
		sortBy group.ListSeasonRequest_SeasonSortBy,
		searchByName string,
		ascending bool,
		seasonStatus group.RuleStatus,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
		limit uint32,
		offset uint64,
	) ([]*ent.Season, int64, error)

	Get(
		ctx context.Context,
		seasonId int64,
	) (*ent.Season, error)

	CreateBulkSeasonMember(
		ctx context.Context,
		memberEnts []*ent.Member,
		seasonEnt *ent.Season,
	) ([]*ent.SeasonMember, error)

	GetInProgressSeason(
		ctx context.Context,
	) (*ent.Season, error)

	UpdateMemberPoint(
		ctx context.Context,
		point int,
		isCompletedChallenge bool,
		inProgressSeasonEnt *ent.Season,
		memberEnt *ent.Member,
	) error

	InitialSeasonRecordForMember(
		ctx context.Context,
		memberId int64,
	) error

	ListSeasonMemberOfGroup(
		ctx context.Context,
		groupId int64,
		seasonId int64,
		sortBy group.ListUserRankingRequest_SortBy,
		ascending bool,
		limit uint32,
		offset uint64,
	) ([]*ent.SeasonMember, int64, error)
}
type seasonImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Season {
	return &seasonImpl{
		entClient: entClient,
	}
}

func (s *seasonImpl) Create(
	ctx context.Context,
	seasonInfo *group.SeasonInfo,
) (*ent.Season, error) {
	query := s.entClient.Season.Create().
		SetDescription(seasonInfo.Description).
		SetPicture(seasonInfo.Picture).
		SetName(seasonInfo.Name).
		SetStartTime(seasonInfo.From.AsTime()).
		SetEndTime(seasonInfo.To.AsTime())

	if seasonInfo.GetFrom().AsTime().Before(time.Now()) {
		query.SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))
	} else {
		query.SetStatus(int64(group.RuleStatus_RULE_STATUS_COMING_SOON))
	}

	// check Start time and End time of season
	isValidDay, err := checkValidPeriodSeason(ctx, s.entClient, seasonInfo.From, seasonInfo.To)
	if err != nil {
		return nil, err
	}
	if !isValidDay {
		return nil, err
	}

	newSeason, err := query.Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newSeason, nil
}

func (c *seasonImpl) Update(
	ctx context.Context,
	seasonInfo *group.SeasonInfo,
) error {
	seasonQuery := c.entClient.Season.UpdateOneID(seasonInfo.Id).
		SetName(seasonInfo.Name).
		SetPicture(seasonInfo.Picture).
		SetDescription(seasonInfo.Description)

	_, err := checkValidPeriodSeason(ctx, c.entClient, seasonInfo.From, seasonInfo.To)
	if err != nil {
		return err
	}

	seasonQuery.SetStartTime(seasonInfo.From.AsTime()).
		SetEndTime(seasonInfo.To.AsTime())

	//If do not have any inprogress season and time updated before time now => update status to inprogress
	if seasonInfo.From.AsTime().Before(time.Now()) {
		seasonQuery.SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))
		if err != nil {
			log.Println("Fail when save season member rules: %v", err.Error())
			return status.Internal(fmt.Sprintf("Fail when save season member rules: %v", err.Error()))
		}
	} else {
		seasonQuery.SetStatus(int64(group.RuleStatus_RULE_STATUS_COMING_SOON))
	}

	err = seasonQuery.Exec(ctx)
	if err != nil {
		return status.Internal(err.Error())
	}
	return nil
}

func (m *seasonImpl) Delete(
	ctx context.Context,
	seasonId int64,
) error {
	err := m.entClient.Season.DeleteOneID(seasonId).Exec(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	return nil
}

func (c *seasonImpl) List(
	ctx context.Context,
	sortBy group.ListSeasonRequest_SeasonSortBy,
	searchByName string,
	ascending bool,
	seasonStatus group.RuleStatus,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
	limit uint32,
	offset uint64,
) ([]*ent.Season, int64, error) {
	var (
		byField string
	)
	query := c.entClient.Season.Query()

	if searchByName != "" {
		query.Where(season.NameContainsFold(searchByName))
	}

	if seasonStatus != group.RuleStatus_RULE_STATUS_UNSPECIFIED {
		query.Where(season.StatusEQ(int64(seasonStatus)))
	}

	// sort by type
	switch sortBy {
	case group.ListSeasonRequest_SEASON_SORT_BY_END_TIME:
		byField = season.FieldEndTime
	case group.ListSeasonRequest_SEASON_SORT_BY_START_TIME:
		byField = season.FieldStartTime
	default:
		byField = season.FieldName

	}

	// ascending?
	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	// time range
	if from != nil && to != nil {
		query.Where(
			season.CreatedAtGTE(from.AsTime().Local()),
			season.CreatedAtLTE(to.AsTime().Local()),
		)
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

	seasons, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return seasons, int64(total), nil
}

func (m *seasonImpl) Get(
	ctx context.Context,
	seasonId int64,
) (*ent.Season, error) {
	seasonEnt, err := m.entClient.Season.Query().
		Where(season.IDEQ(seasonId)).
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return seasonEnt, nil
}

func (m *seasonImpl) GetInProgressSeason(
	ctx context.Context,
) (*ent.Season, error) {
	seasonEnt, err := m.entClient.Season.Query().
		Where(season.StatusEQ(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))).
		First(ctx)

	if err != nil {
		return nil, status.Internal(fmt.Sprintf("InProgress Season not found: %v", err))
	}

	return seasonEnt, nil
}

func (c *seasonImpl) CreateBulkSeasonMember(
	ctx context.Context,
	memberEnts []*ent.Member,
	seasonEnt *ent.Season,
) ([]*ent.SeasonMember, error) {
	bulk := make([]*ent.SeasonMemberCreate, len(memberEnts))

	for i, memberEnt := range memberEnts {
		bulk[i] = c.entClient.SeasonMember.Create().
			SetSeason(seasonEnt).
			SetCreatedAt(seasonEnt.StartTime).
			SetMember(memberEnt).
			SetPoint(0)
	}

	seasonMembers, err := c.entClient.SeasonMember.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating season members for season has failed %s\n", err.Error()))
	}

	return seasonMembers, nil
}
