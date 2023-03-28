import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { Button, Divider, Searchbar, Text } from 'react-native-paper'
import { useDialog } from '../../../hooks/useDialog'
import {
  GroupInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../../lib/group/group_pb'
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
import { ConfirmDialog } from '../../../comp/ConfirmDialog'
import Filter from './comp/Filter'
import GroupItem from './comp/GroupItem'
import { groupClient } from '../../../utils/grpc'
import { toast } from '../../../utils/toast/toast'

const LIMIT = 10

export default function Explore({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'Explore'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const {
    handleToggleDialog,
    dataSelected: groupId,
    open,
    toggleDialog,
  } = useDialog<number>()

  const { groupList } = useAppSelector(selectGroupList)
  const groupListLoading = useAppSelector(isGroupListLoading)
  const noData = groupList.length === 0 && !groupListLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(GroupSortBy.GROUP_SORT_BY_CREATED_TIME)
  const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_NOT_MEMBER

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

  const joinGroup = async () => {
    if (groupId !== undefined) {
      const { error } = await groupClient.joinGroup({ groupId: groupId })
      if (error) {
        toast.error({ message: 'Something went wrong, please try again later' })
      } else {
        toast.success({
          message: 'Join group request sent, waiting for accept',
        })
        fetchListGroup()
      }
    } else {
      toast.error({ message: 'Something went wrong, please try again later' })
    }

    toggleDialog()
  }

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    if (query === '') setSearchByName(query)
  }
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ConfirmDialog
          toogleDialog={toggleDialog}
          visible={open}
          onSubmit={joinGroup}
          message="Are you sure you want to join this group?"
        />
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
          {groupList.map((group: GroupInfo.AsObject, idx) => {
            return (
              <GroupItem
                key={idx}
                group={group}
                hideTopDivider={idx === 0}
                showBottomDivider={idx === groupList.length - 1}
                navigateFunc={() => {
                  navigation.navigate('GroupDetail', {
                    groupId: group.id,
                    detailFrom: 'Explore',
                    reloadListFunc: fetchListGroup,
                  })
                }}
                onSubmit={() => {
                  handleToggleDialog(group.id)
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
