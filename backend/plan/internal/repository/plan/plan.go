package plan

import (
	"context"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/plan/internal/status"
	plan_pb "github.com/manhrev/runtracking/backend/plan/pkg/api"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent"
	"github.com/manhrev/runtracking/backend/plan/pkg/ent/plan"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const sqlTimeFormat = "2006-01-02 15:04:05" //"Jan 2, 2006 at 3:04pm (MST)"

type Plan interface {
	Create(
		ctx context.Context,
		userId int64,
		rule plan_pb.Rule,
		activityType plan_pb.ActivityType,
		goal int64,
		name string,
		note string,
		startTime *timestamppb.Timestamp,
		endTime *timestamppb.Timestamp,
	) error
	Delete(
		ctx context.Context,
		userId int64,
		ids []int64,
	) error
	List(
		ctx context.Context,
		userId int64,
		limit uint32,
		offset uint64,
		ascending bool,
		sortBy plan_pb.PlanSortBy,
		acitvityType plan_pb.ActivityType,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
	) ([]*ent.Plan, int64, error)
	Update(
		ctx context.Context,
		userId int64,
		planId int64,
		newEndTime *timestamppb.Timestamp,
		goal int64,
		name string,
		note string,
	) error
}

type planImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Plan {
	return &planImpl{
		entClient: entClient,
	}
}

func (p *planImpl) Create(
	ctx context.Context,
	userId int64,
	rule plan_pb.Rule,
	activityType plan_pb.ActivityType,
	goal int64,
	name string,
	note string,
	startTime *timestamppb.Timestamp,
	endTime *timestamppb.Timestamp,
) error {
	_, err := p.entClient.Plan.Create().
		SetUserID(userId).
		SetRule(int64(rule)).
		SetActivityType(int64(activityType)).
		SetGoal(goal).
		SetName(name).
		SetNote(note).
		SetStartTime(startTime.AsTime()).
		SetEndTime(endTime.AsTime()).
		SetStatus(int64(plan_pb.RuleStatus_RULE_STATUS_INPROGRESS)).
		SetTotal(0).
		SetCreatedAt(time.Now()).
		Save(ctx)

	if err != nil {
		log.Printf("Error create plan: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}

func (p *planImpl) Delete(
	ctx context.Context,
	userId int64,
	ids []int64,
) error {
	deletedCount, err := p.entClient.Plan.Delete().
		Where(
			plan.UserIDEQ(userId),
			plan.IDIn(ids...),
		).
		Exec(ctx)

	if err != nil {
		log.Printf("Error delete plan: %v", err)
		return status.Internal(err.Error())
	}

	if deletedCount == 0 {
		log.Printf("Error delete plan: no record deleted")
		return status.Internal("ent: no records deleted")
	}

	return nil
}

func (p *planImpl) List(
	ctx context.Context,
	userId int64,
	limit uint32,
	offset uint64,
	ascending bool,
	sortBy plan_pb.PlanSortBy,
	acitvityType plan_pb.ActivityType,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
) ([]*ent.Plan, int64, error) {
	var (
		byField string
	)

	query := p.entClient.Plan.Query().
		Where(plan.UserIDEQ(userId))

	if acitvityType != plan_pb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED {
		query.Where(plan.ActivityTypeEQ(int64(acitvityType)))
	} else {
		query.Where(plan.ActivityTypeNEQ(int64(plan_pb.ActivityType_ACTIVITY_TYPE_UNSPECIFIED)))
	}

	switch sortBy {
	case plan_pb.PlanSortBy_PLAN_SORT_BY_CREATED_TIME:
		byField = plan.FieldCreatedAt
	case plan_pb.PlanSortBy_PLAN_SORT_BY_PROGESS:
		byField = plan.FieldCreatedAt // how??
	case plan_pb.PlanSortBy_PLAN_SORT_BY_UNSPECIFIED:
		byField = plan.FieldCreatedAt
	}

	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	if from != nil && to != nil {
		query.Where(
			plan.CreatedAtGTE(from.AsTime().Local()),
			plan.CreatedAtLTE(to.AsTime().Local()),
		)
	}

	total, err := query.Count(ctx)
	if err != nil {
		log.Printf("Error list plans: cannot count: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

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

	plans, err := query.All(ctx)
	if err != nil {
		log.Printf("Error list plans: %v", err)
		return nil, 0, status.Internal(err.Error())
	}

	return plans, int64(total), nil
}

func (p *planImpl) Update(
	ctx context.Context,
	userId int64,
	planId int64,
	newEndTime *timestamppb.Timestamp,
	newGoal int64,
	newName string,
	newNote string,
) error {
	query := p.entClient.Plan.Update().Where(
		plan.UserIDEQ(userId),
		plan.IDEQ(planId),
	)

	if newEndTime != nil {
		query.Where(
			plan.EndTimeLT(newEndTime.AsTime()),
		).SetEndTime(newEndTime.AsTime())
	}

	if newGoal != 0 {
		query.SetGoal(newGoal)
	}

	if newName != "" {
		query.SetName(newName)
	}

	if newNote != "" {
		query.SetNote(newNote)
	}

	err := query.Exec(ctx)
	if err != nil {
		log.Printf("Error update plan: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}
