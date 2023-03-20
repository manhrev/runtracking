/**
 * @fileoverview gRPC-Web generated client stub for plan
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as plan_pb from './plan_pb';


export class PlanClient {
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

  methodDescriptorCreatePlan = new grpcWeb.MethodDescriptor(
    '/plan.Plan/CreatePlan',
    grpcWeb.MethodType.UNARY,
    plan_pb.CreatePlanRequest,
    plan_pb.CreatePlanReply,
    (request: plan_pb.CreatePlanRequest) => {
      return request.serializeBinary();
    },
    plan_pb.CreatePlanReply.deserializeBinary
  );

  createPlan(
    request: plan_pb.CreatePlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<plan_pb.CreatePlanReply>;

  createPlan(
    request: plan_pb.CreatePlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: plan_pb.CreatePlanReply) => void): grpcWeb.ClientReadableStream<plan_pb.CreatePlanReply>;

  createPlan(
    request: plan_pb.CreatePlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: plan_pb.CreatePlanReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/plan.Plan/CreatePlan',
        request,
        metadata || {},
        this.methodDescriptorCreatePlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/plan.Plan/CreatePlan',
    request,
    metadata || {},
    this.methodDescriptorCreatePlan);
  }

  methodDescriptorListPlan = new grpcWeb.MethodDescriptor(
    '/plan.Plan/ListPlan',
    grpcWeb.MethodType.UNARY,
    plan_pb.ListPlanRequest,
    plan_pb.ListPlanReply,
    (request: plan_pb.ListPlanRequest) => {
      return request.serializeBinary();
    },
    plan_pb.ListPlanReply.deserializeBinary
  );

  listPlan(
    request: plan_pb.ListPlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<plan_pb.ListPlanReply>;

  listPlan(
    request: plan_pb.ListPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: plan_pb.ListPlanReply) => void): grpcWeb.ClientReadableStream<plan_pb.ListPlanReply>;

  listPlan(
    request: plan_pb.ListPlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: plan_pb.ListPlanReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/plan.Plan/ListPlan',
        request,
        metadata || {},
        this.methodDescriptorListPlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/plan.Plan/ListPlan',
    request,
    metadata || {},
    this.methodDescriptorListPlan);
  }

  methodDescriptorDeletePlans = new grpcWeb.MethodDescriptor(
    '/plan.Plan/DeletePlans',
    grpcWeb.MethodType.UNARY,
    plan_pb.DeletePlansRequest,
    plan_pb.DeletePlansReply,
    (request: plan_pb.DeletePlansRequest) => {
      return request.serializeBinary();
    },
    plan_pb.DeletePlansReply.deserializeBinary
  );

  deletePlans(
    request: plan_pb.DeletePlansRequest,
    metadata: grpcWeb.Metadata | null): Promise<plan_pb.DeletePlansReply>;

  deletePlans(
    request: plan_pb.DeletePlansRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: plan_pb.DeletePlansReply) => void): grpcWeb.ClientReadableStream<plan_pb.DeletePlansReply>;

  deletePlans(
    request: plan_pb.DeletePlansRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: plan_pb.DeletePlansReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/plan.Plan/DeletePlans',
        request,
        metadata || {},
        this.methodDescriptorDeletePlans,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/plan.Plan/DeletePlans',
    request,
    metadata || {},
    this.methodDescriptorDeletePlans);
  }

  methodDescriptorUpdatePlan = new grpcWeb.MethodDescriptor(
    '/plan.Plan/UpdatePlan',
    grpcWeb.MethodType.UNARY,
    plan_pb.UpdatePlanRequest,
    plan_pb.UpdatePlanReply,
    (request: plan_pb.UpdatePlanRequest) => {
      return request.serializeBinary();
    },
    plan_pb.UpdatePlanReply.deserializeBinary
  );

  updatePlan(
    request: plan_pb.UpdatePlanRequest,
    metadata: grpcWeb.Metadata | null): Promise<plan_pb.UpdatePlanReply>;

  updatePlan(
    request: plan_pb.UpdatePlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: plan_pb.UpdatePlanReply) => void): grpcWeb.ClientReadableStream<plan_pb.UpdatePlanReply>;

  updatePlan(
    request: plan_pb.UpdatePlanRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: plan_pb.UpdatePlanReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/plan.Plan/UpdatePlan',
        request,
        metadata || {},
        this.methodDescriptorUpdatePlan,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/plan.Plan/UpdatePlan',
    request,
    metadata || {},
    this.methodDescriptorUpdatePlan);
  }

}

