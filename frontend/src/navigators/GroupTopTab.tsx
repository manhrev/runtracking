import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Activity from '../screens/Activity/ActivityHome'
import ActivityList from '../screens/Activity/ActivityList'
import { Platform, StatusBar } from 'react-native'
import { useAppTheme } from '../theme'
import { RootBaseStackParamList } from './BaseStack'
import ComingSoon from '../screens/ComingSoon'
import { Text } from 'react-native-paper'
import YourGroups from '../screens/Group/YourGroups'
import Explore from '../screens/Group/Explore'

const heightStatus = Platform.OS === 'android' ? StatusBar.currentHeight : 25

export type RootGroupTopTabsParamList = {
  YourGroups: undefined
  Explore: undefined
  Events: undefined
} & RootBaseStackParamList

const Tab = createMaterialTopTabNavigator<RootGroupTopTabsParamList>()

export default function GroupTopTabs() {
  const theme = useAppTheme()
  return (
    <Tab.Navigator
      style={{ marginTop: heightStatus }}
      screenOptions={{
        tabBarLabelStyle: { color: theme.colors.primary, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: theme.colors.onPrimary },
      }}
    >
      <Tab.Screen name="YourGroups" component={YourGroups} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Events" component={ComingSoon} />
    </Tab.Navigator>
  )
}
