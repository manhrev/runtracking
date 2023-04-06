import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ListChallengeRequest,
  CreateChallengeRequest,
} from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const listChallengeThunk = createAsyncThunk(
  'plan/listChallenge',
  async (param: ListChallengeRequest.AsObject) => {
    return await groupClient.listChallenge(param)
  }
)

export const createChallengeThunk = createAsyncThunk(
  'plan/createChallenge',
  async (param: CreateChallengeRequest.AsObject) => {
    return await groupClient.createChallenge(param)
  }
)