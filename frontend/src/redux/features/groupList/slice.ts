import { createSlice } from '@reduxjs/toolkit'
import { GroupInfo } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  createGroupThunk,
  updateGroupThunk,
  deleteGroupThunk,
  listGroupExploreThunk,
  listMoreGroupExploreThunk,
} from './thunk'

type GroupListState = {
  groupList: Array<GroupInfo.AsObject>
  total: number
} & CommonState

export const initialState: GroupListState = {
  groupList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'group-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listGroupExploreThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listMoreGroupExploreThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listGroupExploreThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return
        state.groupList = response?.groupListList || []
        state.total = response?.total || 0
        state.status = StatusEnum.SUCCEEDED
      })
      .addCase(listMoreGroupExploreThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return
        state.groupList = state.groupList.concat(response?.groupListList || [])
        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isGroupListLoading = (state: RootState) => {
  return state.groupList.status === StatusEnum.LOADING
}
export const selectGroupList = (state: RootState) => state.groupList
export default slice.reducer
