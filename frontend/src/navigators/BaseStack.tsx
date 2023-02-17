import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "../comp/NavBar";
import ActivityDetail from "../screens/Activity/ActivityDetail";
import ActivityList from "../screens/Activity/ActivityList";
import AppSetting from "../screens/Profile/AppSetting";
import ProfileSetting from "../screens/Profile/ProfileSetting";
import HomeTabs from "./HomeTab";
import Login from "../screens/Authentication/Login";
import Signup from "../screens/Authentication/Signup";
import Intro from "../screens/Authentication/Intro";
import GetInfo from "../screens/Authentication/GetInfo";
import RunResult from "../screens/Run/RunResult";
import RunHome from "../screens/Run/RunHome";
import { notificationClient } from "../utils/grpc";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Subscription } from 'expo-modules-core';
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import {
  CreateActivityInfoRequest,
  CreateActivityInfoReply,
  ActivityInfo,
  TrackPoint,
} from "../lib/activity/activity_pb";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  isUserSliceLoading,
  selectUserSlice,
} from "../redux/features/user/slice";
import { View, Platform  } from "react-native";
import { Text } from "react-native-paper";
import { useEffect, useRef, useState } from "react";
import { getMeThunk } from "../redux/features/user/thunk";
import ComingSoon from "../screens/ComingSoon";
import { ExpoPushTokenRequest } from "../lib/notification/notification_pb";

export type RootBaseStackParamList = {
  // Home tabs
  HomeTabs: undefined;

  // Activity
  ActivityDetail: {
    activityId: number;
  };
  ActivityList: {};

  // Run
  RunResult: {
    display: {
      distance: string;
      time: string;
      pace: string;
      kcal: string;
    };
    savingInfo: {
      duration: number;
      kcal: number;
      totalDistance: number;
      routeList: Array<TrackPoint.AsObject>;
      startTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
      endTime: google_protobuf_timestamp_pb.Timestamp.AsObject;
    };
    // pass function to reset
    resetRunInfo: () => void;
  };

  // Profile
  ProfileSetting: undefined;
  AppSetting: undefined;

  // Notification
  NotificationList: undefined;

  // Auth
  Login: undefined;
  Signup: undefined;
  Intro: undefined;
  GetInfo: undefined;
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


const Stack = createNativeStackNavigator<RootBaseStackParamList>();

export const BaseStack = () => {
  const dispatch = useAppDispatch();
  // const loading = useAppSelector(isUserSliceLoading);
  const { isSignedIn } = useAppSelector(selectUserSlice);
  
  const [notification, setNotification] = useState<Notifications.Notification>();
  const notificationListener = useRef<Subscription>();                  
  const responseListener =useRef<Subscription>();

 

  const getMe = async () => {
    const { response ,error } = await dispatch(getMeThunk()).unwrap();
    if (error) {
      alert("Un authenticated!");
    }
  };

  useEffect(() => {
    getMe();
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      // Notifications.removeNotificationSubscription(notificationListener.current);
      // Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // }

  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ActivityList"
            options={{
              title: "All activities",
              headerBackVisible: true,
            }}
            component={ActivityList}
          />
          <Stack.Screen
            name="ActivityDetail"
            options={{
              title: "Detail",
              headerBackVisible: true,
            }}
            component={ActivityDetail}
          />
          <Stack.Screen
            name="RunResult"
            options={{
              title: "Run Result",
              headerBackVisible: true,
            }}
            component={RunResult}
          />
          <Stack.Screen
            name="AppSetting"
            options={{
              title: "Settings",
              headerBackVisible: true,
            }}
            component={AppSetting}
          />
          <Stack.Screen
            name="ProfileSetting"
            options={{
              title: "Profile settings",
              headerBackVisible: true,
            }}
            component={ProfileSetting}
          />
          <Stack.Screen
            name="NotificationList"
            options={{
              title: "Notifications",
              headerBackVisible: true,
            }}
            component={ComingSoon}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Intro"
            options={{
              title: "Intro",
              headerShown: false,
            }}
            component={Intro}
          />
          <Stack.Screen
            name="Login"
            options={{
              title: "Login",
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            options={{
              title: "Create new account",
              headerShown: false,
            }}
            component={Signup}
          />
          <Stack.Screen
            name="GetInfo"
            options={{
              title: "Info",
              headerShown: false,
            }}
            component={GetInfo}
          />
        </>
      )}
    </Stack.Navigator>
  );
};


