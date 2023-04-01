package challenge

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (c *challengeImpl) ListChallenge(
	ctx context.Context,
	request *group.ListChallengeRequest,
) (*group.ListChallengeReply, error) {
	challengeEnts, total, err := c.repository.Challenge.List(ctx,
		request.GroupId,
		request.SortBy,
		request.SearchByName,
		request.FilterByRules,
		request.FilterByType,
		request.Ascending,
		request.GetStatus(),
		request.From, request.To,
		request.Limit, request.GetOffset())

	if err != nil {
		return nil, err
	}

	var userIds []int64
	for _, challengeEnt := range challengeEnts {
		if challengeEnt.Edges.FirstMember != nil {
			userIds = append(userIds, challengeEnt.Edges.FirstMember.UserID)
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

	return &group.ListChallengeReply{
		ChallengeInfoList: transformer.TransformChallengeEntListToChallengeInfoList(challengeEnts, userInfoMap),
		Total:             total,
	}, nil
}
