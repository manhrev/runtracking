import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExpoPushTokenRequest, ListNotificationInfoRequest } from "../../../lib/notification/notification_pb";
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

export const listNotificationInfoThunk = createAsyncThunk(
  "notification/listNotificationInfoThunk",
  async (param: ListNotificationInfoRequest.AsObject) => {
    return await notificationClient.listNotificationInfo(param)
  }
);


export const listMoreNotificationInfoThunk = createAsyncThunk(
  "notification/listMoreNotificationInfoThunk",
  async (param: ListNotificationInfoRequest.AsObject) => {
    return await notificationClient.listNotificationInfo(param)
  }
);

