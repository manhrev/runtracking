package repository

import (
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
)

type Repository struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
	}
}
