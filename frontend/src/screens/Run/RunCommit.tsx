import { Dimensions, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, IconButton, Text, List, Avatar } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useState, useEffect, useRef } from 'react'
import * as Progress from 'react-native-progress'
import { getPlanList } from '../../redux/features/planList/slice'
import { listPlanThunk } from '../../redux/features/planList/thunk'
import { PlanInfo, RuleStatus } from '../../lib/plan/plan_pb'
import { ChallengeInfo } from '../../lib/group/group_pb'
import {
  ActivityType,
  CommitActivityRequest,
  CommitObject,
  CommitType,
} from '../../lib/activity/activity_pb'
import { activityClient } from '../../utils/grpc'
import { groupClient } from '../../utils/grpc'
import {
  displayValue,
  getProgressOfDailyActivity,
  isDailyActivity,
  toDate,
} from '../../utils/helpers'
import { toast } from '../../utils/toast/toast'
import ChallengeItem from './comp/ChallengeItem'
import PlanItem from './comp/PlanItem'
import { baseStyles } from '../baseStyle'
import { text } from 'stream/consumers'

const windowWidth = Dimensions.get('window').width

export default function RunCommit({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'RunCommit'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  // show hide
  const [showPlan, setShowPlan] = useState(false)
  const [showChallenge, setShowChallenge] = useState(false)

  const { planList } = useAppSelector(getPlanList)
  const [selectedPlan, setSelectedPlan] = useState<PlanInfo.AsObject>(
    {} as PlanInfo.AsObject
  )

  // user
  const userState  = useAppSelector((state) => state.user);

  // challenge commit
  const [challengeList, setChallengeList] = useState<ChallengeInfo.AsObject[]>([])
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeInfo.AsObject>(
    {} as ChallengeInfo.AsObject
  )
  const fetchChallengeData = async () => {
    const res = await groupClient.listInProgressChallenge({ userId: userState.userId, activitytype: route.params.activityType })
    if(res.error) {
      console.log(res.error)
    }
    else 
    {
      setChallengeList(res.response?.challengeInfoListList || [])
      if(res.response?.challengeInfoListList?.length) {
        setSelectedChallenge(res.response?.challengeInfoListList[0])
      }
    }
  }

  const fetchPlanData = async () => {
    const res = await dispatch(
      listPlanThunk({
        activityType: 0,
        ascending: false,
        limit: 100,
        offset: 0,
        sortBy: 1,
        idsList: [],
      })
    ).unwrap()
  }

  useEffect(() => {
    if (planList.length > 0) {
      if(route.params.selectedPlanId != -1) {
        // find plan that id is the same as selectedPlan.id
        for(let i = 0; i < planList.length; i++) {
          if(planList[i].id == route.params.selectedPlanId) {
            setSelectedPlan(planList[i])
            break
          }
        }
      }
      else {
        // check each plan, if it is in progress and has the same activity type as the current activity, select it
        for (let i = 0; i < planList.length; i++) {
          if (
            planList[i].status === RuleStatus.RULE_STATUS_INPROGRESS &&
            planList[i].activityType == route.params.activityType
          ) {
            setSelectedPlan(planList[i])
            break
          }
        }
      }
    }
  }, [planList])

  useEffect(() => {
    fetchPlanData()
    fetchChallengeData()
  }, [])

  const commitToPlan = async (): Promise<boolean> => {
    const commitObj: CommitObject.AsObject = {
      commitId: selectedPlan.id,
      commitType: CommitType.COMMIT_TYPE_PLAN,
      rule: selectedPlan.rule,
    }
    const commitReq: CommitActivityRequest.AsObject = {
      activityId: route.params.activityId,
      commitToList: [commitObj]
    }
    console.log(commitReq)

    const res = await activityClient.commitActivity(commitReq)
    if (!res.error) {
      return true
    }
    return false
  }

  const commitToChallenge = async (): Promise<boolean> => {
    const commitObj: CommitObject.AsObject = {
      commitId: selectedChallenge.id,
      commitType: CommitType.COMMIT_TYPE_CHALLENGE,
      rule: 1, // ignore
    }

    const commitReq: CommitActivityRequest.AsObject = {
      activityId: route.params.activityId,
      commitToList: [commitObj]
    }
    console.log(commitReq)

    const res = await activityClient.commitActivity(commitReq)
    if (!res.error) {
      return true
    }
    return false
  }

  const commitAll = async () => {
    const planStatus = filteredPlanList.length > 0 ? await commitToPlan() : true
    const challengeStatus = challengeList.length > 0 ? await commitToChallenge() : true

    console.log(planStatus, challengeStatus)

    if(planStatus && challengeStatus) {
      toast.success({ message: 'Commit success' })
      navigation.goBack()
    }
    else if(planStatus && !challengeStatus) {
      toast.error({ message: 'Commit to challenge failed' })
      navigation.goBack()
    }
    else if(!planStatus && challengeStatus) {
      toast.error({ message: 'Commit to plan failed' })
      navigation.goBack()
    }
    else {
      toast.error({ message: 'Commit failed' })
    }
  }

  const getSelectedPlan = () => {
    if(filteredPlanList.length > 0) {
      // find plan that id is the same as selectedPlan.id
      for(let i = 0; i < filteredPlanList.length; i++) {
        if(filteredPlanList[i].id === selectedPlan.id) {
          return filteredPlanList[i]
        }
      }
    }
    return null
  }

  const getSelectedChallenge = () => {
    if(challengeList.length > 0) {
      // find challenge that id is the same as selectedChallenge.id
      for(let i = 0; i < challengeList.length; i++) {
        if(challengeList[i].id === selectedChallenge.id) {
          return challengeList[i]
        }
      }
    }
    return null
  }




  const backToHome = () => {
    route.params.resetRunInfo()
    navigation.goBack()
  }

  const filteredPlanList = planList.filter(
    (item) =>
      item.status === RuleStatus.RULE_STATUS_INPROGRESS &&
      item.activityType == route.params.activityType
  )

  return (
    <>
      <View style={styles(theme).container}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <IconButton
              icon="check-circle"
              size={100}
              iconColor={theme.colors.primary}
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles(theme).title}>
              Your activity has been recorded !!!
            </Text>
            <Text style={styles(theme).title}>{filteredPlanList.length == 0 && challengeList.length == 0 ? 'Nothing to commit' : 'Choose to commit'}</Text>
            <View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
              }}>
                  <Text style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                  }}>Plan:</Text>

                  <TouchableOpacity
                    onPress={() => setShowPlan(!showPlan)}
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: theme.colors.primary,
                    }}>
                      {selectedPlan.name ? selectedPlan.name : 'No data'}
                    </Text>

                    <Avatar.Icon
                      icon={showPlan ? 'chevron-up' : 'chevron-down'}
                      size={35}
                      color={theme.colors.primary}
                      style={{
                        backgroundColor: 'transparent',
                      }}
                    />
                  </TouchableOpacity>
              </View>

              {!showPlan && getSelectedPlan() != null && ( // show selected plan
                    <PlanItem
                      key={getSelectedPlan().name}
                      plan={getSelectedPlan()}
                      hideTopDivider={true}
                      showBottomDivider={true}
                      navigateFunc={() => navigation.navigate('PlanDetail', {
                        planId: getSelectedPlan().id,
                        canEdit: false,
                      })}
                      selectedPlan={selectedPlan}
                      setSelectedPlan={setSelectedPlan}
                    />
              )}

              {showPlan && filteredPlanList.map((plan, idx) => ( // show all plans
                    <PlanItem
                      key={idx}
                      plan={plan}
                      hideTopDivider={idx === 0}
                      showBottomDivider={idx === filteredPlanList.length - 1}
                      navigateFunc={() => navigation.navigate('PlanDetail', {
                        planId: plan.id,
                        canEdit: false,
                      })}
                      selectedPlan={selectedPlan}
                      setSelectedPlan={setSelectedPlan}
                    />
              ))}
            </View>

            <View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
              }}>
                  <Text style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                  }}>Challenge:</Text>

                  <TouchableOpacity
                    onPress={() => setShowChallenge(!showChallenge)}
                    style={{
                      alignSelf: 'flex-end',
                      marginRight: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: theme.colors.primary,
                    }}>
                      {selectedChallenge.name ? selectedChallenge.name : 'No data'}
                    </Text>

                    <Avatar.Icon
                      icon={showChallenge ? 'chevron-up' : 'chevron-down'}
                      size={35}
                      color={theme.colors.primary}
                      style={{
                        backgroundColor: 'transparent',
                      }}
                    />
                  </TouchableOpacity>
              </View>

              {!showChallenge && getSelectedChallenge() != null && (
                  <ChallengeItem
                    key={selectedChallenge.name}
                    challenge={selectedChallenge}
                    hideTopDivider={true}
                    showBottomDivider={true}
                    setSelectedChallenge={setSelectedChallenge}
                    selectedChallenge={selectedChallenge}
                    goToChallengeDetail={() => navigation.navigate('ChallengeDetail', {
                      challengeId: selectedChallenge.id,
                      canEdit: false,
                      leaderId: -1, // missing
                    })}
                  />
                )
              }

              {showChallenge && challengeList.map((challenge: ChallengeInfo.AsObject, idx) => {
                return (
                  <ChallengeItem
                    key={idx}
                    challenge={challenge}
                    hideTopDivider={idx === 0}
                    showBottomDivider={idx === challengeList.length - 1}
                    setSelectedChallenge={setSelectedChallenge}
                    selectedChallenge={selectedChallenge}
                    goToChallengeDetail={() => navigation.navigate('ChallengeDetail', {
                      challengeId: challenge.id,
                      canEdit: false,
                      leaderId: -1, // missing
                    })}
                  />
                )
              })}
            </View>

            {(filteredPlanList.length > 0 ||  challengeList.length > 0) && (
              <Button
                style={styles(theme).commitBtn}
                mode="contained"
                onPress={() => commitAll()}
              >
                Commit &gt;&gt;
              </Button>
            )}

            {filteredPlanList.length == 0 &&  challengeList.length == 0 && (
              <View style={{
                alignItems: 'center',
                marginTop: 50,
              }}>
                <Button
                  labelStyle={{ fontSize: 17 }}
                  mode="contained"
                  onPress={() => backToHome()}
                >
                  &lt;&lt; Back to home 
                </Button>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    planName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    curPlan: {
      // bottom divider
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#b5b7ba',
    },
    commitBtn: {
      alignSelf: 'flex-end',
      marginRight: 20,
      marginTop: 10,
    },
    segmentedBtn: {
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
    },
  })
