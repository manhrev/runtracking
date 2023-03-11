package repository

import (
	"github.com/manhrev/runtracking/backend/group/internal/repository/group"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Repository struct {
	entClient *ent.Client

	Group group.Group
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		Group:     group.New(entClient),
	}
}
