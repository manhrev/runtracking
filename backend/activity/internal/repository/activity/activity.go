package activity

import (
	"context"
	"fmt"
	"log"
	"time"

	"entgo.io/ent/dialect/sql"
	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activitypb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/code"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/ent/activity"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"
type Activity interface {
	Create(
		ctx context.Context,
		userId int64,
		activityInfo *activitypb.ActivityInfo,
	) (*ent.Activity, error)
	List(
		ctx context.Context,
		userId int64,
		activityType activitypb.ActivityType,
		sortBy activitypb.ActivitySortBy,
		ascending bool,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
		limit uint32,
		offset uint64,
	) (records []*ent.Activity, total int64, err error)
	Delete(ctx context.Context, userId int64, activityIdList []int64) error
	GetStatistic(
		ctx context.Context,
		userId int64,
		activityType activitypb.ActivityType,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
		groupBy activitypb.GetActivityStatisticRequest_GroupBy,
		tz uint32,
	) ([]*ActivityStatisticData, error)
	GetById(
		ctx context.Context,
		userId int64,
		activityId int64,
	) (*ent.Activity, error)
	SetCommit( // set commit state for activity
		ctx context.Context,
		activityId int64,
		commitType activitypb.CommitType,
		targetId int64, // challenge id or plan id or ... id
	) error
}

type activityImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Activity {
	return &activityImpl{
		entClient: entClient,
	}
}

func (m *activityImpl) Create(ctx context.Context, userId int64, activityInfo *activitypb.ActivityInfo) (*ent.Activity, error) {
	newActivity, err := m.entClient.Activity.Create().
		SetActivityName(activityInfo.GetActivityName()).
		SetActivityNote(activityInfo.GetActivityNote()).
		SetUserID(userId).
		SetCreatedAt(time.Now()).
		SetStartTime(activityInfo.GetStartTime().AsTime()).
		SetEndTime(activityInfo.GetEndTime().AsTime()).
		SetKcal(activityInfo.GetKcal()).
		SetRoute(activityInfo.GetRoute()).
		SetType(uint32(activityInfo.GetType())).
		SetTotalDistance(activityInfo.GetTotalDistance()).
		SetDuration(activityInfo.GetDuration()).
		Save(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newActivity, nil
}

func (m *activityImpl) GetById(
	ctx context.Context,
	userId int64,
	activityId int64,
) (*ent.Activity, error) {
	activity, err := m.entClient.Activity.Query().Where(
		activity.UserIDEQ(userId),
		activity.IDEQ(activityId),
	).Only(ctx)

	if err != nil {
		log.Printf("Error while getting activity by id: %v", err)
		return nil, status.Internal(err.Error())
	}

	return activity, nil
}

func (m *activityImpl) List(
	ctx context.Context,
	userId int64,
	activityType activitypb.ActivityType,
	sortBy activitypb.ActivitySortBy,
	ascending bool,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
	limit uint32,
	offset uint64,
) ([]*ent.Activity, int64, error) {
	var (
		byField string
	)

	query := m.entClient.Activity.Query().
		Where(activity.UserIDEQ(userId))

	if activityType != activitypb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED {
		query.Where(activity.TypeEQ(uint32(activityType)))
	} else {
		query.Where(activity.TypeNEQ(uint32(activitypb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED)))
	}

	// sort by type
	switch sortBy {
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_END_TIME:
		byField = activity.FieldEndTime
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_DURATION:
		byField = activity.FieldDuration
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_ENERGY:
		byField = activity.FieldKcal
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_TOTAL_DISTANCE:
		byField = activity.FieldTotalDistance
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_UNSPECIFIED:
		byField = activity.FieldEndTime
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
			activity.CreatedAtGTE(from.AsTime().Local()),
			activity.CreatedAtLTE(to.AsTime().Local()),
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

	activities, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return activities, int64(total), nil
}

func (m *activityImpl) Delete(ctx context.Context, userId int64, activityIdList []int64) error {
	deletedCount, err := m.entClient.Activity.Delete().
		Where(
			activity.UserIDEQ(userId),
			activity.IDIn(activityIdList...),
		).
		Exec(ctx)
	log.Println(deletedCount)
	if err != nil {
		return status.Internal(err.Error())
	}

	if deletedCount == 0 {
		return status.Internal("no records were deleted")
	}

	return nil
}

func (m *activityImpl) SetCommit(
	ctx context.Context,
	activityId int64,
	commitType activitypb.CommitType,
	targetId int64,
) error {
	query := m.entClient.Activity.UpdateOneID(activityId)
	switch commitType {
	case activitypb.CommitType_COMMIT_TYPE_CHALLENGE:
		query.SetChallengeID(targetId)
	case activitypb.CommitType_COMMIT_TYPE_PLAN:
		query.SetPlanID(targetId)
	case activitypb.CommitType_COMMIT_TYPE_EVENT:
		query.SetEventID(targetId)
	}
	_, err := query.Save(ctx)
	if err != nil {
		log.Printf("Error while SetCommit: %v", err)
	}

	return nil
}

type ActivityStatisticData struct {
	activitypb.ActivityStatisticData
	Datetime time.Time `json:"date_time"`
}

func (m *activityImpl) GetStatistic(
	ctx context.Context,
	userId int64,
	activityType activitypb.ActivityType,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
	groupBy activitypb.GetActivityStatisticRequest_GroupBy,
	tz uint32,
) ([]*ActivityStatisticData, error) {
	var sliceOfPointers []*ActivityStatisticData

	err := m.entClient.Debug().Activity.Query().Modify(func(s *sql.Selector) {
		activityTable := sql.Table(activity.Table)

		// check groupby here!
		groupByStr := fmt.Sprintf(`
			CAST(CAST(CONVERT_TZ(%s, "+00:00", "%s") as DATE) as DATETIME)
		`, "end_time", GetTimeZoneStr(int32(tz)))

		s.Select(
			sql.As(groupByStr, "date_time"),
			sql.As(sql.Count(activityTable.C(activity.FieldID)), "number_of_activities"),
			sql.As(sql.Sum(activityTable.C(activity.FieldTotalDistance)), "total_distance"),
			sql.As(sql.Sum(activityTable.C(activity.FieldDuration)), "total_duration"),
		)

		// User id
		s.Where(
			sql.EQ(activityTable.C(activity.FieldUserID), userId),
		)

		// Activity type
		if activityType == activitypb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED {
			activityType = activitypb.ActivityType_ACTIVITY_TYPE_RUNNING
		} else {
			s.Where(
				sql.EQ(activityTable.C(activity.FieldType), activityType),
			)
		}

		// time range
		if from != nil && to != nil {
			s.Where(
				sql.And(
					sql.GTE(
						activityTable.C(activity.FieldEndTime),
						from.AsTime().Format(sqlTimeFormat),
					),
					sql.LTE(
						activityTable.C(activity.FieldEndTime),
						to.AsTime().Format(sqlTimeFormat),
					),
				),
			)
		}

		s.From(activityTable).
			GroupBy(
				groupByStr,
			)
	}).Scan(ctx, &sliceOfPointers)

	if err != nil {
		log.Printf("error while listactivity statistic %v", err.Error())
		return nil, status.Internal(err.Error())
	}
	log.Println(sliceOfPointers)

	return sliceOfPointers, nil
}

func GetTimeZoneStr(tz int32) string {
	if tz < 0 {
		return fmt.Sprintf("-%02d:00", -tz)
	}

	return fmt.Sprintf("+%02d:00", tz)
}
