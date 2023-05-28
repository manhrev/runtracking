import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'
import {
  Button,
  IconButton,
  Text,
  List,
  Avatar,
  ActivityIndicator,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useState, useEffect, useRef } from 'react'
import * as Progress from 'react-native-progress'
import { getPlanList } from '../../redux/features/planList/slice'
import { listPlanThunk } from '../../redux/features/planList/thunk'
import {
  isEventListLoading,
  isGroupInEventLoading,
  isGroupInfoMapLoading,
  selectEventList,
} from '../../redux/features/eventList/slice'
import { PlanInfo, RuleStatus } from '../../lib/plan/plan_pb'
import {
  ChallengeInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../lib/group/group_pb'
import { EventDetail, GroupInEvent } from '../../lib/event/event_pb'
import {
  ActivityType,
  CommitActivityRequest,
  CommitObject,
  CommitType,
} from '../../lib/activity/activity_pb'
import { activityClient } from '../../utils/grpc'
import { groupClient } from '../../utils/grpc'
import {
  displayValue,
  getProgressOfDailyActivity,
  isDailyActivity,
  toDate,
} from '../../utils/helpers'
import { toast } from '../../utils/toast/toast'
import ChallengeItem from './comp/ChallengeItem'
import EventItem from './comp/EventItem'
import PlanItem from './comp/PlanItem'
import GroupItem from './comp/GroupItem'
import { baseStyles } from '../baseStyle'
import { text } from 'stream/consumers'
import {
  getGroupInfoThunk,
  listEventsThunk,
  listGroupInEventThunk,
} from '../../redux/features/eventList/thunks'
import { listYourGroupThunk } from '../../redux/features/yourGroupList/thunk'

const windowWidth = Dimensions.get('window').width

export default function RunCommit({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'RunCommit'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  // loading
  const groupInEventLoading = useAppSelector(isGroupInEventLoading)
  const groupInfoMapLoading = useAppSelector(isGroupInfoMapLoading)
  const groupLoading = groupInEventLoading || groupInfoMapLoading

  const eventListLoading = useAppSelector(isEventListLoading)

  // show hide
  const [showPlan, setShowPlan] = useState(false)
  const [showChallenge, setShowChallenge] = useState(false)
  const [showEvent, setShowEvent] = useState(false)
  const [showGroup, setShowGroup] = useState(false)

  const { eventList, groupInfoMap } = useAppSelector(selectEventList)
  const [selectedEvent, setSelectedEvent] = useState<EventDetail.AsObject>(
    {} as EventDetail.AsObject
  )

  const [groupsInEventList, setGroupsInEventList] = useState<
    GroupInEvent.AsObject[]
  >([])
  const [selectedGroupInEvent, setSelectedGroupInEvent] =
    useState<GroupInEvent.AsObject>({} as GroupInEvent.AsObject)

  const { planList } = useAppSelector(getPlanList)
  const [selectedPlan, setSelectedPlan] = useState<PlanInfo.AsObject>(
    {} as PlanInfo.AsObject
  )

  // user
  const userState = useAppSelector((state) => state.user)

  // challenge commit
  const [challengeList, setChallengeList] = useState<ChallengeInfo.AsObject[]>(
    []
  )
  const [selectedChallenge, setSelectedChallenge] =
    useState<ChallengeInfo.AsObject>({} as ChallengeInfo.AsObject)
  const fetchChallengeData = async () => {
    const res = await groupClient.listInProgressChallenge({
      userId: userState.userId,
      activitytype: route.params.activityType,
    })
    if (res.error) {
      console.log(res.error)
    } else {
      setChallengeList(res.response?.challengeInfoListList || [])
      if (res.response?.challengeInfoListList?.length) {
        setSelectedChallenge(res.response?.challengeInfoListList[0])
      }
    }
  }

  const fetchPlanData = async () => {
    const res = await dispatch(
      listPlanThunk({
        activityType: 0,
        ascending: false,
        limit: 100,
        offset: 0,
        sortBy: 1,
        idsList: [],
      })
    ).unwrap()
  }

  useEffect(() => {
    if (planList.length > 0) {
      if (route.params.selectedPlanId != -1) {
        // find plan that id is the same as selectedPlan.id
        for (let i = 0; i < planList.length; i++) {
          if (planList[i].id == route.params.selectedPlanId) {
            setSelectedPlan(planList[i])
            break
          }
        }
      } else {
        // check each plan, if it is in progress and has the same activity type as the current activity, select it
        for (let i = 0; i < planList.length; i++) {
          if (
            planList[i].status === RuleStatus.RULE_STATUS_INPROGRESS &&
            planList[i].activityType == route.params.activityType
          ) {
            setSelectedPlan(planList[i])
            break
          }
        }
      }
    }
  }, [planList])

  const fetchListEvent = async () => {
    let resGroupList = []
    const response = await dispatch(
      listYourGroupThunk({
        ascending: true,
        limit: 100,
        filterBy: 1, // is member
        offset: 0,
        searchByName: '',
        sortBy: 1,
        groupIdsList: [],
      })
    ).unwrap()

    if (response.error) {
      console.log(response.error)
      return
    } else {
      resGroupList = response.response?.groupListList || []
      // if(resGroupList.length == 0) {
      //   return
      // }
    }

    const res = await dispatch(
      listEventsThunk({
        ascending: true,
        limit: 100,
        visibility: 0,
        search: '',
        offset: 0,
        groupIdsList: getGroupIds(resGroupList),
        idsList: [],
        sortBy: 0,
        yourGroupId: 0,
      })
    ).unwrap()

    if (res.error) {
      console.log(res.error)
    } else {
      if (filteredEventList.length > 0) {
        setSelectedEvent(filteredEventList[0])
      }
    }
  }

  const fetchListEventGroupsAndInfo = async () => {
    const { response, error } = await dispatch(
      listGroupInEventThunk({
        eventId: selectedEvent.id,
        limit: 100,
        offset: 0,
      })
    ).unwrap()
    if (error) {
      return
    }
    let groupList: number[] = []
    if (response) {
      groupList = response.groupsList.map((group) => group.id)
      setGroupsInEventList(response?.groupsList || [])
      if (response?.groupsList?.length) {
        setSelectedGroupInEvent(response?.groupsList[0]) // auto select first group
      }
    }
    dispatch(
      getGroupInfoThunk({
        ascending: true,
        filterBy: ListGroupRequest.FilterBy.FILTER_BY_UNSPECIFIED,
        groupIdsList: groupList,
        limit: 999,
        offset: 0,
        searchByName: '',
        sortBy: GroupSortBy.GROUP_SORT_BY_CREATED_TIME,
      })
    )
  }

  useEffect(() => {
    if (selectedEvent.id) {
      fetchListEventGroupsAndInfo()
    }
  }, [selectedEvent])

  useEffect(() => {
    fetchPlanData()
    fetchChallengeData()
    fetchListEvent()
  }, [])

  const getGroupIds = (groupList: any) => {
    if (groupList.length == 0) return [0] // return [0] to get empty list when fetching event

    const groupIds: number[] = []
    for (let i = 0; i < groupList.length; i++) {
      groupIds.push(groupList[i].id)
    }
    return groupIds
  }

  const commitToPlan = async (): Promise<boolean> => {
    const commitObj: CommitObject.AsObject = {
      commitId: selectedPlan.id,
      commitType: CommitType.COMMIT_TYPE_PLAN,
      rule: selectedPlan.rule,
      userGroupId: 0, // ignore
    }
    const commitReq: CommitActivityRequest.AsObject = {
      activityId: route.params.activityId,
      commitToList: [commitObj],
    }
    console.log(commitReq)

    const res = await activityClient.commitActivity(commitReq)
    if (!res.error) {
      return true
    }
    return false
  }

  const commitToChallenge = async (): Promise<boolean> => {
    const commitObj: CommitObject.AsObject = {
      commitId: selectedChallenge.id,
      commitType: CommitType.COMMIT_TYPE_CHALLENGE,
      rule: 1, // ignore,
      userGroupId: 0, // ignore
    }

    const commitReq: CommitActivityRequest.AsObject = {
      activityId: route.params.activityId,
      commitToList: [commitObj],
    }
    console.log(commitReq)

    const res = await activityClient.commitActivity(commitReq)
    if (!res.error) {
      return true
    }
    return false
  }

  const commitToEvent = async () => {
    const commitObj: CommitObject.AsObject = {
      commitId: selectedEvent.id,
      commitType: CommitType.COMMIT_TYPE_EVENT,
      rule: 0,
      userGroupId: selectedGroupInEvent.id,
    }

    const commitReq: CommitActivityRequest.AsObject = {
      activityId: route.params.activityId,
      commitToList: [commitObj],
    }
    console.log(commitReq)

    const res = await activityClient.commitActivity(commitReq)
    if (!res.error) {
      return true
    }
    return false
  }

  const commitAll = async () => {
    const planStatus = filteredPlanList.length > 0 ? await commitToPlan() : true
    const challengeStatus =
      challengeList.length > 0 ? await commitToChallenge() : true
    const eventStatus =
      filteredEventList.length > 0 ? await commitToEvent() : true

    console.log(planStatus, challengeStatus, eventStatus)

    let failedItems = []
    if (!planStatus) {
      failedItems.push('plan')
    }
    if (!challengeStatus) {
      failedItems.push('challenge')
    }
    if (!eventStatus) {
      failedItems.push('event')
    }

    if (failedItems.length > 0) {
      toast.error({ message: `Commit to ${failedItems.join(', ')} failed` })
    } else {
      toast.success({ message: 'Commit successfully' })
    }
    navigation.goBack()
  }

  const getSelectedPlan = () => {
    if (filteredPlanList.length > 0) {
      // find plan that id is the same as selectedPlan.id
      for (let i = 0; i < filteredPlanList.length; i++) {
        if (filteredPlanList[i].id === selectedPlan.id) {
          return filteredPlanList[i]
        }
      }
    }
    return null
  }

  const getSelectedChallenge = () => {
    if (challengeList.length > 0) {
      // find challenge that id is the same as selectedChallenge.id
      for (let i = 0; i < challengeList.length; i++) {
        if (challengeList[i].id === selectedChallenge.id) {
          return challengeList[i]
        }
      }
    }
    return null
  }

  const backToHome = () => {
    route.params.resetRunInfo()
    navigation.goBack()
  }

  const filteredPlanList = planList.filter(
    (item) =>
      item.status === RuleStatus.RULE_STATUS_INPROGRESS &&
      item.activityType == route.params.activityType
  )

  const getSeconds = (time: number | undefined) => {
    if (time) {
      return time * 1000
    }
    return 0
  }

  const filteredEventList = eventList.filter(
    // startAt is <= now and endAt is >= now
    (item) =>
      getSeconds(item.startAt?.seconds) <= Date.now() &&
      getSeconds(item.endAt?.seconds) >= Date.now()
  )

  return (
    <>
      <View style={styles(theme).container}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <IconButton
              icon="check-circle"
              size={100}
              iconColor={theme.colors.primary}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles(theme).title}>
              Your activity has been recorded !
            </Text>
            <Text style={{ alignSelf: 'center', fontSize: 15 }}>
              Chose a plan, challenge or event to contribute to
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                >
                  Plan:
                </Text>

                <TouchableOpacity
                  onPress={() => setShowPlan(!showPlan)}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: theme.colors.primary,
                    }}
                  >
                    {selectedPlan.name ? selectedPlan.name : 'No data'}
                  </Text>

                  <Avatar.Icon
                    icon={showPlan ? 'chevron-up' : 'chevron-down'}
                    size={35}
                    color={theme.colors.primary}
                    style={{
                      backgroundColor: 'transparent',
                    }}
                  />
                </TouchableOpacity>
              </View>

              {!showPlan &&
                getSelectedPlan() != null && ( // show selected plan
                  <PlanItem
                    key={getSelectedPlan().name}
                    plan={getSelectedPlan()}
                    hideTopDivider={true}
                    showBottomDivider={true}
                    navigateFunc={() =>
                      navigation.navigate('PlanDetail', {
                        planId: getSelectedPlan().id,
                        canEdit: false,
                      })
                    }
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                )}

              {showPlan &&
                filteredPlanList.map(
                  (
                    plan,
                    idx // show all plans
                  ) => (
                    <PlanItem
                      key={idx}
                      plan={plan}
                      hideTopDivider={idx === 0}
                      showBottomDivider={idx === filteredPlanList.length - 1}
                      navigateFunc={() =>
                        navigation.navigate('PlanDetail', {
                          planId: plan.id,
                          canEdit: false,
                        })
                      }
                      selectedPlan={selectedPlan}
                      setSelectedPlan={setSelectedPlan}
                    />
                  )
                )}
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                >
                  Challenge:
                </Text>

                <TouchableOpacity
                  onPress={() => setShowChallenge(!showChallenge)}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: theme.colors.primary,
                    }}
                  >
                    {selectedChallenge.name
                      ? selectedChallenge.name
                      : 'No data'}
                  </Text>

                  <Avatar.Icon
                    icon={showChallenge ? 'chevron-up' : 'chevron-down'}
                    size={35}
                    color={theme.colors.primary}
                    style={{
                      backgroundColor: 'transparent',
                    }}
                  />
                </TouchableOpacity>
              </View>

              {!showChallenge && getSelectedChallenge() != null && (
                <ChallengeItem
                  key={selectedChallenge.name}
                  challenge={selectedChallenge}
                  hideTopDivider={true}
                  showBottomDivider={true}
                  setSelectedChallenge={setSelectedChallenge}
                  selectedChallenge={selectedChallenge}
                  goToChallengeDetail={() =>
                    navigation.navigate('ChallengeDetail', {
                      challengeId: selectedChallenge.id,
                      canEdit: false,
                      leaderId: -1, // missing
                    })
                  }
                />
              )}

              {showChallenge &&
                challengeList.map((challenge: ChallengeInfo.AsObject, idx) => {
                  return (
                    <ChallengeItem
                      key={idx}
                      challenge={challenge}
                      hideTopDivider={idx === 0}
                      showBottomDivider={idx === challengeList.length - 1}
                      setSelectedChallenge={setSelectedChallenge}
                      selectedChallenge={selectedChallenge}
                      goToChallengeDetail={() =>
                        navigation.navigate('ChallengeDetail', {
                          challengeId: challenge.id,
                          canEdit: false,
                          leaderId: -1, // missing
                        })
                      }
                    />
                  )
                })}
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                >
                  Event:
                </Text>

                <TouchableOpacity
                  onPress={() => setShowEvent(!showEvent)}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: theme.colors.primary,
                    }}
                  >
                    {selectedEvent.name ? selectedEvent.name : 'No data'}
                  </Text>

                  <Avatar.Icon
                    icon={showEvent ? 'chevron-up' : 'chevron-down'}
                    size={35}
                    color={theme.colors.primary}
                    style={{
                      backgroundColor: 'transparent',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {!eventListLoading && !showEvent && selectedEvent.name && (
              <EventItem
                event={selectedEvent}
                hideTopDivider={true}
                showBottomDivider={true}
                setSelectedEvent={setSelectedEvent}
                selectedEvent={selectedEvent}
              />
            )}

            {!eventListLoading &&
              showEvent &&
              filteredEventList.map((event: EventDetail.AsObject, idx) => {
                return (
                  <EventItem
                    key={idx}
                    event={event}
                    hideTopDivider={idx === 0}
                    showBottomDivider={idx === filteredEventList.length - 1}
                    setSelectedEvent={setSelectedEvent}
                    selectedEvent={selectedEvent}
                  />
                )
              })}

            {eventListLoading && (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 50,
                }}
              >
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            )}

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                >
                  Group in Event:
                </Text>

                <TouchableOpacity
                  onPress={() => setShowGroup(!showGroup)}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: theme.colors.primary,
                    }}
                  >
                    {groupInfoMap[selectedGroupInEvent.id]?.name
                      ? groupInfoMap[selectedGroupInEvent.id]?.name
                      : 'No data'}
                  </Text>

                  <Avatar.Icon
                    icon={showGroup ? 'chevron-up' : 'chevron-down'}
                    size={35}
                    color={theme.colors.primary}
                    style={{
                      backgroundColor: 'transparent',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {!groupLoading &&
              !showGroup &&
              groupInfoMap[selectedGroupInEvent.id]?.name && (
                <GroupItem
                  group={selectedGroupInEvent}
                  hideTopDivider={true}
                  showBottomDivider={true}
                  setSelectedGroup={setSelectedGroupInEvent}
                  selectedGroup={selectedGroupInEvent}
                  groupInfoMap={groupInfoMap}
                />
              )}

            {!groupLoading &&
              showGroup &&
              groupsInEventList.map((group: GroupInEvent.AsObject, idx) => {
                return (
                  <GroupItem
                    key={idx}
                    group={group}
                    hideTopDivider={idx === 0}
                    showBottomDivider={idx === groupsInEventList.length - 1}
                    setSelectedGroup={setSelectedGroupInEvent}
                    selectedGroup={selectedGroupInEvent}
                    groupInfoMap={groupInfoMap}
                  />
                )
              })}

            {groupLoading && (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 50,
                }}
              >
                <ActivityIndicator size="large" color={theme.colors.primary} />
              </View>
            )}

            {(filteredPlanList.length > 0 ||
              challengeList.length > 0 ||
              filteredEventList.length > 0) && (
              <Button
                style={styles(theme).commitBtn}
                mode="contained"
                onPress={() => commitAll()}
              >
                Commit &gt;&gt;
              </Button>
            )}

            {filteredPlanList.length == 0 &&
              challengeList.length == 0 &&
              filteredEventList.length == 0 && (
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50,
                  }}
                >
                  <Button
                    labelStyle={{ fontSize: 17 }}
                    mode="contained"
                    onPress={() => backToHome()}
                  >
                    &lt;&lt; Back to home
                  </Button>
                </View>
              )}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    planName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    curPlan: {
      // bottom divider
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#b5b7ba',
    },
    commitBtn: {
      alignSelf: 'flex-end',
      marginRight: 20,
      marginTop: 10,
    },
    segmentedBtn: {
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
  })
