import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { Text } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../../navigators/GroupTopTab'
import {
  isGroupInEventLoading,
  selectEventList,
} from '../../../../../redux/features/eventList/slice'
import { listGroupInEventThunk } from '../../../../../redux/features/eventList/thunks'
import { useAppDispatch, useAppSelector } from '../../../../../redux/store'
import { useAppTheme } from '../../../../../theme'
import { baseStyles } from '../../../../baseStyle'
import GroupItem from './comp/GroupListItem'

export default function GroupsInEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupsInEvent'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const userState = useAppSelector((state) => state.user)

  const { groupList } = useAppSelector(selectEventList)
  const groupListLoading = useAppSelector(isGroupInEventLoading)
  const noData = groupList.length === 0 && !groupListLoading

  useEffect(() => {
    fetchListEventGroups()
  }, [dispatch])

  const fetchListEventGroups = async () => {
    const { response } = await dispatch(
      listGroupInEventThunk({
        eventId: route.params.eventId,
        limit: 100,
        offset: 0,
      })
    ).unwrap()
  }

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={groupListLoading}
              onRefresh={fetchListEventGroups}
            />
          }
        >
          {noData && (
            <Text
              variant="bodyLarge"
              style={{ color: theme.colors.tertiary, textAlign: 'center' }}
            >
              No data
            </Text>
          )}
          {groupList.map((group, idx) => {
            return (
              <GroupItem
                key={idx}
                group={group}
                showBottomDivider={idx === groupList.length - 1}
                navigateFunc={() => {
                  navigation.navigate('GroupDetail', {
                    groupId: group.id,
                    detailFrom: 'YourGroups',
                    reloadListFunc: () => {},
                  })
                }}
              />
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
