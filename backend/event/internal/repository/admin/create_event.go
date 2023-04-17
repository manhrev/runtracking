package admin

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event "github.com/manhrev/runtracking/backend/event/pkg/api"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/participate"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (a *adminImpl) CreateEvent(
	ctx context.Context,
	name string,
	description string,
	picture string,
	startAt *timestamppb.Timestamp,
	isGlobal bool,
	subEvents []*event_pb.CreateSubEvent,
	ownerGroupId int64,
) (int64, error) {
	// get owner group
	entOwnerGroupId, err := a.entClient.EventGroupz.Query().
		Where(eventgroupz.IDEQ(ownerGroupId)).
		OnlyID(ctx)
	if err != nil {
		// not found mean this group not yet exist in EventGroup, create one
		if ent.IsNotFound(err) {
			log.Printf("Info CreateEvent: not found group, create one: %v", err)
			newlyCreatedGroup, err := a.entClient.EventGroupz.Create().SetID(ownerGroupId).Save(ctx)
			if err != nil {
				log.Printf("Error CreateEvent: cannot create group: %v", err)
				return 0, status.Internal(fmt.Sprintf("Cannot create group: %v", err))
			}
			entOwnerGroupId = newlyCreatedGroup.ID
		} else {
			log.Printf("Error CreateEvent: cannot get group: %v", err)
			return 0, status.Internal(err.Error())
		}
	}

	tx, err := a.entClient.Tx(ctx)
	if err != nil {
		log.Printf("Error CreatEvent: cannot create transaction: %v", err)
		return 0, status.Internal(err.Error())
	}

	// create event query
	query := tx.Event.Create().
		SetName(name).
		SetDescription(description).
		SetPicture(picture).
		SetCreatedAt(time.Now()).
		SetIsGlobal(isGlobal).
		SetOwnerGroupID(entOwnerGroupId).
		AddGroupIDs(entOwnerGroupId).
		SetNumberOfGroups(1)

	if startAt != nil {
		query.SetStartAt(startAt.AsTime())
	}

	// create subevent inside event
	for idx, subEvent := range subEvents {
		// create progress for admin who create this
		adminProgress, err := tx.GroupzProgress.Create().
			SetGroupID(entOwnerGroupId).
			SetProgress(0).
			Save(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error CreateEvent: cannot create admin progress")
		}

		entSubEvent, err := tx.SubEvent.Create().
			SetName(subEvent.Name).
			SetDescription(subEvent.Description).
			SetPicture(subEvent.Picture).
			SetStartDate(subEvent.StartAt.AsTime()).
			SetEndDate(subEvent.EndAt.AsTime()).
			SetGoal(subEvent.Goal).
			SetRuleID(int64(subEvent.Rule)).
			AddGroup(adminProgress).
			SetStatus(int64(event_pb.SubEventStatus_SUB_EVENT_STATUS_NEW)).
			Save(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error CreateEvent: cannot create sub event")
		}

		// add sub event to event
		query.AddSubevents(entSubEvent)
		if idx == 0 {
			query.SetStartAt(subEvent.StartAt.AsTime())
		}
	}

	entEventCreated, err := query.Save(ctx)
	if err != nil {
		return 0, rollbackAndLog(tx, err, "Error CreateEvent")
	}

	// update state of admin group in event to active
	updatedCount, err := tx.Participate.Update().Where(
		participate.EventGroupIDEQ(entOwnerGroupId),
		participate.EventIDEQ(entEventCreated.ID),
	).SetStatus(int64(event.GroupStatus_GROUP_STATUS_ACTIVE)).
		SetJoinedAt(time.Now()).Save(ctx)

	if err != nil {
		return 0, rollbackAndLog(tx, err, "Error CreateEvent: cannot update admin group state")
	}
	if updatedCount != 1 {
		return 0, rollbackAndLog(tx, fmt.Errorf("no record updated"), "Error CreateEvent: cannot update admin group state")
	}

	err = tx.Commit()
	if err != nil {
		log.Printf("Error CreateEvent: cannot commit transaction: %v", err)
	}

	return entEventCreated.ID, nil
}
