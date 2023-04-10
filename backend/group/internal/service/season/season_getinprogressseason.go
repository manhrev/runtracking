package season

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) GetInProgressSeason(
	ctx context.Context,
	request *group.GetInProgressSeasonRequest,
) (*group.GetInProgressSeasonReply, error) {
	seasonEnt, err := c.repository.Season.GetInProgressSeason(ctx)
	if err != nil {
		return nil, err
	}

	return &group.GetInProgressSeasonReply{
		SeasonInfo: transformer.TransformSeasonEntToSeasonInfo(seasonEnt),
	}, nil
}
