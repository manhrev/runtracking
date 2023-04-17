package admin

import (
	"context"
	"fmt"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/participate"
)

func (a *adminImpl) ApproveJoinEvent(
	ctx context.Context,
	entEvent *ent.Event,
	groupId int64,
) error {
	tx, err := a.entClient.Tx(ctx)
	if err != nil {
		log.Printf("Error CreatEvent: cannot create transaction: %v", err)
		return status.Internal(err.Error())
	}

	numAffected, err := a.entClient.Participate.Update().
		Where(
			participate.EventIDEQ(entEvent.ID),
			participate.EventGroupIDEQ(groupId),
			participate.StatusEQ(int64(event_pb.GroupStatus_GROUP_STATUS_REQUESTED)),
		).
		SetStatus(int64(event_pb.GroupStatus_GROUP_STATUS_ACTIVE)).
		Save(ctx)
	if err != nil {
		return rollbackAndLog(tx, err, "Error ApproveJoinEvent: cannot create progress for group")
	}

	if numAffected == 0 {
		return rollbackAndLog(tx, fmt.Errorf("no join request"), "Error ApproveJoinEvent: no row updated: no join request")
	}

	for _, subEvent := range entEvent.Edges.Subevents {
		_, err := tx.GroupzProgress.Create().
			SetGroupID(groupId).
			SetProgress(0).
			SetSubEvent(subEvent).
			Save(ctx)
		if err != nil {
			return rollbackAndLog(tx, err, "Error ApproveJoinEvent: cannot create progress for group")
		}
	}

	err = tx.Commit()
	if err != nil {
		log.Printf("Error ApproveJoinEvent: cannot commit transaction: %v", err)
	}

	return nil
}
