package season

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) ListSeason(
	ctx context.Context,
	request *group.ListSeasonRequest,
) (*group.ListSeasonReply, error) {
	seasonEnts, total, err := c.repository.Season.List(ctx,
		request.SortBy,
		request.SearchByName,
		request.Ascending,
		request.GetStatus(),
		request.From, request.To,
		request.Limit, request.GetOffset())

	if err != nil {
		return nil, err
	}

	return &group.ListSeasonReply{
		SeasonInfoList: transformer.TransformSeasonEntListToSeasonInfoList(seasonEnts),
		Total:          total,
	}, nil
}
