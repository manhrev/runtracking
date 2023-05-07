import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Divider, Searchbar, Text } from 'react-native-paper'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'
import { FabGroup } from '../../../../comp/FabGroup'
import { useDialog } from '../../../../hooks/useDialog'
import { ListEventsRequest } from '../../../../lib/event/event_pb'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import {
  isEventListLoading,
  selectEventList,
} from '../../../../redux/features/eventList/slice'
import {
  joinEventThunk,
  listEventsThunk,
  listMoreEventsThunk,
} from '../../../../redux/features/eventList/thunks'
import { selectGroupDetail } from '../../../../redux/features/groupDetail/slice'
import { selectUserSlice } from '../../../../redux/features/user/slice'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { useAppTheme } from '../../../../theme'
import { toast } from '../../../../utils/toast/toast'
import { baseStyles } from '../../../baseStyle'
import EventItem from './comp/EventItem'
import Filter from './comp/Filter'
const LIMIT = 10

export default function EventList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'EventList'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { userId } = useAppSelector(selectUserSlice)
  const {
    handleToggleDialog,
    dataSelected: eventIdToJoin,
    open,
    toggleDialog,
  } = useDialog<number>()
  const {
    groupDetail: { groupinfo },
  } = useAppSelector(selectGroupDetail)

  const ownerGroupId = groupinfo?.id || 0
  const isAdmin = groupinfo?.leaderId === userId

  const { eventList } = useAppSelector(selectEventList)
  const eventListLoading = useAppSelector(isEventListLoading)
  const noData = eventList.length === 0 && !eventListLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(
    ListEventsRequest.SortBy.SORT_BY_UNSPECIFIED
  )
  const [visibility, setVisibility] = useState(
    ListEventsRequest.Visibility.VISIBILITY_UNSPECIFIED
  )
  const [groupIds, setGroupIds] = useState<number[]>([groupinfo?.id || 0])

  useFocusEffect(
    useCallback(() => {
      fetchListEvent()
    }, [dispatch, searchByName, sortBy, asc, visibility, groupIds])
  )

  const yourGroupId = groupinfo?.id || 0

  const fetchListEvent = async () => {
    const { response } = await dispatch(
      listEventsThunk({
        ascending: asc,
        limit: LIMIT,
        visibility: visibility,
        search: searchByName,
        offset: 0,
        groupIdsList: groupIds,
        idsList: [],
        sortBy: sortBy,
        yourGroupId: yourGroupId,
      })
    ).unwrap()

    if (response) {
      setCurrentOffset(0)
      if (response.total > LIMIT) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { response } = await dispatch(
      listMoreEventsThunk({
        ascending: asc,
        limit: LIMIT,
        visibility: visibility,
        search: searchByName,
        offset: currentOffset + LIMIT,
        groupIdsList: groupIds,
        idsList: [],
        sortBy: sortBy,
        yourGroupId: yourGroupId,
      })
    ).unwrap()

    if (response) {
      if (currentOffset + 20 >= response.total) {
        setCanLoadmore(false)
      }
      setCurrentOffset(currentOffset + 10)
    }
  }

  const joinEvent = async () => {
    if (eventIdToJoin === undefined) {
      return
    }
    const { error } = await dispatch(
      joinEventThunk({
        eventId: eventIdToJoin,
        groupId: groupinfo?.id || 0,
      })
    ).unwrap()
    if (error) {
      return toast.error({
        message: 'Error when join event, please try again later!',
      })
    }
    toast.success({ message: 'Join event successfully!' })
    toggleDialog()
  }

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    if (query === '') setSearchByName(query)
  }
  return (
    <>
      {/* <LoadingOverlay loading={eventListLoading} /> */}
      {isAdmin && (
        <FabGroup
          bottom={20}
          type="primary"
          actions={[
            {
              icon: 'plus',
              label: 'Create new event',
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
      <View style={baseStyles(theme).container}>
        <View style={baseStyles(theme).innerWrapper}>
          <ConfirmDialog
            toogleDialog={toggleDialog}
            visible={open}
            onSubmit={joinEvent}
            message="Are you sure you want to join this event?"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={eventListLoading}
                onRefresh={fetchListEvent}
              />
            }
          >
            <Searchbar
              style={{ marginTop: 20, height: 45 }}
              placeholder="Search event name"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onSubmitEditing={() => {
                setSearchByName(searchQuery)
              }}
            />
            <Filter
              asc={asc}
              switchAsc={setAsc}
              sortBy={sortBy}
              setSortBy={setSortBy}
              visibility={visibility}
              setVisibility={setVisibility}
              setYourGroup={() => {
                setGroupIds([groupinfo?.id || 0])
              }}
              clearYourGroup={() => {
                setGroupIds([])
              }}
            />
            <Divider bold />

            {noData && (
              <Text
                variant="bodyLarge"
                style={{ color: theme.colors.tertiary, textAlign: 'center' }}
              >
                No data
              </Text>
            )}
            {eventList.map((event, idx) => {
              return (
                <EventItem
                  key={idx}
                  event={event}
                  hideTopDivider={idx === 0}
                  showBottomDivider={idx === eventList.length - 1}
                  navigateFunc={() => {
                    navigation.navigate('EventDetail', {
                      event: event,
                      yourGroupId: yourGroupId,
                      reloadEventList: fetchListEvent,
                    })
                  }}
                  onSubmit={() => {
                    handleToggleDialog(event.id)
                  }}
                  isAdmin={isAdmin}
                  yourGroup={ownerGroupId}
                />
              )
            })}
            {!noData && (
              <Button
                style={{ marginTop: 10, marginBottom: 20 }}
                mode="elevated"
                onPress={fetchMore}
                loading={eventListLoading}
                disabled={!canLoadmore}
              >
                Load more
              </Button>
            )}
          </ScrollView>
        </View>
      </View>
    </>
  )
}
