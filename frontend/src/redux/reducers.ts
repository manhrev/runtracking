import { combineReducers } from "@reduxjs/toolkit";
import common from "./features/common/slice";
import toggle from "./features/toggle/slice";
import activityList from "./features/activityList/slice";
import activityStatisticList from "./features/activityStatistic/slice";
import user from "./features/user/slice";
import planList from "./features/planList/slice";

const rootReducer = combineReducers({
  common,
  toggle,
  activityList,
  activityStatisticList,
  user,
  planList,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
