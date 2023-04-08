package challenge

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/code"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengerule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
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
		challengeEnt *ent.Challenge,
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
		challengeEnt *ent.Challenge,
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

	UpdateChallengeProgress(
		ctx context.Context,
		challengeId int64,
		userId int64,
		timestamp *timestamppb.Timestamp,
		activityRecord *group.ActivityRecord,
	) (string, bool, bool, error)

	CheckDailyProgressChallenge(ctx context.Context, timeCheck time.Time) error

	UpdateMemberPoint(
		ctx context.Context,
		point int,
		inProgressChallengeEnt *ent.Challenge,
		memberEnt *ent.Member,
	) error

	CreateChallengeMemberRule(
		ctx context.Context,
		challengeMemberEnt *ent.ChallengeMember,
		challengeEnt *ent.Challenge,
	) ([]*ent.ChallengeMemberRule, error)

	CreateChallengeMember(
		ctx context.Context,
		memberId int64,
		challengeEnt *ent.Challenge,
	) (*ent.ChallengeMember, error)

	ListInProgressChallenge(ctx context.Context, userId int64,
	) ([]*ent.Challenge, error)
}
type challengeImpl struct {
	entClient          *ent.Client
	notificaitonClient notification.NotificationIClient
}

func New(entClient *ent.Client, notificationClient notification.NotificationIClient) Challenge {
	return &challengeImpl{
		entClient:          entClient,
		notificaitonClient: notificationClient,
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
		SetName(challengeInfo.Name).SetStartTime(challengeInfo.From.AsTime()).
		SetEndTime(challengeInfo.To.AsTime())

	if challengeInfo.GetFrom().AsTime().Before(time.Now()) {
		query.SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))
	} else {
		query.SetStatus(int64(group.RuleStatus_RULE_STATUS_COMING_SOON))
	}

	// check Start time and End time of challenge
	isValidDay, err := checkValidPeriodChallenge(ctx, c.entClient, groupId, challengeInfo.From, challengeInfo.To)
	if err != nil {
		return nil, err
	}
	if !isValidDay {
		return nil, err
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
		SetTypeID(int64(challengeInfo.Type))

	_, err := checkValidPeriodChallenge(ctx, c.entClient, groupId, challengeInfo.From, challengeInfo.To)
	if err != nil {
		return err
	}

	challengeQuery.SetStartTime(challengeInfo.From.AsTime()).
		SetEndTime(challengeInfo.To.AsTime())

	//If do not have any inprogress challenge and time updated before time now => update status to inprogress
	if challengeInfo.From.AsTime().Before(time.Now()) {
		challengeQuery.SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))

		err = c.entClient.ChallengeMember.Update().
			Where(challengemember.ChallengeIDEQ(challengeInfo.Id)).
			SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)).
			Exec(ctx)

		if err != nil {
			log.Println("Fail when save challenge members: %v", err)
			return status.Internal(fmt.Sprintf("Fail when save challenge member : %v", err.Error()))
		}

		//Update challege member rules
		err = c.entClient.ChallengeMemberRule.Update().
			Where(challengememberrule.HasChallengeMemberWith(challengemember.ChallengeIDEQ(challengeInfo.Id))).
			SetStatus(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)).
			Exec(ctx)

		if err != nil {
			log.Println("Fail when save challenge member rules: %v", err.Error())
			return status.Internal(fmt.Sprintf("Fail when save challenge member rules: %v", err.Error()))
		}
	} else {
		challengeQuery.SetStatus(int64(group.RuleStatus_RULE_STATUS_COMING_SOON))
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

	err = challengeQuery.Exec(ctx)
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
		Where(challenge.StatusEQ(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)),
			challenge.HasGroupzWith(groupz.IDEQ(groupId))).
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

func (m *challengeImpl) GetChallengeWithChallengeRules(
	ctx context.Context,
	challengeId int64,
) (*ent.Challenge, error) {
	challengeEnt, err := m.entClient.Challenge.Query().
		Where(challenge.IDEQ(challengeId)).
		WithChallengeRules().
		WithFirstMember().
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

func (c *challengeImpl) UpdateChallengeProgress(
	ctx context.Context,
	challengeId int64,
	userId int64,
	timestamp *timestamppb.Timestamp,
	activityRecord *group.ActivityRecord,
) (string, bool, bool, error) {
	pushNotifyMessage := ""
	isCompletedChallenge := false
	isCompletedFirst := false

	challengeEnt, err := c.GetChallengeWithChallengeRules(ctx, challengeId)
	if err != nil {
		return "", isCompletedFirst, isCompletedChallenge, err
	}

	if time.Now().Before(challengeEnt.StartTime) {
		log.Printf("Error update challenge progress: challenge not started")
		return "", isCompletedFirst, isCompletedChallenge, status.Internal("challenge not started")
	}

	// if challenge status is failed, reject
	if challengeEnt.Status == int64(group.RuleStatus_RULE_STATUS_FAILED) {
		log.Printf("Error update challenge progress: challenge failed")
		return "", isCompletedFirst, isCompletedChallenge, status.Internal("challenge failed")
	}

	// check plan ended but not completed -> change to failed
	// NOTIFY?
	if challengeEnt.Status == int64(group.RuleStatus_RULE_STATUS_INPROGRESS) && time.Now().After(challengeEnt.EndTime) {
		err := c.entClient.Challenge.UpdateOne(challengeEnt).SetStatus(int64(group.RuleStatus_RULE_STATUS_FAILED)).Exec(ctx)
		if err != nil {
			log.Printf("Error update challenge progress: cannot update challenge status: %v", err)
			return "", isCompletedFirst, isCompletedChallenge, status.Internal(err.Error())
		}
		pushNotifyMessage = fmt.Sprintf("challenge '%v' failed!", challengeEnt.Name)
		log.Printf("Error update challenge progress: challenge failed")
		return pushNotifyMessage, isCompletedFirst, isCompletedChallenge, status.Internal("challenge failed")
	}

	// check plan ended but not completed -> change to failed

	// check if new progress day is in planned time range and /*before now*/
	newProgessTime := timestamp.AsTime()
	if newProgessTime.Before(challengeEnt.StartTime) || newProgessTime.After(challengeEnt.EndTime) /*|| newProgessTime.After(time.Now())*/ {
		log.Printf("Error update plan progress: new progress time is not in planned time range")
		return "", isCompletedFirst, isCompletedChallenge, status.Internal("New progress time is not in planned time range")
	}

	log.Println(fmt.Sprintf("UserID: %d ChallengeID: %d", userId, challengeId))

	challengeMember, err := c.entClient.ChallengeMember.Query().
		Where(challengemember.ChallengeIDEQ(challengeId),
			challengemember.HasMemberWith(member.UserIDEQ(userId))).
		WithChallengeMemberRules(func(q *ent.ChallengeMemberRuleQuery) {
			q.WithChallengeRule()
		}).
		First(ctx)
	if err != nil {
		return "", isCompletedFirst, isCompletedChallenge, status.Internal(fmt.Sprintf("Error when fetch challenge of member: %s", err.Error()))
	}

	log.Println("Here")

	numRuleCompleted := 0
	for _, challengeMemberRule := range challengeMember.Edges.ChallengeMemberRules {
		ruleID := challengeMemberRule.RuleID
		var value int64

		switch challengeMemberRule.RuleID {
		case int64(group.Rule_RULE_TOTAL_CALORIES):
			value = activityRecord.CaloriesValue
		case int64(group.Rule_RULE_TOTAL_DISTANCE):
			value = activityRecord.DistanceValue
		case int64(group.Rule_RULE_TOTAL_TIME):
			value = activityRecord.TimeSpendValue
		}

		query := c.entClient.ChallengeMemberRule.Update().
			Where(challengememberrule.RuleIDEQ(int64(ruleID)),
				challengememberrule.HasChallengeMemberWith(challengemember.IDEQ(challengeMember.ID))).
			AddTotal(value)

			// if finished or not
		if (challengeMemberRule.Total + value) >= challengeMemberRule.Edges.ChallengeRule.Goal {
			// NOTIFY?
			if challengeMemberRule.Status == int64(group.RuleStatus_RULE_STATUS_INPROGRESS) {
				pushNotifyMessage = fmt.Sprintf("Challenge rule '%v' of %s has been completed!",
					group.Rule(challengeMemberRule.Edges.ChallengeRule.RuleID).String(),
					challengeEnt.Name)
				query.SetStatus(int64(group.RuleStatus_RULE_STATUS_COMPLETED))
				query.SetTimeCompleted(timestamp.AsTime())
			}
			numRuleCompleted++
		}

		err = query.Exec(ctx)

		if err != nil {
			return "", isCompletedFirst, isCompletedChallenge, status.Internal(fmt.Sprintf("Update progress challenge has failed: %s", err.Error()))
		}
	}

	if challengeMember.Status == int64(group.RuleStatus_RULE_STATUS_INPROGRESS) {
		if numRuleCompleted == len(challengeMember.Edges.ChallengeMemberRules) {
			//Update challenge completed when all rules completed at all
			err := c.entClient.ChallengeMember.Update().
				Where(challengemember.ChallengeIDEQ(challengeId), challengemember.HasMemberWith(member.UserIDEQ(userId))).
				SetStatus(int64(group.RuleStatus_RULE_STATUS_COMPLETED)).
				SetTimeCompleted(timestamp.AsTime()).
				Exec(ctx)

			if err != nil {
				return "", isCompletedFirst, isCompletedChallenge, status.Internal(fmt.Sprintf("Update status of challenge failed: %v", err.Error()))
			}

			// Set isCompletedChallenge = true to update season member count challenge completed
			isCompletedChallenge = true

			// Update fist challenge member if don't have any completed first member
			if challengeEnt.Edges.FirstMember == nil {
				memberEnt, err := c.entClient.Member.Query().
					Where(member.UserIDEQ(userId), member.HasChallengeMembersWith(challengemember.ChallengeIDEQ(challengeId))).
					First(ctx)

				if err != nil {
					return "", isCompletedFirst, isCompletedChallenge, status.Internal(fmt.Sprintf("Error when fetch member Ent : %v", err))
				}

				err = c.entClient.Challenge.UpdateOne(challengeEnt).
					SetFirstMember(memberEnt).
					Exec(ctx)

				isCompletedFirst = true
				if err != nil {
					return "", isCompletedFirst, isCompletedChallenge, status.Internal(fmt.Sprintf("Error when update first member of challenge : %v", err))
				}
			}

			pushNotifyMessage = fmt.Sprintf("Challenge %s has been completed", challengeEnt.Name)
		} else if numRuleCompleted >= 2 {
			pushNotifyMessage = fmt.Sprintf("%d of %d rules of challenge has been completed", numRuleCompleted, len(challengeMember.Edges.ChallengeMemberRules))
		}
	}

	return pushNotifyMessage, isCompletedFirst, isCompletedChallenge, nil
}

func (c *challengeImpl) CheckDailyProgressChallenge(ctx context.Context, timeCheck time.Time) error {
	// check inprogress challenge
	inprogressChallengeEntList, err := c.entClient.Challenge.Query().
		Where(challenge.Status(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))).
		WithGroupz().
		All(ctx)

	if err != nil {
		log.Printf("Error while query challenge to check challenge in progress daily: %v", err)
		return status.Internal(err.Error())
	}

	for _, challengeEnt := range inprogressChallengeEntList {
		log.Printf("Begin checking challenge id: %v - name: %v", challengeEnt.ID, challengeEnt.Name)
		_ = checkIfChallengeExpired(ctx, c.entClient, challengeEnt, c.notificaitonClient, timeCheck)
		log.Printf("Begin checking challenge id: %v - name: %v", challengeEnt.ID, challengeEnt.Name)

	}

	// check coming challenge if time coming change status to inprogress
	comingChallengeEntList, err := c.entClient.Challenge.Query().
		Where(challenge.Status(int64(group.RuleStatus_RULE_STATUS_COMING_SOON))).
		WithGroupz().
		All(ctx)

	if err != nil {
		log.Printf("Error while query challenge to check challenge in progress daily: %v", err)
		return status.Internal(err.Error())
	}

	for _, challengeEnt := range comingChallengeEntList {
		log.Printf("Begin checking challenge coming id: %v - name: %v", challengeEnt.ID, challengeEnt.Name)
		_ = checkIfChallengeComing(ctx, c.entClient, challengeEnt, c.notificaitonClient, timeCheck)
		log.Printf("Begin checking challenge coming id: %v - name: %v", challengeEnt.ID, challengeEnt.Name)
	}

	return nil
}

func (c *challengeImpl) ListInProgressChallenge(ctx context.Context, userId int64) ([]*ent.Challenge, error) {
	// check inprogress challenge
	inprogressChallengeEntList, err := c.entClient.Challenge.Query().
		Where(challenge.Status(int64(group.RuleStatus_RULE_STATUS_INPROGRESS)),
			challenge.HasChallengeMembersWith(challengemember.HasMemberWith(member.UserIDEQ(userId)))).
		WithChallengeRules().
		All(ctx)

	if err != nil {
		log.Printf("Error while query challenge to check challenge in progress daily: %v", err)
		return nil, status.Internal(err.Error())
	}

	return inprogressChallengeEntList, nil
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
