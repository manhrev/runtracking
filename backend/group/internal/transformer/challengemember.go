package transformer

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformChallengeMemberEntToMemberProgress(challengeMemberEnt *ent.ChallengeMember, userInfoMap map[int64]*auth.UserInfo) *group.MemberProgress {
	memberProgress := &group.MemberProgress{
		IsCompletedFirst:  challengeMemberEnt.Edges.Challenge.CompletedFirstMemberID == challengeMemberEnt.MemberID,
		ChallengeProgress: group.RuleStatus(challengeMemberEnt.Status),
		MemberInfo:        TransformMemberEntToMemberInfo(challengeMemberEnt.Edges.Member, userInfoMap),
	}

	var memberRuleProgressList []*group.MemberProgress_RuleProgress
	if challengeMemberEnt.Edges.ChallengeMemberRules != nil && len(challengeMemberEnt.Edges.ChallengeMemberRules) > 0 {
		for _, memberRule := range challengeMemberEnt.Edges.ChallengeMemberRules {
			memberRuleProgressList = append(memberRuleProgressList, &group.MemberProgress_RuleProgress{
				Rule:          group.Rule(memberRule.RuleID),
				Status:        group.RuleStatus(memberRule.Status),
				Total:         memberRule.Total,
				TimeCompleted: timestamppb.New(memberRule.TimeCompleted),
			})
		}
		memberProgress.RuleProgressList = memberRuleProgressList
	}

	return memberProgress
}
