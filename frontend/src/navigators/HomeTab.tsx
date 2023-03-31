import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Activity from '../screens/Activity/ActivityHome'
import ProfileHome from '../screens/Profile/ProfileHome/index'
import RunHome from '../screens/Run/RunHome'
import { RootBaseStackParamList } from './BaseStack'
import PlanHome from '../screens/Plan/PlanHome'
import GroupTopTabs from './GroupTopTab'

export type RootHomeTabsParamList = {
  ActivityHome: undefined
  GroupHome: undefined
  ProfileHome: undefined
  RunHome: undefined
  PlanHome: undefined
} & RootBaseStackParamList

const Tab = createMaterialBottomTabNavigator<RootHomeTabsParamList>()

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="GroupHome"
      backBehavior="initialRoute"
      shifting
    >
      <Tab.Screen
        name="GroupHome"
        component={GroupTopTabs}
        options={{ tabBarIcon: 'account-group' }}
      />
      <Tab.Screen
        name="ActivityHome"
        component={Activity}
        options={{ tabBarIcon: 'text-box-check' }}
      />
      <Tab.Screen
        name="RunHome"
        component={RunHome}
        options={{ tabBarIcon: 'run' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate('RunTracking')
          },
        })}
      />
      <Tab.Screen
        name="PlanHome"
        component={PlanHome}
        options={{ tabBarIcon: 'file-document-edit' }}
      />
      <Tab.Screen
        name="ProfileHome"
        component={ProfileHome}
        options={{ tabBarIcon: 'account' }}
      />
    </Tab.Navigator>
  )
}
