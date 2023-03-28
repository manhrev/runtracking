import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppSelector } from '../../redux/store'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../../redux/store'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TimePicker, ValueMap } from 'react-native-simple-time-picker'

import { getPlanList } from '../../redux/features/planList/slice'

import { ActivityType } from '../../lib/activity/activity_pb'

import { Rule, UpdatePlanRequest } from '../../lib/plan/plan_pb'

import { updatePlanThunk } from '../../redux/features/planList/thunk'

import { RootHomeTabsParamList } from '../../navigators/HomeTab'

import { displayValue, toDate, getTextFromRule } from '../../utils/helpers'
import { toast } from '../../utils/toast/toast'

export default function PlanDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'PlanDetail'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const { planList } = useAppSelector(getPlanList)

  const [selectedPlan, setSelectedPlan] = useState({
    id: -1,
    name: '',
    activityType: 0,
    rule: 0,
    startTime: {
      seconds: 0,
      nanos: 0,
    },
    endTime: {
      seconds: 0,
      nanos: 0,
    },
    total: 0,
    goal: 0,
    note: '',
    status: 0,
  })
  const [editMode, setEditMode] = useState(false)
  const [showEndTimePicker, setShowEndTimePicker] = useState(false)

  const [timeGoalPickerValue, setTimeGoalPickerValue] = useState<ValueMap>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [newGoalValue, setNewGoalValue] = useState(1)

  const handleTimeGoalChange = (newValue: ValueMap) => {
    setTimeGoalPickerValue(newValue)
  }

  const setEnd = (event: any, date: any) => {
    setShowEndTimePicker(false)
    if (date) {
      setSelectedPlan({
        ...selectedPlan,
        endTime: {
          seconds: date.getTime() / 1000,
          nanos: 0,
        },
      })
    }
  }

  const toNewDate = (seconds: number) => {
    const t = new Date(seconds * 1000)
    return new Date(t.getFullYear(), t.getMonth(), t.getDate())
  }

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

  const goalNumberOnChange = (text: string) => {
    if (text === '') {
      setNewGoalValue(0)
      return
    }
    // remove all non-number characters
    const number = text.replace(/[^0-9]/g, '')
    setNewGoalValue(parseInt(number))
  }

  const isDayAfterDay = (day1Sec: number, day2Sec: number) => {
    // how many days = day1 - day2
    const day1 = new Date(day1Sec * 1000)
    const day2 = new Date(day2Sec * 1000)
    const diff = day1.getTime() - day2.getTime()
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24))
    return diffDays > 0
  }

  const returnGoal = () => {
    if (
      selectedPlan?.rule === Rule.RULE_TOTAL_TIME ||
      selectedPlan?.rule === Rule.RULE_TOTAL_TIME_DAILY
    ) {
      return timeGoalPickerValue.minutes * 60 + timeGoalPickerValue.seconds // total seconds
    } else if (
      selectedPlan?.rule === Rule.RULE_TOTAL_DISTANCE ||
      selectedPlan?.rule === Rule.RULE_TOTAL_DISTANCE_DAILY
    ) {
      return newGoalValue * 1000 // total meters
    } else return newGoalValue
  }

  const updatePlan = (planId: number | undefined) => {
    const updateInfo: UpdatePlanRequest.AsObject = {
      id: planId || 0,
      endTime: {
        seconds: selectedPlan?.endTime?.seconds || 0,
        nanos: 0,
      },
      goal: returnGoal(),
      name: selectedPlan?.name || '',
      note: selectedPlan?.note || '',
    }

    if (planId) {
      if (updateInfo.name === '') {
        toast.error({ message: 'Plan name cannot be empty!' })
        return
      }

      if (
        !isDayAfterDay(
          updateInfo.endTime?.seconds || 0,
          selectedPlan?.startTime?.seconds || 0
        )
      ) {
        toast.error({ message: 'End day must be after start day!' })
        return
      }

      if (updateInfo.goal <= 0) {
        toast.error({ message: 'Goal must be greater than 0!' })
        return
      }

      console.log('updateInfo', updateInfo)

      dispatch(updatePlanThunk(updateInfo)).unwrap()
      toast.success({ message: 'Plan updated!' })
      navigation.goBack()
    } else toast.error({ message: 'Plan ID is undefined' })
  }

  useEffect(() => {
    setSelectedPlan(planList.find((plan) => plan.id === route.params.planId))
  }, [])

  useEffect(() => {
    if (
      selectedPlan?.rule === Rule.RULE_TOTAL_TIME ||
      selectedPlan?.rule === Rule.RULE_TOTAL_TIME_DAILY
    ) {
      const minutes = Math.floor(selectedPlan?.goal / 60)
      const seconds = selectedPlan?.goal % 60
      setTimeGoalPickerValue({
        hours: 0,
        minutes: minutes,
        seconds: seconds,
      })
    }
    else if(selectedPlan?.rule === Rule.RULE_TOTAL_DISTANCE ||
      selectedPlan?.rule === Rule.RULE_TOTAL_DISTANCE_DAILY) {
        setNewGoalValue(selectedPlan?.goal / 1000)
      }
    else setNewGoalValue(selectedPlan?.goal)
  }, [selectedPlan?.goal])


  return (
    <>
      <View style={styles(theme).container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {route.params.canEdit ? (
            <Button
              mode="text"
              onPress={() => setEditMode(!editMode)}
              style={styles(theme).addPlanBtn}
              labelStyle={{ fontSize: 16 }}
            >
              {editMode ? 'EDITABLE: ON  ' : 'EDITABLE: OFF'}
            </Button>
          ) : null}

          <Text
            style={editMode ? styles(theme).editModeTitle : styles(theme).title}
          >
            Plan Name (ID: {selectedPlan?.id}):{' '}
          </Text>
          <TextInput
            mode="outlined"
            value={selectedPlan?.name}
            onChangeText={(text) =>
              setSelectedPlan({ ...selectedPlan, name: text })
            }
            editable={editMode}
          />
          <Text style={styles(theme).title}>Activity Type: </Text>
          <TextInput
            mode="outlined"
            value={getTextFromActivityType(selectedPlan?.activityType || 0)}
            editable={false}
          />
          <Text style={styles(theme).title}>Plan Type: </Text>
          <TextInput
            mode="outlined"
            value={getTextFromRule(selectedPlan?.rule || 0)}
            editable={false}
          />
          <Text style={styles(theme).title}>Start Date: </Text>
          <TextInput
            mode="outlined"
            value={toDate(selectedPlan?.startTime?.seconds || 0)}
            editable={false}
          />
          <Text
            style={editMode ? styles(theme).editModeTitle : styles(theme).title}
          >
            End Date:{' '}
          </Text>
          <TextInput
            mode="outlined"
            value={toDate(selectedPlan?.endTime?.seconds || 0)}
            editable={editMode}
            right={
              editMode && (
                <TextInput.Icon
                  iconColor={theme.colors.primary}
                  icon="calendar"
                  onPress={() => setShowEndTimePicker(true)}
                />
              )
            }
          />
          {showEndTimePicker && (
            <DateTimePicker
              value={toNewDate(selectedPlan?.endTime?.seconds || 0)}
              mode="date"
              minimumDate={toNewDate(
                selectedPlan?.startTime?.seconds + 86400 || 0
              )}
              onChange={setEnd}
            />
          )}
          <Text style={styles(theme).title}>Total: </Text>
          <TextInput
            mode="outlined"
            value={displayValue(
              selectedPlan?.rule || 0,
              selectedPlan?.total || 0
            ).toString()}
            editable={false}
          />
          <Text style={styles(theme).title}>Goal: </Text>
          <TextInput
            mode="outlined"
            value={displayValue(
              selectedPlan?.rule || 0,
              selectedPlan?.goal || 0
            ).toString()}
            label={getTextFromRule(selectedPlan?.rule || 0)}
            editable={false}
          />
          {editMode && (
            <Text
              style={
                editMode ? styles(theme).editModeTitle : styles(theme).title
              }
            >
              New Goal:{' '}
            </Text>
          )}

          {editMode &&
            (selectedPlan?.rule === Rule.RULE_TOTAL_TIME ||
              selectedPlan?.rule === Rule.RULE_TOTAL_TIME_DAILY) && (
              <TimePicker
                value={timeGoalPickerValue}
                onChange={handleTimeGoalChange}
                pickerShows={['minutes', 'seconds']}
                minutesUnit="m"
                secondsUnit="s"
              />
            )}
          {editMode &&
            !(
              selectedPlan?.rule === Rule.RULE_TOTAL_TIME ||
              selectedPlan?.rule === Rule.RULE_TOTAL_TIME_DAILY
            ) && (
              <TextInput
                mode="outlined"
                value={newGoalValue.toString()}
                label={getTextFromRule(selectedPlan?.rule || 0)}
                onChangeText={(text) => goalNumberOnChange(text)}
                editable={editMode}
              />
            )}

          <Text
            style={editMode ? styles(theme).editModeTitle : styles(theme).title}
          >
            Note:{' '}
          </Text>
          <TextInput
            style={styles(theme).noteInput}
            multiline={true}
            numberOfLines={4}
            mode="outlined"
            value={selectedPlan?.note}
            onChangeText={(text) =>
              setSelectedPlan({ ...selectedPlan, note: text })
            }
            editable={editMode}
          />

          <View
            style={editMode ? styles(theme).btnContainer : { display: 'none' }}
          >
            <Button
              mode="contained"
              buttonColor="#e82525"
              onPress={() => navigation.goBack()}
              style={styles(theme).button}
            >
              Cancel
            </Button>

            <Button
              mode="contained"
              onPress={() => updatePlan(selectedPlan?.id)}
              style={styles(theme).button}
            >
              Save
            </Button>
          </View>
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
    addPlanBtn: {
      alignSelf: 'flex-end',
      marginRight: 20,
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
