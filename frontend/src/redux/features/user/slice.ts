import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import {
  AchievementDetail,
  UserAchievement,
} from '../../../lib/activity/activity_pb'
import {
  UserInfo,
} from '../../../lib/auth/auth_pb'
import { KEY_ACCESS_TOKEN } from '../../../utils/grpc'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  getMeThunk,
  getUserAchievementThunk,
  loginThunk,
  logoutThunk,
  updateUserInfoThunk,
  listUserInfoThunk,
  listMoreUserInfoThunk,
} from './thunk'
import { GOOGLE_ACCESS_TOKEN } from '../../../utils/rest/abstract/restClient'

type UserState = {
  isSignedIn: boolean
  username: string
  displayName: string
  email: string
  phoneNumber: string
  height: number
  weight: number
  age: number
  userId: number
  profiePicture: string
  achievement: [number, AchievementDetail.AsObject][]
  userSearchList: UserInfo.AsObject[]
  userSearchListTotal: number
} & CommonState

export const initialState: UserState = {
  isSignedIn: false,
  status: StatusEnum.LOADING,
  email: '',
  height: 0,
  weight: 0,
  username: '',
  displayName: '',
  phoneNumber: '',
  profiePicture: '',
  age: 0,
  userId: 0,
  achievement: [],
  userSearchList: [],
  userSearchListTotal: 0,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(getUserAchievementThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(getMeThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        state.isSignedIn = false
        return
      }
      state.weight = response?.user?.weight || 0
      state.height = response?.user?.height || 0
      state.displayName = response?.user?.displayName || ''
      state.email = response?.user?.email || ''
      state.phoneNumber = response?.user?.phoneNumber || ''
      state.username = response?.user?.username || ''
      state.age = response?.user?.age || 0
      state.userId = response?.user?.userId || 0
      state.profiePicture = response?.user?.profilePicture || ''

      state.status = StatusEnum.SUCCEEDED
      state.isSignedIn = true
    })
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.isSignedIn = false
        return
      }
      const token = response?.accessToken || ''
      AsyncStorage.setItem(KEY_ACCESS_TOKEN, token)
      AsyncStorage.setItem('onboard', 'true')

      state.isSignedIn = true
    })
    builder.addCase(logoutThunk.fulfilled, (state, { payload }) => {
      state.isSignedIn = false
      AsyncStorage.removeItem(KEY_ACCESS_TOKEN)
      AsyncStorage.removeItem(GOOGLE_ACCESS_TOKEN)
    })
    builder.addCase(
      updateUserInfoThunk.fulfilled,
      (state, { payload, meta }) => {
        const { response, error } = payload
        if (error) {
          return
        }
        const updateData = meta.arg.userInfo

        state.weight = updateData?.weight || 0
        state.height = updateData?.height || 0
        state.displayName = updateData?.displayName || ''
        state.email = updateData?.email || ''
        state.phoneNumber = updateData?.phoneNumber || ''
        state.username = updateData?.username || ''
        state.age = updateData?.age || 0
        state.userId = updateData?.userId || 0
      }
    )
    builder.addCase(getUserAchievementThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      const aMap = response?.userAchievementsMap
      if (aMap) {
        const check = aMap.find((a) => a[0] === state.userId)
        if (check) {
          state.achievement = check[1].achievementsMap.sort(
            (a, b) => a[0] - b[0]
          )
        }
      }
      state.status = StatusEnum.SUCCEEDED
    })
    builder.addCase(listUserInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listUserInfoThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.userSearchList = response?.usersList || []
      state.userSearchListTotal = response?.total || 0
      state.status = StatusEnum.SUCCEEDED
    })
    builder.addCase(listMoreUserInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listMoreUserInfoThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        return
      }
      state.userSearchList = state.userSearchList.concat(response?.usersList || [])
      state.userSearchListTotal += response?.total || 0
      state.status = StatusEnum.SUCCEEDED
    })
  },
})

export const selectUserSlice = (state: RootState) => state.user
export const isUserSliceLoading = (state: RootState) =>
  state.user.status === StatusEnum.LOADING

export default slice.reducer
