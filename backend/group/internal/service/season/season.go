package season

import (
	"context"

	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	group "github.com/manhrev/runtracking/backend/group/pkg/api"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Season interface {
	CreateSeason(
		ctx context.Context,
		userId int64,
		request *group.CreateSeasonRequest,
	) (*group.CreateSeasonReply, error)

	DeleteSeason(
		ctx context.Context,
		userId int64,
		request *group.DeleteSeasonRequest,
	) (*group.DeleteSeasonReply, error)

	GetSeason(
		ctx context.Context,
		request *group.GetSeasonRequest,
	) (*group.GetSeasonReply, error)

	ListSeason(
		ctx context.Context,
		request *group.ListSeasonRequest,
	) (*group.ListSeasonReply, error)

	UpdateSeason(
		ctx context.Context,
		userId int64,
		request *group.UpdateSeasonRequest,
	) (*group.UpdateSeasonReply, error)

	GetInProgressSeason(
		ctx context.Context,
		request *group.GetInProgressSeasonRequest,
	) (*group.GetInProgressSeasonReply, error)
}

type seasonImpl struct {
	entClient  *ent.Client
	authClient auth.AuthIClient
	repository *repository.Repository
}

func New(entClient *ent.Client,
	repository *repository.Repository,
	authClient auth.AuthIClient) Season {
	return &seasonImpl{
		entClient:  entClient,
		repository: repository,
		authClient: authClient,
	}
}
