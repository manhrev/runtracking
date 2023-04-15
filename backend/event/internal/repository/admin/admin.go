package admin

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/eventgroupz"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Admin interface {
	CreateEvent(
		ctx context.Context,
		name string,
		description string,
		picture string,
		startAt *timestamppb.Timestamp,
		isGlobal bool,
		subEvents []*event_pb.CreateEventRequest_CreateSubEvent,
		ownerGroupId int64,
	) (int64, error)
}

type adminImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Admin {
	return &adminImpl{
		entClient: entClient,
	}
}

func (a *adminImpl) CreateEvent(
	ctx context.Context,
	name string,
	description string,
	picture string,
	startAt *timestamppb.Timestamp,
	isGlobal bool,
	subEvents []*event_pb.CreateEventRequest_CreateSubEvent,
	ownerGroupId int64,
) (int64, error) {
	// get owner group
	entOownerGroupId, err := a.entClient.EventGroupz.Query().
		Where(eventgroupz.IDEQ(ownerGroupId)).
		OnlyID(ctx)
	if err != nil {
		log.Printf("Error CreatEvent: cannot get owner: %v", err)
		return 0, status.Internal(err.Error())
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
		SetOwnerGroupID(entOownerGroupId)

	if startAt != nil {
		query.SetStartAt(startAt.AsTime())
	}

	// create subevent inside event
	for _, subEvent := range subEvents {
		// create progress for admin who create this
		adminProgress, err := tx.GroupzProgress.Create().
			SetGroupID(entOownerGroupId).
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
			Save(ctx)
		if err != nil {
			return 0, rollbackAndLog(tx, err, "Error CreateEvent: cannot create sub event")
		}

		// add sub event to event
		query.AddSubevents(entSubEvent)
	}

	entEventCreated, err := query.Save(ctx)
	if err != nil {
		return 0, rollbackAndLog(tx, err, "Error CreateEvent")
	}

	return entEventCreated.ID, nil
}

func rollbackAndLog(tx *ent.Tx, err error, message string) error {
	if rerr := tx.Rollback(); rerr != nil {
		err = fmt.Errorf("%w: %v", err, rerr)
	}
	log.Printf("%s: %v", message, err)
	return err
}
