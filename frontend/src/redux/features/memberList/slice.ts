import { createSlice } from '@reduxjs/toolkit'
import { Member } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { listMembersOfGroupThunk, acceptMemberThunk } from './thunk'

type MemberListState = {
  memberList: Array<Member.AsObject>
  total: number
} & CommonState

export const initialState: MemberListState = {
  memberList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'member-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listMembersOfGroupThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listMembersOfGroupThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.memberList = response?.membersList || []
        state.total = response?.total || 0
        state.status = StatusEnum.SUCCEEDED
      })
      .addCase(acceptMemberThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }

        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isMemberListLoading = (state: RootState) => {
  return state.memberList.status === StatusEnum.LOADING
}
export const selectMemberList = (state: RootState) => state.memberList
export default slice.reducer
