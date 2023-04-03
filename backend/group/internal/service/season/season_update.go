package season

import (
	"context"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) UpdateSeason(
	ctx context.Context,
	userId int64,
	request *group.UpdateSeasonRequest,
) (*group.UpdateSeasonReply, error) {
	err := c.repository.Season.Update(ctx, request.SeasonInfo)
	if err != nil {
		return nil, err
	}

	return &group.UpdateSeasonReply{}, nil
}
