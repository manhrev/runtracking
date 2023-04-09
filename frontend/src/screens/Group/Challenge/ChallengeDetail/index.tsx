import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List, ActivityIndicator } from 'react-native-paper'
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
import { ChallengeRuleStr } from '../../../../constants/enumstr/group'

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
                // onPress={() => navigation.navigate('GroupEdit', {
                //     groupInfo: challengeDetail.groupinfo? challengeDetail.groupinfo : undefined,
                //     reloadDetailFunc: fetchchallengeDetail,
                // })}
                onPress={() => alert('Coming soon')}
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
                    fontSize: 15,
                }}
            >
                From: {toDate(challengeDetail.challengeinfo?.from?.seconds || 0, true)}   --&gt;   To:{' '}
                        {toDate(challengeDetail.challengeinfo?.to?.seconds || 0, true)}
            </Button>
        </View>

        {challengeDetail.challengeinfo?.challengerulesList.map((item, index) => {
            return (
                <List.Item
                    key={index}
                    title={ChallengeRuleStr[item.rule]}
                    description=""
                    left={props =>
                        <List.Icon
                            {...props}
                            icon={item.rule === Rule.RULE_TOTAL_DISTANCE ? "map-marker-distance" :
                                item.rule === Rule.RULE_TOTAL_TIME ? "timer" : "lightning-bolt-circle"}
                        />
                    }
                    right={props => <Text>{getRealDisplayValue(item.rule, item.goal)}</Text>}
                />
            )
        })}
        
        {/* <List.Item
            title="Total Distance (km)"
            description=""
            left={props =>
                <List.Icon {...props} icon="map-marker-distance" />
            }
            right={props => <Text>30</Text>}
        />
        <List.Item
            title="Total Time (minutes)"
            description=""
            left={props =>
                <List.Icon {...props} icon="timer" />
            }
            right={props => <Text>12</Text>}
        />
        <List.Item
            title="Total Calories"
            description=""
            left={props =>
                <List.Icon {...props} icon="lightning-bolt-circle" />
            }
            right={props => <Text>500</Text>}
        /> */}

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
                    fontSize: 15,
                }}
            >
                Members Stats &gt;&gt;
            </Button>
        </View>

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


