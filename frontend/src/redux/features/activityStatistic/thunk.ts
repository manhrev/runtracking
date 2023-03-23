import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetActivityStatisticRequest } from '../../../lib/activity/activity_pb'
import { activityClient } from '../../../utils/grpc'

export const getActivityStatisticThunk = createAsyncThunk(
  'activity/getActivityStatistic',
  async (payload: GetActivityStatisticRequest.AsObject) => {
    return await activityClient.getActivityStatistic(payload)
  }
)
