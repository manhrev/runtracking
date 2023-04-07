import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ListChallengeRequest,
  CreateChallengeRequest,
  DeleteChallengeRequest,
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

export const deleteChallengeThunk = createAsyncThunk(
  'plan/deleteChallenge',
  async (param: DeleteChallengeRequest.AsObject) => {
    const res = await groupClient.deleteChallenge(param)
    return { ...res, deletedId: param.id }
  }
)

