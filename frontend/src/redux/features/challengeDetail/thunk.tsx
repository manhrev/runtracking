import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetChallengeRequest } from '../../../lib/group/group_pb'
import { groupClient } from '../../../utils/grpc'

export const getChallengeThunk = createAsyncThunk(
    'group/getChallenge',
    async (payload: GetChallengeRequest.AsObject) => {
        return await groupClient.getChallenge(payload)
    }
)