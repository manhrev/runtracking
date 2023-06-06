import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useAppTheme } from '../theme'
import { RootBaseStackParamList } from './BaseStack'
import ComingSoon from '../screens/ComingSoon'
import YourGroups from '../screens/Group/YourGroups'
import Explore from '../screens/Group/Explore'
import UserSearch from '../screens/Group/UserSearch'
import Constants from 'expo-constants'

export type RootGroupTopTabsParamList = {
  YourGroups: undefined
  Explore: undefined
  UserSearch: undefined
} & RootBaseStackParamList

const Tab = createMaterialTopTabNavigator<RootGroupTopTabsParamList>()

export default function GroupTopTabs() {
  const theme = useAppTheme()
  return (
    <Tab.Navigator
      style={{ marginTop: Constants.statusBarHeight }}
      screenOptions={{
        tabBarLabelStyle: { color: theme.colors.primary, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: theme.colors.onPrimary },
      }}
    >
      <Tab.Screen
        name="YourGroups"
        component={YourGroups}
        options={{
          title: 'Your Groups',
        }}
      />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen
        name="UserSearch"
        component={UserSearch}
        options={{
          title: 'People',
        }}
      />
    </Tab.Navigator>
  )
}
