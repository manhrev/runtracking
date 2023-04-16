package admin

import (
	"context"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/participate"
)

func (a *adminImpl) ApproveJoinEvent(
	ctx context.Context,
	eventId int64,
	groupId int64,
) error {
	mumAffected, err := a.entClient.Participate.Update().
		Where(
			participate.EventIDEQ(eventId),
			participate.EventGroupIDEQ(groupId),
			participate.StatusEQ(int64(event_pb.GroupStatus_GROUP_STATUS_REQUESTED)),
		).
		SetStatus(int64(event_pb.GroupStatus_GROUP_STATUS_ACTIVE)).
		Save(ctx)
	if err != nil {
		log.Printf("Error ApproveJoinEvent: %v", err)
		return status.Internal(err.Error())
	}

	if mumAffected == 0 {
		log.Printf("Error ApproveJoinEvent: no row updated: no join request")
		return status.Internal("No join request found")
	}

	return nil
}
