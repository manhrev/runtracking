package group

import "github.com/manhrev/runtracking/backend/group/pkg/ent"

type Group interface {
}

type groupImpl struct {
	entClient *ent.Client
}
