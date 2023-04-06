import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetUsersAchievementRequest } from '../../../lib/activity/activity_pb'
import { activityClient, authClient } from '../../../utils/grpc'

export const getUserPublicInfoThunk = createAsyncThunk(
  'auth/getUserPublicInfo',
  async (userId: number) => {
    return await authClient.getUsersPublicInfo({ userIdsList: [userId] })
  }
)

export const getOtherUserAchievementThunk = createAsyncThunk(
  'auth/getUserAchievement',
  async (userId: number) => {
    return await activityClient.getUserAchievement({ userIdsList: [userId] })
  }
)
