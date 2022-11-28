import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExampleScreen from "../screens/ExampleScreen";
import { CustomNavBar } from "../comp/NavBar";

const Stack = createNativeStackNavigator();

export const RunStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="RunHome"
        options={{
          title: "Run",
        }}
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
