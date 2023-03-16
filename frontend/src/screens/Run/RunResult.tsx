import { StyleSheet, View, Dimensions } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  Divider,
  Text,
  List,
  TextInput,
  RadioButton,
  Button,
} from 'react-native-paper'

import { AppTheme, useAppTheme } from '../../theme'
import { baseStyles } from '../baseStyle'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import React, { useState } from 'react'
import {
  ActivityInfo,
  ActivityType,
  CreateActivityInfoRequest,
  TrackPoint,
} from '../../lib/activity/activity_pb'
import { activityClient } from '../../utils/grpc'
import { LogBox } from 'react-native'
import { useAppSelector } from '../../redux/store'
import { selectUserSlice } from '../../redux/features/user/slice'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

const windowWidth = Dimensions.get('window').width

export default function RunResult({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'RunResult'>) {
  const theme = useAppTheme()
  const [activityName, setActivityName] = useState('Sample')
  const [activityNote, setActivityNote] = useState('Sample Note')
  const [activityType, setActivityType] = useState<ActivityType>(
    ActivityType.ACTIVITY_TYPE_RUNNING
  )

  const { weight } = useAppSelector(selectUserSlice)

  // console.log(route.params.savingInfo);
  const { duration, endTime, routeList, startTime, totalDistance, kcal } =
    route.params.savingInfo
  const saveActivity = () => {
    const activityInfo: ActivityInfo.AsObject = {
      activityName: activityName,
      activityNote: activityNote,
      duration: duration,
      kcal: kcal,
      routeList: routeList,
      totalDistance: totalDistance,
      type: activityType,
      startTime: startTime,
      endTime: endTime,
      id: 0,
      commitId: 0,
      commitType: 0,
    }
    // console.log(activityInfo);
    activityClient.createActivityInfo(activityInfo).then((res) => {
      if (!res.error) {
        if (res.response?.idCreated) {
          navigation.pop()
          route.params.resetRunInfo()
          navigation.navigate('RunCommit', {
            activityId: res.response.idCreated,
            activityType: activityType,
            resetRunInfo: route.params.resetRunInfo,
          })
        }
      } else alert('Failed!')
    })
  }

  const deleteActivity = () => {
    navigation.goBack()
  }

  return (
    <View style={baseStyles(theme).container}>
      <List.Item
        title="Distance (KM)"
        description=""
        left={(props) => <List.Icon {...props} icon="map-marker-distance" />}
        right={(props) => <Text>{route.params.display.distance}</Text>}
      />
      <List.Item
        title="Duration"
        description=""
        left={(props) => <List.Icon {...props} icon="timer" />}
        right={(props) => <Text>{route.params.display.time}</Text>}
      />
      <List.Item
        title="Pace (MIN/KM)"
        description=""
        left={(props) => <List.Icon {...props} icon="speedometer" />}
        right={(props) => <Text>{route.params.display.pace}</Text>}
      />

      <List.Item
        title="KCAL"
        description=""
        left={(props) => <List.Icon {...props} icon="lightning-bolt-circle" />}
        right={(props) => <Text>{route.params.display.kcal}</Text>}
      />

      <TextInput
        style={styles(theme).titleInput}
        label="Activity Name"
        mode="outlined"
        value={activityName}
        onChangeText={(text) => setActivityName(text)}
      />

      <View style={{ marginLeft: 15 }}>
        <Text style={{ marginTop: 20, marginBottom: 10 }}>Activity Type:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="running"
            status={
              activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)}
          />
          <Text>Running</Text>

          <RadioButton
            value="walking"
            status={
              activityType === ActivityType.ACTIVITY_TYPE_WALKING
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)}
          />
          <Text>Walking</Text>

          <RadioButton
            value="cycling"
            status={
              activityType === ActivityType.ACTIVITY_TYPE_CYCLING
                ? 'checked'
                : 'unchecked'
            }
            onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)}
          />
          <Text>Cycling</Text>
        </View>
      </View>

      <TextInput
        style={styles(theme).noteInput}
        multiline={true}
        numberOfLines={4}
        label="Note"
        mode="outlined"
        value={activityNote}
        onChangeText={(text) => setActivityNote(text)}
      />

      <View style={styles(theme).btnContainer}>
        <Button
          mode="contained"
          buttonColor="#e82525"
          onPress={() => deleteActivity()}
          style={styles(theme).button}
        >
          Cancel
        </Button>

        <Button
          mode="contained"
          onPress={() => saveActivity()}
          style={styles(theme).button}
        >
          Save
        </Button>
      </View>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    titleInput: {
      width: windowWidth * 0.9,
      marginTop: 10,
      // center
      marginLeft: 'auto',
      marginRight: 'auto',
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
      width: windowWidth * 0.9,
      marginTop: 10,
      // center
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: 100,
    },
  })
