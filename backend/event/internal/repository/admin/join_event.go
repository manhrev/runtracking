package admin

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
)

func (a *adminImpl) JoinEvent(
	ctx context.Context,
	eventId int64,
	groupId int64,
) error {
	entGroupId := groupId
	// check if groupevent exists
	_, err := a.entClient.EventGroupz.Query().Where(eventgroupz.IDEQ(groupId)).Only(ctx)
	if err != nil {
		if ent.IsNotFound(err) {
			log.Printf("Info JoinEvent: not found group, create one: %v", err)
			newlyCreatedGroup, err := a.entClient.EventGroupz.Create().
				SetID(groupId).
				Save(ctx)
			if err != nil {
				log.Printf("Error CreateEvent: cannot create group: %v", err)
				return status.Internal(fmt.Sprintf("Cannot create group: %v", err))
			}
			entGroupId = newlyCreatedGroup.ID
		} else {
			log.Printf("Error CreateEvent: cannot get group: %v", err)
			return status.Internal(err.Error())
		}
	} else { // if groupevent exists ckeck
		// if group already joined this event, return error
		exist, err := a.entClient.EventGroupz.Query().
			Where(
				eventgroupz.IDEQ(entGroupId),
				eventgroupz.HasEventWith(event.IDEQ(eventId)),
			).Exist(ctx)
		if err != nil {
			log.Printf("Error JoinEvent: cannot check if group already joined this event: %v", err)
			return status.Internal(err.Error())
		}
		if exist == true {
			log.Printf("Error JoinEvent: group already joined this event: %v", err)
			return status.Internal("group already joined this event")
		}
	}

	// set group to participate in event, dont create subevent progress yet
	_, err = a.entClient.Participate.Create().
		SetEventID(eventId).
		SetEventGroupID(entGroupId).
		SetJoinedAt(time.Now()).
		SetStatus(int64(event_pb.GroupStatus_GROUP_STATUS_REQUESTED)).
		Save(ctx)
	if err != nil {
		log.Printf("Error JoinEvent: cannot create participation: %v", err)
		return status.Internal(err.Error())
	}

	return nil
}
