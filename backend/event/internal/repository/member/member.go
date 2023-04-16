package member

import (
	"context"
	"fmt"
	"log"

	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
)

type Member interface {
	ListEvents(
		ctx context.Context,
		limit uint32,
		offset uint64,
		ascending bool,
		group_id int64,
		sort_by event_pb.ListEventsRequest_SortBy,
		ids []int64,
	) ([]*ent.Event, int64, error)
	ListSubEvents(
		ctx context.Context,
		eventId int64,
	) ([]*ent.SubEvent, error)
}

type memberImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Member {
	return &memberImpl{
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