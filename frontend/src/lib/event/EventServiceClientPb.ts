/**
 * @fileoverview gRPC-Web generated client stub for event
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as event_pb from './event_pb';


export class EventClient {
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

  methodDescriptorCreateEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/CreateEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.CreateEventRequest,
    event_pb.CreateEventReply,
    (request: event_pb.CreateEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.CreateEventReply.deserializeBinary
  );

  createEvent(
    request: event_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.CreateEventReply>;

  createEvent(
    request: event_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.CreateEventReply) => void): grpcWeb.ClientReadableStream<event_pb.CreateEventReply>;

  createEvent(
    request: event_pb.CreateEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.CreateEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/CreateEvent',
        request,
        metadata || {},
        this.methodDescriptorCreateEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/CreateEvent',
    request,
    metadata || {},
    this.methodDescriptorCreateEvent);
  }

  methodDescriptorUpdateEventInfo = new grpcWeb.MethodDescriptor(
    '/event.Event/UpdateEventInfo',
    grpcWeb.MethodType.UNARY,
    event_pb.UpdateEventInfoRequest,
    event_pb.UpdateEventInfoReply,
    (request: event_pb.UpdateEventInfoRequest) => {
      return request.serializeBinary();
    },
    event_pb.UpdateEventInfoReply.deserializeBinary
  );

  updateEventInfo(
    request: event_pb.UpdateEventInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.UpdateEventInfoReply>;

  updateEventInfo(
    request: event_pb.UpdateEventInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.UpdateEventInfoReply) => void): grpcWeb.ClientReadableStream<event_pb.UpdateEventInfoReply>;

  updateEventInfo(
    request: event_pb.UpdateEventInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.UpdateEventInfoReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/UpdateEventInfo',
        request,
        metadata || {},
        this.methodDescriptorUpdateEventInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/UpdateEventInfo',
    request,
    metadata || {},
    this.methodDescriptorUpdateEventInfo);
  }

  methodDescriptorJoinEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/JoinEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.JoinEventRequest,
    event_pb.JoinEventReply,
    (request: event_pb.JoinEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.JoinEventReply.deserializeBinary
  );

  joinEvent(
    request: event_pb.JoinEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.JoinEventReply>;

  joinEvent(
    request: event_pb.JoinEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.JoinEventReply) => void): grpcWeb.ClientReadableStream<event_pb.JoinEventReply>;

  joinEvent(
    request: event_pb.JoinEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.JoinEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/JoinEvent',
        request,
        metadata || {},
        this.methodDescriptorJoinEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/JoinEvent',
    request,
    metadata || {},
    this.methodDescriptorJoinEvent);
  }

  methodDescriptorApproveJoinEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/ApproveJoinEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.ApproveJoinEventRequest,
    event_pb.ApproveJoinEventReply,
    (request: event_pb.ApproveJoinEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.ApproveJoinEventReply.deserializeBinary
  );

  approveJoinEvent(
    request: event_pb.ApproveJoinEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.ApproveJoinEventReply>;

  approveJoinEvent(
    request: event_pb.ApproveJoinEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.ApproveJoinEventReply) => void): grpcWeb.ClientReadableStream<event_pb.ApproveJoinEventReply>;

  approveJoinEvent(
    request: event_pb.ApproveJoinEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.ApproveJoinEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/ApproveJoinEvent',
        request,
        metadata || {},
        this.methodDescriptorApproveJoinEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/ApproveJoinEvent',
    request,
    metadata || {},
    this.methodDescriptorApproveJoinEvent);
  }

  methodDescriptorAddSubEventToEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/AddSubEventToEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.AddSubEventToEventRequest,
    event_pb.AddSubEventToEventReply,
    (request: event_pb.AddSubEventToEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.AddSubEventToEventReply.deserializeBinary
  );

  addSubEventToEvent(
    request: event_pb.AddSubEventToEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.AddSubEventToEventReply>;

  addSubEventToEvent(
    request: event_pb.AddSubEventToEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.AddSubEventToEventReply) => void): grpcWeb.ClientReadableStream<event_pb.AddSubEventToEventReply>;

  addSubEventToEvent(
    request: event_pb.AddSubEventToEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.AddSubEventToEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/AddSubEventToEvent',
        request,
        metadata || {},
        this.methodDescriptorAddSubEventToEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/AddSubEventToEvent',
    request,
    metadata || {},
    this.methodDescriptorAddSubEventToEvent);
  }

  methodDescriptorRemoveSubEventFromEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/RemoveSubEventFromEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.RemoveSubEventFromEventRequest,
    event_pb.RemoveSubEventFromEventReply,
    (request: event_pb.RemoveSubEventFromEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.RemoveSubEventFromEventReply.deserializeBinary
  );

  removeSubEventFromEvent(
    request: event_pb.RemoveSubEventFromEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.RemoveSubEventFromEventReply>;

  removeSubEventFromEvent(
    request: event_pb.RemoveSubEventFromEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.RemoveSubEventFromEventReply) => void): grpcWeb.ClientReadableStream<event_pb.RemoveSubEventFromEventReply>;

  removeSubEventFromEvent(
    request: event_pb.RemoveSubEventFromEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.RemoveSubEventFromEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/RemoveSubEventFromEvent',
        request,
        metadata || {},
        this.methodDescriptorRemoveSubEventFromEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/RemoveSubEventFromEvent',
    request,
    metadata || {},
    this.methodDescriptorRemoveSubEventFromEvent);
  }

  methodDescriptorListEvents = new grpcWeb.MethodDescriptor(
    '/event.Event/ListEvents',
    grpcWeb.MethodType.UNARY,
    event_pb.ListEventsRequest,
    event_pb.ListEventsReply,
    (request: event_pb.ListEventsRequest) => {
      return request.serializeBinary();
    },
    event_pb.ListEventsReply.deserializeBinary
  );

  listEvents(
    request: event_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.ListEventsReply>;

  listEvents(
    request: event_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.ListEventsReply) => void): grpcWeb.ClientReadableStream<event_pb.ListEventsReply>;

  listEvents(
    request: event_pb.ListEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.ListEventsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/ListEvents',
        request,
        metadata || {},
        this.methodDescriptorListEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/ListEvents',
    request,
    metadata || {},
    this.methodDescriptorListEvents);
  }

  methodDescriptorListSubEvents = new grpcWeb.MethodDescriptor(
    '/event.Event/ListSubEvents',
    grpcWeb.MethodType.UNARY,
    event_pb.ListSubEventsRequest,
    event_pb.ListSubEventsReply,
    (request: event_pb.ListSubEventsRequest) => {
      return request.serializeBinary();
    },
    event_pb.ListSubEventsReply.deserializeBinary
  );

  listSubEvents(
    request: event_pb.ListSubEventsRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.ListSubEventsReply>;

  listSubEvents(
    request: event_pb.ListSubEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.ListSubEventsReply) => void): grpcWeb.ClientReadableStream<event_pb.ListSubEventsReply>;

  listSubEvents(
    request: event_pb.ListSubEventsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.ListSubEventsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/ListSubEvents',
        request,
        metadata || {},
        this.methodDescriptorListSubEvents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/ListSubEvents',
    request,
    metadata || {},
    this.methodDescriptorListSubEvents);
  }

  methodDescriptorListGroupsInEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/ListGroupsInEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.ListGroupsInEventRequest,
    event_pb.ListGroupsInEventReply,
    (request: event_pb.ListGroupsInEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.ListGroupsInEventReply.deserializeBinary
  );

  listGroupsInEvent(
    request: event_pb.ListGroupsInEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.ListGroupsInEventReply>;

  listGroupsInEvent(
    request: event_pb.ListGroupsInEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.ListGroupsInEventReply) => void): grpcWeb.ClientReadableStream<event_pb.ListGroupsInEventReply>;

  listGroupsInEvent(
    request: event_pb.ListGroupsInEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.ListGroupsInEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/ListGroupsInEvent',
        request,
        metadata || {},
        this.methodDescriptorListGroupsInEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/ListGroupsInEvent',
    request,
    metadata || {},
    this.methodDescriptorListGroupsInEvent);
  }

  methodDescriptorListGroupProgressInEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/ListGroupProgressInEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.ListGroupProgressInEventRequest,
    event_pb.ListGroupProgressInEventReply,
    (request: event_pb.ListGroupProgressInEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.ListGroupProgressInEventReply.deserializeBinary
  );

  listGroupProgressInEvent(
    request: event_pb.ListGroupProgressInEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.ListGroupProgressInEventReply>;

  listGroupProgressInEvent(
    request: event_pb.ListGroupProgressInEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.ListGroupProgressInEventReply) => void): grpcWeb.ClientReadableStream<event_pb.ListGroupProgressInEventReply>;

  listGroupProgressInEvent(
    request: event_pb.ListGroupProgressInEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.ListGroupProgressInEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/ListGroupProgressInEvent',
        request,
        metadata || {},
        this.methodDescriptorListGroupProgressInEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/ListGroupProgressInEvent',
    request,
    metadata || {},
    this.methodDescriptorListGroupProgressInEvent);
  }

  methodDescriptorInviteGroupsToEvent = new grpcWeb.MethodDescriptor(
    '/event.Event/InviteGroupsToEvent',
    grpcWeb.MethodType.UNARY,
    event_pb.InviteGroupsToEventRequest,
    event_pb.InviteGroupsToEventReply,
    (request: event_pb.InviteGroupsToEventRequest) => {
      return request.serializeBinary();
    },
    event_pb.InviteGroupsToEventReply.deserializeBinary
  );

  inviteGroupsToEvent(
    request: event_pb.InviteGroupsToEventRequest,
    metadata: grpcWeb.Metadata | null): Promise<event_pb.InviteGroupsToEventReply>;

  inviteGroupsToEvent(
    request: event_pb.InviteGroupsToEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: event_pb.InviteGroupsToEventReply) => void): grpcWeb.ClientReadableStream<event_pb.InviteGroupsToEventReply>;

  inviteGroupsToEvent(
    request: event_pb.InviteGroupsToEventRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: event_pb.InviteGroupsToEventReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/event.Event/InviteGroupsToEvent',
        request,
        metadata || {},
        this.methodDescriptorInviteGroupsToEvent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/event.Event/InviteGroupsToEvent',
    request,
    metadata || {},
    this.methodDescriptorInviteGroupsToEvent);
  }

}

