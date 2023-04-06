import { createSlice } from '@reduxjs/toolkit'
import { AchievementDetail } from '../../../lib/activity/activity_pb'
import { UserPublicInfo } from '../../../lib/auth/auth_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { getOtherUserAchievementThunk, getUserPublicInfoThunk } from './thunks'

type OtherUserState = {
  user: UserPublicInfo.AsObject
  achievement: [number, AchievementDetail.AsObject][]
} & CommonState

export const initialState: OtherUserState = {
  status: StatusEnum.IDLE,
  user: {
    displayName: '',
    profilePicture: '',
    userId: 0,
    username: '',
  },
  achievement: [],
}

const slice = createSlice({
  name: 'otherUser',
  initialState,
  reducers: {
    resetOtherUser: (state) => {
      state.status = StatusEnum.IDLE
      state.user = {
        displayName: '',
        profilePicture: '',
        userId: 0,
        username: '',
      }
      state.achievement = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPublicInfoThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(getOtherUserAchievementThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(getUserPublicInfoThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.FAILED
          return
        }
        state.status = StatusEnum.SUCCEEDED
        if (response) {
          const { usersList } = response
          if (usersList.length > 0) {
            state.user = usersList[0]
          }
        }
      })
      .addCase(getOtherUserAchievementThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.FAILED
          return
        }
        const aMap = response?.userAchievementsMap
        if (aMap) {
          const check = aMap.find((a) => a[0] === state.user.userId)
          if (check) {
            state.achievement = check[1].achievementsMap.sort(
              (a, b) => a[0] - b[0]
            )
          }
        }
        state.status = StatusEnum.SUCCEEDED
      })
  },
})
export const { resetOtherUser } = slice.actions
export const selectOtherUserSlice = (state: RootState) => state.otherUser
export const isOtherUserLoading = (state: RootState) =>
  state.otherUser.status === StatusEnum.LOADING
export default slice.reducer
