import { createAsyncThunk } from '@reduxjs/toolkit'
import { ListMembersOfGroupRequest, AcceptMemberRequest} from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const listMembersOfGroupThunk = createAsyncThunk(
  'group/listMembersOfGroup',
  async (payload: ListMembersOfGroupRequest.AsObject) => {
    return await groupClient.listMembersOfGroup(payload)
  }
)

export const acceptMemberThunk = createAsyncThunk(
    'group/AcceptMember',
    async (payload: AcceptMemberRequest.AsObject) => {
        return await groupClient.acceptMember(payload)
    }
)