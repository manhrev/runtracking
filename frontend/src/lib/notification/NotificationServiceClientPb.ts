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

  methodDescriptorPushNotification = new grpcWeb.MethodDescriptor(
    '/notification.Notification/PushNotification',
    grpcWeb.MethodType.UNARY,
    notification_pb.PushNotiRequest,
    google_protobuf_empty_pb.Empty,
    (request: notification_pb.PushNotiRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  pushNotification(
    request: notification_pb.PushNotiRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  pushNotification(
    request: notification_pb.PushNotiRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  pushNotification(
    request: notification_pb.PushNotiRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/notification.Notification/PushNotification',
        request,
        metadata || {},
        this.methodDescriptorPushNotification,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/notification.Notification/PushNotification',
    request,
    metadata || {},
    this.methodDescriptorPushNotification);
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

}

