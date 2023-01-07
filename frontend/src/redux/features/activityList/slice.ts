import { createSlice } from "@reduxjs/toolkit";
import { ActivityInfo } from "../../../lib/activity/activity_pb";
import { CommonState } from "../../common/types";
import { StatusEnum } from "../../constant";
import { RootState } from "../../reducers";
import { listActivityInfoThunk, listMoreActivityInfoThunk } from "./thunk";

type ActivityListState = {
  activityList: Array<ActivityInfo.AsObject>;
  total: number;
} & CommonState;

export const initialState: ActivityListState = {
  activityList: [],
  status: StatusEnum.LOADING,
  total: 0,
};

const slice = createSlice({
  name: "activity-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listActivityInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(listMoreActivityInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(listActivityInfoThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload;
      if (error) return;
      state.status = StatusEnum.SUCCEEDED;
      state.activityList = response?.activityListList || [];
      state.total = response?.total || 0;
    });
    builder.addCase(
      listMoreActivityInfoThunk.fulfilled,
      (state, { payload }) => {
        const { response } = payload;
        state.status = StatusEnum.SUCCEEDED;
        state.activityList = state.activityList.concat(
          response?.activityListList || []
        );
      }
    );
  },
});

export const selectActivityList = (state: RootState) => state.activityList;
export const isActivityListLoading = (state: RootState) =>
  state.activityList.status === StatusEnum.LOADING;

export default slice.reducer;
