import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { ActivityIndicator, Button, Divider, Searchbar, Text } from 'react-native-paper'
import { useDialog } from '../../../../hooks/useDialog'
import {
  RuleStatus,
  ChallengeInfo,
  ListChallengeRequest,
  DeleteChallengeRequest,
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
    deleteChallengeThunk,
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

const LIMIT = 100

export default function ChallengeList({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'ChallengeList'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const { challengeList } = useAppSelector(getChallengesList)
    const challengeListLoading = useAppSelector(isChallengeListLoading)
    const noData = challengeList.length === 0 && !challengeListLoading

    const [searchQuery, setSearchQuery] = useState('')
    const [asc, setAsc] = useState(false)
    const [searchByName, setSearchByName] = useState('')
    const [sortBy, setSortBy] = useState(ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_START_TIME)
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

  
  // for delete
  const [deleteListId, setDeleteListId] = useState<number[]>([])
  const [selectedAll, setSelectedAll] = useState(false)
  const { toggleDialog, open } = useDialog()

  const addOrRemoveFromDeleteList = (id: number) => {
    if (deleteListId.includes(id)) {
      // remove from delete list
      setDeleteListId(deleteListId.filter((item) => item !== id))
      setSelectedAll(false)
    } else {
      setDeleteListId([...deleteListId, id])
      if (deleteListId.length + 1 === challengeList.length)
        setSelectedAll(true) // if all selected
    }
  }

  const deleteOrNot = () => {
    if (deleteListId.length === 0) {
      toast.error({ message: 'No challenge selected' })
      return
    }

    toggleDialog()
  }

  const deleteConfirmed = () => {
    let failedCount = 0

    deleteListId.forEach(async (id) => {
      const deleteInfo: DeleteChallengeRequest.AsObject = {
        id: id,
      }

      const { error } = await dispatch(deleteChallengeThunk(deleteInfo)).unwrap()
      if (error) {
        failedCount++
      }
    })

    if (failedCount == deleteListId.length) {
      toast.error({
        message: 'Failed to delete challenge(s)',
      })
    }
    else if (failedCount > 0) {
      toast.error({
        message: 'Failed to delete ' + failedCount + ' challenge(s)',
      })
    }
    else {
      toast.success({ message: 'Deleted challenge(s) successfully' })
    }

    setDeleteListId([])
    setSelectedAll(false)
    toggleDialog()
  }
  
  const selectOrUnselectAll = () => {
    if (selectedAll) {
      setSelectedAll(false)
      setDeleteListId([])
    } else {
      setSelectedAll(true)
      const listId: number[] = []
      challengeList.map((item) => {
        listId.push(item.id)
      })
      setDeleteListId(listId)
    }
  }

  // if loading change, reset selected all and delete list
  useEffect(() => {
    setSelectedAll(false)
    setDeleteListId([])
  }, [challengeListLoading])

  return (
    <View style={baseStyles(theme).container}>
      <ConfirmDialog
        message={
          'Are you sure you want to delete ' + deleteListId.length + ' challenge(s)?'
        }
        title="Delete Challenge"
        visible={open}
        onSubmit={() => deleteConfirmed()}
        toogleDialog={toggleDialog}
      />
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
          {(deleteListId.length > 0) ? route.params.isLeader && (
            <FabGroup
              actions={[
                {
                  icon: 'delete',
                  label:
                    'Remove ' + deleteListId.length + ' selected challenge(s)',
                  labelTextColor: theme.colors.onError,
                  onPress: () => deleteOrNot(),
                  color: theme.colors.onError,
                  style: { backgroundColor: theme.colors.error },
                },
                {
                  // select or unselect all
                  icon: selectedAll ? 'checkbox-multiple-blank' : 'checkbox-multiple-marked',
                  label: selectedAll ? 'Unselect all' : 'Select all',
                  labelTextColor: theme.colors.onTertiary,
                  color: theme.colors.onTertiary,
                  style: { backgroundColor: theme.colors.tertiary },
                  onPress: () => selectOrUnselectAll()
                },
              ]}
              type="error"
            />
          ) : route.params.isLeader && (
            <FabGroup
              actions={[
                {
                  icon: 'plus',
                  label: 'Create new challenge',
                  labelTextColor: theme.colors.onPrimary,
                  color: theme.colors.onPrimary,
                  style: { backgroundColor: theme.colors.primary },
                  onPress: () => navigation.navigate('ChallengeAdd', { groupId: route.params.groupId, reloadListFunc: fetchChallengeList }),
                },
                {
                  // select or unselect all
                  icon: selectedAll ? 'checkbox-multiple-blank' : 'checkbox-multiple-marked',
                  label: selectedAll ? 'Unselect all' : 'Select all',
                  labelTextColor: theme.colors.onTertiary,
                  color: theme.colors.onTertiary,
                  style: { backgroundColor: theme.colors.tertiary },
                  onPress: () => selectOrUnselectAll()
                },
              ]}
            />
          )}

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
                deleteListId={deleteListId}
                addOrRemoveFromDeleteList={addOrRemoveFromDeleteList}
                isLeader={route.params.isLeader}
                goToChallengeDetail={() => navigation.navigate('ChallengeDetail', {
                  challengeId: challenge.id,
                  canEdit: route.params.isLeader && challenge.status === RuleStatus.RULE_STATUS_COMING_SOON,
                  leaderId: route.params.leaderId,
                })}
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
