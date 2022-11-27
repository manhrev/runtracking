import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "./NavBar";

const Stack = createNativeStackNavigator();

export const RunStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="Run Home"
        options={{
          title: "Run",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
