package event

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
)

type Event interface {
	GetEvent(ctx context.Context, eventId int64) (*ent.Event, error)
	GetEventWithSubEvents(ctx context.Context, eventId int64) (*ent.Event, error)
}

type eventImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Event {
	return &eventImpl{
		entClient: entClient,
	}
}

func (e *eventImpl) GetEvent(ctx context.Context, eventId int64) (*ent.Event, error) {
	eventEnt, err := e.entClient.Event.Query().Where(event.ID(eventId)).Only(ctx)
	if err != nil {
		log.Printf("Error GetEvent: cannot get event: %v", err)
		return nil, status.Internal(err.Error())
	}
	return eventEnt, nil
}

func (e *eventImpl) GetEventWithSubEvents(ctx context.Context, eventId int64) (*ent.Event, error) {
	eventEnt, err := e.entClient.Event.Query().Where(event.ID(eventId)).WithSubevents().Only(ctx)
	if err != nil {
		log.Printf("Error GetEvent: cannot get event: %v", err)
		return nil, status.Internal(err.Error())
	}
	return eventEnt, nil
}
