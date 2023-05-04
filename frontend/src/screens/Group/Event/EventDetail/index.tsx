import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useMemo, useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Divider, IconButton, Text, TouchableRipple } from 'react-native-paper'
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
import { GroupStatus, SubEvent } from '../../../../lib/event/event_pb'
import moment from 'moment'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'
import { GroupSortBy, ListGroupRequest } from '../../../../lib/group/group_pb'
import { FabGroup } from '../../../../comp/FabGroup'

export default function EventDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'EventDetail'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const yourGroupId = route.params.yourGroupId
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

  const yourGroupJoined = yourGroupStatus === GroupStatus.GROUP_STATUS_ACTIVE

  const [selectedSubEvent, setSelectedSubEvent] = useState(
    subEventList[currentSubEventIndex]
  )
  const groupProgress = useMemo(() => {
    return subEventProgressList.find((progress) => {
      return (
        progress.subEventId === subEventList[currentSubEventIndex]?.id || -1
      )
    })
  }, [subEventProgressList, currentSubEventIndex, subEventList])

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
      groupList = response.groupsList.map((group) => group.id)
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

  return (
    <>
      {isAdmin && (
        <FabGroup
          bottom={20}
          type="primary"
          actions={[
            {
              icon: 'pencil',
              label: 'Edit event',
              onPress: () => {
                navigation.navigate('CreateEvent', {
                  ownerGroupId: ownerGroupId,
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
                    <Text style={{ fontSize: 15 }}>Created by: groupcv</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, alignSelf: 'flex-end' }}>
                      Start: {formatDateWithoutTime(startAt)}
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
              <Text style={{ fontSize: 15, marginTop: 8 }}>
                Description: Lorem eipsdf asdffw vshew ehwrhh ewh
              </Text>
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
                  console.log(index)
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
    const start = moment.unix(st)
    // compare st with current time

    if (now.isBefore(start)) {
      return i - 1 > 0 ? i - 1 : 0
    }
  }
  return 0
}
