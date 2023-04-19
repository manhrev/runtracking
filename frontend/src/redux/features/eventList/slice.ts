import { createSlice } from '@reduxjs/toolkit'
import { EventDetail } from '../../../lib/event/event_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { listEventsThunk, listMoreEventsThunk } from './thunks'

type EventListState = {
  eventList: Array<EventDetail.AsObject>
  total: number
} & CommonState

export const initialState: EventListState = {
  eventList: [],
  total: 0,
  status: StatusEnum.LOADING,
}

const slice = createSlice({
  name: 'event-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listEventsThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listMoreEventsThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listEventsThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.FAILED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      state.eventList = response?.eventsList || []
      state.total = response?.total || 0
    })
    builder.addCase(listMoreEventsThunk.fulfilled, (state, { payload }) => {
      const { error, response } = payload
      if (error) {
        state.status = StatusEnum.FAILED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      state.eventList = state.eventList.concat(response?.eventsList || [])
    })
  },
})

export const selectEventList = (state: RootState) => state.eventList
export const isEventListLoading = (state: RootState) =>
  state.eventList.status === StatusEnum.LOADING

export default slice.reducer
