package admin

import (
	"context"
	"fmt"
	"log"

	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
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
		subEvents []*event_pb.CreateSubEvent,
		ownerGroupId int64,
	) (int64, error)
	UpdateEventInfo(
		ctx context.Context,
		eventId int64,
		name string,
		description string,
		picture string,
	) error
	JoinEvent(
		ctx context.Context,
		eventId int64,
		groupId int64,
	) error
	ApproveJoinEvent(
		ctx context.Context,
		entEvent *ent.Event,
		groupId int64,
	) error
	AddSubEventToEvent(
		ctx context.Context,
		eventEnt *ent.Event,
		subEvent *event_pb.CreateSubEvent,
	) (int64, error)
	RemoveSubEventFromEvent(
		ctx context.Context,
		eventEnt *ent.Event,
		subEventId int64,
	) error
}

type adminImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Admin {
	return &adminImpl{
		entClient: entClient,
	}
}

func rollbackAndLog(tx *ent.Tx, err error, message string) error {
	if rerr := tx.Rollback(); rerr != nil {
		err = fmt.Errorf("%w: %v", err, rerr)
	}
	log.Printf("%s: %v", message, err)
	return err
}
