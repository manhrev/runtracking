package service

import (
	auth "github.com/manhrev/runtracking/backend/auth/pkg/api"
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	"github.com/manhrev/runtracking/backend/group/internal/service/group"
	"github.com/manhrev/runtracking/backend/group/internal/service/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Service struct {
	repository *repository.Repository
	authClient auth.AuthIClient
	Group      group.Group
	Member     member.Member
}

func New(entClient *ent.Client, authClient auth.AuthIClient) *Service {
	repo := repository.New(entClient)

	return &Service{
		repository: repo,
		Group:      group.New(entClient, repo, authClient),
		authClient: authClient,
		Member:     member.New(entClient, repo, authClient),
	}
}
