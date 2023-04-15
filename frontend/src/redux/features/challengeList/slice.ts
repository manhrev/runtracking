import { createAction, createSlice } from '@reduxjs/toolkit'
import { ActivityInfo } from '../../../lib/activity/activity_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  listChallengeThunk,
  createChallengeThunk,
  updateChallengeThunk,
  deleteChallengeThunk,
} from './thunk'

type PlanListState = {
    challengeList: Array<any>
} & CommonState

export const initialState: PlanListState = {
    challengeList: [],
    status: StatusEnum.LOADING,
}

const slice = createSlice({
  name: 'challenge-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listChallengeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listChallengeThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      state.challengeList = response?.challengeinfolistList || []
    })
    builder.addCase(createChallengeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(createChallengeThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      // state.challengeList.push(response?.challengeinfo || {})
    })
    builder.addCase(updateChallengeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(updateChallengeThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      // state.challengeList.push(response?.challengeinfo || {})
    })
    builder.addCase(deleteChallengeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(deleteChallengeThunk.fulfilled, (state, { payload }) => {
      const { response, error, deletedId } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.status = StatusEnum.SUCCEEDED
      
      state.challengeList = state.challengeList.filter((item: any) => {
        return item.id !== deletedId
      })
    })
  },
})

export const getChallengesList = (state: RootState) => state.challengeList
export const isChallengeListLoading = (state: RootState) =>
  state.challengeList.status === StatusEnum.LOADING

export default slice.reducer
