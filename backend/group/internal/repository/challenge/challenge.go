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
		userId int64,
		groupId int64,
		challengeInfo *group.ChallengeInfo,
	) (*ent.Challenge, error)
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
	userId int64,
	groupId int64,
	challengeInfo *group.ChallengeInfo,
) (*ent.Challenge, error) {
	newChallenge, err := c.entClient.Challenge.Create().
		SetGroupzID(groupId).
		SetDescription(challengeInfo.Description).
		SetEndTime(challengeInfo.To.AsTime()).
		SetStartTime(challengeInfo.From.AsTime()).
		SetPicture(challengeInfo.Picture).
		Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	// if rule => set rules for challenge
	if challengeInfo.GetChallengeRules() != nil {
		bulk := make([]*ent.ChallengeRuleCreate, len(challengeInfo.ChallengeRules))
		for i, rule := range challengeInfo.ChallengeRules {
			bulk[i] = c.entClient.ChallengeRule.Create().
				SetChallenge(newChallenge).
				SetRuleID(int64(rule.GetRule())).
				SetTotal(rule.Goal)
		}

		_, err = c.entClient.ChallengeRule.CreateBulk(bulk...).Save(ctx)
		if err != nil {
			status.Internal(fmt.Sprintf("Creating rule for challenge has failed %s\n", err.Error()))
		}
	}

	return newChallenge, nil
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
