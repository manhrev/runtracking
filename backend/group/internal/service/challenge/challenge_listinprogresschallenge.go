package challenge

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) ListInProgressChallenge(
	ctx context.Context,
	request *group.ListInProgressChallengeRequest,
) (*group.ListInProgressChallengeReply, error) {
	inprogressChallengeList, err := c.repository.Challenge.ListInProgressChallenge(ctx, request.UserId, request.GetActivityType())
	if err != nil {
		return nil, err
	}
	return &group.ListInProgressChallengeReply{
		ChallengeInfoList: transformer.TransformChallengeEntListToChallengeInfoList(inprogressChallengeList, make(map[int64]*auth.UserInfo)),
	}, nil
}
