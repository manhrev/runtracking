import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ListEventsRequest } from '../../../lib/event/event_pb'
import {
  GroupInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../../lib/group/group_pb'
import { RootBaseStackParamList } from '../../../navigators/BaseStack'
import { selectEventList } from '../../../redux/features/eventList/slice'
import { listEventsThunk } from '../../../redux/features/eventList/thunks'
import { listYourGroupThunk } from '../../../redux/features/yourGroupList/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import GroupItem from '../../Group/YourGroups/comp/YourGroupItem'

export default function GoToEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'GoToEvent'>) {
  const dispatch = useAppDispatch()
  const [groupList, setGroupList] = useState<GroupInfo.AsObject[]>([])
  const listEventAndGo = async (yourGroupId: number) => {
    const { error, response } = await dispatch(
      listEventsThunk({
        ascending: false,
        groupIdsList: [],
        idsList: [route.params.eventId],
        limit: 1,
        offset: 0,
        search: '',
        sortBy: ListEventsRequest.SortBy.SORT_BY_NAME,
        visibility: ListEventsRequest.Visibility.VISIBILITY_NO_GLOBAL,
        yourGroupId: yourGroupId,
      })
    ).unwrap()
    if (response)
      navigation.navigate('EventDetail', {
        event: response?.eventsList[0],
        yourGroupId: yourGroupId,
        reloadEventList: () => {},
      })
  }
  useEffect(() => {
    ;(async () => {
      const { error, response } = await dispatch(
        listYourGroupThunk({
          ascending: false,
          filterBy: ListGroupRequest.FilterBy.FILTER_BY_IS_ADMIN,
          groupIdsList: [],
          limit: 100,
          offset: 0,
          searchByName: '',
          sortBy: GroupSortBy.GROUP_SORT_BY_NAME,
        })
      ).unwrap()
      if (error) {
        navigation.goBack()
      } else {
        setGroupList(response?.groupListList || [])
      }
    })()
  }, [])
  return (
    <View>
      {groupList.map((group, idx) => (
        <GroupItem
          key={idx}
          group={group}
          isLeader={true}
          navigateFunc={() => {
            listEventAndGo(group.id)
          }}
          hideTopDivider={idx === 0}
          showBottomDivider={idx !== groupList.length - 1}
        />
      ))}
    </View>
  )
}
