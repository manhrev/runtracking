package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/repository"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Group interface {
	Create(
		ctx context.Context,
		userId int64,
		groupInfo *grouppb.GroupInfo,
	) (*ent.Groupz, error)
	Delete(ctx context.Context, userId int64, groupId int64) error
	List(ctx context.Context,
		sortBy grouppb.GroupSortBy,
		ascending bool,
		limit uint32,
		offset uint64) (*group.ListGroupReply, error)
}

type groupImpl struct {
	entClient  *ent.Client
	repository *repository.Repository
}

func New(entClient *ent.Client, repository *repository.Repository) Group {
	return &groupImpl{
		entClient:  entClient,
		repository: repository,
	}
}

func (m *groupImpl) Create(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) (*ent.Groupz, error) {
	return m.repository.Group.Create(ctx, userId, groupInfo)
}

func (m *groupImpl) List(ctx context.Context,
	sortBy grouppb.GroupSortBy,
	ascending bool,
	limit uint32,
	offset uint64) (*group.ListGroupReply, error) {

	groupEntList, total, err := m.repository.Group.List(ctx, sortBy, ascending, limit, offset)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	groupInfoList := transformer.TransformGroupListEntToGroupList(groupEntList)
	return &grouppb.ListGroupReply{
		GroupList: groupInfoList,
		Total:     total,
	}, nil
}

func (m *groupImpl) Delete(ctx context.Context, userId int64, groupId int64) error {
	groupEntity, err := m.repository.Group.Get(ctx, groupId)
	if err != nil {
		return err
	}

	if userId != groupEntity.LeaderID {
		return status.Internal("User is not an admin of group")
	}

	return m.repository.Group.Delete(ctx, userId, groupId)
}
