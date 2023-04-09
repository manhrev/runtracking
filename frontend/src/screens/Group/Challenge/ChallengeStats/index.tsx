import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List, ActivityIndicator, SegmentedButtons } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'

import {
    selectChallengeDetail,
    isChallengeDetailLoading,
} from '../../../../redux/features/challengeDetail/slice'

import { Member, GetGroupReply, RuleStatus, ListChallengeRequest, MemberProgress } from '../../../../lib/group/group_pb'
import { useEffect, useState } from 'react'
import { FabGroup } from '../../../../comp/FabGroup'
import { groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

import { useDialog } from '../../../../hooks/useDialog'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'
import { getChallengeThunk } from '../../../../redux/features/challengeDetail/thunk'
import { RefreshControl } from 'react-native-gesture-handler'
import { listChallengeThunk } from '../../../../redux/features/challengeList/thunk'
import { ActivityType } from '../../../../lib/activity/activity_pb'
import { toDate } from '../../../../utils/helpers'
import MemberItem from './comp/MemberItem'

export default function ChallengeStats({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'ChallengeStats'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const userState  = useAppSelector((state) => state.user);

    const [tabState, setTabState] = useState('All')

    // challenge detail
    const { challengeDetail } = useAppSelector(selectChallengeDetail)
    const challengeDetailLoading = useAppSelector(isChallengeDetailLoading)

    // filter
    const getFilteredMemberProgressList = () => {
        const memberProgressList = challengeDetail?.challengeinfo?.memberProgressListList || []

        if (tabState === 'Me') {
            return memberProgressList.filter((memberProgress) => memberProgress.memberInfo?.userId === userState.userId)
        } else if (tabState === 'Others') {
            return memberProgressList.filter((memberProgress) => memberProgress.memberInfo?.userId  !== userState.userId)
        } else return memberProgressList
    }

    const fetchChallengeDetail = async () => {
        await dispatch(getChallengeThunk({ id: route.params.challengeId })).unwrap()
    }

    useEffect(() => {
        fetchChallengeDetail()
    }, [])

  return (
    <View style={baseStyles(theme).container}>
      {!challengeDetailLoading && <ScrollView
            showsVerticalScrollIndicator={false}
            style={baseStyles(theme).innerWrapper}
            refreshControl={
                <RefreshControl
                    refreshing={challengeDetailLoading}
                    onRefresh={fetchChallengeDetail}
                />
            }
        >
        <SegmentedButtons
            style={{
                alignSelf: 'center',
                marginBottom: 10,
                marginTop: 30,
            }}
            value={tabState}
            onValueChange={setTabState}
            density="medium"
            buttons={[
            {
                value: 'All',
                label: 'All',
            },
            {
                value: 'Others',
                label: 'Others',
            },
            {
                value: 'Me',
                label: 'Me',
            },
            ]}
        />
        
        {getFilteredMemberProgressList().map((progress: MemberProgress.AsObject, idx) => {
            return (
                <MemberItem
                    key={idx}
                    progress={progress}
                    hideTopDivider={idx === 0}
                    showBottomDivider={idx === (challengeDetail.challengeinfo?.memberProgressListList? challengeDetail.challengeinfo?.memberProgressListList.length - 1 : 0)}
                    leaderId={route.params.leaderId}
                    viewProfile={() =>
                        navigation.navigate('OtherUser', { userId: progress.memberInfo?.userId || 0 })
                    }
                />
            )
        })}
        

      </ScrollView>}
      {challengeDetailLoading &&
        <ActivityIndicator
            animating={true}
            size='large'
            style={{
                paddingVertical: 120,
            }}
        />
      }
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
    }
})


