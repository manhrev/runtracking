import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import ExampleScreen from "../screens/ExampleScreen";
import Activity from "../screens/Activity/ActivityHome";
import ProfileHome from "../screens/Profile/ProfileHome";
import RunHome from "../screens/Run/RunHome";
import { RootBaseStackParamList } from "./BaseStack";

export type RootHomeTabsParamList = {
  ActivityHome: undefined;
  GroupHome: undefined;
  ProfileHome: undefined;
  RunHome: undefined;
  PlanHome: undefined;
} & RootBaseStackParamList;

const Tab = createMaterialBottomTabNavigator<RootHomeTabsParamList>();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ActivityHome"
      backBehavior="initialRoute"
      shifting
    >
      <Tab.Screen
        name="GroupHome"
        component={ExampleScreen}
        options={{ tabBarIcon: "account-group" }}
      />
      <Tab.Screen
        name="ActivityHome"
        component={Activity}
        options={{ tabBarIcon: "text-box-check" }}
      />
      <Tab.Screen
        name="RunHome"
        component={RunHome}
        options={{ tabBarIcon: "run" }}
      />
      <Tab.Screen
        name="PlanHome"
        component={ExampleScreen}
        options={{ tabBarIcon: "file-document-edit" }}
      />
      <Tab.Screen
        name="ProfileHome"
        component={ProfileHome}
        options={{ tabBarIcon: "account" }}
      />
    </Tab.Navigator>
  );
}
