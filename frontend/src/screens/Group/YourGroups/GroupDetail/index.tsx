import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {
  Text,
  IconButton,
  Button,
  TextInput,
  Divider,
  List,
} from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'

import {
  selectGroupDetail,
  isGroupDetailLoading,
} from '../../../../redux/features/groupDetail/slice'

import {
  Member,
  GetGroupReply,
  RuleStatus,
  ListChallengeRequest,
} from '../../../../lib/group/group_pb'
import { useCallback, useEffect, useState } from 'react'
import { FabGroup } from '../../../../comp/FabGroup'
import { groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

import { useDialog } from '../../../../hooks/useDialog'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'
import { getGroupThunk } from '../../../../redux/features/groupDetail/thunk'
import { RefreshControl } from 'react-native-gesture-handler'
import {
  getChallengesList,
  isChallengeListLoading,
} from '../../../../redux/features/challengeList/slice'
import { listChallengeThunk } from '../../../../redux/features/challengeList/thunk'
import { ActivityType } from '../../../../lib/activity/activity_pb'
import {
  isEventListLoading,
  selectEventList,
} from '../../../../redux/features/eventList/slice'
import { listEventsThunk } from '../../../../redux/features/eventList/thunks'
import { ListEventsRequest } from '../../../../lib/event/event_pb'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'
import { listUserRankingThunk } from '../../../../redux/features/userRankingList/thunk'
import {
  isUserRankingListLoading,
  selectUserRankingList,
} from '../../../../redux/features/userRankingList/slice'
import { useFocusEffect } from '@react-navigation/native'

export default function GroupDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupDetail'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const userState = useAppSelector((state) => state.user)

  const [currentAction, setCurrentAction] = useState('')
  const {
    handleToggleDialog,
    dataSelected: groupId,
    open,
    toggleDialog,
  } = useDialog<number>()

  const { eventList } = useAppSelector(selectEventList)
  const eventListLoading = useAppSelector(isEventListLoading)
  
  // group detail
  const { groupDetail } = useAppSelector(selectGroupDetail)
  const groupDetailLoading = useAppSelector(isGroupDetailLoading)
  // const noData = groupDetail.length === 0 && !groupDetailLoading
  // user ranking
  const { userRankingList } = useAppSelector(selectUserRankingList)
  const userRankingListLoading = useAppSelector(isUserRankingListLoading)
  const noDataUserRankingList =
    userRankingList.length === 0 && !userRankingListLoading

  // challenge list
  const { challengeList } = useAppSelector(getChallengesList)
  const challengeListLoading = useAppSelector(isChallengeListLoading)
  const noChallengeData = challengeList.length === 0 && !challengeListLoading

  const handleAction = (action: string) => {
    setCurrentAction(action)
    handleToggleDialog()
  }

  const leaveGroup = async () => {
    const { error } = await groupClient.leaveGroup({
      groupId: route.params.groupId,
    })
    if (error) {
      toast.error({ message: 'Something went wrong, please try again later!' })
    } else {
      toast.success({ message: 'You have left the group!' })
      route.params.reloadListFunc()
      navigation.goBack()
    }

    toggleDialog()
  }

  const joinGroup = async () => {
    const { error } = await groupClient.joinGroup({
      groupId: route.params.groupId,
    })
    if (error) {
      toast.error({ message: 'Something went wrong, please try again later!' })
    } else {
      toast.success({ message: 'Join group request sent, waiting for accept!' })
      route.params.reloadListFunc()
    }

    toggleDialog() // close dialog
    fetchGroupDetail() // reload group detail
  }

  const fetchChallengeList = async () => {
    const { response } = await dispatch(
      listChallengeThunk({
        limit: 5,
        offset: 0,
        ascending: true,
        groupId: route.params.groupId,
        sortBy:
          ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_START_TIME,
        searchByName: '',
        status: RuleStatus.RULE_STATUS_UNSPECIFIED,
        filterByRulesList: [],
        filterByType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
      })
    ).unwrap()
  }

  const fetchGroupDetail = async () => {
    return await dispatch(
      getGroupThunk({ groupId: route.params.groupId })
    ).unwrap()
  }
  const fetchUserRankingList = async () => {
    const { response } = await dispatch(
      listUserRankingThunk({
        limit: 3,
        offset: 0,
        ascending: false,
        groupId: route.params.groupId,
        sortby: 1,
        seasonId: 1, // test
      })
    ).unwrap()
  }

  const fetchEventList = async () => {
    dispatch(
      listEventsThunk({
        ascending: false,
        sortBy: ListEventsRequest.SortBy.SORT_BY_START_AT,
        groupIdsList: [route.params.groupId],
        idsList: [],
        visibility: ListEventsRequest.Visibility.VISIBILITY_NO_GLOBAL,
        limit: 4,
        offset: 0,
        search: '',
      })
    )
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroupDetail()
      fetchUserRankingList()
      fetchChallengeList()
      fetchEventList()
    }, [])
  )

  return (
    <View style={baseStyles(theme).container}>
      <LoadingOverlay loading={groupDetailLoading && eventListLoading && userRankingListLoading && challengeListLoading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={baseStyles(theme).innerWrapper}
        refreshControl={
          <RefreshControl
            refreshing={groupDetailLoading}
            onRefresh={fetchGroupDetail}
          />
        }
      >
        <ConfirmDialog
          toogleDialog={toggleDialog}
          visible={open}
          onSubmit={currentAction == 'leave' ? leaveGroup : joinGroup}
          message={
            currentAction == 'leave'
              ? 'Are you sure you want to leave this group?'
              : 'Are you sure you want to join this group?'
          }
        />
        {groupDetail.groupinfo?.memberStatus ==
          Member.Status.MEMBER_STATUS_ACTIVE && (
          <FabGroup
            actions={[
              {
                icon: 'exit-to-app',
                label: 'Leave group',
                onPress: () => handleAction('leave'),
                labelTextColor: theme.colors.onError,
                color: theme.colors.onError,
                style: { backgroundColor: theme.colors.error },
              },
            ]}
            type="primary"
            bottom={1}
            icon="cog"
          />
        )}

        {groupDetail.groupinfo?.memberStatus ==
          Member.Status.MEMBER_STATUS_UNSPECIFIED && (
          <FabGroup
            actions={[
              {
                icon: 'plus',
                label: 'Join group',
                onPress: () => handleAction('join'),
                labelTextColor: theme.colors.onPrimary,
                color: theme.colors.onPrimary,
                style: { backgroundColor: theme.colors.primary },
              },
            ]}
            type="primary"
            bottom={1}
            icon="cog"
          />
        )}

        <View style={styles(theme).imgContainer}>
          {userState.userId == groupDetail.groupinfo?.leaderId && (
            <IconButton
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              icon="pencil"
              size={30}
              onPress={() =>
                navigation.navigate('GroupEdit', {
                  groupInfo: groupDetail.groupinfo
                    ? groupDetail.groupinfo
                    : undefined,
                  reloadDetailFunc: fetchGroupDetail,
                })
              }
            />
          )}
          <Image
            style={styles(theme).profilePicture}
            source={
              groupDetail.groupinfo?.backgroundPicture == ''
                ? require('../../../../../assets/group-img.png')
                : { uri: groupDetail.groupinfo?.backgroundPicture }
            }
          />
        </View>

        <Text style={styles(theme).groupTitle}>
          {groupDetail.groupinfo?.name}
        </Text>

        {groupDetail.groupinfo?.memberStatus ===
          Member.Status.MEMBER_STATUS_ACTIVE && (
          <Button
            style={styles(theme).joinButton}
            mode="contained"
            onPress={() => {}}
            labelStyle={{
              fontSize: 15,
            }}
          >
            Joined &#10003;
          </Button>
        )}
        {groupDetail.groupinfo?.memberStatus ===
          Member.Status.MEMBER_STATUS_WAITING && (
          <Button
            style={styles(theme).joinButton}
            buttonColor="#e68a00"
            mode="contained"
            onPress={() => {}}
            labelStyle={{
              fontSize: 15,
            }}
          >
            Requested
          </Button>
        )}
        {groupDetail.groupinfo?.memberStatus ===
          (Member.Status.MEMBER_STATUS_BANNED ||
            Member.Status.MEMBER_STATUS_REJECTED) && (
          <Button
            style={styles(theme).joinButton}
            buttonColor="#e82525"
            mode="contained"
            onPress={() => {}}
            labelStyle={{
              fontSize: 15,
            }}
          >
            {groupDetail.groupinfo?.memberStatus ===
            Member.Status.MEMBER_STATUS_BANNED
              ? 'Banned'
              : 'Rejected'}
          </Button>
        )}

        <Text style={styles(theme).desTitle}>
          {groupDetail.groupinfo?.description}
        </Text>

        <Divider bold style={{ width: '100%', marginTop: 20 }} />
        <Button
          style={{
            width: '80%',
            alignSelf: 'center',
          }}
          mode="text"
          onPress={() =>
            navigation.navigate('GroupMembers', {
              groupId: groupDetail.groupinfo?.id || 0,
              isLeader: userState.userId == groupDetail.groupinfo?.leaderId,
            })
          }
          labelStyle={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Members of group ({groupDetail.groupinfo?.numOfMembers})
        </Button>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles(theme).title}>User Ranking</Text>
          <Button
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
            mode="text"
            onPress={() =>
              navigation.navigate('MemberRanking', {
                groupId: groupDetail.groupinfo?.id || 0,
                isLeader: userState.userId == groupDetail.groupinfo?.leaderId,
              })
            }
            labelStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            View all &gt;
          </Button>
        </View>

        {userRankingList.map((item, index) => (
          <List.Item
            key={index}
            title={item.member?.displayName}
            description=""
            left={(props) => (
              <>
                <List.Icon {...props} icon="medal" />
                <List.Icon
                  {...props}
                  icon={'numeric-' + (index + 1) + '-circle'}
                />
              </>
            )}
            right={(props) => <Text>{item.point} pts</Text>}
          />
        ))}

        {noDataUserRankingList && (
          <Text
            variant="bodyLarge"
            style={{
              paddingVertical: 10,
              color: theme.colors.tertiary,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            No ranking yet
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles(theme).title}>Challenges</Text>
          <Button
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
            mode="text"
            onPress={() =>
              navigation.navigate('ChallengeList', {
                groupId: groupDetail.groupinfo?.id || 0,
                isLeader: userState.userId == groupDetail.groupinfo?.leaderId,
                leaderId: groupDetail.groupinfo?.leaderId || 0,
              })
            }
            labelStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            View all &gt;
          </Button>
        </View>

        {/* // Horizontal FlatList of challenges */}
        {!challengeListLoading && (
          <FlatList
            horizontal
            data={challengeList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: 'column',
                  marginBottom: 10,
                }}
                onPress={() =>
                  navigation.navigate('ChallengeDetail', {
                    canEdit:
                      groupDetail.groupinfo?.leaderId == userState.userId &&
                      item.status === RuleStatus.RULE_STATUS_COMING_SOON,
                    leaderId: groupDetail.groupinfo?.leaderId || 0,
                    challengeId: item.id,
                  })
                }
              >
                <Image
                  style={{
                    width: 150,
                    height: 130,
                    borderRadius: 5,
                    margin: 10,
                  }}
                  source={
                    item.picture == ''
                      ? require('../../../../../assets/group-img.png')
                      : { uri: item.picture }
                  }
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        {noChallengeData && (
          <Text
            variant="bodyLarge"
            style={{
              paddingVertical: 10,
              color: theme.colors.tertiary,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            No challenge found
          </Text>
        )}
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles(theme).title}>Events</Text>
          <Button
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
            }}
            mode="text"
            onPress={() => {
              navigation.navigate('EventList', {})
            }}
            labelStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            View all &gt;
          </Button>
        </View>

        <FlatList
          style={{ marginTop: 10 }}
          horizontal
          data={eventList.slice(0, 3)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                marginBottom: 10,
              }}
              onPress={() => {
                navigation.navigate('EventDetail', { event: item })
              }}
            >
              <Image
                style={{
                  width: 300,
                  height: 150,
                  marginHorizontal: 10,
                }}
                source={
                  item.picture == ''
                    ? require('../../../../../assets/group-img.png')
                    : { uri: item.picture }
                }
              />

              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        {!eventList.length && (
          <Text
            variant="bodyLarge"
            style={{
              paddingVertical: 10,
              color: theme.colors.tertiary,
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            No event found
          </Text>
        )}
      </ScrollView>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    imgContainer: {
      backgroundColor: theme.colors.tertiaryContainer,
      height: 140,
      justifyContent: 'flex-end',
      zIndex: 1,
      marginBottom: 40,
    },
    profilePicture: {
      top: 30,
      alignSelf: 'center',
      zIndex: 2,
      height: 100,
      width: 100,
      borderRadius: 5,
    },
    title: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    groupTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    desTitle: {
      marginTop: 5,
      alignSelf: 'center',
    },
    joinButton: {
      marginTop: 10,
      width: '40%',
      alignSelf: 'center',
    },
  })
