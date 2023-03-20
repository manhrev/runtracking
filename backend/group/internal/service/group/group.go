package group

import (
	"context"
	"sort"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	authpb "github.com/manhrev/runtracking/backend/auth/pkg/api"
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
		userId int64,
		sortBy grouppb.GroupSortBy,
		searchByName string,
		filterBy grouppb.ListGroupRequest_FilterBy,
		ascending bool,
		limit uint32,
		offset uint64) (*group.ListGroupReply, error)
	Update(
		ctx context.Context,
		userId int64,
		groupInfo *grouppb.GroupInfo,
	) error

	ListMember(ctx context.Context,
		groupId int64,
		status group.Member_Status,
		sortBy grouppb.ListMembersOfGroupRequest_MOGSortBy,
		search_by_name string,
		ascending bool,
		limit uint32,
		offset uint64) (*group.ListMembersOfGroupReply, error)
}

type MemberSlice []*grouppb.Member

func (s MemberSlice) Less(i, j int) bool {
	return s[i].CreatedAt.AsTime().Before((s[j].CreatedAt.AsTime()))
}
func (s MemberSlice) Swap(i, j int) { s[i], s[j] = s[j], s[i] }
func (s MemberSlice) Len() int      { return len(s) }

type groupImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Group {
	return &groupImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}

func (m *groupImpl) Create(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) (*ent.Groupz, error) {
	return m.repository.Group.Create(ctx, userId, groupInfo)
}

func (m *groupImpl) List(ctx context.Context,
	userId int64,
	sortBy grouppb.GroupSortBy,
	searchByName string,
	filterBy grouppb.ListGroupRequest_FilterBy,
	ascending bool,
	limit uint32,
	offset uint64) (*group.ListGroupReply, error) {

	groupEntList, total, err := m.repository.Group.List(ctx, userId, sortBy, searchByName, filterBy, ascending, limit, offset)
	if err != nil {
		return nil, status.Internal(err.Error())
	}

	groupInfoList := transformer.TransformGroupListEntToGroupList(groupEntList)
	return &grouppb.ListGroupReply{
		GroupList: groupInfoList,
		Total:     total,
	}, nil
}

func (m *groupImpl) ListMember(ctx context.Context,
	groupId int64,
	statusMember group.Member_Status,
	sortBy grouppb.ListMembersOfGroupRequest_MOGSortBy,
	searchByName string,
	ascending bool,
	limit uint32,
	offset uint64) (*group.ListMembersOfGroupReply, error) {
	var (
		authSortBy authpb.ListUserRequest_UserSortBy
	)

	if sortBy == grouppb.ListMembersOfGroupRequest_MOG_SORT_BY_NAME {
		authSortBy = auth.ListUserRequest_USER_SORT_BY_NAME
	}

	members, err := m.repository.Group.ListMember(ctx, groupId, statusMember)

	if err != nil {
		return nil, err
	}

	var userIds []int64
	memberMap := make(map[int64]*ent.Member)
	for _, member := range members {
		userIds = append(userIds, member.UserID)
		memberMap[member.UserID] = member
	}

	if len(userIds) > 0 {
		reply, err := m.authClient.ListUser(ctx, &auth.ListUserRequest{
			Limit:        limit,
			Offset:       offset,
			Ascending:    ascending,
			SortBy:       authSortBy,
			UserIds:      userIds,
			SearchByName: searchByName,
		})

		if err != nil {
			return nil, err
		}
		userInfoList, total := reply.Users, reply.Total
		memberList := transformer.TransformUserInfoListToMemberList(userInfoList, memberMap)

		var memberSlice MemberSlice = memberList

		//sort by time joined
		if sortBy == grouppb.ListMembersOfGroupRequest_MOG_SORT_BY_CREATED_TIME {
			sort.Sort(memberSlice)
		}

		if err != nil {
			return nil, status.Internal(err.Error())
		}

		return &grouppb.ListMembersOfGroupReply{
			Members: memberSlice,
			Total:   total,
		}, nil
	}
	return &grouppb.ListMembersOfGroupReply{
		Members: []*grouppb.Member{},
		Total:   0,
	}, nil
}

func (m *groupImpl) Update(ctx context.Context, userId int64, groupInfo *grouppb.GroupInfo) error {
	groupEntity, err := m.repository.Group.Get(ctx, groupInfo.GetId())
	if err != nil {
		return err
	}

	if userId != groupEntity.LeaderID {
		return status.Internal("User is not an admin of group")
	}

	return m.repository.Group.Update(ctx, groupInfo)
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
