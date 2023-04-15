package challenge

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/group/internal/status"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	grouppb "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challenge"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengememberrule"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/groupz"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func checkValidPeriodChallenge(ctx context.Context,
	entClient *ent.Client,
	groupId int64,
	from *timestamppb.Timestamp,
	to *timestamppb.Timestamp,
	isUpdating bool,
	challengeId int64, // use when updating challenge to avoid scan itself
) (bool, error) {
	query := entClient.Challenge.Query().
		Where(challenge.HasGroupzWith(groupz.IDEQ(groupId)),
			challenge.StatusIn(int64(grouppb.RuleStatus_RULE_STATUS_COMING_SOON), int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS)))

	if isUpdating {
		query.Where(challenge.IDNEQ(challengeId))
	}

	challengeEnList, err := query.
		Order(ent.Desc(challenge.FieldStartTime)).
		All(ctx)
	if err != nil {
		return false, status.Internal(fmt.Sprintf("Error when fetching challenge list ent: %v", err.Error()))
	}

	for _, challengeEnt := range challengeEnList {
		if challengeEnt.Status == int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS) {
			if from.AsTime().After(challengeEnt.EndTime) {
				return true, nil
			}
			return false, status.Internal("Time of challenge is in range time of previous one. Check start time and end time to creating a new one")
		}

		//make sure that challenge created do not have the period of time in range of previous one
		if !((from.AsTime().After(challengeEnt.EndTime) && to.AsTime().After(challengeEnt.EndTime)) ||
			(from.AsTime().Before(challengeEnt.StartTime) && to.AsTime().Before(challengeEnt.StartTime))) {
			return false, status.Internal("Time of challenge is in range time of previous one. Check start time and end time to creating a new one")
		}
	}
	return true, nil
}

func checkExistedInProgressChallenge(ctx context.Context,
	entClient *ent.Client,
	groupId int64) (bool, error) {
	challengeEnList, err := entClient.Challenge.Query().
		Where(challenge.HasGroupzWith(groupz.IDEQ(groupId)),
			challenge.StatusEQ(int64(grouppb.RuleStatus_RULE_STATUS_INPROGRESS))).
		All(ctx)

	if err != nil {
		return false, status.Internal(fmt.Sprintf("Error when fetch challenge list: %v", err.Error()))
	}

	if len(challengeEnList) > 2 {
		return false, status.Internal("There were more than one inprogress challenge in group")
	}

	if len(challengeEnList) == 1 {
		return true, nil
	}

	return false, nil

}

func checkIfChallengeExpired(
	ctx context.Context,
	entClient *ent.Client,
	challengeEnt *ent.Challenge,
	notificationIClient notification.NotificationIClient,
	timeCheck time.Time,
) error {
	// in case challenge not started yet
	if timeCheck.Before(challengeEnt.StartTime) {
		log.Printf("Challenge not started!")
		return nil
	}

	if timeCheck.After(challengeEnt.EndTime) {
		err := entClient.Challenge.UpdateOne(challengeEnt).
			SetStatus(int64(grouppb.RuleStatus_RULE_STATUS_COMPLETED)).
			Exec(ctx)

		if err != nil {
			log.Printf("Error update challenge status when check if challenge expired: %v", err)
			return err
		}

		challengeMemberList, err := entClient.ChallengeMember.Query().
			Where(challengemember.ChallengeIDEQ(challengeEnt.ID), challengemember.StatusEQ(int64(group.RuleStatus_RULE_STATUS_INPROGRESS))).
			WithMember().
			All(ctx)

		var userIds []int64
		for _, challengeMember := range challengeMemberList {
			userIds = append(userIds, challengeMember.Edges.Member.UserID)
		}

		err = entClient.ChallengeMember.Update().
			Where(challengemember.ChallengeIDEQ(challengeEnt.ID)).
			SetStatus(int64(group.RuleStatus_RULE_STATUS_FAILED)).
			Exec(ctx)
		if err != nil {
			log.Printf("Error update challenge member status if challenge expired %v", err)
			return err
		}

		err = entClient.ChallengeMemberRule.Update().
			Where(challengememberrule.HasChallengeMemberWith(challengemember.ChallengeIDEQ(challengeEnt.ID))).
			SetStatus(int64(group.RuleStatus_RULE_STATUS_FAILED)).
			Exec(ctx)
		if err != nil {
			log.Printf("Error update challenge member rule status if challenge expired %v", err)
			return err
		}
		notifyUsersAboutChallenge(ctx, notificationIClient, fmt.Sprintf("Your %v challenge of group %v has failed!", challengeEnt.Name, challengeEnt.Edges.Groupz.Name), userIds, challengeEnt)
		log.Printf("challenge %v:%d has failed 0: Status when check if challenge expired", challengeEnt.Name, challengeEnt.ID)
		return nil
	}

	log.Printf("challenge not expired")

	return nil
}

func checkIfChallengeComing(
	ctx context.Context,
	entClient *ent.Client,
	challengeEnt *ent.Challenge,
	notificationIClient notification.NotificationIClient,
	timeCheck time.Time,
) error {
	// in case challenge not started yet
	if timeCheck.Before(challengeEnt.StartTime) {
		log.Printf("Challenge not started!")
		return nil
	}

	if timeCheck.After(challengeEnt.StartTime) && timeCheck.Before(challengeEnt.EndTime) {
		err := updateStatusChallenge(ctx, entClient, challengeEnt.ID, group.RuleStatus_RULE_STATUS_INPROGRESS)
		if err != nil {
			log.Printf("Failed when update status challenge coming when check challenge coming : %v", err)
			return err
		}
		challengeMemberList, err := entClient.ChallengeMember.Query().
			Where(challengemember.ChallengeIDEQ(challengeEnt.ID)).
			WithMember().
			All(ctx)

		if err != nil {
			log.Printf("Error fetching user ids for notification when check if challenge expired: %v", err)
			return err
		}
		var userIds []int64
		for _, challengeMember := range challengeMemberList {
			userIds = append(userIds, challengeMember.Edges.Member.UserID)
		}

		notifyUsersAboutChallenge(ctx, notificationIClient, fmt.Sprintf("Your %v challenge of group %v has coming!", challengeEnt.Name, challengeEnt.Edges.Groupz.Name), userIds, challengeEnt)
		log.Printf("challenge %v:%d has started: Status when check if challenge coming", challengeEnt.Name, challengeEnt.ID)
		return nil
	}

	log.Printf("challenge is not coming")

	return nil
}

func updateStatusChallenge(ctx context.Context,
	entClient *ent.Client,
	challengeId int64, challengeStatus group.RuleStatus) error {
	err := entClient.Challenge.UpdateOneID(challengeId).
		SetStatus(int64(challengeStatus)).Exec(ctx)

	if err != nil {
		log.Println("Failed when update status challenge")
		return err
	}

	err = entClient.ChallengeMember.Update().
		Where(challengemember.ChallengeID(challengeId)).
		SetStatus(int64(challengeStatus)).
		Exec(ctx)

	if err != nil {
		log.Println("Failed when update status challenge member")
		return err
	}

	err = entClient.ChallengeMemberRule.Update().
		Where(challengememberrule.HasChallengeMemberWith(challengemember.ChallengeIDEQ(challengeId))).
		SetStatus(int64(challengeStatus)).
		Exec(ctx)
	if err != nil {
		log.Println("Failed when update status challenge member")
		return err
	}

	return nil
}

func notifyUsersAboutChallenge(
	ctx context.Context,
	notificationIClient notification.NotificationIClient,
	message string,
	userIds []int64,
	challengeEnt *ent.Challenge,
) error {
	_, err := notificationIClient.PushNotification(ctx, &notification.PushNotiRequest{
		Messeage:      message,
		SourceType:    notification.SOURCE_TYPE_GROUP,
		ScheduledTime: timestamppb.New(time.Now().Add(time.Second * 10)),
		ReceiveIds:    userIds,
		SourceId:      challengeEnt.ID,
		SourceImage:   challengeEnt.Picture,
	})
	if err != nil {
		log.Printf("Error when push notification: %v", err)
		return err
	}
	return nil
}
