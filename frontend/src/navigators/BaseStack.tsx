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
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useEffect } from "react";
import { getMeThunk } from "../redux/features/user/thunk";

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

const Stack = createNativeStackNavigator<RootBaseStackParamList>();

export const BaseStack = () => {
  const dispatch = useAppDispatch();
  // const loading = useAppSelector(isUserSliceLoading);
  const { isSignedIn } = useAppSelector(selectUserSlice);

  useEffect(() => {
    dispatch(getMeThunk());
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
            component={ExampleScreen}
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
