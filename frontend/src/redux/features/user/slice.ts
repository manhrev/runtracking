import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { KEY_ACCESS_TOKEN } from "../../../utils/grpc";
import { CommonState } from "../../common/types";
import { StatusEnum } from "../../constant";
import { RootState } from "../../reducers";
import { getMeThunk, loginThunk, logoutThunk, updateUserInfoThunk } from "./thunk";

type UserState = {
  isSignedIn: boolean;
  username: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  height: number;
  weight: number;
  age: number;
  userId: number;
} & CommonState;

export const initialState: UserState = {
  isSignedIn: false,
  status: StatusEnum.LOADING,
  email: '',
  height: 0,
  weight: 0,
  username: "",
  displayName: "",
  phoneNumber: "",
  age: 0,
  userId: 0,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeThunk.pending, (state) => {
      state.status = StatusEnum.LOADING
    })
    builder.addCase(getMeThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.status = StatusEnum.SUCCEEDED
        state.isSignedIn = false
        return
      }
      state.weight = response?.user?.weight || 0;
      state.height = response?.user?.height || 0;
      state.displayName = response?.user?.displayName || "";
      state.email = response?.user?.email || "";
      state.phoneNumber = response?.user?.phoneNumber || "";
      state.username = response?.user?.username || "";
      state.age = response?.user?.age || 0;
      state.userId = response?.user?.userId || 0;

      state.status = StatusEnum.SUCCEEDED
      state.isSignedIn = true
    })
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      const { response, error } = payload
      if (error) {
        state.isSignedIn = false
        return
      }
      const token = response?.accessToken || ''
      AsyncStorage.setItem(KEY_ACCESS_TOKEN, token)
      state.isSignedIn = true
    })
    builder.addCase(logoutThunk.fulfilled, (state, { payload }) => {
      state.isSignedIn = false;
      AsyncStorage.removeItem(KEY_ACCESS_TOKEN);
    });
    builder.addCase(updateUserInfoThunk.fulfilled, (state, { payload }) => {
      const { response, error, updateData } = payload;
      if (error) {
        return;
      }
      state.weight = updateData.getUserInfo()?.getWeight() || 0;
      state.height = updateData.getUserInfo()?.getHeight() || 0;
      state.displayName = updateData.getUserInfo()?.getDisplayName() || "";
      state.email = updateData.getUserInfo()?.getEmail() || "";
      state.phoneNumber = updateData.getUserInfo()?.getPhoneNumber() || "";
      state.username = updateData.getUserInfo()?.getUsername() || "";
      state.age = updateData.getUserInfo()?.getAge() || 0;
      state.userId = updateData.getUserInfo()?.getUserId() || 0;
    });
  },
})

export const selectUserSlice = (state: RootState) => state.user
export const isUserSliceLoading = (state: RootState) =>
  state.user.status === StatusEnum.LOADING

export default slice.reducer
