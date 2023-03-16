import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest, UpdateUserInfoRequest } from "../../../lib/auth/auth_pb";
import { authClient, notificationClient } from "../../../utils/grpc";

export const getMeThunk = createAsyncThunk('auth/getMe', async () => {
  return await authClient.getMe()
})

export const loginThunk = createAsyncThunk(
  'auth/loginThunk',
  async (param: LoginRequest.AsObject) => {
    return await authClient.logIn(param)
  }
)

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  // await notificationClient
  return await authClient.logOut();
});

export const updateUserInfoThunk = createAsyncThunk(
  "auth/updateUserInfo",
  async (param: UpdateUserInfoRequest) => {
    const res = await authClient.updateUserInfo(param);
    return {
      ...res,
      updateData: param,
    };
  }
);

