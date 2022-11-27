import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "./NavBar";

const Stack = createNativeStackNavigator();

export const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="Notification Home"
        options={{
          title: "Notifications",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
