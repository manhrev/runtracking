import { combineReducers } from "@reduxjs/toolkit";
import common from "./features/common/slice";
import toggle from "./features/toggle/slice";
import activityList from "./features/activityList/slice";

const rootReducer = combineReducers({
  common,
  toggle,
  activityList,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
