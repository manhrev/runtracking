package season

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) DeleteSeason(
	ctx context.Context,
	userId int64,
	request *group.DeleteSeasonRequest,
) (*group.DeleteSeasonReply, error) {
	err := c.repository.Season.Delete(ctx, request.Id)
	if err != nil {
		return nil, err
	}

	return &group.DeleteSeasonReply{}, nil
}
