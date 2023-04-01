package challenge

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) GetChallenge(
	ctx context.Context,
	request *group.GetChallengeRequest,
) (*group.GetChallengeReply, error) {
	challengeEnt, err := c.repository.Challenge.Get(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	var userIds []int64
	if challengeEnt.Edges.ChallengeMembers != nil {
		memberEntList := challengeEnt.Edges.ChallengeMembers
		for _, memberEnt := range memberEntList {
			userIds = append(userIds, memberEnt.Edges.Member.UserID)
		}
	}
	// list user completed challenge first
	userInfoMap := make(map[int64]*auth.UserInfo)
	if len(userIds) > 0 {
		users, err := c.authClient.ListUser(ctx, &auth.ListUserRequest{
			UserIds: userIds,
		})

		if err != nil {
			return nil, err
		}
		for _, userInfo := range users.Users {
			userInfoMap[userInfo.UserId] = userInfo
		}
	}

	if err != nil {
		return nil, err
	}

	return &group.GetChallengeReply{
		ChallengeInfo: transformer.TransformChallengeEntToChallengeInfo(challengeEnt, userInfoMap),
	}, nil
}
