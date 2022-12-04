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

export type RootBaseStackParamList = {
  // Home tabs
  HomeTabs: undefined;

  // Activity
  ActivityDetail: {
    activityId: number;
  };
  ActivityList: {};

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
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
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
    </Stack.Navigator>
  );
};
