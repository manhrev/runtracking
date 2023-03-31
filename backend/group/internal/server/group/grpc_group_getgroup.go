package group

import (
	"context"

	"github.com/manhrev/runtracking/backend/group/internal/transformer"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
)

func (s *groupServer) GetGroup(
	ctx context.Context,
	request *group.GetGroupRequest,
) (*group.GetGroupReply, error) {

	groupz, err := s.service.Group.Get(ctx, request)
	if err != nil {
		return nil, err
	}

	members, err := s.service.Group.ListMember(ctx, request.GroupId,
		group.Member_MEMBER_STATUS_ACTIVE,
		group.ListMembersOfGroupRequest_MOG_SORT_BY_CREATED_TIME,
		"", true, 10, 0)

	challenges, err := s.service.Challenge.ListChallenge(
		ctx, &group.ListChallengeRequest{
			Limit:     10,
			Offset:    0,
			Ascending: true,
			GroupId:   request.GroupId,
			SortBy:    group.ListChallengeRequest_CHALLENGE_SORT_BY_START_TIME,
		},
	)

	// event will be listed soon

	return &group.GetGroupReply{
		GroupInfo:  transformer.TransformGroupEntToGroupInfo(groupz),
		Members:    members.Members,
		Challenges: challenges.ChallengeInfoList,
	}, nil
}
