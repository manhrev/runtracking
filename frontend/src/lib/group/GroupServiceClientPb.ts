/**
 * @fileoverview gRPC-Web generated client stub for group
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as group_pb from './group_pb';


export class GroupClient {
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

  methodDescriptorCreateGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/CreateGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.CreateGroupRequest,
    group_pb.CreateGroupReply,
    (request: group_pb.CreateGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.CreateGroupReply.deserializeBinary
  );

  createGroup(
    request: group_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.CreateGroupReply>;

  createGroup(
    request: group_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.CreateGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.CreateGroupReply>;

  createGroup(
    request: group_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.CreateGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/CreateGroup',
        request,
        metadata || {},
        this.methodDescriptorCreateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/CreateGroup',
    request,
    metadata || {},
    this.methodDescriptorCreateGroup);
  }

  methodDescriptorListGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/ListGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.ListGroupRequest,
    group_pb.ListGroupReply,
    (request: group_pb.ListGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListGroupReply.deserializeBinary
  );

  listGroup(
    request: group_pb.ListGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListGroupReply>;

  listGroup(
    request: group_pb.ListGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.ListGroupReply>;

  listGroup(
    request: group_pb.ListGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListGroup',
        request,
        metadata || {},
        this.methodDescriptorListGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListGroup',
    request,
    metadata || {},
    this.methodDescriptorListGroup);
  }

  methodDescriptorGetGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/GetGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.GetGroupRequest,
    group_pb.GetGroupReply,
    (request: group_pb.GetGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.GetGroupReply.deserializeBinary
  );

  getGroup(
    request: group_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.GetGroupReply>;

  getGroup(
    request: group_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.GetGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.GetGroupReply>;

  getGroup(
    request: group_pb.GetGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.GetGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/GetGroup',
        request,
        metadata || {},
        this.methodDescriptorGetGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/GetGroup',
    request,
    metadata || {},
    this.methodDescriptorGetGroup);
  }

  methodDescriptorUpdateGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/UpdateGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.UpdateGroupRequest,
    group_pb.UpdateGroupReply,
    (request: group_pb.UpdateGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.UpdateGroupReply.deserializeBinary
  );

  updateGroup(
    request: group_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.UpdateGroupReply>;

  updateGroup(
    request: group_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.UpdateGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.UpdateGroupReply>;

  updateGroup(
    request: group_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.UpdateGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/UpdateGroup',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/UpdateGroup',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroup);
  }

  methodDescriptorDeleteGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/DeleteGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.DeleteGroupRequest,
    group_pb.DeleteGroupReply,
    (request: group_pb.DeleteGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.DeleteGroupReply.deserializeBinary
  );

  deleteGroup(
    request: group_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.DeleteGroupReply>;

  deleteGroup(
    request: group_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.DeleteGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.DeleteGroupReply>;

  deleteGroup(
    request: group_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.DeleteGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/DeleteGroup',
        request,
        metadata || {},
        this.methodDescriptorDeleteGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/DeleteGroup',
    request,
    metadata || {},
    this.methodDescriptorDeleteGroup);
  }

  methodDescriptorListMembersOfGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/ListMembersOfGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.ListMembersOfGroupRequest,
    group_pb.ListMembersOfGroupReply,
    (request: group_pb.ListMembersOfGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListMembersOfGroupReply.deserializeBinary
  );

  listMembersOfGroup(
    request: group_pb.ListMembersOfGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListMembersOfGroupReply>;

  listMembersOfGroup(
    request: group_pb.ListMembersOfGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListMembersOfGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.ListMembersOfGroupReply>;

  listMembersOfGroup(
    request: group_pb.ListMembersOfGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListMembersOfGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListMembersOfGroup',
        request,
        metadata || {},
        this.methodDescriptorListMembersOfGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListMembersOfGroup',
    request,
    metadata || {},
    this.methodDescriptorListMembersOfGroup);
  }

  methodDescriptorJoinGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/JoinGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.JoinGroupRequest,
    group_pb.JoinGroupReply,
    (request: group_pb.JoinGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.JoinGroupReply.deserializeBinary
  );

  joinGroup(
    request: group_pb.JoinGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.JoinGroupReply>;

  joinGroup(
    request: group_pb.JoinGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.JoinGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.JoinGroupReply>;

  joinGroup(
    request: group_pb.JoinGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.JoinGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/JoinGroup',
        request,
        metadata || {},
        this.methodDescriptorJoinGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/JoinGroup',
    request,
    metadata || {},
    this.methodDescriptorJoinGroup);
  }

  methodDescriptorAcceptMember = new grpcWeb.MethodDescriptor(
    '/group.Group/AcceptMember',
    grpcWeb.MethodType.UNARY,
    group_pb.AcceptMemberRequest,
    group_pb.AcceptMemberReply,
    (request: group_pb.AcceptMemberRequest) => {
      return request.serializeBinary();
    },
    group_pb.AcceptMemberReply.deserializeBinary
  );

  acceptMember(
    request: group_pb.AcceptMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.AcceptMemberReply>;

  acceptMember(
    request: group_pb.AcceptMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.AcceptMemberReply) => void): grpcWeb.ClientReadableStream<group_pb.AcceptMemberReply>;

  acceptMember(
    request: group_pb.AcceptMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.AcceptMemberReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/AcceptMember',
        request,
        metadata || {},
        this.methodDescriptorAcceptMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/AcceptMember',
    request,
    metadata || {},
    this.methodDescriptorAcceptMember);
  }

  methodDescriptorBanMember = new grpcWeb.MethodDescriptor(
    '/group.Group/BanMember',
    grpcWeb.MethodType.UNARY,
    group_pb.BanMemberRequest,
    group_pb.BanMemberReply,
    (request: group_pb.BanMemberRequest) => {
      return request.serializeBinary();
    },
    group_pb.BanMemberReply.deserializeBinary
  );

  banMember(
    request: group_pb.BanMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.BanMemberReply>;

  banMember(
    request: group_pb.BanMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.BanMemberReply) => void): grpcWeb.ClientReadableStream<group_pb.BanMemberReply>;

  banMember(
    request: group_pb.BanMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.BanMemberReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/BanMember',
        request,
        metadata || {},
        this.methodDescriptorBanMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/BanMember',
    request,
    metadata || {},
    this.methodDescriptorBanMember);
  }

  methodDescriptorLeaveGroup = new grpcWeb.MethodDescriptor(
    '/group.Group/LeaveGroup',
    grpcWeb.MethodType.UNARY,
    group_pb.LeaveGroupRequest,
    group_pb.LeaveGroupReply,
    (request: group_pb.LeaveGroupRequest) => {
      return request.serializeBinary();
    },
    group_pb.LeaveGroupReply.deserializeBinary
  );

  leaveGroup(
    request: group_pb.LeaveGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.LeaveGroupReply>;

  leaveGroup(
    request: group_pb.LeaveGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.LeaveGroupReply) => void): grpcWeb.ClientReadableStream<group_pb.LeaveGroupReply>;

  leaveGroup(
    request: group_pb.LeaveGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.LeaveGroupReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/LeaveGroup',
        request,
        metadata || {},
        this.methodDescriptorLeaveGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/LeaveGroup',
    request,
    metadata || {},
    this.methodDescriptorLeaveGroup);
  }

  methodDescriptorCreateChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/CreateChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.CreateChallengeRequest,
    group_pb.CreateChallengeReply,
    (request: group_pb.CreateChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.CreateChallengeReply.deserializeBinary
  );

  createChallenge(
    request: group_pb.CreateChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.CreateChallengeReply>;

  createChallenge(
    request: group_pb.CreateChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.CreateChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.CreateChallengeReply>;

  createChallenge(
    request: group_pb.CreateChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.CreateChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/CreateChallenge',
        request,
        metadata || {},
        this.methodDescriptorCreateChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/CreateChallenge',
    request,
    metadata || {},
    this.methodDescriptorCreateChallenge);
  }

  methodDescriptorListChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/ListChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.ListChallengeRequest,
    group_pb.ListChallengeReply,
    (request: group_pb.ListChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListChallengeReply.deserializeBinary
  );

  listChallenge(
    request: group_pb.ListChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListChallengeReply>;

  listChallenge(
    request: group_pb.ListChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.ListChallengeReply>;

  listChallenge(
    request: group_pb.ListChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListChallenge',
        request,
        metadata || {},
        this.methodDescriptorListChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListChallenge',
    request,
    metadata || {},
    this.methodDescriptorListChallenge);
  }

  methodDescriptorUpdateChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/UpdateChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.UpdateChallengeRequest,
    group_pb.UpdateChallengeReply,
    (request: group_pb.UpdateChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.UpdateChallengeReply.deserializeBinary
  );

  updateChallenge(
    request: group_pb.UpdateChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.UpdateChallengeReply>;

  updateChallenge(
    request: group_pb.UpdateChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.UpdateChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.UpdateChallengeReply>;

  updateChallenge(
    request: group_pb.UpdateChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.UpdateChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/UpdateChallenge',
        request,
        metadata || {},
        this.methodDescriptorUpdateChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/UpdateChallenge',
    request,
    metadata || {},
    this.methodDescriptorUpdateChallenge);
  }

  methodDescriptorDeleteChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/DeleteChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.DeleteChallengeRequest,
    group_pb.DeleteChallengeReply,
    (request: group_pb.DeleteChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.DeleteChallengeReply.deserializeBinary
  );

  deleteChallenge(
    request: group_pb.DeleteChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.DeleteChallengeReply>;

  deleteChallenge(
    request: group_pb.DeleteChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.DeleteChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.DeleteChallengeReply>;

  deleteChallenge(
    request: group_pb.DeleteChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.DeleteChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/DeleteChallenge',
        request,
        metadata || {},
        this.methodDescriptorDeleteChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/DeleteChallenge',
    request,
    metadata || {},
    this.methodDescriptorDeleteChallenge);
  }

  methodDescriptorListUserRanking = new grpcWeb.MethodDescriptor(
    '/group.Group/ListUserRanking',
    grpcWeb.MethodType.UNARY,
    group_pb.ListUserRankingRequest,
    group_pb.ListUserRankingReply,
    (request: group_pb.ListUserRankingRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListUserRankingReply.deserializeBinary
  );

  listUserRanking(
    request: group_pb.ListUserRankingRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListUserRankingReply>;

  listUserRanking(
    request: group_pb.ListUserRankingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListUserRankingReply) => void): grpcWeb.ClientReadableStream<group_pb.ListUserRankingReply>;

  listUserRanking(
    request: group_pb.ListUserRankingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListUserRankingReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListUserRanking',
        request,
        metadata || {},
        this.methodDescriptorListUserRanking,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListUserRanking',
    request,
    metadata || {},
    this.methodDescriptorListUserRanking);
  }

  methodDescriptorGetChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/GetChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.GetChallengeRequest,
    group_pb.GetChallengeReply,
    (request: group_pb.GetChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.GetChallengeReply.deserializeBinary
  );

  getChallenge(
    request: group_pb.GetChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.GetChallengeReply>;

  getChallenge(
    request: group_pb.GetChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.GetChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.GetChallengeReply>;

  getChallenge(
    request: group_pb.GetChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.GetChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/GetChallenge',
        request,
        metadata || {},
        this.methodDescriptorGetChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/GetChallenge',
    request,
    metadata || {},
    this.methodDescriptorGetChallenge);
  }

  methodDescriptorCreateSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/CreateSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.CreateSeasonRequest,
    group_pb.CreateSeasonReply,
    (request: group_pb.CreateSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.CreateSeasonReply.deserializeBinary
  );

  createSeason(
    request: group_pb.CreateSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.CreateSeasonReply>;

  createSeason(
    request: group_pb.CreateSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.CreateSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.CreateSeasonReply>;

  createSeason(
    request: group_pb.CreateSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.CreateSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/CreateSeason',
        request,
        metadata || {},
        this.methodDescriptorCreateSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/CreateSeason',
    request,
    metadata || {},
    this.methodDescriptorCreateSeason);
  }

  methodDescriptorListSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/ListSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.ListSeasonRequest,
    group_pb.ListSeasonReply,
    (request: group_pb.ListSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListSeasonReply.deserializeBinary
  );

  listSeason(
    request: group_pb.ListSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListSeasonReply>;

  listSeason(
    request: group_pb.ListSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.ListSeasonReply>;

  listSeason(
    request: group_pb.ListSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListSeason',
        request,
        metadata || {},
        this.methodDescriptorListSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListSeason',
    request,
    metadata || {},
    this.methodDescriptorListSeason);
  }

  methodDescriptorUpdateSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/UpdateSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.UpdateSeasonRequest,
    group_pb.UpdateSeasonReply,
    (request: group_pb.UpdateSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.UpdateSeasonReply.deserializeBinary
  );

  updateSeason(
    request: group_pb.UpdateSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.UpdateSeasonReply>;

  updateSeason(
    request: group_pb.UpdateSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.UpdateSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.UpdateSeasonReply>;

  updateSeason(
    request: group_pb.UpdateSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.UpdateSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/UpdateSeason',
        request,
        metadata || {},
        this.methodDescriptorUpdateSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/UpdateSeason',
    request,
    metadata || {},
    this.methodDescriptorUpdateSeason);
  }

  methodDescriptorDeleteSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/DeleteSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.DeleteSeasonRequest,
    group_pb.DeleteSeasonReply,
    (request: group_pb.DeleteSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.DeleteSeasonReply.deserializeBinary
  );

  deleteSeason(
    request: group_pb.DeleteSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.DeleteSeasonReply>;

  deleteSeason(
    request: group_pb.DeleteSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.DeleteSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.DeleteSeasonReply>;

  deleteSeason(
    request: group_pb.DeleteSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.DeleteSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/DeleteSeason',
        request,
        metadata || {},
        this.methodDescriptorDeleteSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/DeleteSeason',
    request,
    metadata || {},
    this.methodDescriptorDeleteSeason);
  }

  methodDescriptorGetSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/GetSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.GetSeasonRequest,
    group_pb.GetSeasonReply,
    (request: group_pb.GetSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.GetSeasonReply.deserializeBinary
  );

  getSeason(
    request: group_pb.GetSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.GetSeasonReply>;

  getSeason(
    request: group_pb.GetSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.GetSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.GetSeasonReply>;

  getSeason(
    request: group_pb.GetSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.GetSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/GetSeason',
        request,
        metadata || {},
        this.methodDescriptorGetSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/GetSeason',
    request,
    metadata || {},
    this.methodDescriptorGetSeason);
  }

  methodDescriptorListInProgressChallenge = new grpcWeb.MethodDescriptor(
    '/group.Group/ListInProgressChallenge',
    grpcWeb.MethodType.UNARY,
    group_pb.ListInProgressChallengeRequest,
    group_pb.ListInProgressChallengeReply,
    (request: group_pb.ListInProgressChallengeRequest) => {
      return request.serializeBinary();
    },
    group_pb.ListInProgressChallengeReply.deserializeBinary
  );

  listInProgressChallenge(
    request: group_pb.ListInProgressChallengeRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.ListInProgressChallengeReply>;

  listInProgressChallenge(
    request: group_pb.ListInProgressChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.ListInProgressChallengeReply) => void): grpcWeb.ClientReadableStream<group_pb.ListInProgressChallengeReply>;

  listInProgressChallenge(
    request: group_pb.ListInProgressChallengeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.ListInProgressChallengeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/ListInProgressChallenge',
        request,
        metadata || {},
        this.methodDescriptorListInProgressChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/ListInProgressChallenge',
    request,
    metadata || {},
    this.methodDescriptorListInProgressChallenge);
  }

  methodDescriptorGetInProgressSeason = new grpcWeb.MethodDescriptor(
    '/group.Group/GetInProgressSeason',
    grpcWeb.MethodType.UNARY,
    group_pb.GetInProgressSeasonRequest,
    group_pb.GetInProgressSeasonReply,
    (request: group_pb.GetInProgressSeasonRequest) => {
      return request.serializeBinary();
    },
    group_pb.GetInProgressSeasonReply.deserializeBinary
  );

  getInProgressSeason(
    request: group_pb.GetInProgressSeasonRequest,
    metadata: grpcWeb.Metadata | null): Promise<group_pb.GetInProgressSeasonReply>;

  getInProgressSeason(
    request: group_pb.GetInProgressSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: group_pb.GetInProgressSeasonReply) => void): grpcWeb.ClientReadableStream<group_pb.GetInProgressSeasonReply>;

  getInProgressSeason(
    request: group_pb.GetInProgressSeasonRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: group_pb.GetInProgressSeasonReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/group.Group/GetInProgressSeason',
        request,
        metadata || {},
        this.methodDescriptorGetInProgressSeason,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/group.Group/GetInProgressSeason',
    request,
    metadata || {},
    this.methodDescriptorGetInProgressSeason);
  }

}

