import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ListEventsRequest,
  ListGroupProgressInEventRequest,
  ListSubEventsRequest,
  ListGroupsInEventRequest,
} from '../../../lib/event/event_pb'
import { eventClient } from '../../../utils/grpc'

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
