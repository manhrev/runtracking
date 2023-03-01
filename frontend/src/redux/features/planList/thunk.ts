import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreatePlanRequest, ListPlanRequest, UpdatePlanRequest, DeletePlansRequest} from "../../../lib/plan/plan_pb";
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

export const updatePlanThunk = createAsyncThunk(
  "plan/updatePlan",
  async (param: UpdatePlanRequest.AsObject) => {
      const res = await planClient.updatePlan(param);
      return {
          ...res,
          updateData: param,
      }
  }
);

export const deletePlansThunk = createAsyncThunk(
  "plan/deletePlans",
  async (param: DeletePlansRequest.AsObject) => {
      const res = await planClient.deletePlans(param);
      return {
          ...res,
          deleteData: param,
      }
  }
);