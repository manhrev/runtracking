import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "./NavBar";

const Stack = createNativeStackNavigator();

export const GroupStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="GroupHome"
        options={{
          title: "Group",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
