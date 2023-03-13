package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListMembersOfGroup(
	ctx context.Context,
	request *group.ListMembersOfGroupRequest,
) (*group.ListMembersOfGroupReply, error) {

	return s.service.Group.ListMember(ctx, request.GetGroupId(),
		request.GetStatus(),
		request.GetSortBy(),
		request.GetSearchByName(),
		request.GetAscending(),
		request.GetLimit(),
		request.GetOffset())
}
