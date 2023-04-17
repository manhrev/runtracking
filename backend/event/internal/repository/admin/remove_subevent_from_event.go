package admin

import (
	"context"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

func (a *adminImpl) RemoveSubEventFromEvent(
	ctx context.Context,
	eventEnt *ent.Event,
	subEventId int64,
) error {

	if len(eventEnt.Edges.Subevents) > 0 {
		var subEventStartTime time.Time
		for _, subEvent := range eventEnt.Edges.Subevents {
			if subEvent.ID == subEventId {
				subEventStartTime = subEvent.StartDate
			}
		}

		if time.Now().After(subEventStartTime) {
			log.Print("Error RemoveSubEventFromEvent: cannot remove subevent that has started")
			return status.InvalidArgument("Cannot remove subevent that has started")
		}
	} else {
		log.Print("Error RemoveSubEventFromEvent: event has no subevent")
		return status.InvalidArgument("Event has no subevent")
	}

	tx, err := a.entClient.Tx(ctx)
	if err != nil {
		log.Printf("Error CreatEvent: cannot create transaction: %v", err)
		return status.Internal(err.Error())
	}

	// remove all group progress in subevent
	_, err = tx.GroupzProgress.Delete().Where(
		groupzprogress.HasSubEventWith(
			subevent.IDEQ(subEventId),
		),
	).Exec(ctx)
	if err != nil {
		return rollbackAndLog(tx, err, "Error RemoveSubEventFromEvent: cannot delete group progresses")
	}

	err = tx.SubEvent.DeleteOneID(subEventId).Exec(ctx)
	if err != nil {
		return rollbackAndLog(tx, err, "Error RemoveSubEventFromEvent: cannot delete subevent")
	}

	err = tx.Commit()
	if err != nil {
		log.Printf("Error RemoveSubEventFromEvent: cannot commit transaction: %v", err)
	}
	return nil
}
