package repository

import (
	"github.com/manhrev/runtracking/backend/group/internal/repository/challenge"
	"github.com/manhrev/runtracking/backend/group/internal/repository/group"
	"github.com/manhrev/runtracking/backend/group/internal/repository/member"
	"github.com/manhrev/runtracking/backend/group/pkg/ent"
	notification "github.com/manhrev/runtracking/backend/notification/pkg/api"
)

type Repository struct {
	entClient *ent.Client

	Group              group.Group
	Member             member.Member
	Challenge          challenge.Challenge
	notificaitonClient notification.NotificationIClient
}

func New(entClient *ent.Client, notificationClient notification.NotificationIClient) *Repository {
	return &Repository{
		entClient:          entClient,
		Group:              group.New(entClient),
		Member:             member.New(entClient),
		Challenge:          challenge.New(entClient, notificationClient),
		notificaitonClient: notificationClient,
	}
}
