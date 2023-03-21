import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateGroupRequest, UpdateGroupRequest, ListGroupRequest } from '../../../lib/group/group_pb'
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

export const createGroupThunk = createAsyncThunk(
  'group/createGroup',
  async (payload: CreateGroupRequest.AsObject) => {
    return await groupClient.createGroup(payload)
  }
)

export const updateGroupThunk = createAsyncThunk(
  'group/updateGroup',
  async (payload: UpdateGroupRequest.AsObject) => {
    return await groupClient.updateGroup(payload)
  }
)
