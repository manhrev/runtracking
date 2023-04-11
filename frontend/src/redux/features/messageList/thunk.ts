import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetHistoryChatRequest, SendMessageRequest, DeleteConversationRequest} from '../../../lib/chat/chat_pb'
import { chatClient } from '../../../utils/grpc'

export const getHistoryChatThunk = createAsyncThunk(
  'chat/getHistoryChat',
  async (payload: GetHistoryChatRequest.AsObject) => {
    return await chatClient.getHistoryChat(payload)
  }
)

export const sendMessageThunk = createAsyncThunk(
    'chat/sendMessage',
    async (payload: SendMessageRequest.AsObject) => {
        return await chatClient.sendMessage(payload)
    }
)

export const deleteConversationThunk = createAsyncThunk(
  'chat/deleteConversation',
  async (payload: DeleteConversationRequest.AsObject) => {
      return await chatClient.deleteConversation(payload)
  }
)