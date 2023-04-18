package admin

import (
	"context"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

func (a *adminImpl) AddSubEventToEvent(
	ctx context.Context,
	eventEnt *ent.Event,
	subEvent *event_pb.CreateSubEvent,
) (int64, error) {
	if time.Now().After(subEvent.StartAt.AsTime()) {
		log.Print("Error AddSubEventToEvent: start time of subevent must be after time.now")
		return 0, status.InvalidArgument("Start time of subevent must be after time.now")
	}

	subEventsLen := len(eventEnt.Edges.Subevents)
	if subEventsLen > 0 {
		latestSubEvent := eventEnt.Edges.Subevents[len(eventEnt.Edges.Subevents)-1]
		if latestSubEvent.EndDate.After(subEvent.StartAt.AsTime()) {
			log.Print("Error AddSubEventToEvent: start time of subevent must be after end time of latest subevent")
			return 0, status.InvalidArgument("Start time of subevent must be after end time of latest subevent")
		}
	}

	tx, err := a.entClient.Tx(ctx)
	if err != nil {
		log.Printf("Error CreatEvent: cannot create transaction: %v", err)
		return 0, status.Internal(err.Error())
	}

	groupsNewProgresses := []*ent.GroupzProgress{}
	if subEventsLen > 0 {
		firstSubEvent := eventEnt.Edges.Subevents[0]
		createBulkProgresses := []*ent.GroupzProgressCreate{}

		firstSubEventGroups, err := firstSubEvent.QueryGroup().All(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error AddSubEventToEvent: cannot get first subevent groups")
		}

		for _, existedGroupProgresses := range firstSubEventGroups {
			createBulkProgresses = append(
				createBulkProgresses,
				tx.GroupzProgress.Create().
					SetGroupID(existedGroupProgresses.GroupID).
					SetProgress(0),
			)
		}
		groupsNewProgresses, err = tx.GroupzProgress.CreateBulk(createBulkProgresses...).Save(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error AddSubEventToEvent: cannot create progress for groups")
		}
	} else {
		adminProgress, err := tx.GroupzProgress.Create().
			SetGroupID(eventEnt.OwnerGroupID).
			SetProgress(0).
			Save(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error AddSubEventToEvent: cannot create progress for admin")
		}
		groupsNewProgresses = append(groupsNewProgresses, adminProgress)
	}

	subEventEnt, err := tx.SubEvent.Create().
		SetName(subEvent.Name).
		SetDescription(subEvent.Description).
		SetStartDate(subEvent.StartAt.AsTime()).
		SetEndDate(subEvent.EndAt.AsTime()).
		SetEvent(eventEnt).
		SetGoal(subEvent.Goal).
		SetStatus(int64(event_pb.SubEventStatus_SUB_EVENT_STATUS_NEW)).
		SetRule(int64(subEvent.Rule)).
		SetActivityType(int64(subEvent.ActivityType)).
		AddGroup(groupsNewProgresses...).
		Save(ctx)
	if err != nil {
		return 0, rollbackAndLog(tx, err, "Error AddSubEventToEvent: cannot create subevent")
	}

	err = tx.Commit()
	if err != nil {
		log.Printf("Error AddSubEventToEvent: cannot commit transaction: %v", err)
	}

	return subEventEnt.ID, nil
}
