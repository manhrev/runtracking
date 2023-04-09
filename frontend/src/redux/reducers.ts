import { combineReducers } from '@reduxjs/toolkit'
import common from './features/common/slice'
import toggle from './features/toggle/slice'
import activityList from './features/activityList/slice'
import activityStatisticList from './features/activityStatistic/slice'
import user from './features/user/slice'
import planList from './features/planList/slice'
import notificationList from './features/notification/slice'
import groupList from './features/groupList/slice'
import yourGroupList from './features/yourGroupList/slice'
import memberList from './features/memberList/slice'
import groupDetail from './features/groupDetail/slice'
import challengeList from './features/challengeList/slice'
import challengeDetail from './features/challengeDetail/slice'
import otherUser from './features/otherUser/slice'

const rootReducer = combineReducers({
  common,
  toggle,
  activityList,
  activityStatisticList,
  user,
  planList,
  notificationList,
  groupList,
  yourGroupList,
  memberList,
  groupDetail,
  challengeList,
  challengeDetail,
  otherUser,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
