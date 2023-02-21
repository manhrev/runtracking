import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { EXPO_PUSH_TOKEN, KEY_ACCESS_TOKEN } from "../../../utils/grpc";
import { CommonState } from "../../common/types";
import { StatusEnum } from "../../constant";
import { RootState } from "../../reducers";
import { NotificationInfo, UpdateNotificationInfoRequest } from "../../../lib/notification/notification_pb";
import { checkIfExistOrSaveExpoPushTokenThunk,
          removeExpoPushTokenThunk,
          listMoreNotificationInfoThunk,
        listNotificationInfoThunk, 
        deleteNotificationInfoThunk,
        updateNotificationInfoThunk} from "./thunk";

type NotificationState = {
  notificationList: Array<NotificationInfo.AsObject>;
  total: number
} & CommonState;

export const initialState: NotificationState = {
  notificationList: [],
  status: StatusEnum.LOADING,
  total: 0,
};

const slice = createSlice({
  name: "notification",
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

    builder.addCase(listNotificationInfoThunk.pending, (state) => {
        state.status = StatusEnum.LOADING;
    });
    builder.addCase(listMoreNotificationInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });

    builder.addCase(listNotificationInfoThunk.fulfilled, (state, {payload}) => {
      state.status = StatusEnum.LOADING;
      const { response, error } = payload;
      if (error) return;
      state.status = StatusEnum.SUCCEEDED;
      state.notificationList= response?.notificationListList || [];
      state.total = response?.total || 0;
  });

  builder.addCase(listMoreNotificationInfoThunk.fulfilled, (state, {payload}) => {
    state.status = StatusEnum.LOADING;
    const { response, error } = payload;
    if (error) return;
    state.status = StatusEnum.SUCCEEDED;
    state.notificationList= state.notificationList.concat(
                         response?.notificationListList || []);
    state.total += response?.total || 0;
});

  builder.addCase(deleteNotificationInfoThunk.pending, (state) => {
      state.status = StatusEnum.LOADING;
  });

  builder.addCase(deleteNotificationInfoThunk.fulfilled, (state, {payload}) => {
    state.status = StatusEnum.LOADING;

    const { response, error } = payload;
    if (error) return;
    state.status = StatusEnum.SUCCEEDED;

    state.notificationList = state.notificationList.
                                filter(noti => noti.id != response?.id)
    state.total -=1 
})

  builder.addCase(updateNotificationInfoThunk.pending, (state) => {
    state.status = StatusEnum.LOADING;
  });

  builder.addCase(updateNotificationInfoThunk.fulfilled, (state, {payload}) => {
    state.status = StatusEnum.LOADING;

    const { response, error } = payload;
    if (error) return;
    state.status = StatusEnum.SUCCEEDED;

    state.notificationList.forEach(noti => noti.isSeen =  (noti.id == response?.idUpdated) ? true : noti.isSeen)
})
  
  },
});

export const selectNotificationList = (state: RootState) => state.notificationList
export const isNotificationListLoading = (state: RootState) =>
  state.notificationList.status === StatusEnum.LOADING;

export default slice.reducer;
