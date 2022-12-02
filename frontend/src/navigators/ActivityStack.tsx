import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActivityHome from "../screens/Activity/ActivityHome";
import ActivityDetail from "../screens/Activity/ActivityDetail";
import ActivityList from "../screens/Activity/ActivityList";
import { CustomNavBar } from "../comp/NavBar";

export type RootActivityParamList = {
  ActivityHome: undefined;
  ActivityDetail: {
    activityId: number;
  };
  ActivityList: {};
};

const Stack = createNativeStackNavigator<RootActivityParamList>();

export const ActivityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      <Stack.Screen
        name="ActivityHome"
        options={{
          title: "Activity",
        }}
        component={ActivityHome}
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
    </Stack.Navigator>
  );
};
