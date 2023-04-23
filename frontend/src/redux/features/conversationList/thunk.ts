import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  DeleteConversationRequest,
 ListConversationRequest
} from '../../../lib/chat/chat_pb'
import { chatClient} from '../../../utils/grpc'

export const listConversationThunk = createAsyncThunk(
  'chat/listConversation',
  async (param: ListConversationRequest.AsObject) => {
    return await chatClient.listConversation(param)
  }
)

export const listMoreConversationThunk = createAsyncThunk(
  'chat/listMoreConversation',
  async (param: ListConversationRequest.AsObject) => {
    return await chatClient.listConversation(param)
  }
)

export const deleteConversationThunk = createAsyncThunk(
  'chat/deleteConversation',
  async (param: DeleteConversationRequest.AsObject) => {
    return await chatClient.deleteConversation(param)
  }
)

