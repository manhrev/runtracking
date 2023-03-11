package group

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListGroup(
	ctx context.Context,
	request *group.ListGroupRequest,
) (*group.ListGroupReply, error) {
	return s.service.Group.List(
		ctx,
		request.GetSortBy(),
		request.GetAscending(),
		request.GetLimit(),
		request.GetOffset(),
	)
}
