import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native'
import { Text, IconButton, Button, Portal, FAB } from 'react-native-paper'
import { FabGroup } from '../../../comp/FabGroup'
import {
  GroupInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../../lib/group/group_pb'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import {
  isYourGroupListLoading,
  selectYourGroupList,
} from '../../../redux/features/yourGroupList/slice'
import {
  listMoreYourGroupThunk,
  listYourGroupThunk,
} from '../../../redux/features/yourGroupList/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import GroupItem from './comp/YourGroupItem'

const LIMIT = 10

export default function YourGroups({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'YourGroups'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const userState = useAppSelector((state) => state.user)

  const { yourGroupList, total } = useAppSelector(selectYourGroupList)
  const yourGroupsLoading = useAppSelector(isYourGroupListLoading)
  const noData = yourGroupList.length === 0 && !yourGroupsLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [sortBy, setSortBy] = useState(GroupSortBy.GROUP_SORT_BY_CREATED_TIME)
  const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_MEMBER
  useEffect(() => {
    fetchListYourGroups()
  }, [dispatch, sortBy, asc])

  const fetchListYourGroups = async () => {
    const { response } = await dispatch(
      listYourGroupThunk({
        ascending: asc,
        limit: LIMIT,
        filterBy: filterBy,
        offset: 0,
        searchByName: '',
        sortBy: sortBy,
        groupIdsList: [],
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
      listMoreYourGroupThunk({
        ascending: asc,
        limit: LIMIT,
        filterBy: filterBy,
        offset: currentOffset + LIMIT,
        searchByName: '',
        sortBy: sortBy,
        groupIdsList: [],
      })
    ).unwrap()

    if (response) {
      if (currentOffset + 20 >= response.total) {
        setCanLoadmore(false)
      }
      setCurrentOffset(currentOffset + 10)
    }
  }

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={yourGroupsLoading}
              onRefresh={fetchListYourGroups}
            />
          }
        >
          <FabGroup
            actions={[
              {
                icon: 'plus',
                label: 'Create a group',
                labelTextColor: theme.colors.onTertiary,
                color: theme.colors.onTertiary,
                style: { backgroundColor: theme.colors.tertiary },
                onPress: () =>
                  navigation.navigate('GroupAdd', {
                    reloadYourGroupList: () => fetchListYourGroups(),
                  }),
              },
            ]}
            type="tertiary"
          />
          {noData && (
            <>
              <Text
                variant="bodyLarge"
                style={{
                  color: theme.colors.tertiary,
                  textAlign: 'center',
                  marginTop: 20,
                }}
              >
                You haven't participated in any group yet
              </Text>
              <Button onPress={() => navigation.navigate('Explore')}>
                Find one!
              </Button>
            </>
          )}
          {yourGroupList.map((group: GroupInfo.AsObject, idx) => {
            return (
              <GroupItem
                key={idx}
                group={group}
                showBottomDivider={idx === yourGroupList.length - 1}
                navigateFunc={() => {
                  navigation.navigate('GroupDetail', {
                    groupId: group.id,
                    detailFrom: 'YourGroups',
                    reloadListFunc: fetchListYourGroups,
                  })
                }}
                isLeader={group.leaderId === userState.userId}
              />
            )
          })}

          {!noData && total > 10 && (
            <Button
              style={{ marginTop: 10, marginBottom: 20 }}
              mode="elevated"
              onPress={fetchMore}
              loading={yourGroupsLoading}
              disabled={!canLoadmore}
            >
              Load more
            </Button>
          )}
        </ScrollView>
      </View>
    </View>
  )
}
