package season

import (
	"context"
	"fmt"
	"log"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *seasonImpl) CreateSeason(
	ctx context.Context,
	userId int64,
	request *group.CreateSeasonRequest,
) (*group.CreateSeasonReply, error) {

	seasonEnt, err := c.repository.Season.Create(ctx, request.SeasonInfo)
	if err != nil {
		return nil, err
	}

	//list current member of group to insert into season
	members, err := c.repository.Member.ListMember(ctx,
		group.Member_MEMBER_STATUS_ACTIVE)
	if err != nil {
		log.Println(fmt.Sprintf("Error when list member for season create: %v", err))
		return nil, err
	}
	// initial point for member preparing for new season
	_, err = c.repository.Season.CreateBulkSeasonMember(ctx,
		members, seasonEnt)
	if err != nil {
		log.Println(fmt.Sprintf("Error when create bulk season member for season create: %v", err))
		return nil, err
	}

	return &group.CreateSeasonReply{}, nil
}
