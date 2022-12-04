package activity

import (
	"context"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/activity/internal/status"
	activitypb "github.com/manhrev/runtracking/backend/activity/pkg/api"
	"github.com/manhrev/runtracking/backend/activity/pkg/code"
	"github.com/manhrev/runtracking/backend/activity/pkg/ent"
	activity "github.com/manhrev/runtracking/backend/activity/pkg/ent/activity"
	"google.golang.org/protobuf/types/known/timestamppb"
)

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
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_DURATION:
		byField = activity.FieldDuration
	case activitypb.ActivitySortBy_ACTIVITY_SORT_BY_END_TIME:
		byField = activity.FieldEndTime
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
