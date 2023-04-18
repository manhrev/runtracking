import { createSlice } from '@reduxjs/toolkit'
import { UserRanking } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { listUserRankingThunk } from './thunk'

type UserRankingListState = {
  userRankingList: Array<UserRanking.AsObject>
  total: number
} & CommonState

export const initialState: UserRankingListState = {
  userRankingList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'user-ranking-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listUserRankingThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(listUserRankingThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.userRankingList = response?.userrankinglistList || []
        state.total = response?.total || 0
        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isUserRankingListLoading = (state: RootState) => {
  return state.userRankingList.status === StatusEnum.LOADING
}
export const selectUserRankingList = (state: RootState) => state.userRankingList
export default slice.reducer
