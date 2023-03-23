import { createAsyncThunk } from '@reduxjs/toolkit'
import { ListGroupRequest } from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const listYourGroupThunk = createAsyncThunk(
  'group/listYourGroupExplore',
  async (payload: ListGroupRequest.AsObject) => {
    return await groupClient.listGroup(payload)
  }
)

export const listMoreYourGroupThunk = createAsyncThunk(
  'group/listMoreYourGroupExplore',
  async (payload: ListGroupRequest.AsObject) => {
    return await groupClient.listGroup(payload)
  }
)
