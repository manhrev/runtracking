import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomNavBar } from "../comp/NavBar";
import ProfileHome from "../screens/Profile/ProfileHome";

export type RootProfileParamList = {
  ProfileHome: undefined;
};

const Stack = createNativeStackNavigator<RootProfileParamList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: CustomNavBar, headerShown: false }}
    >
      <Stack.Screen
        name="ProfileHome"
        options={{
          title: "Profile",
        }}
        component={ProfileHome}
      />
    </Stack.Navigator>
  );
};
