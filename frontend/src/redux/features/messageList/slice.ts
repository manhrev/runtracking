import { createSlice } from '@reduxjs/toolkit'
import { MessageInfo } from '../../../lib/chat/chat_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { deleteConversationThunk, getHistoryChatThunk, sendMessageThunk } from './thunk'

type MessageListState = {
  messageList: Array<MessageInfo.AsObject>
  total: number
} & CommonState

export const initialState: MessageListState = {
  messageList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'message-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHistoryChatThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      })
      .addCase(getHistoryChatThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.messageList = response?.messageinfolistList || []
        state.total = response?.total || 0
        state.status = StatusEnum.SUCCEEDED
      })
      // .addCase(acceptMemberThunk.fulfilled, (state, { payload }) => {
      //   const { response, error } = payload
      //   if (error) {
      //     state.status = StatusEnum.SUCCEEDED
      //     return
      //   }

      //   state.status = StatusEnum.SUCCEEDED
      // })
  },
})

export const isMessageListLoading = (state: RootState) => {
  return state.messageList.status === StatusEnum.LOADING
}
export const selectMessageList = (state: RootState) => state.messageList


export default slice.reducer
