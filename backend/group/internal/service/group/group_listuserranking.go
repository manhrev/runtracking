package group

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

func (m *groupImpl) ListUserRanking(ctx context.Context,
	request *group.ListUserRankingRequest) (*group.ListUserRankingReply, error) {
	seasonEnt, err := m.repository.Season.Get(ctx, request.SeasonId)
	if err != nil {
		return nil, err
	}

	membersOfSeason, _, err := m.repository.Season.ListSeasonMemberOfGroup(ctx, request.GroupId,
		request.SeasonId, request.SortBy, request.Ascending, request.Limit, request.Offset)

	if err != nil {
		return nil, err
	}

	var userIds []int64
	memberMap := make(map[int64]*ent.Member)
	for _, memberSeason := range membersOfSeason {
		memberEnt := memberSeason.Edges.Member
		userIds = append(userIds, memberEnt.UserID)
		memberMap[memberEnt.UserID] = memberEnt
	}

	if len(userIds) > 0 {
		reply, err := m.authClient.ListUser(ctx, &auth.ListUserRequest{
			Limit:        uint32(len(userIds)),
			Offset:       0,
			Ascending:    false,
			SortBy:       auth.ListUserRequest_USER_SORT_BY_UNSPECIFIED,
			UserIds:      userIds,
			SearchByName: "",
		})

		if err != nil {
			return nil, err
		}

		userInfoList, total := reply.Users, reply.Total
		memberInfoList := transformer.TransformUserInfoListToMemberList(userInfoList, memberMap, nil)
		memberInfoMap := make(map[int64]*group.Member)
		for _, memberInfo := range memberInfoList {
			memberInfoMap[memberInfo.MemberId] = memberInfo
		}

		return &grouppb.ListUserRankingReply{
			SeasonInfo:      transformer.TransformSeasonEntToSeasonInfo(seasonEnt),
			UserRankingList: transformer.TransformMemberSeasonListToUserRankingInfoList(membersOfSeason, memberInfoMap),
			Total:           total,
		}, nil
	}
	return &grouppb.ListUserRankingReply{
		SeasonInfo:      transformer.TransformSeasonEntToSeasonInfo(seasonEnt),
		UserRankingList: []*grouppb.UserRanking{},
		Total:           0,
	}, nil
}
