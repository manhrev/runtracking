package service

import (
	"github.com/manhrev/runtracking/backend/group/internal/repository"
	"github.com/manhrev/runtracking/backend/group/internal/service/group"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Service struct {
	repository *repository.Repository
	Group      group.Group
}

func New(entClient *ent.Client) *Service {
	repo := repository.New(entClient)

	return &Service{
		repository: repo,
		Group:      group.New(entClient, repo),
	}
}
