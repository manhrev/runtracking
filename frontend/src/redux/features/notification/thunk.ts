import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExpoPushTokenRequest } from "../../../lib/notification/notification_pb";
import {  notificationClient } from "../../../utils/grpc";

export const checkIfExistOrSaveExpoPushTokenThunk = createAsyncThunk(
    "notification/checkIfExistOrSaveExpoPushTokenThunk",
     async (param : ExpoPushTokenRequest.AsObject) => {
  return await notificationClient.checkIfExistOrSaveExpoPushToken(param)
});

export const removeExpoPushTokenThunk = createAsyncThunk(
  "notification/removeExpoPushTokenThunk",
  async (param: ExpoPushTokenRequest.AsObject) => {
    return await notificationClient.removeExpoPushToken(param)
  }
);
