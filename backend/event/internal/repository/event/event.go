package event

import (
	"context"
	"fmt"
	"log"

	"github.com/manhrev/runtracking/backend/event/internal/status"
	event_pb "github.com/manhrev/runtracking/backend/event/pkg/api"
	"github.com/manhrev/runtracking/backend/event/pkg/ent"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/event"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/groupzprogress"
	"github.com/manhrev/runtracking/backend/event/pkg/ent/subevent"
)

type Event interface {
	GetEvent(ctx context.Context, eventId int64) (*ent.Event, error)
	GetEventWithSubEvents(ctx context.Context, eventId int64) (*ent.Event, error)
	UpdateEventProgress(ctx context.Context, request *event_pb.UpdateEventProgressRequest) (string, error)
}

type eventImpl struct {
	entClient *ent.Client
}

func New(entClient *ent.Client) Event {
	return &eventImpl{
		entClient: entClient,
	}
}

func (e *eventImpl) GetEvent(ctx context.Context, eventId int64) (*ent.Event, error) {
	eventEnt, err := e.entClient.Event.Query().Where(event.ID(eventId)).Only(ctx)
	if err != nil {
		log.Printf("Error GetEvent: cannot get event: %v", err)
		return nil, status.Internal(err.Error())
	}
	return eventEnt, nil
}

func (e *eventImpl) GetEventWithSubEvents(ctx context.Context, eventId int64) (*ent.Event, error) {
	eventEnt, err := e.entClient.Event.Query().Where(event.ID(eventId)).WithSubevents().Only(ctx)
	if err != nil {
		log.Printf("Error GetEvent: cannot get event: %v", err)
		return nil, status.Internal(err.Error())
	}
	return eventEnt, nil
}

func (e *eventImpl) UpdateEventProgress(
	ctx context.Context,
	request *event_pb.UpdateEventProgressRequest,
) (
	pushNotifyMessage string,
	err error) {
	eventId := request.GetEventId()
	groupId := request.GetGroupId()
	commitTime := request.GetTime()
	activityRecord := request.GetActivityRecord()

	currentEvent, err := e.GetEventWithSubEvents(ctx, eventId)

	var currentSubEvent *ent.SubEvent
	for _, subEvent := range currentEvent.Edges.Subevents {
		if subEvent.EndDate.After(commitTime.AsTime()) && subEvent.StartDate.Before(commitTime.AsTime()) {
			currentSubEvent = subEvent
		}
	}
	if currentSubEvent == nil {
		return "", status.Internal("Cannot find subevent at time")
	}

	icrementValue := int64(0)
	switch currentSubEvent.Rule {
	case int64(event_pb.Rule_RULE_TOTAL_ACTIVITY):
		icrementValue = 1
	case int64(event_pb.Rule_RULE_TOTAL_CALORIES):
		icrementValue = int64(activityRecord.GetCaloriesValue())
	case int64(event_pb.Rule_RULE_TOTAL_DISTANCE):
		icrementValue = int64(activityRecord.GetDistanceValue())
	case int64(event_pb.Rule_RULE_TOTAL_TIME):
		icrementValue = int64(activityRecord.GetTimeSpendValue())
	}

	groupProgress, err := e.entClient.GroupzProgress.Query().Where(
		groupzprogress.HasSubEventWith(
			subevent.IDEQ(currentSubEvent.ID),
		),
		groupzprogress.GroupIDEQ(groupId),
	).Only(ctx)
	if err != nil {
		return "", status.Internal(fmt.Sprintf("Cannot find group progress for this subevent %v", err))
	}

	_, err = e.entClient.GroupzProgress.UpdateOne(groupProgress).SetProgress(groupProgress.Progress + icrementValue).Save(ctx)
	if err != nil {
		return "", status.Internal(fmt.Sprintf("Cannot update group progress %v", err))
	}

	if (groupProgress.Progress + icrementValue) >= currentSubEvent.Goal {
		return fmt.Sprintf(`Your group with groupId "%v" has completed challenge "%v" in event "%v"`, groupId, currentSubEvent.Name, currentEvent.Name), nil
	}

	if err != nil {
		log.Printf("Error UpdateEventProgress: cannot update subevent progress: %v", err)
		return "", status.Internal(err.Error())
	}

	return "", nil
}
