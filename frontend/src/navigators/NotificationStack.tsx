import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "../comp/NavBar";

const Stack = createNativeStackNavigator();

export const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="NotificationHome"
        options={{
          title: "Notifications",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
