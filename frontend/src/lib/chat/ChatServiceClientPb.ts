/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetHistoryChat = new grpcWeb.MethodDescriptor(
    '/chat.Chat/GetHistoryChat',
    grpcWeb.MethodType.UNARY,
    chat_pb.GetHistoryChatRequest,
    chat_pb.GetHistoryChatReply,
    (request: chat_pb.GetHistoryChatRequest) => {
      return request.serializeBinary();
    },
    chat_pb.GetHistoryChatReply.deserializeBinary
  );

  getHistoryChat(
    request: chat_pb.GetHistoryChatRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat_pb.GetHistoryChatReply>;

  getHistoryChat(
    request: chat_pb.GetHistoryChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.GetHistoryChatReply) => void): grpcWeb.ClientReadableStream<chat_pb.GetHistoryChatReply>;

  getHistoryChat(
    request: chat_pb.GetHistoryChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chat_pb.GetHistoryChatReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/GetHistoryChat',
        request,
        metadata || {},
        this.methodDescriptorGetHistoryChat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/GetHistoryChat',
    request,
    metadata || {},
    this.methodDescriptorGetHistoryChat);
  }

  methodDescriptorSendMessage = new grpcWeb.MethodDescriptor(
    '/chat.Chat/SendMessage',
    grpcWeb.MethodType.UNARY,
    chat_pb.SendMessageRequest,
    chat_pb.SendMessageReply,
    (request: chat_pb.SendMessageRequest) => {
      return request.serializeBinary();
    },
    chat_pb.SendMessageReply.deserializeBinary
  );

  sendMessage(
    request: chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat_pb.SendMessageReply>;

  sendMessage(
    request: chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.SendMessageReply) => void): grpcWeb.ClientReadableStream<chat_pb.SendMessageReply>;

  sendMessage(
    request: chat_pb.SendMessageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chat_pb.SendMessageReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/SendMessage',
        request,
        metadata || {},
        this.methodDescriptorSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/SendMessage',
    request,
    metadata || {},
    this.methodDescriptorSendMessage);
  }

  methodDescriptorDeleteConversation = new grpcWeb.MethodDescriptor(
    '/chat.Chat/DeleteConversation',
    grpcWeb.MethodType.UNARY,
    chat_pb.DeleteConversationRequest,
    chat_pb.DeleteConversationReply,
    (request: chat_pb.DeleteConversationRequest) => {
      return request.serializeBinary();
    },
    chat_pb.DeleteConversationReply.deserializeBinary
  );

  deleteConversation(
    request: chat_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat_pb.DeleteConversationReply>;

  deleteConversation(
    request: chat_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chat_pb.DeleteConversationReply) => void): grpcWeb.ClientReadableStream<chat_pb.DeleteConversationReply>;

  deleteConversation(
    request: chat_pb.DeleteConversationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chat_pb.DeleteConversationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/DeleteConversation',
        request,
        metadata || {},
        this.methodDescriptorDeleteConversation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/DeleteConversation',
    request,
    metadata || {},
    this.methodDescriptorDeleteConversation);
  }

}

