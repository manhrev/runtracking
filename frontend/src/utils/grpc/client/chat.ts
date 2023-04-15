import {
   DeleteConversationReply, 
   DeleteConversationRequest,
   GetHistoryChatReply,
   GetHistoryChatRequest,
   MessageInfo,
   SendMessageReply, 
   SendMessageRequest
  } from '../../../lib/chat/chat_pb'
  
  import { GRPCClientConfig } from '../abstract/types'
  import gRPCClientAbstract from '../abstract/gRPCClient'
  import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
  import { ChatClient } from '../../../lib/chat/ChatServiceClientPb'
  
  class rpcChatClient extends gRPCClientAbstract {
    constructor(config: GRPCClientConfig) {
      config.serviceName = 'CHAT'
      super(ChatClient, config)
    }
  
    async getHistoryChat(param: GetHistoryChatRequest.AsObject) {
      const req = new GetHistoryChatRequest()
      req.setToUserId(param.toUserId)
      req.setLimit(param.limit)
      req.setOffset(param.offset)
      req.setFrom(param.from ? new Timestamp().setSeconds(param.from?.seconds || 0) : undefined)
      req.setTo(param.to ? new Timestamp().setSeconds(param.to?.seconds || 0) : undefined)
  
      return await this.gRPCClientRequest<GetHistoryChatReply.AsObject>(
        'getHistoryChat',
        req
      )
    }

    async sendMessage(param: SendMessageRequest.AsObject) {
        const req = new SendMessageRequest()
        req.setToUserId(param.toUserId)
        req.setMessage(param.message)
        req.setTime(new Timestamp().setSeconds(param.time?.seconds || 0)) 
    
        return await this.gRPCClientRequest<SendMessageReply.AsObject>(
          'sendMessage',
          req
        )
      }

      async deleteConversation(param: DeleteConversationRequest.AsObject) {
        const req = new DeleteConversationRequest()
        req.setToUserId(param.toUserId)
        return await this.gRPCClientRequest<DeleteConversationReply.AsObject>(
          'deleteConversation',
          req
        )
      }
  }
  
  export default rpcChatClient
  