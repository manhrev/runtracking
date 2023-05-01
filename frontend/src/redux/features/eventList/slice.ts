import { createSlice } from '@reduxjs/toolkit'
import {
  EventDetail,
  GroupInEvent,
  SubEvent,
  SubEventProgress,
} from '../../../lib/event/event_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  listEventsThunk,
  listGroupInEventThunk,
  listGroupProgressInEventThunk,
  listMoreEventsThunk,
  listSubEventsThunk,
} from './thunks'

type EventListState = {
  eventList: Array<EventDetail.AsObject>
  subEventList: Array<SubEvent.AsObject>
  groupList: Array<GroupInEvent.AsObject>
  subEventProgressList: Array<SubEventProgress.AsObject>
  subEventStatus: StatusEnum
  subEventProgressStatus: StatusEnum
  groupListStatus: StatusEnum
  total: number
} & CommonState

export const initialState: EventListState = {
  eventList: [],
  subEventList: [],
  subEventProgressList: [],
  groupList: [],
  total: 0,
  status: StatusEnum.LOADING,
  subEventStatus: StatusEnum.LOADING,
  subEventProgressStatus: StatusEnum.LOADING,
  groupListStatus: StatusEnum.LOADING,
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
    builder.addCase(listSubEventsThunk.pending, (state) => {
      state.subEventStatus = StatusEnum.LOADING
    })
    builder.addCase(listGroupProgressInEventThunk.pending, (state) => {
      state.subEventProgressStatus = StatusEnum.LOADING
    })
    builder.addCase(listGroupInEventThunk.pending, (state) => {
      state.groupListStatus = StatusEnum.LOADING
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
    builder.addCase(listSubEventsThunk.fulfilled, (state, { payload }) => {
      const { error, response } = payload
      if (error) {
        state.subEventStatus = StatusEnum.FAILED
        return
      }
      state.subEventStatus = StatusEnum.SUCCEEDED
      state.subEventList =
        response?.subEventsList.sort((a, b) => {
          const ast = a.startAt?.seconds || 0
          const bst = b.startAt?.seconds || 0
          return ast - bst
        }) || []
    })
    builder.addCase(
      listGroupProgressInEventThunk.fulfilled,
      (state, { payload }) => {
        const { error, response } = payload
        if (error) {
          state.subEventProgressStatus = StatusEnum.FAILED
          return
        }
        state.subEventProgressStatus = StatusEnum.SUCCEEDED
        state.subEventProgressList = response?.subEventProgressList || []
      }
    )
    builder.addCase(listGroupInEventThunk.fulfilled, (state, { payload }) => {
      const { error, response } = payload
      if (error) {
        state.groupListStatus = StatusEnum.FAILED
        return
      }
      state.groupListStatus = StatusEnum.SUCCEEDED
      state.groupList = response?.groupsList || []
    })
  },
})

export const selectEventList = (state: RootState) => state.eventList
export const isEventListLoading = (state: RootState) =>
  state.eventList.status === StatusEnum.LOADING
export const isAllEventListLoading = (state: RootState) => {
  return (
    state.eventList.status === StatusEnum.LOADING &&
    state.eventList.subEventStatus === StatusEnum.LOADING &&
    state.eventList.subEventProgressStatus === StatusEnum.LOADING
  )
}
export const isGroupInEventLoading = (state: RootState) =>
  state.eventList.groupListStatus === StatusEnum.LOADING

export default slice.reducer