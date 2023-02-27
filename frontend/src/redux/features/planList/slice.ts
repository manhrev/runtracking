import { createSlice } from "@reduxjs/toolkit";
import { ActivityInfo } from "../../../lib/activity/activity_pb";
import { CommonState } from "../../common/types";
import { StatusEnum } from "../../constant";
import { RootState } from "../../reducers";
import { listPlanThunk, createPlanThunk, updatePlanThunk } from "./thunk";

type PlanListState = {
  planList: Array<any>;
} & CommonState;

export const initialState: PlanListState = {
  planList: [],
  status: StatusEnum.LOADING, // need
};

const slice = createSlice({
  name: "plan-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listPlanThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(listPlanThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload;
      if (error) return;

      state.status = StatusEnum.SUCCEEDED;
      state.planList = response?.plansList || [];
    });
    builder.addCase(createPlanThunk.pending, (state) => {
        state.status = StatusEnum.LOADING;
    });
    builder.addCase(createPlanThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload;
        if (error) return;

        state.status = StatusEnum.SUCCEEDED;
        // state.planList.push(payload);
    });
    builder.addCase(updatePlanThunk.pending, (state) => {
        state.status = StatusEnum.LOADING;
    });
    builder.addCase(updatePlanThunk.fulfilled, (state, { payload }) => {
        const { response, error } = payload;
        if (error) return;

        state.status = StatusEnum.SUCCEEDED;
        // state.planList.push(payload);
    });
  },
});

export const getPlanList = (state: RootState) => state.planList;
export const isPlanListLoading = (state: RootState) =>
  state.planList.status === StatusEnum.LOADING;

export default slice.reducer;
