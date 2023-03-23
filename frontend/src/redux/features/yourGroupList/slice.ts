import { createSlice } from '@reduxjs/toolkit'
import { GroupInfo } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { listMoreYourGroupThunk, listYourGroupThunk } from './thunk'

type YourGroupListState = {
  yourGroupList: Array<GroupInfo.AsObject>
  total: number
} & CommonState

export const initialState: YourGroupListState = {
  yourGroupList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'group-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listYourGroupThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listMoreYourGroupThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listYourGroupThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return
        state.yourGroupList = response?.groupListList || []
        state.total = response?.total || 0
        state.status = StatusEnum.SUCCEEDED
      })
      .addCase(listMoreYourGroupThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return
        state.yourGroupList = state.yourGroupList.concat(
          response?.groupListList || []
        )
        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isYourGroupListLoading = (state: RootState) => {
  return state.yourGroupList.status === StatusEnum.LOADING
}
export const selectYourGroupList = (state: RootState) => state.yourGroupList
export default slice.reducer
