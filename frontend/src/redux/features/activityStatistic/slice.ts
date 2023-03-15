import { createSlice } from '@reduxjs/toolkit'
import { ActivityStatisticData } from '../../../lib/activity/activity_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { getActivityStatisticThunk } from './thunk'

type ActivityStatistiState = {
  activityStatisticList: Array<ActivityStatisticData.AsObject>
} & CommonState

export const initialState: ActivityStatistiState = {
  activityStatisticList: [],
  status: StatusEnum.LOADING,
}

const slice = createSlice({
  name: 'activity-statistic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActivityStatisticThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(
      getActivityStatisticThunk.fulfilled,
      (state, { payload }) => {
        const { response, error } = payload
        if (error) return
        state.status = StatusEnum.SUCCEEDED
        state.activityStatisticList = response?.dataList || []
      }
    )
  },
})

export const selectActivityStatisticList = (state: RootState) =>
  state.activityStatisticList
export const isActivityStatisticListLoading = (state: RootState) =>
  state.activityStatisticList.status === StatusEnum.LOADING

export default slice.reducer
