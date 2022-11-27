import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "./NavBar";

const Stack = createNativeStackNavigator();

export const PlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="Plan Home"
        options={{
          title: "Your Plan",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
