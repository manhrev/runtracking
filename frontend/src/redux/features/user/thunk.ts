import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetUsersAchievementRequest } from '../../../lib/activity/activity_pb'
import { LoginRequest, UpdateUserInfoRequest, ListUserInfoRequest } from '../../../lib/auth/auth_pb'
import { activityClient, authClient } from '../../../utils/grpc'

export const getMeThunk = createAsyncThunk('auth/getMe', async () => {
  return await authClient.getMe()
})

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (param: LoginRequest.AsObject) => {
    return await authClient.logIn(param)
  }
)

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  // await notificationClient
  return await authClient.logOut()
})

export const updateUserInfoThunk = createAsyncThunk(
  'auth/updateUserInfo',
  async (param: UpdateUserInfoRequest.AsObject) => {
    return await authClient.updateUserInfo(param)
  }
)

export const getUserAchievementThunk = createAsyncThunk(
  'auth/getUserAchievement',
  async (param: GetUsersAchievementRequest.AsObject) => {
    return await activityClient.getUserAchievement(param)
  }
)

export const listUserInfoThunk = createAsyncThunk(
  'auth/listUserInfo',
  async (param: ListUserInfoRequest.AsObject) => {
    return await authClient.listUserInfo(param)
  }
)

export const listMoreUserInfoThunk = createAsyncThunk(
  'auth/listMoreUserInfo',
  async (param: ListUserInfoRequest.AsObject) => {
    return await authClient.listUserInfo(param)
  }
)

