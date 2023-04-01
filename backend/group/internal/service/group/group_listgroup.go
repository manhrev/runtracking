package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
)

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

	members, err := m.repository.Member.ListMemberByUserId(ctx, userId)
	if err != nil {
		return nil, err
	}
	//Get status of current member with group list
	statusMemberMap := make(map[int64]grouppb.Member_Status)
	for _, mem := range members {
		statusMemberMap[mem.Edges.Groupz.ID] = grouppb.Member_Status(mem.Status)
	}

	for i, groupInfo := range groupInfoList {

		//member status of current user
		memberStatus, ok := statusMemberMap[groupInfo.Id]
		if ok {
			groupInfoList[i].MemberStatus = memberStatus
		} else {
			groupInfoList[i].MemberStatus = group.Member_MEMBER_STATUS_UNSPECIFIED
		}
	}
	return &grouppb.ListGroupReply{
		GroupList: groupInfoList,
		Total:     total,
	}, nil
}
