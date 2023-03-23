/**
 * @fileoverview gRPC-Web generated client stub for notification
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as notification_pb from './notification_pb';


export class NotificationClient {
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

  methodDescriptorCheckIfExistOrSaveExpoPushToken = new grpcWeb.MethodDescriptor(
    '/notification.Notification/CheckIfExistOrSaveExpoPushToken',
    grpcWeb.MethodType.UNARY,
    notification_pb.ExpoPushTokenRequest,
    google_protobuf_empty_pb.Empty,
    (request: notification_pb.ExpoPushTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  checkIfExistOrSaveExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  checkIfExistOrSaveExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  checkIfExistOrSaveExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/CheckIfExistOrSaveExpoPushToken',
        request,
        metadata || {},
        this.methodDescriptorCheckIfExistOrSaveExpoPushToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/CheckIfExistOrSaveExpoPushToken',
    request,
    metadata || {},
    this.methodDescriptorCheckIfExistOrSaveExpoPushToken);
  }

  methodDescriptorRemoveExpoPushToken = new grpcWeb.MethodDescriptor(
    '/notification.Notification/RemoveExpoPushToken',
    grpcWeb.MethodType.UNARY,
    notification_pb.ExpoPushTokenRequest,
    google_protobuf_empty_pb.Empty,
    (request: notification_pb.ExpoPushTokenRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  removeExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  removeExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeExpoPushToken(
    request: notification_pb.ExpoPushTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/RemoveExpoPushToken',
        request,
        metadata || {},
        this.methodDescriptorRemoveExpoPushToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/RemoveExpoPushToken',
    request,
    metadata || {},
    this.methodDescriptorRemoveExpoPushToken);
  }

  methodDescriptorListNotificationInfo = new grpcWeb.MethodDescriptor(
    '/notification.Notification/ListNotificationInfo',
    grpcWeb.MethodType.UNARY,
    notification_pb.ListNotificationInfoRequest,
    notification_pb.ListNotificationInfoReply,
    (request: notification_pb.ListNotificationInfoRequest) => {
      return request.serializeBinary();
    },
    notification_pb.ListNotificationInfoReply.deserializeBinary
  );

  listNotificationInfo(
    request: notification_pb.ListNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<notification_pb.ListNotificationInfoReply>;

  listNotificationInfo(
    request: notification_pb.ListNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notification_pb.ListNotificationInfoReply) => void): grpcWeb.ClientReadableStream<notification_pb.ListNotificationInfoReply>;

  listNotificationInfo(
    request: notification_pb.ListNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notification_pb.ListNotificationInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/ListNotificationInfo',
        request,
        metadata || {},
        this.methodDescriptorListNotificationInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/ListNotificationInfo',
    request,
    metadata || {},
    this.methodDescriptorListNotificationInfo);
  }

  methodDescriptorDeleteNotificationInfo = new grpcWeb.MethodDescriptor(
    '/notification.Notification/DeleteNotificationInfo',
    grpcWeb.MethodType.UNARY,
    notification_pb.IdRequest,
    notification_pb.IdReply,
    (request: notification_pb.IdRequest) => {
      return request.serializeBinary();
    },
    notification_pb.IdReply.deserializeBinary
  );

  deleteNotificationInfo(
    request: notification_pb.IdRequest,
    metadata: grpcWeb.Metadata | null): Promise<notification_pb.IdReply>;

  deleteNotificationInfo(
    request: notification_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notification_pb.IdReply) => void): grpcWeb.ClientReadableStream<notification_pb.IdReply>;

  deleteNotificationInfo(
    request: notification_pb.IdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notification_pb.IdReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/DeleteNotificationInfo',
        request,
        metadata || {},
        this.methodDescriptorDeleteNotificationInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/DeleteNotificationInfo',
    request,
    metadata || {},
    this.methodDescriptorDeleteNotificationInfo);
  }

  methodDescriptorUpdateNotificationInfo = new grpcWeb.MethodDescriptor(
    '/notification.Notification/UpdateNotificationInfo',
    grpcWeb.MethodType.UNARY,
    notification_pb.UpdateNotificationInfoRequest,
    notification_pb.UpdateNotificationInfoReply,
    (request: notification_pb.UpdateNotificationInfoRequest) => {
      return request.serializeBinary();
    },
    notification_pb.UpdateNotificationInfoReply.deserializeBinary
  );

  updateNotificationInfo(
    request: notification_pb.UpdateNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<notification_pb.UpdateNotificationInfoReply>;

  updateNotificationInfo(
    request: notification_pb.UpdateNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: notification_pb.UpdateNotificationInfoReply) => void): grpcWeb.ClientReadableStream<notification_pb.UpdateNotificationInfoReply>;

  updateNotificationInfo(
    request: notification_pb.UpdateNotificationInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: notification_pb.UpdateNotificationInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/UpdateNotificationInfo',
        request,
        metadata || {},
        this.methodDescriptorUpdateNotificationInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/UpdateNotificationInfo',
    request,
    metadata || {},
    this.methodDescriptorUpdateNotificationInfo);
  }

}

