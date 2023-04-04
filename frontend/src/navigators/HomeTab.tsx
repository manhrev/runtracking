import Activity from '../screens/Activity/ActivityHome'
import ProfileHome from '../screens/Profile/ProfileHome/index'
import RunHome from '../screens/Run/RunHome'
import { RootBaseStackParamList } from './BaseStack'
import PlanHome from '../screens/Plan/PlanHome'
import GroupTopTabs from './GroupTopTab'
import { useAppTheme } from '../theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from '../comp/TabBar'

export type RootHomeTabsParamList = {
  ActivityHome: undefined
  GroupHome: undefined
  ProfileHome: undefined
  RunHome: undefined
  PlanHome: undefined
} & RootBaseStackParamList

const Tab = createBottomTabNavigator<RootHomeTabsParamList>()

export default function HomeTabs() {
  const theme = useAppTheme()
  return (
    <Tab.Navigator
      initialRouteName="GroupHome"
      backBehavior="initialRoute"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} theme={theme} />}
    >
      <Tab.Screen name="GroupHome" component={GroupTopTabs} />
      <Tab.Screen name="ActivityHome" component={Activity} />
      <Tab.Screen
        name="RunHome"
        component={RunHome}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate('RunTracking')
          },
        })}
      />
      <Tab.Screen name="PlanHome" component={PlanHome} />
      <Tab.Screen name="ProfileHome" component={ProfileHome} />
    </Tab.Navigator>
  )
}
