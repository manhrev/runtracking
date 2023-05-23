import {
  CreateEventRequest,
  CreateSubEvent,
  CreateEventReply,
  AddSubEventToEventReply,
  AddSubEventToEventRequest,
  ApproveJoinEventReply,
  ApproveJoinEventRequest,
  JoinEventReply,
  JoinEventRequest,
  ListEventsReply,
  ListEventsRequest,
  ListGroupProgressInEventReply,
  ListGroupProgressInEventRequest,
  ListGroupsInEventReply,
  ListGroupsInEventRequest,
  ListSubEventsReply,
  ListSubEventsRequest,
  RemoveSubEventFromEventReply,
  RemoveSubEventFromEventRequest,
  UpdateEventInfoReply,
  UpdateEventInfoRequest,
} from '../../../lib/event/event_pb'

import { GRPCClientConfig } from '../abstract/types'
import gRPCClientAbstract from '../abstract/gRPCClient'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { EventClient } from '../../../lib/event/EventServiceClientPb'

class rpcEventClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = 'EVENT'
    super(EventClient, config)
  }

  async createEvent(param: CreateEventRequest.AsObject) {
    const req = new CreateEventRequest()
    req.setName(param.name)
    req.setDescription(param.description)
    req.setStartAt(
      param.startAt
        ? new Timestamp().setSeconds(param.startAt?.seconds || 0)
        : undefined
    )
    req.setIsGlobal(false)
    req.setOwnerGroupId(param.ownerGroupId)
    req.setPicture(param.picture)

    const subEvents = param.subEventsList.map((subEvent) => {
      const sub = new CreateSubEvent()
      sub.setDescription(subEvent.description)
      sub.setStartAt(
        subEvent.startAt
          ? new Timestamp().setSeconds(subEvent.startAt?.seconds || 0)
          : undefined
      )
      sub.setEndAt(
        subEvent.endAt
          ? new Timestamp().setSeconds(subEvent.endAt?.seconds || 0)
          : undefined
      )
      sub.setName(subEvent.name)
      sub.setPicture(subEvent.picture)
      sub.setGoal(subEvent.goal)
      sub.setRule(subEvent.rule)
      sub.setActivityType(subEvent.activityType)
      return sub
    })
    req.setSubEventsList(subEvents)
    return await this.gRPCClientRequest<CreateEventReply.AsObject>(
      'createEvent',
      req
    )
  }

  async updateEventInfo(param: UpdateEventInfoRequest.AsObject) {
    const req = new UpdateEventInfoRequest()
    req.setDescription(param.description)
    req.setName(param.name)
    req.setPicture(param.picture)
    req.setEventId(param.eventId)

    return await this.gRPCClientRequest<UpdateEventInfoReply.AsObject>(
      'updateEventInfo',
      req
    )
  }

  async joinEvent(param: JoinEventRequest.AsObject) {
    const req = new JoinEventRequest()
    req.setEventId(param.eventId)
    req.setGroupId(param.groupId)

    return await this.gRPCClientRequest<JoinEventReply.AsObject>(
      'joinEvent',
      req
    )
  }

  async approveJoinEvent(param: ApproveJoinEventRequest.AsObject) {
    const req = new ApproveJoinEventRequest()
    req.setEventId(param.eventId)
    req.setGroupId(param.groupId)
    return await this.gRPCClientRequest<ApproveJoinEventReply.AsObject>(
      'approveJoinEvent',
      req
    )
  }

  async addSubEventToEvent(param: AddSubEventToEventRequest.AsObject) {
    const req = new AddSubEventToEventRequest()
    req.setEventId(param.eventId)
    if (param.subEvent) {
      const sub = param.subEvent
      const subEvent = new CreateSubEvent()
      subEvent.setDescription(sub.description)
      subEvent.setStartAt(
        sub.startAt
          ? new Timestamp().setSeconds(sub.startAt?.seconds || 0)
          : undefined
      )
      subEvent.setEndAt(
        sub.endAt
          ? new Timestamp().setSeconds(sub.endAt?.seconds || 0)
          : undefined
      )
      subEvent.setName(sub.name)
      subEvent.setPicture(sub.picture)
      subEvent.setGoal(sub.goal)
      subEvent.setRule(sub.rule)

      req.setSubEvent(subEvent)
    }

    return await this.gRPCClientRequest<AddSubEventToEventReply.AsObject>(
      'addSubEventToEvent',
      req
    )
  }

  async removeSubEventFromEvent(
    param: RemoveSubEventFromEventRequest.AsObject
  ) {
    const req = new RemoveSubEventFromEventRequest()
    req.setEventId(param.eventId)
    req.setSubEventId(param.subEventId)

    return await this.gRPCClientRequest<RemoveSubEventFromEventReply.AsObject>(
      'removeSubEventFromEvent',
      req
    )
  }

  async listEvents(param: ListEventsRequest.AsObject) {
    const req = new ListEventsRequest()
    req.setLimit(param.limit)
    req.setOffset(param.offset)
    req.setVisibility(param.visibility)
    req.setSearch(param.search)
    req.setAscending(param.ascending)
    req.setSortBy(param.sortBy)
    req.setGroupIdsList(param.groupIdsList)
    req.setIdsList(param.idsList)
    req.setYourGroupId(param.yourGroupId)

    return await this.gRPCClientRequest<ListEventsReply.AsObject>(
      'listEvents',
      req
    )
  }

  async listSubEvents(param: ListSubEventsRequest.AsObject) {
    const req = new ListSubEventsRequest()
    req.setEventId(param.eventId)
    return await this.gRPCClientRequest<ListSubEventsReply.AsObject>(
      'listSubEvents',
      req
    )
  }

  async listGroupsInEvent(param: ListGroupsInEventRequest.AsObject) {
    const req = new ListGroupsInEventRequest()
    req.setEventId(param.eventId)
    req.setLimit(param.limit)
    req.setOffset(param.offset)

    return await this.gRPCClientRequest<ListGroupsInEventReply.AsObject>(
      'listGroupsInEvent',
      req
    )
  }

  async listGroupProgressInEvent(
    param: ListGroupProgressInEventRequest.AsObject
  ) {
    const req = new ListGroupProgressInEventRequest()
    req.setEventId(param.eventId)

    return await this.gRPCClientRequest<ListGroupProgressInEventReply.AsObject>(
      'listGroupProgressInEvent',
      req
    )
  }
}

export default rpcEventClient
