import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useMemo, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  List,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import StepIndicator from 'react-native-step-indicator'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { formatDateWithoutTime } from '../../../../utils/helpers'
import { baseStyles } from '../../../baseStyle'
import Constants from 'expo-constants'
import SubEventDisplay from './comp/SubEvent'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import {
  getGroupInfoThunk,
  listGroupInEventThunk,
  listGroupProgressInEventThunk,
  listSubEventsThunk,
} from '../../../../redux/features/eventList/thunks'
import {
  isAllEventListLoading,
  selectEventList,
} from '../../../../redux/features/eventList/slice'
import {
  GroupStatus,
  SubEvent,
  SubEventProgress,
} from '../../../../lib/event/event_pb'
import moment from 'moment'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'
import { GroupSortBy, ListGroupRequest } from '../../../../lib/group/group_pb'
import { FabGroup } from '../../../../comp/FabGroup'
import { eventClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

export default function EventDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'EventDetail'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { yourGroupId, reloadEventList } = route.params

  const {
    id,
    description,
    isGlobal,
    name,
    numOfGroups,
    ownerGroupId,
    picture,
    endAt,
    startAt,
    yourGroupStatus,
  } = route.params.event
  const { subEventList, subEventProgressList } = useAppSelector(selectEventList)
  const loading = useAppSelector(isAllEventListLoading)
  const isAdmin = yourGroupId === ownerGroupId
  const currentSubEventIndex = useMemo(
    () => getCurrentIndexForSubEvent(subEventList),
    [subEventList]
  )
  const { groupInfoMap } = useAppSelector(selectEventList)

  const yourGroupJoined = yourGroupStatus === GroupStatus.GROUP_STATUS_ACTIVE
  const yourGroupRequested =
    yourGroupStatus === GroupStatus.GROUP_STATUS_REQUESTED
  const groupRankingList = useMemo(() => {
    return groupProgressesToGroupRanking(subEventProgressList)
  }, [subEventProgressList])
  const [selectedSubEvent, setSelectedSubEvent] = useState(
    subEventList[currentSubEventIndex]
  )
  const groupProgress = useMemo(() => {
    return subEventProgressList.find((progress) => {
      console.log(progress.subEventId)
      return progress.subEventId === selectedSubEvent.id
    })
  }, [
    subEventProgressList,
    currentSubEventIndex,
    subEventList,
    selectedSubEvent,
  ])

  useMemo(() => {
    setSelectedSubEvent(subEventList[currentSubEventIndex])
  }, [currentSubEventIndex, subEventList])

  useEffect(() => {
    dispatch(listSubEventsThunk({ eventId: id }))
    dispatch(listGroupProgressInEventThunk({ eventId: id }))
    fetchListEventGroupsAndInfo()
  }, [])

  const fetchListEventGroupsAndInfo = async () => {
    const { response, error } = await dispatch(
      listGroupInEventThunk({
        eventId: id,
        limit: 100,
        offset: 0,
      })
    ).unwrap()
    if (error) {
      return
    }
    let groupList: number[] = []
    if (response) {
      response.groupsList.map((group) => group.id)
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

  const eventLabel = (() => {
    const now = moment()
    const endAt = subEventList[subEventList.length - 1]?.endAt

    const startAt = subEventList[0]?.startAt
    if (now.isAfter(moment.unix(endAt?.seconds || 0))) {
      return (
        <Text style={{ color: theme.colors.error }}>
          Ended at: {formatDateWithoutTime(endAt)}
        </Text>
      )
    } else if (now.isBefore(moment.unix(startAt?.seconds || 0))) {
      return (
        <Text style={{ color: theme.colors.primary }}>
          Start at: {formatDateWithoutTime(startAt)}
        </Text>
      )
    } else {
      return (
        <>
          <Text style={{ color: theme.colors.primary }}>In progress</Text>
          <Text style={{ color: theme.colors.primary }}>
            {' '}
            - end: {formatDateWithoutTime(endAt)}
          </Text>
        </>
      )
    }
  })()

  return (
    <>
      {isAdmin && (
        <FabGroup
          bottom={20}
          type="primary"
          actions={[
            {
              icon: 'account-multiple-plus',
              label: 'Invite other groups',
              onPress: () => {
                navigation.navigate('InviteGroupsToEvent', {
                  eventId: route.params.event.id,
                  ownerGroupId: route.params.event.ownerGroupId,
                })
              },
              labelTextColor: theme.colors.elevation.level5,
            },
            {
              icon: 'pencil',
              label: 'Edit event',
              onPress: () => {
                navigation.navigate('EditEvent', {
                  event: route.params.event,
                  reloadEvent: reloadEventList,
                })
              },
              labelTextColor: theme.colors.elevation.level5,
            },
          ]}
        />
      )}
      <View style={styles(theme).baseContainer}>
        <LoadingOverlay loading={loading} />
        <IconButton
          icon="arrow-left"
          size={25}
          onPress={() => {
            navigation.goBack()
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles(theme).innerWrapper}>
            <View style={styles(theme).titleSection}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{name}</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15 }}>
                      Created by:{' '}
                      <Text style={{ color: theme.colors.primary }}>
                        {groupInfoMap[ownerGroupId]?.name || ''}
                      </Text>
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, alignSelf: 'flex-end' }}>
                      {eventLabel}
                    </Text>
                  </View>
                </View>

                <Image
                  style={styles(theme).coverPic}
                  source={{
                    uri: picture,
                  }}
                />
              </View>
              <Text style={{ fontSize: 15, marginTop: 8 }}>{description}</Text>
            </View>
            <View style={styles(theme).metricSection}>
              <TouchableRipple
                style={styles(theme).metricDisplayBlock}
                onPress={() => {
                  navigation.navigate('GroupsInEvent', {
                    eventId: id,
                    isAdmin: isAdmin,
                  })
                }}
              >
                <>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Participated
                  </Text>

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      paddingTop: 10,
                      gap: 10,
                      alignItems: 'flex-end',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 35,
                        fontStyle: 'italic',
                      }}
                    >
                      {groupProgress?.groupProgressList.length}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        fontStyle: 'italic',
                        marginBottom: 3,
                      }}
                    >
                      Groups
                    </Text>
                  </View>
                </>
              </TouchableRipple>

              <View style={styles(theme).metricDisplayBlock}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Mini Events
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 10,
                    gap: 10,
                    alignItems: 'flex-end',
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 35,
                      fontStyle: 'italic',
                    }}
                  >
                    {subEventList.length}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 26,
                      fontStyle: 'italic',
                      marginBottom: 3,
                    }}
                  >
                    Challenges
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ ...styles(theme).titleSection, marginTop: 10 }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                  Leaderboards
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 5,
                  }}
                >
                  {groupRankingList.map((item, index) => (
                    <List.Item
                      key={index}
                      title={groupInfoMap[item.groupId]?.name || item.groupId}
                      description=""
                      left={(props) => (
                        <>
                          <List.Icon
                            {...props}
                            color={colorFromIndex(index)}
                            icon="medal"
                          />
                          <List.Icon
                            {...props}
                            color={colorFromIndex(index)}
                            icon={'numeric-' + (index + 1) + '-circle'}
                          />
                        </>
                      )}
                      // right={(props) => <Text>{item.} pts</Text>}
                    />
                  ))}
                </View>
              </View>
            </View>
            <View style={styles(theme).subEventProgress}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30 }}
              >
                Challenges
              </Text>
              <StepIndicator
                customStyles={customStyles(theme)}
                currentPosition={currentSubEventIndex}
                labels={subEventList.map((subEvent) => subEvent.name)}
                stepCount={subEventList.length ? subEventList.length : 1}
                onPress={(index) => {
                  setSelectedSubEvent(subEventList[index])
                }}
              />
              {yourGroupJoined && (
                <>
                  <Divider style={{ marginVertical: 20 }} />
                  {selectedSubEvent && groupProgress && (
                    <SubEventDisplay
                      subEvent={selectedSubEvent}
                      groupProgress={groupProgress}
                    />
                  )}
                </>
              )}
            </View>
            {!yourGroupJoined && !yourGroupRequested && (
              <Button
                style={{ marginBottom: 20 }}
                mode="contained"
                onPress={async () => {
                  const { error } = await eventClient.joinEvent({
                    eventId: id,
                    groupId: yourGroupId,
                  })
                  if (error) {
                    toast.error({
                      message: 'An error occured!',
                    })
                  } else {
                    toast.success({
                      message: 'Sent join request!',
                    })
                    reloadEventList()
                    navigation.goBack()
                  }
                }}
              >
                Join now!
              </Button>
            )}
            {!yourGroupJoined && yourGroupRequested && (
              <Button style={{ marginBottom: 20 }} mode="contained" disabled>
                Requested
              </Button>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    baseContainer: {
      ...baseStyles(theme).container,
      marginTop: Constants.statusBarHeight,
      // backgroundColor: theme.colors.surfaceDisabled,
    },
    innerWrapper: {
      ...baseStyles(theme).innerWrapper,
      paddingTop: 1,
    },
    coverPic: {
      width: '100%',
      height: 150,
      marginTop: 10,
    },
    titleSection: {
      backgroundColor: theme.colors.background,
      ...shadow,
    },
    metricSection: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
      marginTop: 20,
    },
    metricDisplayBlock: {
      flex: 1,
      backgroundColor: theme.colors.background,
      ...shadow,
    },
    subEventProgress: {
      marginTop: 20,
      ...shadow,
      backgroundColor: theme.colors.background,
      marginBottom: 15,
    },
  })

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  borderRadius: 2,
  padding: 18,
}

const customStyles = (theme: AppTheme) => ({
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: theme.colors.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: theme.colors.primary,
  stepStrokeUnFinishedColor: theme.colors.surfaceVariant,
  separatorFinishedColor: theme.colors.primary,
  separatorUnFinishedColor: theme.colors.surfaceVariant,
  stepIndicatorFinishedColor: theme.colors.primary,
  stepIndicatorUnFinishedColor: theme.colors.background,
  stepIndicatorCurrentColor: theme.colors.secondaryContainer,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: theme.colors.primary,
  stepIndicatorLabelFinishedColor: theme.colors.background,
  stepIndicatorLabelUnFinishedColor: theme.colors.surfaceVariant,
  labelColor: theme.colors.onSurfaceDisabled,
  labelSize: 15,
  currentStepLabelColor: theme.colors.primary,
})

function getCurrentIndexForSubEvent(subEvents: SubEvent.AsObject[]) {
  let now = moment()
  for (let i = 0; i < subEvents.length; i++) {
    const st = subEvents[i].startAt?.seconds || 0
    const en = subEvents[i].endAt?.seconds || 0
    const start = moment.unix(st)
    const end = moment.unix(en)
    // compare st with current time

    if (now.isAfter(start) && now.isBefore(end)) {
      return i
    }
  }
  return 0
}

interface GroupInLeaderboard {
  groupId: number
  score: number
}

function groupProgressesToGroupRanking(list: SubEventProgress.AsObject[]) {
  const groupRanking: Record<number, GroupInLeaderboard> = {}
  list.forEach((item, index) => {
    item.groupProgressList.forEach((groupProgress) => {
      groupRanking[groupProgress.groupId] = {
        groupId: groupProgress.groupId,
        score:
          groupProgress.progress +
          (groupRanking[groupProgress.groupId]?.score || 0),
      }
    })
  })
  return Object.values(groupRanking).sort((a, b) => b.score - a.score)
}

function colorFromIndex(idx: number) {
  switch (idx) {
    case 0:
      return '#FFD700'
    case 1:
      return '#C0C0C0'
    case 2:
      return '#CD7F32'
    default:
      return '#000000'
  }
}
