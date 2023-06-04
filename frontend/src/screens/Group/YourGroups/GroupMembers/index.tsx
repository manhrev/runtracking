import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { ActivityIndicator, Divider, Searchbar, Text } from 'react-native-paper'
import {
  Member,
  ListMembersOfGroupRequest,
} from '../../../../lib/group/group_pb'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import {
  isMemberListLoading,
  selectMemberList,
} from '../../../../redux/features/memberList/slice'
import {
  listMembersOfGroupThunk,
  acceptMemberThunk,
} from '../../../../redux/features/memberList/thunk'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import Filter from './comp/Filter'
import MemberItem from './comp/MemberItem'
import { toast } from '../../../../utils/toast/toast'
import { selectUserSlice } from '../../../../redux/features/user/slice'

const LIMIT = 100

export default function GroupMembers({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupMembers'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const { userId } = useAppSelector(selectUserSlice)
  const { memberList } = useAppSelector(selectMemberList)
  const memberListLoading = useAppSelector(isMemberListLoading)
  const noData = memberList.length === 0 && !memberListLoading
  //   const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  //   const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(
    ListMembersOfGroupRequest.MOGSortBy.MOG_SORT_BY_CREATED_TIME
  )
  //   const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_NOT_MEMBER
  const [status, setStatus] = useState(Member.Status.MEMBER_STATUS_UNSPECIFIED)

  useEffect(() => {
    fetchMemberList()
  }, [dispatch, searchByName, sortBy, asc, status])

  const fetchMemberList = async () => {
    const { response } = await dispatch(
      listMembersOfGroupThunk({
        limit: LIMIT,
        offset: 0,
        ascending: asc,
        groupId: route.params.groupId,
        sortBy: sortBy,
        searchByName: searchByName,
        status: status,
      })
    ).unwrap()
  }

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    if (query === '') setSearchByName(query)
  }

  const acceptMember = async (memberId: number) => {
    const { error } = await dispatch(
      acceptMemberThunk({
        groupId: route.params.groupId,
        memberId: memberId,
      })
    ).unwrap()

    if (!error) {
      toast.success({ message: 'Accepted member!' })
      fetchMemberList()
    }
  }

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={memberListLoading}
              onRefresh={fetchMemberList}
            />
          }
        >
          <Searchbar
            style={{ marginTop: 20, height: 45 }}
            placeholder="Search member name"
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
            status={status}
            setStatus={setStatus}
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
              No data
            </Text>
          )}
          {!memberListLoading &&
            memberList.map((member: Member.AsObject, idx) => {
              return (
                <MemberItem
                  key={idx}
                  member={member}
                  hideTopDivider={idx === 0}
                  showBottomDivider={idx === memberList.length - 1}
                  acceptMemberFunc={() => acceptMember(member.memberId)}
                  isLeader={route.params.isLeader}
                  viewProfile={() => {
                    if (member.userId != userId)
                      navigation.navigate('OtherUser', {
                        userId: member.userId,
                      })
                  }}
                  isYourself={member.userId === userId}
                />
              )
            })}

          {memberListLoading && (
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
