import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListActivityInfoRequest } from "../../../lib/activity/activity_pb";
import { activityClient } from "../../../utils/grpc";

export const listActivityInfoThunk = createAsyncThunk(
  "activity/listActivityInfo",
  async (payload: ListActivityInfoRequest.AsObject) => {
    return await activityClient.listActivityInfo(payload);
  }
);

export const listMoreActivityInfoThunk = createAsyncThunk(
  "activity/listMoreActivityInfo",
  async (param: ListActivityInfoRequest.AsObject) => {
    return await activityClient.listActivityInfo(param);
  }
);
