import { createSlice } from '@reduxjs/toolkit'
import { CommonState } from '../../common/types'
import { StatusEnum } from '../../constant'
import { RootState } from '../../reducers'
import {
  ConversationInfo,
} from '../../../lib/chat/chat_pb'
import {
deleteConversationThunk,
listConversationThunk,
listMoreConversationThunk
} from './thunk'

type ConversationState = {
  conversationList: Array<ConversationInfo.AsObject>
  total: number
} & CommonState

export const initialState: ConversationState = {
  conversationList: [],
  status: StatusEnum.LOADING,
  total: 0,
}

const slice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(listConversationThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(listMoreConversationThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })

    builder.addCase(
      listConversationThunk.fulfilled,
      (state, { payload }) => {
        state.status = StatusEnum.LOADING
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.status = StatusEnum.SUCCEEDED
        state.conversationList = response?.conversationsList || []
        state.total = response?.total || 0
      }
    )

    builder.addCase(
      listMoreConversationThunk.fulfilled,
      (state, { payload }) => {
        state.status = StatusEnum.LOADING
        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.status = StatusEnum.SUCCEEDED
        state.conversationList = state.conversationList.concat(
          response?.conversationsList || []
        )
      }
    )

    builder.addCase(deleteConversationThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })

    builder.addCase(
      deleteConversationThunk.fulfilled,
      (state, { payload }) => {
        state.status = StatusEnum.LOADING

        const { response, error } = payload
        if (error) {
          state.status = StatusEnum.SUCCEEDED
          return
        }
        state.status = StatusEnum.SUCCEEDED

        state.conversationList = state.conversationList.filter(
          (conversation) => conversation.partner?.userId != response?.id
        )
      }
    )
  },
})

export const selectConversationList = (state: RootState) =>
  state.conversationList
export const isConversationListLoading = (state: RootState) =>
  state.conversationList.status === StatusEnum.LOADING

export default slice.reducer
