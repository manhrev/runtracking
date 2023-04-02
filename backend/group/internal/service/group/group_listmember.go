package group

import (
	"context"
	"sort"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	authpb "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

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

	groupz, err := m.repository.Group.Get(ctx, groupId, false, false)
	if err != nil {
		return nil, err
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
		memberList := transformer.TransformUserInfoListToMemberList(userInfoList, memberMap, groupz)

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
