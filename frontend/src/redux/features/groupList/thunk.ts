import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateGroupRequest, UpdateGroupRequest, DeleteGroupRequest, ListGroupRequest } from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const listGroupExploreThunk = createAsyncThunk(
  'group/listGroupExplore',
  async (payload: ListGroupRequest.AsObject) => {
    return await groupClient.listGroup(payload)
  }
)

export const listMoreGroupExploreThunk = createAsyncThunk(
  'group/listMoreGroupExplore',
  async (payload: ListGroupRequest.AsObject) => {
    return await groupClient.listGroup(payload)
  }
)
