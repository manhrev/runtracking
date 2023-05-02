import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Avatar, Button, Divider, IconButton, Text, TextInput } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppSelector } from '../../redux/store'
import { useState, useEffect, useCallback } from 'react'
import { useAppDispatch } from '../../redux/store'
import { getPlanList } from '../../redux/features/planList/slice'

import { PlanInfo, RuleStatus } from '../../lib/plan/plan_pb'
import { ActivityType } from '../../lib/activity/activity_pb'

import { RootHomeTabsParamList } from '../../navigators/HomeTab'

import { displayValue, toDate, getTextFromRule, getProgressOfDailyActivity, isDailyActivity } from '../../utils/helpers'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { PlanRuleProgressStr } from '../../constants/enumstr/plan'
import { ActivityTypeIcon } from '../../constants/enumstr/group'

export default function PlanDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'PlanDetail'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const { planList } = useAppSelector(getPlanList)

  const [selectedPlan, setSelectedPlan] = useState<PlanInfo.AsObject>({} as PlanInfo.AsObject)

  const getTextFromActivityType = (activityType: number) => {
    switch (activityType) {
      case ActivityType.ACTIVITY_TYPE_RUNNING:
        return 'Running'
      case ActivityType.ACTIVITY_TYPE_WALKING:
        return 'Walking'
      case ActivityType.ACTIVITY_TYPE_CYCLING:
        return 'Cycling'
      default:
        return 'Unknown'
    }
  }

  useEffect(() => {
    setSelectedPlan(planList.find((plan) => plan.id === route.params.planId))
  }, [planList])

  return (
    <>
      <View style={styles(theme).container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <View>
              <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 5,
              }}>
                {selectedPlan?.name}
              </Text>

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: theme.colors.tertiary,
                marginBottom: 5,
              }}>
                {toDate(selectedPlan?.startTime?.seconds || 0)} - {toDate(selectedPlan?.endTime?.seconds || 0)}
              </Text>

              <Text style={{
                fontSize: 17,
              }}>
                {selectedPlan?.activityType ? getTextFromActivityType(selectedPlan?.activityType) : 'Unknown'}
              </Text>
            </View>
            {route.params.canEdit &&
              <IconButton
                style={{
                  alignSelf: 'flex-start',
                }}
                icon="pencil"
                size={30}
                onPress={() =>
                  navigation.navigate('PlanEdit', {
                    planId: route.params.planId,
                    canEdit: route.params.canEdit,
                  })
                }
              />
            }
          </View>

          <Divider bold style={{ marginVertical: 10 }} />
          <View style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
            <AnimatedCircularProgress
              size={230}
              width={7}
              fill={isDailyActivity(selectedPlan.rule) ? getProgressOfDailyActivity(selectedPlan.progressList) / selectedPlan.goal * 100
              : selectedPlan.total / selectedPlan.goal * 100}
              tintColor='green'
              backgroundColor="#e0e0e0"
              // text inside the circle
              children={(fill) => (
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  {isDailyActivity(selectedPlan.rule) && <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'green',
                  }}>
                    {displayValue(selectedPlan.rule, getProgressOfDailyActivity(selectedPlan.progressList))} / {displayValue(selectedPlan.rule, selectedPlan.goal)}
                  </Text>}

                  {!isDailyActivity(selectedPlan.rule) && <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'green',
                  }}>
                    {displayValue(selectedPlan.rule, selectedPlan.total)} / {displayValue(selectedPlan.rule, selectedPlan.goal) }
                  </Text>}

                  <Text style={{
                    fontSize: 13,
                    fontWeight: '100',
                    color: theme.colors.secondary,
                    marginTop: 15,
                  }}>
                    {isDailyActivity(selectedPlan.rule) ? Math.floor(getProgressOfDailyActivity(selectedPlan.progressList) / selectedPlan.goal * 100)
                    : Math.floor(selectedPlan.total / selectedPlan.goal * 100)}% progress of
                  </Text>
                  <Text style={{
                    fontSize: 15,
                    fontWeight: '700',
                    color: theme.colors.secondary,
                  }}>
                    {PlanRuleProgressStr[selectedPlan.rule]}
                  </Text>
                </View>
              )}
            />
          </View>
          
          <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
            Notes
          </Text>
          
          <Divider bold style={{ marginVertical: 10 }} />
          <Text>
            {selectedPlan?.note}
          </Text>

          {selectedPlan.status == RuleStatus.RULE_STATUS_INPROGRESS && route.params.canEdit && <TouchableOpacity
            style={{
              alignItems: 'center',
              marginTop: 30,
            }}
            onPress={() =>
              navigation.navigate('RunTracking', {
                planId: selectedPlan.id,
                activityType: selectedPlan.activityType,
              })
            }
          >
            <Avatar.Icon
              size={60}
              icon={ActivityTypeIcon[selectedPlan.activityType]}
            />
            <Text style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
              Let's start &gt;&gt;
            </Text>
          </TouchableOpacity>}
        </ScrollView>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
    },
    title: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    dropdown: {
      marginBottom: 7,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 10,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    button: {
      flex: 1,
      margin: 12,
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    noteInput: {
      width: '100%',
      maxHeight: 100,
    },
    editModeTitle: {
      color: theme.colors.primary,
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    deleteBtn: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
