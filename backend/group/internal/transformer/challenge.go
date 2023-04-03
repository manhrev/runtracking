package transformer

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformChallengeEntToChallengeInfo(challengeEnt *ent.Challenge, userInfoMap map[int64]*auth.UserInfo) *group.ChallengeInfo {
	challengeInfo := &group.ChallengeInfo{
		Id:          challengeEnt.ID,
		GroupId:     challengeEnt.Edges.Groupz.ID,
		Name:        challengeEnt.Name,
		Description: challengeEnt.Description,
		Picture:     challengeEnt.Picture,
		Type:        group.ActivityType(challengeEnt.TypeID),
		Status:      group.RuleStatus(challengeEnt.Status),
		From:        timestamppb.New(challengeEnt.StartTime),
		To:          timestamppb.New(challengeEnt.EndTime),
	}

	if challengeEnt.Edges.ChallengeRules != nil {
		challengeInfo.ChallengeRules = TransformChallengeRuleEntListToChallengeRuleInfoList(challengeEnt.Edges.ChallengeRules)
	}

	if challengeEnt.Edges.FirstMember != nil {
		memberEnt := challengeEnt.Edges.FirstMember
		challengeInfo.CompletedFirstMember = TransformMemberEntToMemberInfo(memberEnt, userInfoMap)
	}

	var memberProgressList []*group.MemberProgress
	if challengeEnt.Edges.ChallengeMembers != nil && len(challengeEnt.Edges.ChallengeMembers) > 0 {
		for _, challengeMemberEnt := range challengeEnt.Edges.ChallengeMembers {
			memberProgressList = append(memberProgressList, TransformChallengeMemberEntToMemberProgress(challengeMemberEnt, userInfoMap))
		}
		challengeInfo.MemberProgressList = memberProgressList
	}
	return challengeInfo
}

func TransformChallengeEntListToChallengeInfoList(challengeEntList []*ent.Challenge, userInfoMap map[int64]*auth.UserInfo) []*group.ChallengeInfo {
	challengeInfoList := []*group.ChallengeInfo{}
	for _, challengeEnt := range challengeEntList {
		challengeInfoList = append(challengeInfoList, TransformChallengeEntToChallengeInfo(challengeEnt, userInfoMap))
	}
	return challengeInfoList
}
