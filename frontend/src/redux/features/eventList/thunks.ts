import { createAsyncThunk } from '@reduxjs/toolkit'
import { ListEventsRequest } from '../../../lib/event/event_pb'
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
