import { combineReducers } from "@reduxjs/toolkit";
import common from "./features/common/slice";
import toggle from "./features/toggle/slice";

const rootReducer = combineReducers({
  common,
  toggle,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
