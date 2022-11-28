import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { ActivityStack } from "./ActivityStack";
import { GroupStack } from "./GroupStack";
import { NotificationStack } from "./NotificationStack";
import { PlanStack } from "./PlanStack";
import { RunStack } from "./RunStack";

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Run" shifting>
      <Tab.Screen
        name="Group"
        component={GroupStack}
        options={{ tabBarIcon: "account-group" }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityStack}
        options={{ tabBarIcon: "text-box-check" }}
      />
      <Tab.Screen
        name="Run"
        component={RunStack}
        options={{ tabBarIcon: "run" }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanStack}
        options={{ tabBarIcon: "file-document-edit" }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{ tabBarIcon: "bell" }}
      />
    </Tab.Navigator>
  );
}