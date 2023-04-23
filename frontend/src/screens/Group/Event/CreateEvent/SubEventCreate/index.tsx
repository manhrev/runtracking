import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Button, IconButton, Text, TextInput } from 'react-native-paper'
import {
  ActivityType,
  CreateSubEvent,
  Rule,
} from '../../../../../lib/event/event_pb'
import { RootBaseStackParamList } from '../../../../../navigators/BaseStack'
import { AppTheme, useAppTheme } from '../../../../../theme'
import DateTimePicker from '@react-native-community/datetimepicker'
import { formatDateWithoutTime } from '../../../../../utils/helpers'
import { toast } from '../../../../../utils/toast/toast'
import moment from 'moment'

export default function SubEventCreate({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'CreateSubEvent'>) {
  const theme = useAppTheme()
  const { subEventList, setSubEventList } = route.params
  const latestEvent = subEventList[subEventList.length - 1] || undefined
  const [subEvent, setSubEvent] = useState<CreateSubEvent.AsObject>(
    new CreateSubEvent()
      .setGoal(0)
      .setRule(Rule.RULE_TOTAL_DISTANCE)
      .setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
      .toObject()
  )
  const { name, description, activityType, rule, endAt, startAt, goal } =
    subEvent
  const [timePickerVisible, setTimePickerVisible] = useState(false)
  const [timePickerMode, setTimePickerMode] = useState<'start' | 'end'>('start')
  const [goalStr, setGoalStr] = useState('')
  const valueForPicker = (() => {
    if (timePickerMode === 'start') {
      return timestamppbToDate(subEvent.startAt)
    }
    return timestamppbToDate(subEvent.endAt)
  })()

  const onSubmit = () => {
    if (!name) {
      toast.error({ message: 'Please input name' })
      return
    }
    if (!description) {
      toast.error({ message: 'Please input description' })
      return
    }
    if (!goalStr) {
      toast.error({ message: 'Please input goal' })
      return
    }
    if (!startAt) {
      toast.error({ message: 'Please input start time' })
      return
    }
    if (!endAt) {
      toast.error({ message: 'Please input end time' })
      return
    }
    if (goal <= 0) {
      toast.error({ message: 'Goal must be greater than 0' })
      return
    }
    if (startAt.seconds >= endAt.seconds) {
      toast.error({ message: 'Start time must be before end time' })
      return
    }

    setSubEventList([...subEventList, subEvent])
    navigation.goBack()
  }
  return (
    <>
      <View style={styles(theme).container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles(theme).title}>Challenge name: </Text>
          <TextInput
            mode="outlined"
            value={name}
            onChangeText={(text) => {
              setSubEvent({ ...subEvent, name: text })
            }}
            placeholder="Challenge name"
          />
          <Text style={styles(theme).title}>Description: </Text>
          <TextInput
            mode="outlined"
            value={description}
            onChangeText={(text) => {
              setSubEvent({ ...subEvent, description: text })
            }}
            placeholder="Description for this challenge"
          />
          <Text style={styles(theme).title}>Activity type: </Text>
          <View
            style={{
              width: '80%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <IconButton
              mode={
                activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                  ? 'contained'
                  : 'outlined'
              }
              onPress={() => {
                setSubEvent({
                  ...subEvent,
                  activityType: ActivityType.ACTIVITY_TYPE_RUNNING,
                })
              }}
              icon="run"
              size={40}
            />
            <IconButton
              mode={
                activityType === ActivityType.ACTIVITY_TYPE_CYCLING
                  ? 'contained'
                  : 'outlined'
              }
              onPress={() => {
                setSubEvent({
                  ...subEvent,
                  activityType: ActivityType.ACTIVITY_TYPE_CYCLING,
                })
              }}
              icon="bike"
              size={40}
            />

            <IconButton
              mode={
                activityType === ActivityType.ACTIVITY_TYPE_WALKING
                  ? 'contained'
                  : 'outlined'
              }
              icon="walk"
              onPress={() => {
                setSubEvent({
                  ...subEvent,
                  activityType: ActivityType.ACTIVITY_TYPE_WALKING,
                })
              }}
              size={40}
            />
          </View>
          <Text style={styles(theme).title}>Rule: </Text>
          <Dropdown
            style={styles(theme).dropdown}
            placeholderStyle={styles(theme).placeholderStyle}
            selectedTextStyle={styles(theme).selectedTextStyle}
            iconStyle={styles(theme).iconStyle}
            data={[
              { label: 'Total activity', value: Rule.RULE_TOTAL_ACTIVITY },
              { label: 'Total distance (km)', value: Rule.RULE_TOTAL_DISTANCE },
              {
                label: 'Total calories (kcal)',
                value: Rule.RULE_TOTAL_CALORIES,
              },
              { label: 'Total time (hours)', value: Rule.RULE_TOTAL_TIME },
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={{ value: rule }}
            onChange={(item) => {
              setSubEvent({ ...subEvent, rule: item.value })
            }}
          />
          <Text style={styles(theme).title}>Goal:</Text>
          <TextInput
            keyboardType="numeric"
            mode="outlined"
            value={goalStr}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9.]/g, '')
              setGoalStr(numericValue)
            }}
            onEndEditing={() => {
              let goal = Math.floor(parseFloat(goalStr) * 1000)
              if (goalStr == '') {
                setGoalStr('0')
                goal = 0
              }

              setSubEvent({
                ...subEvent,
                goal: goal,
              })
            }}
            placeholder="Set goal of challenge"
          />
          <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles(theme).title}>Start Date: </Text>
              <TextInput
                mode="outlined"
                value={startAt ? formatDateWithoutTime(startAt) : ''}
                editable={false}
                placeholder="Set start time"
                right={
                  <TextInput.Icon
                    icon="calendar"
                    onPress={() => {
                      setTimePickerVisible(true), setTimePickerMode('start')
                    }}
                  />
                }
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles(theme).title}>End Date: </Text>
              <TextInput
                mode="outlined"
                placeholder="Set end time"
                value={endAt ? formatDateWithoutTime(endAt) : ''}
                editable={false}
                right={
                  <TextInput.Icon
                    icon="calendar"
                    onPress={() => {
                      setTimePickerVisible(true), setTimePickerMode('end')
                    }}
                  />
                }
              />
            </View>
          </View>
          <View style={styles(theme).btnContainer}>
            <Button
              mode="contained"
              buttonColor="#e82525"
              onPress={() => {
                navigation.goBack()
              }}
              style={styles(theme).button}
            >
              Cancel
            </Button>

            <Button
              mode="contained"
              onPress={onSubmit}
              style={styles(theme).button}
            >
              Add
            </Button>
          </View>
        </ScrollView>
      </View>
      {timePickerVisible && (
        <DateTimePicker
          value={valueForPicker || new Date()}
          mode="date"
          display="default"
          minimumDate={
            timePickerMode === 'start'
              ? latestEvent
                ? moment(timestamppbToDate(latestEvent.endAt))
                    .add(1, 'day')
                    .toDate()
                : new Date()
              : timestamppbToDate(subEvent.startAt)
          }
          onChange={(event, date) => {
            setTimePickerVisible(false)
            if (event.type === 'dismissed') return
            if (!date) return
            let convertDate = date
            if (timePickerMode === 'start') {
              convertDate = moment(date).startOf('day').toDate()
            } else {
              convertDate = moment(date).endOf('day').toDate()
            }
            const timestamp = Math.floor(convertDate.getTime() / 1000)

            if (timePickerMode === 'start') {
              setSubEvent({
                ...subEvent,
                startAt: {
                  nanos: 0,
                  seconds: timestamp,
                },
              })
            }
            if (timePickerMode === 'end') {
              setSubEvent({
                ...subEvent,
                endAt: {
                  nanos: 0,
                  seconds: timestamp,
                },
              })
            }
          }}
        />
      )}
    </>
  )
}

function timestamppbToDate(
  timestamp: Timestamp.AsObject | undefined
): Date | undefined {
  if (!timestamp) return undefined
  return new Date(timestamp.seconds * 1000)
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
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
      paddingRight: 15,
    },
    placeholderStyle: {
      fontSize: 16,
      marginLeft: 15,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 10,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    button: {
      flex: 1,
      margin: 12,
    },
    btnContainer: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
