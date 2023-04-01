/**
 * @fileoverview gRPC-Web generated client stub for activity
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as activity_pb from './activity_pb';


export class ActivityClient {
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

  methodDescriptorCreateActivityInfo = new grpcWeb.MethodDescriptor(
    '/activity.Activity/CreateActivityInfo',
    grpcWeb.MethodType.UNARY,
    activity_pb.CreateActivityInfoRequest,
    activity_pb.CreateActivityInfoReply,
    (request: activity_pb.CreateActivityInfoRequest) => {
      return request.serializeBinary();
    },
    activity_pb.CreateActivityInfoReply.deserializeBinary
  );

  createActivityInfo(
    request: activity_pb.CreateActivityInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.CreateActivityInfoReply>;

  createActivityInfo(
    request: activity_pb.CreateActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.CreateActivityInfoReply) => void): grpcWeb.ClientReadableStream<activity_pb.CreateActivityInfoReply>;

  createActivityInfo(
    request: activity_pb.CreateActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.CreateActivityInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/CreateActivityInfo',
        request,
        metadata || {},
        this.methodDescriptorCreateActivityInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/CreateActivityInfo',
    request,
    metadata || {},
    this.methodDescriptorCreateActivityInfo);
  }

  methodDescriptorListActivityInfo = new grpcWeb.MethodDescriptor(
    '/activity.Activity/ListActivityInfo',
    grpcWeb.MethodType.UNARY,
    activity_pb.ListActivityInfoRequest,
    activity_pb.ListActivityInfoReply,
    (request: activity_pb.ListActivityInfoRequest) => {
      return request.serializeBinary();
    },
    activity_pb.ListActivityInfoReply.deserializeBinary
  );

  listActivityInfo(
    request: activity_pb.ListActivityInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.ListActivityInfoReply>;

  listActivityInfo(
    request: activity_pb.ListActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.ListActivityInfoReply) => void): grpcWeb.ClientReadableStream<activity_pb.ListActivityInfoReply>;

  listActivityInfo(
    request: activity_pb.ListActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.ListActivityInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/ListActivityInfo',
        request,
        metadata || {},
        this.methodDescriptorListActivityInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/ListActivityInfo',
    request,
    metadata || {},
    this.methodDescriptorListActivityInfo);
  }

  methodDescriptorDeleteActivityInfo = new grpcWeb.MethodDescriptor(
    '/activity.Activity/DeleteActivityInfo',
    grpcWeb.MethodType.UNARY,
    activity_pb.DeleteActivityInfoRequest,
    activity_pb.DeleteActivityInfoReply,
    (request: activity_pb.DeleteActivityInfoRequest) => {
      return request.serializeBinary();
    },
    activity_pb.DeleteActivityInfoReply.deserializeBinary
  );

  deleteActivityInfo(
    request: activity_pb.DeleteActivityInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.DeleteActivityInfoReply>;

  deleteActivityInfo(
    request: activity_pb.DeleteActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.DeleteActivityInfoReply) => void): grpcWeb.ClientReadableStream<activity_pb.DeleteActivityInfoReply>;

  deleteActivityInfo(
    request: activity_pb.DeleteActivityInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.DeleteActivityInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/DeleteActivityInfo',
        request,
        metadata || {},
        this.methodDescriptorDeleteActivityInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/DeleteActivityInfo',
    request,
    metadata || {},
    this.methodDescriptorDeleteActivityInfo);
  }

  methodDescriptorGetActivityStatistic = new grpcWeb.MethodDescriptor(
    '/activity.Activity/GetActivityStatistic',
    grpcWeb.MethodType.UNARY,
    activity_pb.GetActivityStatisticRequest,
    activity_pb.GetActivityStatisticReply,
    (request: activity_pb.GetActivityStatisticRequest) => {
      return request.serializeBinary();
    },
    activity_pb.GetActivityStatisticReply.deserializeBinary
  );

  getActivityStatistic(
    request: activity_pb.GetActivityStatisticRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.GetActivityStatisticReply>;

  getActivityStatistic(
    request: activity_pb.GetActivityStatisticRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.GetActivityStatisticReply) => void): grpcWeb.ClientReadableStream<activity_pb.GetActivityStatisticReply>;

  getActivityStatistic(
    request: activity_pb.GetActivityStatisticRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.GetActivityStatisticReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/GetActivityStatistic',
        request,
        metadata || {},
        this.methodDescriptorGetActivityStatistic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/GetActivityStatistic',
    request,
    metadata || {},
    this.methodDescriptorGetActivityStatistic);
  }

  methodDescriptorCommitActivity = new grpcWeb.MethodDescriptor(
    '/activity.Activity/CommitActivity',
    grpcWeb.MethodType.UNARY,
    activity_pb.CommitActivityRequest,
    activity_pb.CommitActivityReply,
    (request: activity_pb.CommitActivityRequest) => {
      return request.serializeBinary();
    },
    activity_pb.CommitActivityReply.deserializeBinary
  );

  commitActivity(
    request: activity_pb.CommitActivityRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.CommitActivityReply>;

  commitActivity(
    request: activity_pb.CommitActivityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.CommitActivityReply) => void): grpcWeb.ClientReadableStream<activity_pb.CommitActivityReply>;

  commitActivity(
    request: activity_pb.CommitActivityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.CommitActivityReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/CommitActivity',
        request,
        metadata || {},
        this.methodDescriptorCommitActivity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/CommitActivity',
    request,
    metadata || {},
    this.methodDescriptorCommitActivity);
  }

  methodDescriptorGetUsersAchievement = new grpcWeb.MethodDescriptor(
    '/activity.Activity/GetUsersAchievement',
    grpcWeb.MethodType.UNARY,
    activity_pb.GetUsersAchievementRequest,
    activity_pb.GetUsersAchievementReply,
    (request: activity_pb.GetUsersAchievementRequest) => {
      return request.serializeBinary();
    },
    activity_pb.GetUsersAchievementReply.deserializeBinary
  );

  getUsersAchievement(
    request: activity_pb.GetUsersAchievementRequest,
    metadata: grpcWeb.Metadata | null): Promise<activity_pb.GetUsersAchievementReply>;

  getUsersAchievement(
    request: activity_pb.GetUsersAchievementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.GetUsersAchievementReply) => void): grpcWeb.ClientReadableStream<activity_pb.GetUsersAchievementReply>;

  getUsersAchievement(
    request: activity_pb.GetUsersAchievementRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.GetUsersAchievementReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.Activity/GetUsersAchievement',
        request,
        metadata || {},
        this.methodDescriptorGetUsersAchievement,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.Activity/GetUsersAchievement',
    request,
    metadata || {},
    this.methodDescriptorGetUsersAchievement);
  }

}

