import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CustomNavBar } from '../comp/NavBar'
import ActivityDetail from '../screens/Activity/ActivityDetail'
import ActivityList from '../screens/Activity/ActivityList'
import AppSetting from '../screens/Profile/AppSetting'
import ProfileSetting from '../screens/Profile/ProfileSetting'
import HomeTabs from './HomeTab'
import Login from '../screens/Authentication/Login'
import Signup from '../screens/Authentication/Signup'
import Intro from '../screens/Authentication/Intro'
import GetInfo from '../screens/Authentication/GetInfo'
import RunResult from '../screens/Run/RunResult'
import PlanDetail from '../screens/Plan/PlanDetail'
import PlanAdd from '../screens/Plan/PlanAdd'
import RunCommit from '../screens/Run/RunCommit'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import { TrackPoint, ActivityType } from '../lib/activity/activity_pb'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectUserSlice } from '../redux/features/user/slice'
import { useEffect } from 'react'
import { getMeThunk } from '../redux/features/user/thunk'
import NotificationList from '../screens/Profile/NotificationList'
import { toast } from '../utils/toast/toast'

export type RootBaseStackParamList = {
  // Home tabs
  HomeTabs: undefined

  // Activity
  ActivityDetail: {
    activityId: number
  }
  ActivityList: {}

  // Run
  RunResult: {
    display: {
      distance: string
      time: string
      pace: string
      kcal: string
    }
    savingInfo: {
      duration: number
      kcal: number
      totalDistance: number
      routeList: Array<TrackPoint.AsObject>
      startTime: google_protobuf_timestamp_pb.Timestamp.AsObject
      endTime: google_protobuf_timestamp_pb.Timestamp.AsObject
    }
    // pass function to reset
    resetRunInfo: () => void
  }

  RunCommit: {
    activityId: number
    activityType: ActivityType
    resetRunInfo: () => void
  }

  PlanDetail: {
    planId: number
    canEdit: boolean
  }

  PlanAdd: undefined

  // Profile
  ProfileSetting: undefined
  AppSetting: undefined

  // Notification
  NotificationList: {}

  // Auth
  Login: undefined
  Signup: undefined
  Intro: undefined
  GetInfo: undefined
}

const Stack = createNativeStackNavigator<RootBaseStackParamList>()

export const BaseStack = () => {
  const dispatch = useAppDispatch()
  // const loading = useAppSelector(isUserSliceLoading);
  const { isSignedIn } = useAppSelector(selectUserSlice)

  const getMe = async () => {
    const { response, error } = await dispatch(getMeThunk()).unwrap()
    if (error) {
      toast.error({ message: 'Unauthenticated!' })
    }
  }

  useEffect(() => {
    getMe()
  }, [])

  return (
    <Stack.Navigator screenOptions={{ header: CustomNavBar }}>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ActivityList"
            options={{
              title: 'All activities',
              headerBackVisible: true,
            }}
            component={ActivityList}
          />
          <Stack.Screen
            name="ActivityDetail"
            options={{
              title: 'Detail',
              headerBackVisible: true,
            }}
            component={ActivityDetail}
          />
          <Stack.Screen
            name="RunResult"
            options={{
              title: 'Run Result',
              headerBackVisible: true,
            }}
            component={RunResult}
          />
          <Stack.Screen
            name="RunCommit"
            options={{
              title: 'Run Commit',
              headerBackVisible: true,
            }}
            component={RunCommit}
          />
          <Stack.Screen
            name="PlanDetail"
            options={{
              title: 'Plan Detail',
              headerBackVisible: true,
            }}
            component={PlanDetail}
          />
          <Stack.Screen
            name="PlanAdd"
            options={{
              title: 'Add New Plan',
              headerBackVisible: true,
            }}
            component={PlanAdd}
          />
          <Stack.Screen
            name="AppSetting"
            options={{
              title: 'Settings',
              headerBackVisible: true,
            }}
            component={AppSetting}
          />
          <Stack.Screen
            name="ProfileSetting"
            options={{
              title: 'Profile settings',
              headerBackVisible: true,
            }}
            component={ProfileSetting}
          />
          <Stack.Screen
            name="NotificationList"
            options={{
              title: 'Notifications',
              headerBackVisible: true,
            }}
            component={NotificationList}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Intro"
            options={{
              title: 'Intro',
              headerShown: false,
            }}
            component={Intro}
          />
          <Stack.Screen
            name="Login"
            options={{
              title: 'Login',
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            options={{
              title: 'Create new account',
              headerShown: false,
            }}
            component={Signup}
          />
          <Stack.Screen
            name="GetInfo"
            options={{
              title: 'Info',
              headerShown: false,
            }}
            component={GetInfo}
          />
        </>
      )}
    </Stack.Navigator>
  )
}
