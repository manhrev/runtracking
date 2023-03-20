package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	api "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/code"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	group "github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
)

type Group interface {
	Create(
		ctx context.Context,
		userId int64,
		groupInfo *grouppb.GroupInfo,
	) (*ent.Groupz, error)
	List(
		ctx context.Context,
		userId int64,
		sortBy grouppb.GroupSortBy,
		searchByName string,
		filterBy grouppb.ListGroupRequest_FilterBy,
		ascending bool,
		limit uint32,
		offset uint64,
	) ([]*ent.Groupz, int64, error)
	Get(ctx context.Context, groupId int64) (*ent.Groupz, error)
	Delete(ctx context.Context, userId int64, groupId int64) error
	Update(ctx context.Context, groupInfo *grouppb.GroupInfo) error
	ListMember(ctx context.Context,
		groupId int64,
		status api.Member_Status) ([]*ent.Member, error)
	// GetStatistic(
	// 	ctx context.Context,
	// 	userId int64,
	// 	activityType activitypb.ActivityType,
	// 	from *timestamppb.Timestamp,
	// 	to *timestamppb.Timestamp,
	// 	groupBy activitypb.GetActivityStatisticRequest_GroupBy,
	// 	tz uint32,
	// ) ([]*ActivityStatisticData, error)
}

type groupImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Group {
	return &groupImpl{
		entClient: entClient,
	}
}

func (m *groupImpl) Create(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) (*ent.Groupz, error) {
	newGroup, err := m.entClient.Groupz.Create().
		SetBackgroundPicture(groupInfo.GetBackgroundPicture()).
		SetDescription(groupInfo.GetDescription()).
		SetName(groupInfo.GetName()).
		SetLeaderID(userId).
		Save(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newGroup, nil
}

func (m *groupImpl) List(ctx context.Context,
	userId int64,
	sortBy grouppb.GroupSortBy,
	searchByName string,
	filterBy grouppb.ListGroupRequest_FilterBy,
	ascending bool,
	limit uint32,
	offset uint64) ([]*ent.Groupz, int64, error) {
	var (
		byField string
	)

	query := m.entClient.Groupz.Query()

	if searchByName != "" {
		query.Where(group.NameContainsFold(searchByName))
	}

	switch filterBy {
	case api.ListGroupRequest_FILTER_BY_IS_MEMBER:
		query.Where(group.Or(
			group.HasMembersWith(member.UserIDEQ(userId), member.StatusEQ(uint32(grouppb.Member_MEMBER_STATUS_ACTIVE))),
			group.LeaderIDEQ(userId)))
	case api.ListGroupRequest_FILTER_BY_IS_NOT_MEMBER:
		query.Where(group.Not(group.Or(group.HasMembersWith(member.UserIDEQ(userId), member.StatusEQ(uint32(grouppb.Member_MEMBER_STATUS_ACTIVE))), group.LeaderIDEQ(userId))))
	case api.ListGroupRequest_FILTER_BY_IS_ADMIN:
		query.Where(group.LeaderIDEQ(userId))
	}

	// sort by type
	switch sortBy {
	case grouppb.GroupSortBy_GROUP_SORT_BY_CREATED_TIME:
		byField = group.FieldCreatedAt
	case grouppb.GroupSortBy_GROUP_SORT_BY_NAME:
		byField = group.FieldName
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

	// count member active of group
	query.WithMembers(func(mq *ent.MemberQuery) {
		mq.Where(member.StatusEQ(uint32(api.Member_MEMBER_STATUS_ACTIVE)))
	})

	// count challenge of group
	query.WithChallenges()

	groups, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return groups, int64(total), nil
}

func (m *groupImpl) Update(ctx context.Context, groupInfo *grouppb.GroupInfo) error {
	err := m.entClient.Groupz.UpdateOneID(groupInfo.GetId()).
		SetBackgroundPicture(groupInfo.GetBackgroundPicture()).
		SetDescription(groupInfo.GetDescription()).
		SetName(groupInfo.GetName()).
		SetLeaderID(groupInfo.GetId()).
		Exec(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	return nil
}

func (m *groupImpl) ListMember(ctx context.Context,
	groupID int64,
	statusMember api.Member_Status) ([]*ent.Member, error) {
	group, err := m.entClient.Groupz.Get(ctx, groupID)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	query := group.QueryMembers()

	if statusMember != api.Member_MEMBER_STATUS_UNSPECIFIED {
		query.Where(member.StatusEQ(uint32(statusMember)))
	}

	members, err := query.All(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return members, nil
}

func (m *groupImpl) Delete(ctx context.Context, userId int64, groupId int64) error {
	deletedCount, err := m.entClient.Groupz.Delete().
		Where(group.IDEQ(groupId)).
		Exec(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	if deletedCount == 0 {
		return status.Internal("no records were deleted")
	}

	return nil
}

func (m *groupImpl) Get(ctx context.Context, groupId int64) (*ent.Groupz, error) {
	groupEntity, err := m.entClient.Groupz.
		Query().Where(group.IDEQ(groupId)).
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	if groupEntity == nil {
		return nil, status.Internal("no records were found")
	}

	return groupEntity, nil
}
