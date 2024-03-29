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
import RunTracking from '../screens/Run/RunTracking'
import RunResult from '../screens/Run/RunResult'
import PlanDetail from '../screens/Plan/PlanDetail'
import PlanEdit from '../screens/Plan/PlanEdit'
import PlanAdd from '../screens/Plan/PlanAdd'
import RunCommit from '../screens/Run/RunCommit'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import { TrackPoint, ActivityType } from '../lib/activity/activity_pb'
import { GroupInfo, ChallengeInfo } from '../lib/group/group_pb'
import { useAppDispatch, useAppSelector } from '../redux/store'
import {
  isUserSliceLoading,
  selectUserSlice,
} from '../redux/features/user/slice'
import { useEffect, useState } from 'react'
import { getMeThunk } from '../redux/features/user/thunk'
import NotificationList from '../screens/Profile/NotificationList'
import ConversationList from '../screens/Profile/ConversationList'
import GroupAdd from '../screens/Group/YourGroups/GroupAdd'
import GroupDetail from '../screens/Group/YourGroups/GroupDetail'
import GroupEdit from '../screens/Group/YourGroups/GroupEdit'
import GroupMembers from '../screens/Group/YourGroups/GroupMembers'
import MemberRanking from '../screens/Group/YourGroups/MemberRanking'
import ChallengeList from '../screens/Group/Challenge/ChallengeList'
import ChallengeAdd from '../screens/Group/Challenge/ChallengeAdd'
import ChallengeEdit from '../screens/Group/Challenge/ChallengeEdit'
import ChallengeDetail from '../screens/Group/Challenge/ChallengeDetail'
import ChallengeStats from '../screens/Group/Challenge/ChallengeStats'
import { toast } from '../utils/toast/toast'
import OtherUser from '../screens/OtherUser'
import Chat from '../screens/OtherUser/Chat'
import EventDetail from '../screens/Group/Event/EventDetail'
import {
  CreateSubEvent as CreateSubEventPb,
  EventDetail as EventDetailPb,
} from '../lib/event/event_pb'
import GroupsInEvent from '../screens/Group/Event/EventDetail/GroupsInEvent'
import EventList from '../screens/Group/Event/EventList'
import CreateEvent from '../screens/Group/Event/CreateEvent'
import SubEventCreate from '../screens/Group/Event/CreateEvent/SubEventCreate'
import EditEvent from '../screens/Group/Event/EditEvent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoadingOverlay } from '../comp/LoadingOverlay'
import GoToEvent from '../screens/Profile/GoToEvent'
import InviteGroupsToEvent from '../screens/Group/Event/InviteGroupsToEvent'

export type RootBaseStackParamList = {
  // Home tabs
  HomeTabs: undefined

  // Activity
  ActivityDetail: {
    activityId: number
  }
  ActivityList: {}

  // Run
  RunTracking: {
    planId: number
    activityType: ActivityType
  }
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
      acType: ActivityType
    }
    selectedPlanId: number
    // pass function to reset
    resetRunInfo: () => void
  }

  RunCommit: {
    activityId: number
    activityType: ActivityType
    selectedPlanId: number
    resetRunInfo: () => void
  }

  PlanDetail: {
    planId: number
    canEdit: boolean
  }

  PlanEdit: {
    planId: number
    canEdit: boolean
  }

  PlanAdd: undefined

  // Profile
  ProfileSetting: undefined
  AppSetting: undefined

  // Notification
  NotificationList: {}

  // Notification
  ConversationList: undefined

  // Auth
  Login: undefined
  Signup: undefined
  Intro: undefined
  GetInfo: undefined

  // Group
  GroupAdd: {
    reloadYourGroupList: () => void
  }
  GroupDetail: {
    groupId: number
    detailFrom: 'YourGroups' | 'Explore' | 'Notification'
    reloadListFunc: () => void
  }
  GroupEdit: {
    groupInfo: GroupInfo.AsObject | undefined
    reloadDetailFunc: () => void
  }
  GroupMembers: {
    groupId: number
    isLeader: boolean
  }
  MemberRanking: {
    groupId: number
    isLeader: boolean
  }

  // Challenge
  ChallengeList: {
    groupId: number
    isLeader: boolean
    leaderId: number
  }
  ChallengeAdd: {
    groupId: number
    reloadListFunc: () => void
  }
  ChallengeEdit: {
    groupId: number
    challengeInfo: ChallengeInfo.AsObject | undefined
    reloadDetailFunc: () => void
  }
  ChallengeDetail: {
    challengeId: number
    canEdit: boolean
    leaderId: number
  }
  ChallengeStats: {
    challengeId: number
    leaderId: number
  }

  // user
  OtherUser: {
    userId: number
  }

  Chat: {
    userId: number
    toUserId: number
  }

  // event
  EventDetail: {
    event: EventDetailPb.AsObject
    yourGroupId: number
    reloadEventList: () => void
  }
  GroupsInEvent: {
    eventId: number
    isAdmin: boolean
  }
  EventList: {}
  CreateEvent: {
    ownerGroupId: number
  }
  CreateSubEvent: {
    subEventList: CreateSubEventPb.AsObject[]
    setSubEventList: Function
  }
  EditEvent: {
    event: EventDetailPb.AsObject
    reloadEvent: () => void
    // yourGroupId: number
  }
  GoToEvent: {
    eventId: number
  }
  InviteGroupsToEvent: {
    eventId: number
    ownerGroupId: number
  }
}

const Stack = createNativeStackNavigator<RootBaseStackParamList>()

export const BaseStack = () => {
  const dispatch = useAppDispatch()
  const { isSignedIn } = useAppSelector(selectUserSlice)
  const [loading, setLoading] = useState(false)
  const [onboard, setOnboard] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const onboard = await AsyncStorage.getItem('onboard')
      const { response, error } = await dispatch(getMeThunk()).unwrap()
      if (onboard === null) {
        setOnboard(true)
      }
      setLoading(false)
      if (error) {
        if (onboard !== null) {
          toast.error({ message: 'Unauthenticated!' })
        }
      }
    })()
  }, [])

  return (
    <>
      <LoadingOverlay loading={loading} />
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
              name="RunTracking"
              options={{
                title: 'Run Tracking',
                headerShown: false,
              }}
              component={RunTracking}
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
              name="PlanEdit"
              options={{
                title: 'Plan Edit',
                headerBackVisible: true,
              }}
              component={PlanEdit}
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

            <Stack.Screen
              name="ConversationList"
              options={{
                title: 'Chats',
                headerBackVisible: true,
              }}
              component={ConversationList}
            />
            <Stack.Screen
              name="GroupAdd"
              options={{
                title: 'Add New Group',
                headerBackVisible: true,
              }}
              component={GroupAdd}
            />
            <Stack.Screen
              name="GroupDetail"
              options={{
                title: 'Group Detail',
                headerBackVisible: true,
                headerShown: false,
              }}
              component={GroupDetail}
            />
            <Stack.Screen
              name="GroupEdit"
              options={{
                title: 'Group Edit',
                headerBackVisible: true,
              }}
              component={GroupEdit}
            />
            <Stack.Screen
              name="GroupMembers"
              options={{
                title: 'Members of Group',
                headerBackVisible: true,
              }}
              component={GroupMembers}
            />
            <Stack.Screen
              name="MemberRanking"
              options={{
                title: 'User Ranking',
                headerBackVisible: true,
              }}
              component={MemberRanking}
            />
            <Stack.Screen
              name="ChallengeList"
              options={{
                title: 'Challenges',
                headerBackVisible: true,
              }}
              component={ChallengeList}
            />
            <Stack.Screen
              name="ChallengeAdd"
              options={{
                title: 'Add New Challenge',
                headerBackVisible: true,
              }}
              component={ChallengeAdd}
            />
            <Stack.Screen
              name="ChallengeEdit"
              options={{
                title: 'Edit Challenge',
                headerBackVisible: true,
              }}
              component={ChallengeEdit}
            />
            <Stack.Screen
              name="ChallengeDetail"
              options={{
                title: 'Challenge Detail',
                headerBackVisible: true,
              }}
              component={ChallengeDetail}
            />
            <Stack.Screen
              name="ChallengeStats"
              options={{
                title: 'Challenge Members Stats',
                headerBackVisible: true,
              }}
              component={ChallengeStats}
            />
            <Stack.Screen
              name="OtherUser"
              options={{
                title: 'User Detail',
                headerBackVisible: true,
              }}
              component={OtherUser}
            />
            <Stack.Screen
              name="Chat"
              options={{
                title: 'Chat',
                headerBackVisible: true,
              }}
              component={Chat}
            />
            <Stack.Screen
              name="EventDetail"
              options={{
                title: 'Event Detail',
                headerShown: false,
                headerBackVisible: true,
              }}
              component={EventDetail}
            />
            <Stack.Screen
              name="GroupsInEvent"
              options={{
                title: 'Groups in this event',
                headerBackVisible: true,
              }}
              component={GroupsInEvent}
            />
            <Stack.Screen
              name="EventList"
              options={{
                title: 'Events',
                headerBackVisible: true,
              }}
              component={EventList}
            />
            <Stack.Screen
              name="CreateEvent"
              options={{
                title: 'Create new event',
                headerBackVisible: true,
              }}
              component={CreateEvent}
            />
            <Stack.Screen
              name="CreateSubEvent"
              options={{
                title: 'Create challenge',
                headerBackVisible: true,
              }}
              component={SubEventCreate}
            />
            <Stack.Screen
              name="EditEvent"
              options={{
                title: 'Edit event',
                headerBackVisible: true,
              }}
              component={EditEvent}
            />
            <Stack.Screen
              name="GoToEvent"
              options={{
                title: 'Chosse your group',
                headerBackVisible: true,
              }}
              component={GoToEvent}
            />
            <Stack.Screen
              name="InviteGroupsToEvent"
              options={{
                title: 'Invite groups to event',
                headerBackVisible: true,
              }}
              component={InviteGroupsToEvent}
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
    </>
  )
}
