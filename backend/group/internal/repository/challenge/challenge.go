package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Challenge interface {
	Create(
		ctx context.Context,
		groupId int64,
		challengeInfo *group.ChallengeInfo,
	) (*ent.Challenge, error)

	Update(
		ctx context.Context,
		groupId int64,
		challengeInfo *group.ChallengeInfo,
	) error

	CreateBulkChallengeRules(
		ctx context.Context,
		userId int64,
		groupId int64,
		challengeId int64,
		challengeInfo *group.ChallengeInfo,
	) ([]*ent.ChallengeRule, error)

	CreateBulkChallengeMember(
		ctx context.Context,
		memberEnts []*ent.Member,
		challengeEnt *ent.Challenge,
	) ([]*ent.ChallengeMember, error)

	CreateBulkChallengeMemberRule(
		ctx context.Context,
		challengeMemberEnts []*ent.ChallengeMember,
		challengeRuleEnts []*ent.ChallengeRule,
	) ([]*ent.ChallengeMemberRule, error)
	// Update(
	// 	ctx context.Context,
	// 	memberId int64,
	// 	groupId int64,
	// 	statusMem group.Member_Status,
	// ) error
	// Delete(
	// 	ctx context.Context,
	// 	memberId int64,
	// ) error
	// Get(
	// 	ctx context.Context,
	// 	memberId int64,
	// ) (*ent.Member, error)

	// GetByUserID(
	// 	ctx context.Context,
	// 	userId int64,
	// 	groupId int64,
	// ) (*ent.Member, error)

	// ListMemberByUserId(
	// 	ctx context.Context,
	// 	userId int64,
	// ) ([]*ent.Member, error)
}
type challengeImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Challenge {
	return &challengeImpl{
		entClient: entClient,
	}
}

func (c *challengeImpl) Create(
	ctx context.Context,
	groupId int64,
	challengeInfo *group.ChallengeInfo,
) (*ent.Challenge, error) {
	newChallenge, err := c.entClient.Challenge.Create().
		SetGroupzID(groupId).
		SetDescription(challengeInfo.Description).
		SetEndTime(challengeInfo.To.AsTime()).
		SetStartTime(challengeInfo.From.AsTime()).
		SetPicture(challengeInfo.Picture).
		SetTypeID(int64(challengeInfo.GetType())).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newChallenge, nil
}

func (c *challengeImpl) Update(
	ctx context.Context,
	groupId int64,
	challengeInfo *group.ChallengeInfo,
) error {
	challengeQuery := c.entClient.Challenge.UpdateOneID(challengeInfo.Id).
		SetGroupzID(groupId).
		SetStartTime(challengeInfo.From.AsTime()).
		SetEndTime(challengeInfo.To.AsTime()).
		SetPicture(challengeInfo.Picture).
		SetDescription(challengeInfo.Description).
		SetTypeID(int64(challengeInfo.Type))

	if challengeInfo.CompletedFirstMember != nil {
		challengeQuery.SetCompletedFirstMemberID(challengeInfo.CompletedFirstMember.MemberId)
	}

	err := challengeQuery.Exec(ctx)
	if err != nil {
		return status.Internal(err.Error())
	}
	return nil
}

func (c *challengeImpl) CreateBulkChallengeRules(
	ctx context.Context,
	userId int64,
	groupId int64,
	challengeId int64,
	challengeInfo *group.ChallengeInfo,
) ([]*ent.ChallengeRule, error) {
	bulk := make([]*ent.ChallengeRuleCreate, len(challengeInfo.ChallengeRules))
	for i, rule := range challengeInfo.ChallengeRules {
		bulk[i] = c.entClient.ChallengeRule.Create().
			SetChallengeID(challengeId).
			SetRuleID(int64(rule.GetRule())).
			SetGoal(rule.Goal)
	}

	challengeRules, err := c.entClient.ChallengeRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating rule for challenge has failed %s\n", err.Error()))
	}

	return challengeRules, nil
}

// func (c *challengeImpl) UpdateChallengeRules(
// 	ctx context.Context,
// 	groupId int64,
// 	challengeId int64,
// 	challengeInfo *group.ChallengeInfo,
// ) error {

// 	for _, challengeRule := range challengeInfo.ChallengeRules {
// 		err := c.entClient.ChallengeRule.UpdateOneID(challengeRule.Id).
// 			SetChallengeID(challengeId).
// 			SetRuleID(int64(challengeRule.GetRule())).
// 			SetTotal(challengeRule.Goal).Exec(ctx)

// 		if err != nil {
// 			return status.Internal(fmt.Sprintf("Error when update bulk challenge rule: %s", err.Error()))
// 		}
// 	}
// 	return nil
// }

func (c *challengeImpl) CreateBulkChallengeMember(
	ctx context.Context,
	memberEnts []*ent.Member,
	challengeEnt *ent.Challenge,
) ([]*ent.ChallengeMember, error) {
	bulk := make([]*ent.ChallengeMemberCreate, len(memberEnts))

	for i, memberEnt := range memberEnts {
		bulk[i] = c.entClient.ChallengeMember.Create().
			SetChallenge(challengeEnt).
			SetCreatedAt(challengeEnt.StartTime).
			SetMember(memberEnt)
	}

	challengeMembers, err := c.entClient.ChallengeMember.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge members for challenge has failed %s\n", err.Error()))
	}

	return challengeMembers, nil
}

func (c *challengeImpl) CreateBulkChallengeMemberRule(
	ctx context.Context,
	challengeMemberEnts []*ent.ChallengeMember,
	challengeRuleEnts []*ent.ChallengeRule,
) ([]*ent.ChallengeMemberRule, error) {
	bulk := make([]*ent.ChallengeMemberRuleCreate, len(challengeRuleEnts)*len(challengeMemberEnts))
	for i, challengeRule := range challengeRuleEnts {
		for j, challengeMemberEnt := range challengeMemberEnts {
			bulk[i*len(challengeMemberEnts)+j] = c.entClient.ChallengeMemberRule.Create().
				SetChallengeMember(challengeMemberEnt).
				SetRuleID(challengeRule.RuleID)
		}
	}

	challengeMemberRules, err := c.entClient.ChallengeMemberRule.CreateBulk(bulk...).Save(ctx)
	if err != nil {
		status.Internal(fmt.Sprintf("Creating challenge member rules for challenge has failed %s\n", err.Error()))
	}

	return challengeMemberRules, nil
}

// func (m *memberImpl) Get(
// 	ctx context.Context,
// 	memberId int64,
// ) (*ent.Member, error) {
// 	memberEnt, err := m.entClient.Member.Query().
// 		Where(member.IDEQ(memberId)).
// 		First(ctx)

// 	if err != nil {
// 		return nil, status.Internal(err.Error())
// 	}

// 	return memberEnt, nil
// }

// func (m *memberImpl) GetByUserID(
// 	ctx context.Context,
// 	userId int64,
// 	groupId int64,
// ) (*ent.Member, error) {
// 	memberEnt, err := m.entClient.Member.Query().
// 		Where(member.UserIDEQ(userId), member.HasGroupzWith(groupz.IDEQ(groupId))).
// 		First(ctx)

// 	if err != nil {
// 		return nil, status.Internal(err.Error())
// 	}
// 	log.Printf("Member is: %s", memberEnt)
// 	if memberEnt == nil {
// 		return nil, status.Internal(fmt.Sprintf("Member with userID: %s && groupID: %s not found", userId, groupId))
// 	}

// 	return memberEnt, nil
// }

// func (m *memberImpl) Update(
// 	ctx context.Context,
// 	memberId int64,
// 	groupId int64,
// 	statusMem group.Member_Status,
// ) error {
// 	memberEnt, err := m.entClient.Member.Update().
// 		Where(member.IDEQ(memberId), member.HasGroupzWith(groupz.IDEQ(groupId))).
// 		SetStatus(uint32(statusMem)).
// 		SetJoiningAt(time.Now()).
// 		Save(ctx)

// 	if err != nil {
// 		return status.Internal(err.Error())
// 	}

// 	if memberEnt <= 0 {
// 		return status.Internal(fmt.Sprintf("Member with memberID: %d && groupID: %d not found", memberId, groupId))
// 	}

// 	return nil
// }

// func (m *memberImpl) Delete(
// 	ctx context.Context,
// 	memberId int64,
// ) error {
// 	err := m.entClient.Member.DeleteOneID(memberId).Exec(ctx)

// 	if err != nil {
// 		return status.Internal(err.Error())
// 	}

// 	return nil
// }

// func (m *memberImpl) ListMemberByUserId(
// 	ctx context.Context,
// 	userId int64,
// ) ([]*ent.Member, error) {
// 	members, err := m.entClient.Member.Query().
// 		Where(member.UserIDEQ(userId)).
// 		WithGroupz().
// 		All(ctx)

// 	if err != nil {
// 		return nil, status.Internal(err.Error())
// 	}

// 	return members, nil
// }
