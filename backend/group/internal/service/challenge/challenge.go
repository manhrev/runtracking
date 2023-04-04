package challenge

import (
	"context"
	"time"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Challenge interface {
	CreateChallenge(
		ctx context.Context,
		userId int64,
		request *group.CreateChallengeRequest,
	) (*group.CreateChallengeReply, error)

	UpdateChallenge(
		ctx context.Context,
		userId int64,
		request *group.UpdateChallengeRequest,
	) (*group.UpdateChallengeReply, error)

	ListChallenge(
		ctx context.Context,
		request *group.ListChallengeRequest,
	) (*group.ListChallengeReply, error)

	DeleteChallenge(
		ctx context.Context,
		userId int64,
		request *group.DeleteChallengeRequest,
	) (*group.DeleteChallengeReply, error)

	GetChallenge(
		ctx context.Context,
		request *group.GetChallengeRequest,
	) (*group.GetChallengeReply, error)

	UpdateChallengeProgress(
		ctx context.Context,
		userId int64,
		request *group.UpdateChallengeProgressRequest,
	) (string, error)

	CheckDailyProgress(
		ctx context.Context,
		timeCheck time.Time,
	) (*group.CheckDailyProgressChallengeReply, error)
}

type challengeImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Challenge {
	return &challengeImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}

func (c *challengeImpl) isActiveChallengeExisted(ctx context.Context,
	groupId int64) (bool, error) {
	challengeActive, err := c.repository.Challenge.GetActiveChallenge(ctx, groupId)
	if err != nil {
		return false, err
	}

	if challengeActive != nil {
		return true, nil
	}
	return false, nil
}
