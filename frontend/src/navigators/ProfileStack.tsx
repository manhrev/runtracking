import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomNavBar } from "../comp/NavBar";
import AppSetting from "../screens/Profile/AppSetting";
import ProfileHome from "../screens/Profile/ProfileHome";
import ProfileSetting from "../screens/Profile/ProfileSetting";

export type RootProfileParamList = {
  ProfileHome: undefined;
  ProfileSetting: undefined;
  AppSetting: undefined;
};

const Stack = createNativeStackNavigator<RootProfileParamList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="ProfileHome"
        options={{
          title: "Profile",
          headerShown: false,
        }}
        component={ProfileHome}
      />
      <Stack.Screen
        name="AppSetting"
        options={{
          title: "Settings",
        }}
        component={AppSetting}
      />
      <Stack.Screen
        name="ProfileSetting"
        options={{
          title: "Profile settings",
        }}
        component={ProfileSetting}
      />
    </Stack.Navigator>
  );
};
