import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { Button, Divider, Searchbar, Text } from 'react-native-paper'
import {
  ListUserInfoRequest, UserInfo,
} from '../../../lib/auth/auth_pb'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import {
  isUserSliceLoading,
  selectUserSlice,
} from '../../../redux/features/user/slice'
import {
  listUserInfoThunk,
  listMoreUserInfoThunk,
} from '../../../redux/features/user/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import { ConfirmDialog } from '../../../comp/ConfirmDialog'
import Filter from './comp/Filter'
import MemberItem from './comp/MemberItem'

const LIMIT = 10

export default function UserSearch({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'UserSearch'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const userState = useAppSelector((state) => state.user)
  const { userSearchList, userSearchListTotal } = useAppSelector(selectUserSlice)
  const userSearchListLoading = useAppSelector(isUserSliceLoading)
  const noData = userSearchList.length === 0 && !userSearchListLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(ListUserInfoRequest.UserSortBy.USER_SORT_BY_UNSPECIFIED)

  useEffect(() => {
    fetchUserSearch()
  }, [dispatch, searchByName, sortBy, asc])

  const fetchUserSearch = async () => {
    const { response, error } = await dispatch(
      listUserInfoThunk({
        ascending: asc,
        limit: LIMIT,
        offset: 0,
        searchByName: searchByName,
        sortBy: sortBy,
        userIdsList: [],
      })
    ).unwrap()
    
    if(error)
    {
      console.log(error)
      return
    }

    if (response) {
      setCurrentOffset(0)
      if (response.total > LIMIT) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { response } = await dispatch(
      listMoreUserInfoThunk({
        ascending: asc,
        limit: LIMIT,
        offset: currentOffset + LIMIT,
        searchByName: searchByName,
        sortBy: sortBy,
        userIdsList: [],
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
              refreshing={userSearchListLoading}
              onRefresh={fetchUserSearch}
            />
          }
        >
          <Searchbar
            style={{ marginTop: 20, height: 45 }}
            placeholder="Search..."
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
              style={{
                color: theme.colors.tertiary,
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              There are no people to display
            </Text>
          )}
          {userSearchList.map((member: UserInfo.AsObject, idx) => {
            return (
              <MemberItem
                key={idx}
                member={member}
                hideTopDivider={idx === 0}
                showBottomDivider={idx === userSearchList.length - 1}
                viewProfile={() => {
                  if (member.userId != userState.userId)
                    navigation.navigate('OtherUser', {
                      userId: member.userId,
                    })
                }}
                isYourself={member.userId === userState.userId}
              />
            )
          })}
          {!noData && userSearchListTotal > 10 && (
            <Button
              style={{ marginTop: 10, marginBottom: 20 }}
              mode="elevated"
              onPress={fetchMore}
              loading={userSearchListLoading}
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
