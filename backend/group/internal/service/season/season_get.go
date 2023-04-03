package season

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) GetSeason(
	ctx context.Context,
	request *group.GetSeasonRequest,
) (*group.GetSeasonReply, error) {
	seasonEnt, err := c.repository.Season.Get(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	return &group.GetSeasonReply{
		SeasonInfo: transformer.TransformSeasonEntToSeasonInfo(seasonEnt),
	}, nil
}
