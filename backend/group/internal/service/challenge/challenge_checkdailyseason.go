package challenge

import (
	"context"
	"time"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) CheckDailyProgressSeason(
	ctx context.Context,
	timeCheck time.Time,
) (*group.CheckDailyProgressSeasonReply, error) {
	err := c.repository.Challenge.CheckDailyProgressChallenge(ctx, timeCheck)
	if err != nil {
		return nil, err
	}
	return &group.CheckDailyProgressSeasonReply{}, nil
}
