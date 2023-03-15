import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ExpoPushTokenRequest,
  IdRequest,
  ListNotificationInfoRequest,
  UpdateNotificationInfoRequest,
} from '../../../lib/notification/notification_pb'
import { notificationClient } from '../../../utils/grpc'

export const checkIfExistOrSaveExpoPushTokenThunk = createAsyncThunk(
  'notification/checkIfExistOrSaveExpoPushTokenThunk',
  async (param: ExpoPushTokenRequest.AsObject) => {
    return await notificationClient.checkIfExistOrSaveExpoPushToken(param)
  }
)

export const removeExpoPushTokenThunk = createAsyncThunk(
  'notification/removeExpoPushTokenThunk',
  async (param: ExpoPushTokenRequest.AsObject) => {
    return await notificationClient.removeExpoPushToken(param)
  }
)

export const listNotificationInfoThunk = createAsyncThunk(
  'notification/listNotificationInfoThunk',
  async (param: ListNotificationInfoRequest.AsObject) => {
    return await notificationClient.listNotificationInfo(param)
  }
)

export const listMoreNotificationInfoThunk = createAsyncThunk(
  'notification/listMoreNotificationInfoThunk',
  async (param: ListNotificationInfoRequest.AsObject) => {
    return await notificationClient.listNotificationInfo(param)
  }
)

export const listLastNotificationInfoThunk = createAsyncThunk(
  'notification/listLastNotificationInfoThunk',
  async (param: ListNotificationInfoRequest.AsObject) => {
    return await notificationClient.listNotificationInfo(param)
  }
)

export const deleteNotificationInfoThunk = createAsyncThunk(
  'notification/deleteNotificationInfoThunk',
  async (param: IdRequest.AsObject) => {
    return await notificationClient.deleteNotificationInfo(param)
  }
)

export const updateNotificationInfoThunk = createAsyncThunk(
  'notification/updateNotificationInfoThunk',
  async (param: UpdateNotificationInfoRequest.AsObject) => {
    return await notificationClient.updateNotificationInfo(param)
  }
)
