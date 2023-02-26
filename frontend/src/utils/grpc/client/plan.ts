import { PlanClient } from "../../../lib/plan/PlanServiceClientPb";

import {
    ListPlanRequest,
    ListPlanReply,
    CreatePlanRequest,
    CreatePlanReply
} from "../../../lib/plan/plan_pb";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

class rpcPlanClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "PLAN";
    super(PlanClient, config);
  }

  async createPlan(planInfoObj: CreatePlanRequest.AsObject) {
    const req = new CreatePlanRequest();
    req
      .setRule(planInfoObj?.rule || 0)
      .setNote(planInfoObj?.note || "")
      .setName(planInfoObj?.name || "")
      .setEndTime(
        new Timestamp().setSeconds(planInfoObj?.endTime?.seconds || 0)
      )
      .setStartTime(
        new Timestamp().setSeconds(planInfoObj?.startTime?.seconds || 0)
      )
      .setGoal(planInfoObj?.goal || 0)
      .setActivityType(planInfoObj?.activityType || 0);

    return await this.gRPCClientRequest<CreatePlanReply.AsObject>(
      "createPlan",
      req
    );
  }

  async listPlan(params: ListPlanRequest.AsObject) {
    const { activityType, ascending, limit, offset, sortBy, from, to } = params;
    const req = new ListPlanRequest();
    req
      .setLimit(limit)
      .setOffset(offset)
      .setActivityType(activityType)
      .setAscending(ascending)
      .setLimit(limit)
      .setSortBy(sortBy)
      .setFrom(
        from ? new Timestamp().setSeconds(from?.seconds || 0) : undefined
      )
      .setTo(to ? new Timestamp().setSeconds(to?.seconds || 0) : undefined);
    return await this.gRPCClientRequest<ListPlanReply.AsObject>(
      "listPlan",
      req
    );
  }
}

export default rpcPlanClient;
