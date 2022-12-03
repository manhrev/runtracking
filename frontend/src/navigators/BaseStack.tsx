import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "../comp/NavBar";
import ActivityDetail from "../screens/Activity/ActivityDetail";
import ActivityList from "../screens/Activity/ActivityList";
import AppSetting from "../screens/Profile/AppSetting";
import ProfileSetting from "../screens/Profile/ProfileSetting";
import HomeTabs from "./HomeTab";

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
    </Stack.Navigator>
  );
};
