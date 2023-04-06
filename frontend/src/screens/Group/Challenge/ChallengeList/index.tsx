import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { ActivityIndicator, Button, Divider, Searchbar, Text } from 'react-native-paper'
import { useDialog } from '../../../../hooks/useDialog'
import {
  RuleStatus,
  ListChallengeRequest,
  ChallengeInfo,
} from '../../../../lib/group/group_pb'

import {
  ActivityType,
} from '../../../../lib/activity/activity_pb'


import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import {
  isChallengeListLoading,
  getChallengesList,
} from '../../../../redux/features/challengeList/slice'

import {
    listChallengeThunk,
} from '../../../../redux/features/challengeList/thunk'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'
import Filter from './comp/Filter'
import ChallengeItem from './comp/ChallengeItem'
import { groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'
import { FabGroup } from '../../../../comp/FabGroup'

const LIMIT = 10

export default function ChallengeList({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'ChallengeList'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const { challengeList } = useAppSelector(getChallengesList)
    const challengeListLoading = useAppSelector(isChallengeListLoading)
    const noData = challengeList.length === 0 && !challengeListLoading
    //   const [canLoadmore, setCanLoadmore] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    const [asc, setAsc] = useState(false)
    //   const [currentOffset, setCurrentOffset] = useState(0)
    const [searchByName, setSearchByName] = useState('')
    const [sortBy, setSortBy] = useState(ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_START_TIME)
    //   const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_NOT_MEMBER
    const [status, setStatus] = useState(RuleStatus.RULE_STATUS_UNSPECIFIED)

    useEffect(() => {
        fetchChallengeList()
    }, [dispatch, searchByName, sortBy, asc, status])

    const fetchChallengeList = async () => {
        const { response } = await dispatch(
        listChallengeThunk({
            limit: LIMIT,
            offset: 0,
            ascending: asc,
            groupId: route.params.groupId,
            sortBy: sortBy,
            searchByName: searchByName,
            status: status,
            filterByRulesList: [],
            filterByType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
        })
        ).unwrap()
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
              refreshing={challengeListLoading}
              onRefresh={fetchChallengeList}
            />
          }
        >
          {route.params.isLeader && <FabGroup
            actions={[
              {
                icon: 'plus',
                label: 'Create new challenge',
                labelTextColor: theme.colors.onPrimary,
                color: theme.colors.onPrimary,
                style: { backgroundColor: theme.colors.primary },
                onPress: () => navigation.navigate('ChallengeAdd', { groupId: route.params.groupId }),
              },
            ]}
          />}

          <Searchbar
            style={{ marginTop: 20, height: 45 }}
            placeholder="Search challenge name"
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
              style={{ color: theme.colors.tertiary, textAlign: 'center' }}
            >
              No data
            </Text>
          )}
          {!challengeListLoading && challengeList.map((challenge: ChallengeInfo.AsObject, idx) => {
            return (
              <ChallengeItem
                key={idx}
                challenge={challenge}
                hideTopDivider={idx === 0}
                showBottomDivider={idx === challengeList.length - 1}
              />
            )
          })}

          {challengeListLoading &&
            <ActivityIndicator
                animating={true}
                size='small'
                style={{
                    paddingVertical: 30,
                }}
            />
          }
        </ScrollView>
      </View>
    </View>
  )
}
