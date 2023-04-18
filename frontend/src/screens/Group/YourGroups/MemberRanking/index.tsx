import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { ActivityIndicator, Divider, Searchbar, Text } from 'react-native-paper'
import {
  ListUserRankingRequest,
  UserRanking,
} from '../../../../lib/group/group_pb'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import {
  isUserRankingListLoading,
  selectUserRankingList,
} from '../../../../redux/features/userRankingList/slice'
import {
  listUserRankingThunk,
} from '../../../../redux/features/userRankingList/thunk'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import Filter from './comp/Filter'
import MemberItem from './comp/MemberItem'
import { toast } from '../../../../utils/toast/toast'

const LIMIT = 100

export default function MemberRanking({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'MemberRanking'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const { userRankingList } = useAppSelector(selectUserRankingList)
  const userRankingListLoading = useAppSelector(isUserRankingListLoading)
  const noData = userRankingList.length === 0 && !userRankingListLoading
  //   const [canLoadmore, setCanLoadmore] = useState(false)

  const [asc, setAsc] = useState(false)
  //   const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(
    ListUserRankingRequest.SortBy.SORT_BY_POINT
  )
  //   const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_NOT_MEMBER

  useEffect(() => {
    fetchUserRankingList()
  }, [dispatch, searchByName, sortBy, asc])

  const fetchUserRankingList = async () => {
    const { response } = await dispatch(
    listUserRankingThunk({
        limit: LIMIT,
        offset: 0,
        ascending: asc,
        groupId: route.params.groupId,
        sortby: sortBy,
        seasonId: 1, // test
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
              refreshing={userRankingListLoading}
              onRefresh={fetchUserRankingList}
            />
          }
        >
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
          {!userRankingListLoading &&
            userRankingList.map((userRanking: UserRanking.AsObject, idx) => {
              return (
                <MemberItem
                  key={idx}
                  userRanking={userRanking}
                  hideTopDivider={idx === 0}
                  showBottomDivider={idx === userRankingList.length - 1}
                  isLeader={route.params.isLeader}
                  viewProfile={() =>
                    navigation.navigate('OtherUser', { userId: userRanking.member?.userId? userRanking.member.userId : 0 })
                  }
                />
              )
            })}

          {userRankingListLoading && (
            <ActivityIndicator
              animating={true}
              size="small"
              style={{
                paddingVertical: 30,
              }}
            />
          )}
        </ScrollView>
      </View>
    </View>
  )
}
