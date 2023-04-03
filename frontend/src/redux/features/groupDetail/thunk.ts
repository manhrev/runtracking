import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetGroupRequest } from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const getGroupThunk = createAsyncThunk(
    'group/getGroup',
    async (payload: GetGroupRequest.AsObject) => {
        return await groupClient.getGroup(payload)
    }
)