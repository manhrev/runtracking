import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List, ActivityIndicator, Avatar } from 'react-native-paper';
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'

import {
    selectChallengeDetail,
    isChallengeDetailLoading,
} from '../../../../redux/features/challengeDetail/slice'

import { Member, GetGroupReply, RuleStatus, ListChallengeRequest, MemberProgress, Rule } from '../../../../lib/group/group_pb'
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
import { ChallengeRuleStr, ActivityTypeIcon, ActivityTypeStr, ChallengeRuleIcon } from '../../../../constants/enumstr/group'

export default function ChallengeDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'ChallengeDetail'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const userState  = useAppSelector((state) => state.user);

    // challenge detail
    const { challengeDetail } = useAppSelector(selectChallengeDetail)
    const challengeDetailLoading = useAppSelector(isChallengeDetailLoading)

    // display
    const getRealDisplayValue = (rule: Rule, value: number) => {
        if(rule == Rule.RULE_TOTAL_DISTANCE) {
            return value / 1000
        }
        else if(rule == Rule.RULE_TOTAL_TIME) {
            // to mm:ss
            const minutes = Math.floor(value / 60)
            const seconds = value % 60 < 10 ? `0${value % 60}` : value % 60
    
            return `${minutes}:${seconds}`
        }
        else return value
    }

    const fetchChallengeDetail = async () => {
        await dispatch(getChallengeThunk({ id: route.params.challengeId })).unwrap()
    }

    useEffect(() => {
        fetchChallengeDetail()
    }, [])

    const getMyStatsList = () => {
        const memberProgressList = challengeDetail?.challengeinfo?.memberProgressListList || []
        const filtered = memberProgressList.filter((memberProgress) => memberProgress.memberInfo?.userId === userState.userId)
        
        if(filtered.length == 0) return []

        return filtered[0].ruleProgressListList
    }

    const getRuleLabel = (rule: Rule) => {
        if(rule == Rule.RULE_TOTAL_DISTANCE) {
            return "Kilometers"
        }
        else if(rule == Rule.RULE_TOTAL_TIME) {
            return "Minutes"
        }
        else return "Calories"
    }

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

        <View style={styles(theme).imgContainer}>
            {route.params.canEdit && <IconButton
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                icon="pencil"
                size={30}
                onPress={() => navigation.navigate('ChallengeEdit', {
                    groupId: challengeDetail.challengeinfo?.groupId || 0,
                    challengeInfo: challengeDetail.challengeinfo,
                    reloadDetailFunc: fetchChallengeDetail,
                })}
            />}
            <Image
                style={styles(theme).profilePicture}
                source={
                    challengeDetail.challengeinfo?.picture == "" ?
                    require('../../../../../assets/group-img.png') :
                    { uri: challengeDetail.challengeinfo?.picture }
                }
            />
        </View>

        <Text style={styles(theme).groupTitle}>{challengeDetail.challengeinfo?.name}</Text>

        <Text style={styles(theme).desTitle}>{challengeDetail.challengeinfo?.description}</Text>

        <Divider bold style={{ width: '100%', marginTop: 20 }} />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles(theme).title}>Goal</Text>
            <Button
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                mode="text"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}
            >
                From: {toDate(challengeDetail.challengeinfo?.from?.seconds || 0, true)}   -&gt;   To:{' '}
                        {toDate(challengeDetail.challengeinfo?.to?.seconds || 0, true)}
            </Button>
        </View>

        <List.Item
            title="Activity Type"
            description=""
            left={props =>
                <List.Icon
                    {...props}
                    icon={ActivityTypeIcon[challengeDetail.challengeinfo?.type || 0]}
                />
            }
            right={props => <Text>{ActivityTypeStr[challengeDetail.challengeinfo?.type || 0]}</Text>}
        />

        {challengeDetail.challengeinfo?.challengerulesList.map((item, index) => {
            return (
                <List.Item
                    key={index}
                    title={ChallengeRuleStr[item.rule]}
                    description=""
                    left={props =>
                        <List.Icon
                            {...props}
                            icon={ChallengeRuleIcon[item.rule]}
                        />
                    }
                    right={props =>
                        <Text>{getRealDisplayValue(item.rule, item.goal)}</Text>
                    }
                />
            )
        })}

        <Divider bold style={{ width: '100%', marginTop: 10 }} />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles(theme).title}>Your Stats</Text>
            <Button
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                mode="text"
                onPress={() => navigation.navigate('ChallengeStats', {
                    challengeId: route.params.challengeId,
                    leaderId: route.params.leaderId,
                })}
                labelStyle={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}
            >
                Members Stats &gt;&gt;
            </Button>
        </View>

        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                marginVertical: 10,
            }}
        >
            {getMyStatsList().map((item, index) => {
                return (
                    <View style={styles(theme).achievementBox} key={index}>
                        <Text
                            variant="displaySmall"
                            style={{ fontStyle: 'italic', fontWeight: 'bold' }}
                        >
                            {getRealDisplayValue(item.rule, item.total)}
                        </Text>
                        <Text variant="bodyLarge">{getRuleLabel(item.rule)}</Text>
                    </View>
                )
            })}
        </View>
        
        {getMyStatsList().length == 0 && <View
            style={{
                alignItems: 'center'
            }}
        >
            <View style={styles(theme).messageBox}>
                <Text variant="bodyMedium" style={{
                    fontWeight: 'bold',
                    color: theme.colors.tertiary,
                }}>
                    Join group to see your stats
                </Text>
            </View>
        </View>}

        

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
    },
    achievementBox: {
        backgroundColor: theme.colors.elevation.level1,
        borderRadius: 20,
        padding: 10,
        margin: 5,
        width: '45%',
    },
    messageBox: {
        backgroundColor: theme.colors.elevation.level1,
        borderRadius: 20,
        padding: 15,
        margin: 5,
        width: '80%',
        alignItems: 'center',
    },
})


