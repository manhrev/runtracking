package admin

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
)

func (a *adminImpl) UpdateEventInfo(
	ctx context.Context,
	eventId int64,
	name string,
	description string,
	picture string,
) error {
	query := a.entClient.Event.UpdateOneID(eventId)

	if name != "" {
		query.SetName(name)
	}
	if description != "" {
		query.SetDescription(description)
	}
	if picture != "" {
		query.SetPicture(picture)
	}

	err := query.Exec(ctx)
	if err != nil {
		log.Printf("Error UpdateEventInfo: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}
