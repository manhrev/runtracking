import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateGroupRequest, UpdateGroupRequest, DeleteGroupRequest, ListGroupRequest } from '../../../lib/group/group_pb'
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

export const createGroupThunk = createAsyncThunk(
  'group/createGroup',
  async (payload: CreateGroupRequest.AsObject) => {
    return await groupClient.createGroup(payload)
  }
)

export const updateGroupThunk = createAsyncThunk(
  'group/updateGroup',
  async (payload: UpdateGroupRequest.AsObject) => {
    const res = await groupClient.updateGroup(payload)
    return { ...res, updateObj: payload.groupinfo }
  }
)

export const deleteGroupThunk = createAsyncThunk(
  'group/deleteGroup',
  async (payload: DeleteGroupRequest.AsObject) => {
    const res = await groupClient.deleteGroup(payload)
    return { ...res, deleteId: payload.idToDelete }
  }
)