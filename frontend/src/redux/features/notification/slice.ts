import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { EXPO_PUSH_TOKEN, KEY_ACCESS_TOKEN } from "../../../utils/grpc";
import { CommonState } from "../../common/types";
import { StatusEnum } from "../../constant";
import { RootState } from "../../reducers";
import { checkIfExistOrSaveExpoPushTokenThunk,removeExpoPushTokenThunk } from "./thunk";

type NotificationState = {

} & CommonState;

export const initialState: NotificationState = {
  status: StatusEnum.LOADING,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkIfExistOrSaveExpoPushTokenThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(checkIfExistOrSaveExpoPushTokenThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload;
      if (error) {
        state.status = StatusEnum.SUCCEEDED;
        return;
      }
    });
    builder.addCase(removeExpoPushTokenThunk.fulfilled, (state, { payload }) => {
      AsyncStorage.removeItem(EXPO_PUSH_TOKEN);
      return;
    });
  
  },
});

export const selectUserSlice = (state: RootState) => state.user;
export const isUserSliceLoading = (state: RootState) =>
  state.user.status === StatusEnum.LOADING;

export default slice.reducer;
