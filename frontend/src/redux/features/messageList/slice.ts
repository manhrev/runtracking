import { createSlice } from '@reduxjs/toolkit'
import { MessageInfo } from '../../../lib/chat/chat_pb'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import { deleteConversationThunk, getUpToDateHistoryChatThunk, getHistoryChatThunk, getMoreHistoryChatThunk, sendMessageThunk } from './thunk'

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
      }).addCase(getMoreHistoryChatThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      }).addCase(getMoreHistoryChatThunk.fulfilled, (state, {payload}) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        // if(response){
        //   state.
        // }
        // if(!state.messageList.includes()
        state.messageList = state.messageList.concat(response?.messageinfolistList || [])
        state.status = StatusEnum.SUCCEEDED
      }).addCase(getUpToDateHistoryChatThunk.pending, (state) => {
        state.status = StatusEnum.LOADING
      }).addCase(getUpToDateHistoryChatThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        const prevFirstIndex = state.messageList.at(0)
        const upToDateMessageList : MessageInfo.AsObject[] = []
        if(response){
          const messageInfoList = response?.messageinfolistList
        for(let i = 0; i < messageInfoList.length || 0; i++){
          if(messageInfoList[i].id == prevFirstIndex?.id) break;
          upToDateMessageList.push(messageInfoList[i])
        }
      }
        state.messageList = upToDateMessageList.concat(state.messageList)

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
