package repository

import (
	"github.com/manhrev/runtracking/backend/auth/internal/repository/user"
	"github.com/manhrev/runtracking/backend/auth/pkg/ent"
)

type Repository struct {
	entClient *ent.Client

	User user.User
}

func New(entClient *ent.Client) *Repository {
	return &Repository{
		entClient: entClient,
		User:      user.New(entClient),
	}
}
