package challenge

import (
	"context"
	"log"
	"math"

	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/challengemember"
	"github.com/manhrev/runtracking/backend/group/pkg/ent/member"
)

const (
	POINT_PER_KILOMETER float64 = 5
	MODULO_FACTOR       float64 = 0.1
)

func calculatePoint(distance int) int {
	distanceFloat := float64(distance) / 1000.0

	return int(math.Ceil(distanceFloat * POINT_PER_KILOMETER * math.Pow(1+MODULO_FACTOR, distanceFloat*2/POINT_PER_KILOMETER)))
}

func (c *challengeImpl) UpdateChallengeProgress(
	ctx context.Context,
	userId int64,
	request *group.UpdateChallengeProgressRequest,
) (string, error) {
	pushMessage, isCompletedFirst, isCompletedChallenge, err := c.repository.Challenge.UpdateChallengeProgress(ctx,
		request.ChallengeId,
		userId, request.Time,
		request.GetActivityRecord())

	if err != nil {
		log.Println("Fail when update progress challenge")
		return "", err
	}

	memberEnt, err := c.entClient.Member.Query().
		Where(member.UserIDEQ(userId), member.HasChallengeMembersWith(challengemember.ChallengeIDEQ(request.ChallengeId))).
		First(ctx)

	if err != nil {
		return "", err
	}

	point := 0
	if isCompletedFirst {
		point += 50
	}
	point += calculatePoint(int(request.ActivityRecord.DistanceValue))

	// get inprogress challenge member
	challeneEnt, err := c.repository.Challenge.GetChallengeWithGroup(ctx, request.ChallengeId)
	if err != nil {
		return "", err
	}

	err = c.repository.Challenge.UpdateMemberPoint(ctx,
		point,
		challeneEnt, memberEnt)

	if err != nil {
		return "", err
	}

	// Get inprogress season
	seasonEnt, err := c.repository.Season.GetInProgressSeason(ctx)
	if err != nil {
		return "", err
	}

	err = c.repository.Season.UpdateMemberPoint(ctx,
		point, isCompletedChallenge,
		seasonEnt, memberEnt)

	if err != nil {
		return "", err
	}

	return pushMessage, nil
}
