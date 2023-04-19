import { createAsyncThunk } from '@reduxjs/toolkit'
import { ListUserRankingRequest } from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const listUserRankingThunk = createAsyncThunk(
  'group/listUserRanking',
  async (payload: ListUserRankingRequest.AsObject) => {
    return await groupClient.listUserRanking(payload)
  }
)