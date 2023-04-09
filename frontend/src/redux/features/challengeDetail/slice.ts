import { createSlice } from '@reduxjs/toolkit'
import { GetChallengeReply } from '../../../lib/group/group_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  getChallengeThunk,
} from './thunk'

type ChallengeDetailState = {
  challengeDetail: GetChallengeReply.AsObject
} & CommonState

export const initialState: ChallengeDetailState = {
  challengeDetail: {} as GetChallengeReply.AsObject,
  status: StatusEnum.LOADING,
}

const slice = createSlice({
  name: 'challenge-detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChallengeThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(getChallengeThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) return

        state.challengeDetail = response || {} as GetChallengeReply.AsObject
        state.status = StatusEnum.SUCCEEDED
      })
  },
})

export const isChallengeDetailLoading = (state: RootState) => {
  return state.challengeDetail.status === StatusEnum.LOADING
}
export const selectChallengeDetail = (state: RootState) => state.challengeDetail
export default slice.reducer
