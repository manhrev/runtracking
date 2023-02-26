import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePlanRequest, ListPlanRequest } from "../../../lib/plan/plan_pb";
import { planClient } from "../../../utils/grpc";

export const listPlanThunk = createAsyncThunk(
  "plan/listPlan",
  async (param: ListPlanRequest.AsObject) => {
    return await planClient.listPlan(param);
  }
);

export const createPlanThunk = createAsyncThunk(
    "plan/createPlan",
    async (param: CreatePlanRequest.AsObject) => {
        return await planClient.createPlan(param);
    }
);