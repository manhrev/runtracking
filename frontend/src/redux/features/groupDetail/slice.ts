import { createSlice } from '@reduxjs/toolkit'
import { GetGroupReply } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  getGroupThunk
} from './thunk'

type GroupDetailState = {
  groupDetail: GetGroupReply.AsObject
} & CommonState

export const initialState: GroupDetailState = {
  groupDetail: {} as GetGroupReply.AsObject,
  status: StatusEnum.LOADING,
}

const slice = createSlice({
  name: 'group-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroupThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(getGroupThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return

        state.groupDetail = response || {} as GetGroupReply.AsObject
        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isGroupDetailLoading = (state: RootState) => {
  return state.groupDetail.status === StatusEnum.LOADING
}
export const selectGroupDetail = (state: RootState) => state.groupDetail
export default slice.reducer
