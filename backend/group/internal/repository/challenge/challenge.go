package challenge

import (
	"context"
	"fmt"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/code"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"google.golang.org/protobuf/types/known/timestamppb"
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
		IdsRuleToDelete []int64,
	) error

	Get(
		ctx context.Context,
		challengeId int64,
	) (*ent.Challenge, error)

	List(
		ctx context.Context,
		groupId int64,
		sortBy group.ListChallengeRequest_ChallengeSortBy,
		searchByName string,
		filterByRules []group.Rule,
		filterByType group.ActivityType,
		ascending bool,
		challengeStatus group.RuleStatus,
		from *timestamppb.Timestamp,
		to *timestamppb.Timestamp,
		limit uint32,
		offset uint64,
	) ([]*ent.Challenge, int64, error)

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

	Delete(
		ctx context.Context,
		challengeId int64,
	) error

	GetActiveChallenge(
		ctx context.Context,
		groupId int64,
	) (*ent.Challenge, error)

	GetChallengeWithGroup(
		ctx context.Context,
		challengeId int64,
	) (*ent.Challenge, error)
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
	query := c.entClient.Challenge.Create().
		SetGroupzID(groupId).
		SetDescription(challengeInfo.Description).
		SetPicture(challengeInfo.Picture).
		SetTypeID(int64(challengeInfo.GetType())).
		SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)).
		SetName(challengeInfo.Name)

	if challengeInfo.From != nil {
		query.SetStartTime(challengeInfo.From.AsTime())
	}

	if challengeInfo.To != nil {
		query.SetEndTime(challengeInfo.To.AsTime())
	}

	newChallenge, err := query.Save(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return newChallenge, nil
}

func (c *challengeImpl) Update(
	ctx context.Context,
	groupId int64,
	challengeInfo *group.ChallengeInfo,
	IdsRuleToDelete []int64,
) error {
	challengeQuery := c.entClient.Challenge.UpdateOneID(challengeInfo.Id).
		SetGroupzID(groupId).
		SetName(challengeInfo.Name).
		SetPicture(challengeInfo.Picture).
		SetDescription(challengeInfo.Description).
		SetTypeID(int64(challengeInfo.Type)).
		SetStatus(int64(challengeInfo.GetStatus()))

	if challengeInfo.From != nil {
		challengeQuery.SetStartTime(challengeInfo.From.AsTime())
	}

	if challengeInfo.To != nil {
		challengeQuery.SetEndTime(challengeInfo.To.AsTime())
	}

	if challengeInfo.CompletedFirstMember != nil {
		challengeQuery.SetCompletedFirstMemberID(challengeInfo.CompletedFirstMember.MemberId)
	}

	//Update or remove rules of challenge
	if challengeInfo.ChallengeRules != nil && len(challengeInfo.ChallengeRules) > 0 {

		// Delete rules
		if IdsRuleToDelete != nil && len(IdsRuleToDelete) > 0 {
			c.DeleteChallengeRule(ctx, IdsRuleToDelete)
		}
		//Update rules
		for _, challengeRuleInfo := range challengeInfo.ChallengeRules {
			err := c.UpdateChallengeRule(ctx, challengeRuleInfo)
			if err != nil {
				return err
			}
		}
	} else {
		return status.Internal(fmt.Sprintf("At least one rule must be required for challenge"))
	}

	err := challengeQuery.Exec(ctx)
	if err != nil {
		return status.Internal(err.Error())
	}
	return nil
}

func (m *challengeImpl) Delete(
	ctx context.Context,
	challengeId int64,
) error {
	err := m.entClient.Challenge.DeleteOneID(challengeId).Exec(ctx)

	if err != nil {
		return status.Internal(err.Error())
	}

	return nil
}

func (m *challengeImpl) GetActiveChallenge(
	ctx context.Context,
	groupId int64,
) (*ent.Challenge, error) {
	challengeEntList, err := m.entClient.Challenge.Query().
		Where(challenge.StatusEQ(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))).
		All(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}
	if len(challengeEntList) > 0 {
		return challengeEntList[0], nil
	}
	return nil, nil
}

func (m *challengeImpl) GetChallengeWithGroup(
	ctx context.Context,
	challengeId int64,
) (*ent.Challenge, error) {
	challengeEnt, err := m.entClient.Challenge.Query().
		Where(challenge.IDEQ(challengeId)).
		WithGroupz().
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return challengeEnt, nil
}

func (m *challengeImpl) Get(
	ctx context.Context,
	challengeId int64,
) (*ent.Challenge, error) {
	challengeEnt, err := m.entClient.Challenge.Query().
		Where(challenge.IDEQ(challengeId)).
		WithChallengeRules().
		WithFirstMember().
		WithGroupz().
		WithChallengeMembers(func(q *ent.ChallengeMemberQuery) {
			q.WithMember().
				WithChallenge().
				WithChallengeMemberRules()
		}).
		First(ctx)

	if err != nil {
		return nil, status.Internal(err.Error())
	}

	return challengeEnt, nil
}

func (c *challengeImpl) List(
	ctx context.Context,
	groupId int64,
	sortBy group.ListChallengeRequest_ChallengeSortBy,
	searchByName string,
	filterByRules []group.Rule,
	filterByType group.ActivityType,
	ascending bool,
	challengeStatus group.RuleStatus,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
	limit uint32,
	offset uint64,
) ([]*ent.Challenge, int64, error) {
	var (
		byField string
	)
	query := c.entClient.Challenge.Query().
		Where(challenge.HasGroupzWith(groupz.IDEQ(groupId)))

	if filterByType != group.ActivityType_ACTIVITY_TYPE_UNSPECIFIED {
		query.Where(challenge.TypeIDEQ(int64(filterByType)))
	}

	if filterByRules != nil && len(filterByRules) > 0 {
		for _, rule := range filterByRules {
			query.Where(challenge.HasChallengeRulesWith(challengerule.RuleIDEQ(int64(rule))))
		}
	}

	if searchByName != "" {
		query.Where(challenge.NameContainsFold(searchByName))
	}

	if challengeStatus != group.RuleStatus_RULE_STATUS_UNSPECIFIED {
		query.Where(challenge.StatusEQ(int64(challengeStatus)))
	}

	// sort by type
	switch sortBy {
	case group.ListChallengeRequest_CHALLENGE_SORT_BY_END_TIME:
		byField = challenge.FieldEndTime
	case group.ListChallengeRequest_CHALLENGE_SORT_BY_START_TIME:
		byField = challenge.FieldStartTime
	default:
		byField = challenge.FieldName

	}

	// ascending?
	if ascending {
		query.Order(ent.Asc(byField))
	} else {
		query.Order(ent.Desc(byField))
	}

	// time range
	if from != nil && to != nil {
		query.Where(
			challenge.CreatedAtGTE(from.AsTime().Local()),
			challenge.CreatedAtLTE(to.AsTime().Local()),
		)
	}

	query.WithChallengeRules()
	query.WithFirstMember()
	query.WithGroupz()

	// Count number of records
	total, err := query.Count(ctx)
	if err != nil {
		return nil, 0, status.Error(code.Code_INTERNAL)
	}

	//limit offset
	if limit <= 0 {
		query.Limit(10)
	} else {
		query.Limit(int(limit))
	}

	if offset > 0 {
		query.Offset(int(offset))
	} else {
		query.Offset(0)
	}

	challenges, err := query.All(ctx)
	if err != nil {
		return nil, 0, status.Internal(err.Error())
	}

	return challenges, int64(total), nil

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
