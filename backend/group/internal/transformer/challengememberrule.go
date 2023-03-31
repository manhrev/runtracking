package transformer

import (
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TransformChallengeMemberRuleEntToMemberRuleProgress(memberRule *ent.ChallengeMemberRule) *group.MemberProgress_RuleProgress {
	return &group.MemberProgress_RuleProgress{
		Rule:          group.Rule(memberRule.RuleID),
		Status:        group.RuleStatus(memberRule.Status),
		Total:         memberRule.Total,
		TimeCompleted: timestamppb.New(memberRule.TimeCompleted),
	}
}
