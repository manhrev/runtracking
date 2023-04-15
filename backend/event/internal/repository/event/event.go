package event

import "github.com/manhrev/runtracking/backend/event/pkg/ent"

type Event interface{}

type eventImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Event {
	return &eventImpl{
		entClient: entClient,
	}
}
