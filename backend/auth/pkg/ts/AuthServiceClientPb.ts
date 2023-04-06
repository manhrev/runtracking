/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AuthClient {
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

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/auth.Auth/Login',
    grpcWeb.MethodType.UNARY,
    auth_pb.LoginRequest,
    auth_pb.LoginReply,
    (request: auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    auth_pb.LoginReply.deserializeBinary
  );

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.LoginReply>;

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LoginReply) => void): grpcWeb.ClientReadableStream<auth_pb.LoginReply>;

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.LoginReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorSignUp = new grpcWeb.MethodDescriptor(
    '/auth.Auth/SignUp',
    grpcWeb.MethodType.UNARY,
    auth_pb.SignUpRequest,
    auth_pb.SignUpReply,
    (request: auth_pb.SignUpRequest) => {
      return request.serializeBinary();
    },
    auth_pb.SignUpReply.deserializeBinary
  );

  signUp(
    request: auth_pb.SignUpRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.SignUpReply>;

  signUp(
    request: auth_pb.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.SignUpReply) => void): grpcWeb.ClientReadableStream<auth_pb.SignUpReply>;

  signUp(
    request: auth_pb.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.SignUpReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/SignUp',
        request,
        metadata || {},
        this.methodDescriptorSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/SignUp',
    request,
    metadata || {},
    this.methodDescriptorSignUp);
  }

  methodDescriptorLogOut = new grpcWeb.MethodDescriptor(
    '/auth.Auth/LogOut',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  logOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  logOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  logOut(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/LogOut',
        request,
        metadata || {},
        this.methodDescriptorLogOut,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/LogOut',
    request,
    metadata || {},
    this.methodDescriptorLogOut);
  }

  methodDescriptorMe = new grpcWeb.MethodDescriptor(
    '/auth.Auth/Me',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    auth_pb.MeReply,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.MeReply.deserializeBinary
  );

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.MeReply>;

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.MeReply) => void): grpcWeb.ClientReadableStream<auth_pb.MeReply>;

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.MeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Me',
        request,
        metadata || {},
        this.methodDescriptorMe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Me',
    request,
    metadata || {},
    this.methodDescriptorMe);
  }

  methodDescriptorSetHealthRecord = new grpcWeb.MethodDescriptor(
    '/auth.Auth/SetHealthRecord',
    grpcWeb.MethodType.UNARY,
    auth_pb.HealthRecordRequest,
    google_protobuf_empty_pb.Empty,
    (request: auth_pb.HealthRecordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/SetHealthRecord',
        request,
        metadata || {},
        this.methodDescriptorSetHealthRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/SetHealthRecord',
    request,
    metadata || {},
    this.methodDescriptorSetHealthRecord);
  }

  methodDescriptorGetAllUsers = new grpcWeb.MethodDescriptor(
    '/auth.Auth/GetAllUsers',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    auth_pb.GetAllUsersReply,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.GetAllUsersReply.deserializeBinary
  );

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.GetAllUsersReply>;

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.GetAllUsersReply) => void): grpcWeb.ClientReadableStream<auth_pb.GetAllUsersReply>;

  getAllUsers(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.GetAllUsersReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/GetAllUsers',
        request,
        metadata || {},
        this.methodDescriptorGetAllUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/GetAllUsers',
    request,
    metadata || {},
    this.methodDescriptorGetAllUsers);
  }

  methodDescriptorGetUserById = new grpcWeb.MethodDescriptor(
    '/auth.Auth/GetUserById',
    grpcWeb.MethodType.UNARY,
    auth_pb.GetByIdRequest,
    auth_pb.UserInfo,
    (request: auth_pb.GetByIdRequest) => {
      return request.serializeBinary();
    },
    auth_pb.UserInfo.deserializeBinary
  );

  getUserById(
    request: auth_pb.GetByIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.UserInfo>;

  getUserById(
    request: auth_pb.GetByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.UserInfo) => void): grpcWeb.ClientReadableStream<auth_pb.UserInfo>;

  getUserById(
    request: auth_pb.GetByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.UserInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/GetUserById',
        request,
        metadata || {},
        this.methodDescriptorGetUserById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/GetUserById',
    request,
    metadata || {},
    this.methodDescriptorGetUserById);
  }

  methodDescriptorUpdateUserInfo = new grpcWeb.MethodDescriptor(
    '/auth.Auth/UpdateUserInfo',
    grpcWeb.MethodType.UNARY,
    auth_pb.UpdateUserInfoRequest,
    auth_pb.UpdateUserInfoReply,
    (request: auth_pb.UpdateUserInfoRequest) => {
      return request.serializeBinary();
    },
    auth_pb.UpdateUserInfoReply.deserializeBinary
  );

  updateUserInfo(
    request: auth_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.UpdateUserInfoReply>;

  updateUserInfo(
    request: auth_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.UpdateUserInfoReply) => void): grpcWeb.ClientReadableStream<auth_pb.UpdateUserInfoReply>;

  updateUserInfo(
    request: auth_pb.UpdateUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.UpdateUserInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/UpdateUserInfo',
        request,
        metadata || {},
        this.methodDescriptorUpdateUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/UpdateUserInfo',
    request,
    metadata || {},
    this.methodDescriptorUpdateUserInfo);
  }

  methodDescriptorGetUsersPublicInfo = new grpcWeb.MethodDescriptor(
    '/auth.Auth/GetUsersPublicInfo',
    grpcWeb.MethodType.UNARY,
    auth_pb.GetUsersPublicInfoRequest,
    auth_pb.GetUsersPublicInfoReply,
    (request: auth_pb.GetUsersPublicInfoRequest) => {
      return request.serializeBinary();
    },
    auth_pb.GetUsersPublicInfoReply.deserializeBinary
  );

  getUsersPublicInfo(
    request: auth_pb.GetUsersPublicInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.GetUsersPublicInfoReply>;

  getUsersPublicInfo(
    request: auth_pb.GetUsersPublicInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.GetUsersPublicInfoReply) => void): grpcWeb.ClientReadableStream<auth_pb.GetUsersPublicInfoReply>;

  getUsersPublicInfo(
    request: auth_pb.GetUsersPublicInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.GetUsersPublicInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/GetUsersPublicInfo',
        request,
        metadata || {},
        this.methodDescriptorGetUsersPublicInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/GetUsersPublicInfo',
    request,
    metadata || {},
    this.methodDescriptorGetUsersPublicInfo);
  }

}

export class UserClient {
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

  methodDescriptorSetHealthRecord = new grpcWeb.MethodDescriptor(
    '/auth.User/SetHealthRecord',
    grpcWeb.MethodType.UNARY,
    auth_pb.HealthRecordRequest,
    google_protobuf_empty_pb.Empty,
    (request: auth_pb.HealthRecordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setHealthRecord(
    request: auth_pb.HealthRecordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.User/SetHealthRecord',
        request,
        metadata || {},
        this.methodDescriptorSetHealthRecord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.User/SetHealthRecord',
    request,
    metadata || {},
    this.methodDescriptorSetHealthRecord);
  }

  methodDescriptorMe = new grpcWeb.MethodDescriptor(
    '/auth.User/Me',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    auth_pb.MeReply,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.MeReply.deserializeBinary
  );

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.MeReply>;

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.MeReply) => void): grpcWeb.ClientReadableStream<auth_pb.MeReply>;

  me(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.MeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.User/Me',
        request,
        metadata || {},
        this.methodDescriptorMe,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.User/Me',
    request,
    metadata || {},
    this.methodDescriptorMe);
  }

}

