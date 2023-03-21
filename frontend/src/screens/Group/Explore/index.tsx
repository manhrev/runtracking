import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { Button, Divider, Searchbar, Text } from 'react-native-paper'
import { GroupSortBy, ListGroupRequest } from '../../../lib/group/group_pb'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import {
  isGroupListLoading,
  selectGroupList,
} from '../../../redux/features/groupList/slice'
import {
  listGroupExploreThunk,
  listMoreGroupExploreThunk,
} from '../../../redux/features/groupList/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import Filter from './comp/Filter'
import GroupItem from './comp/GroupItem'

const LIMIT = 10

export default function Explore({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'Explore'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const { groupList } = useAppSelector(selectGroupList)
  const groupListLoading = useAppSelector(isGroupListLoading)
  const noData = groupList.length === 0 && !groupListLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(GroupSortBy.GROUP_SORT_BY_CREATED_TIME)
  const filterBy = ListGroupRequest.FilterBy.FILTER_BY_UNSPECIFIED

  useEffect(() => {
    fetchListGroup()
  }, [dispatch, searchByName, sortBy, asc])

  const fetchListGroup = async () => {
    const { response } = await dispatch(
      listGroupExploreThunk({
        ascending: asc,
        limit: LIMIT,
        filterBy: filterBy,
        offset: 0,
        searchByName: searchByName,
        sortBy: sortBy,
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
      listMoreGroupExploreThunk({
        ascending: asc,
        limit: LIMIT,
        filterBy: filterBy,
        offset: currentOffset + LIMIT,
        searchByName: searchByName,
        sortBy: sortBy,
      })
    ).unwrap()

    if (response) {
      if (currentOffset + 20 >= response.total) {
        setCanLoadmore(false)
      }
      setCurrentOffset(currentOffset + 10)
    }
  }

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    if (query === '') setSearchByName(query)
  }
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={groupListLoading}
              onRefresh={fetchListGroup}
            />
          }
        >
          <Searchbar
            style={{ marginTop: 20, height: 45 }}
            placeholder="Search group name"
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
          />
          <Divider />

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
                name={group.name}
                hideTopDivider={idx === 0}
                showBottomDivider={idx === groupList.length - 1}
                navigateFunc={() => {
                  navigation.navigate('GroupDetail', {
                    groupInfo: group,
                  })
                }}
              />
            )
          })}
          {!noData && (
            <Button
              style={{ marginTop: 10, marginBottom: 20 }}
              mode="elevated"
              onPress={fetchMore}
              loading={groupListLoading}
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
