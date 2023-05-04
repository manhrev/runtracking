import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ListEventsRequest,
  ListGroupProgressInEventRequest,
  ListSubEventsRequest,
  ListGroupsInEventRequest,
  JoinEventRequest,
} from '../../../lib/event/event_pb'
import { ListGroupRequest } from '../../../lib/group/group_pb'
import { eventClient, groupClient } from '../../../utils/grpc'

export const listEventsThunk = createAsyncThunk(
  'event/listEvent',
  async (payload: ListEventsRequest.AsObject) => {
    return await eventClient.listEvents(payload)
  }
)

export const listMoreEventsThunk = createAsyncThunk(
  'event/listMoreEvent',
  async (param: ListEventsRequest.AsObject) => {
    return await eventClient.listEvents(param)
  }
)

export const listSubEventsThunk = createAsyncThunk(
  'event/listSubEvent',
  async (payload: ListSubEventsRequest.AsObject) => {
    return await eventClient.listSubEvents(payload)
  }
)

export const listGroupProgressInEventThunk = createAsyncThunk(
  'event/listGroupProgressInEvent',
  async (payload: ListGroupProgressInEventRequest.AsObject) => {
    return await eventClient.listGroupProgressInEvent(payload)
  }
)

export const listGroupInEventThunk = createAsyncThunk(
  'event/listGroupInEvent',
  async (payload: ListGroupsInEventRequest.AsObject) => {
    return await eventClient.listGroupsInEvent(payload)
  }
)

export const joinEventThunk = createAsyncThunk(
  'event/joinEvent',
  async (payload: JoinEventRequest.AsObject) => {
    return await eventClient.joinEvent(payload)
  }
)

export const getGroupInfoThunk = createAsyncThunk(
  'event/getGroupInfo',
  async (payload: ListGroupRequest.AsObject) => {
    return await groupClient.listGroup(payload)
  }
)
