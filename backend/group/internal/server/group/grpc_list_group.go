package group

import (
	"context"

	extractor "github.com/manhrev/runtracking/backend/auth/pkg/extractor"
	"github.com/manhrev/runtracking/backend/group/internal/status"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) ListGroup(
	ctx context.Context,
	request *group.ListGroupRequest,
) (*group.ListGroupReply, error) {
	userId, err := extractor.New().GetUserID(ctx)
	if err != nil {
		return nil, status.Internal(err.Error())
	}
	return s.service.Group.List(
		ctx,
		userId,
		request.GetGroupIds(),
		request.GetSortBy(),
		request.GetSearchByName(),
		request.GetFilterBy(),
		request.GetAscending(),
		request.GetLimit(),
		request.GetOffset(),
	)
}
