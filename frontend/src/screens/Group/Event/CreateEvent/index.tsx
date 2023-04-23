import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'
import { Avatar, Button, IconButton, Text, TextInput } from 'react-native-paper'
import StepIndicator from 'react-native-step-indicator'
import {
  EventActivityTypeIcon,
  SubEventRuleStr,
} from '../../../../constants/enumstr/event'
import {
  ActivityType,
  CreateEventRequest,
  CreateSubEvent,
  Rule,
} from '../../../../lib/event/event_pb'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import { AppTheme, useAppTheme } from '../../../../theme'
import { eventClient } from '../../../../utils/grpc'
import { formatDateWithoutTime } from '../../../../utils/helpers'
import { toast } from '../../../../utils/toast/toast'
import { formatDataByRule } from '../EventDetail/comp/GroupProgressListItem'
import { customStepStyles } from './styles'

const screenWidth = Dimensions.get('window').width

export default function CreateEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'CreateEvent'>) {
  const theme = useAppTheme()
  const { ownerGroupId } = route.params
  const [eventToCreate, setEventToCreate] =
    useState<CreateEventRequest.AsObject>(
      new CreateEventRequest()
        .setIsGlobal(false)
        .setOwnerGroupId(ownerGroupId)
        .setPicture('https://placehold.jp/300x150.png')
        .toObject()
    )
  const { name, description } = eventToCreate
  const [subEventList, setSubEventList] = useState<CreateSubEvent.AsObject[]>(
    []
  )

  const handleSubmit = async () => {
    if (name === '') {
      toast.error({ message: 'Please input event name!' })
      return
    }
    if (description === '') {
      toast.error({ message: 'Please add some description!' })
      return
    }
    if (subEventList.length === 0) {
      toast.error({ message: 'Please add some challenge!' })
      return
    }

    const { error } = await eventClient.createEvent({
      ...eventToCreate,
      subEventsList: subEventList,
      startAt: subEventList[0].startAt,
    })
    if (error) {
      toast.error({ message: 'An error occurred, please try again later!' })
      return
    }
    toast.success({ message: 'Create event successfully!' })
  }

  return (
    <>
      <View style={styles(theme).container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles(theme).title}>Event name: </Text>
          <TextInput
            mode="outlined"
            value={eventToCreate.name}
            onChangeText={(text) => {
              setEventToCreate({ ...eventToCreate, name: text })
            }}
            placeholder="Event name"
          />
          <Text style={styles(theme).title}>Description: </Text>
          <TextInput
            multiline
            numberOfLines={3}
            mode="outlined"
            value={eventToCreate.description}
            onChangeText={(text) => {
              setEventToCreate({ ...eventToCreate, description: text })
            }}
            placeholder="Description"
          />
          <Text style={styles(theme).title}>Challenges: </Text>
          <View
            style={{
              height:
                subEventList.length > 0
                  ? subEventList.length * (subEventList.length <= 3 ? 140 : 120)
                  : 120,
              width: '100%',
              marginLeft: 10,
              marginVertical: subEventList.length == 1 ? 20 : 0,
            }}
          >
            {subEventList.length > 0 ? (
              <StepIndicator
                direction="vertical"
                customStyles={customStepStyles(theme)}
                currentPosition={subEventList.length}
                labels={subEventList.map((subEvent) => subEvent.name)}
                stepCount={subEventList.length}
                renderLabel={({
                  currentPosition,
                  label,
                  position,
                  stepStatus,
                }) => {
                  const { activityType, goal, rule, endAt, startAt } =
                    subEventList[position]
                  return (
                    <View
                      style={{ marginLeft: 20, width: screenWidth - 20 - 80 }}
                    >
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >
                        <View style={{ flex: 6 }}>
                          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            {label}
                          </Text>
                          <Text>Rule: {SubEventRuleStr[rule]}</Text>
                          <Text>Goal: {formatDataByRule(goal, rule)}</Text>
                          <Text>
                            Time: {formatDateWithoutTime(startAt)} -{' '}
                            {formatDateWithoutTime(endAt)}
                          </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                          {position === subEventList.length - 1 && (
                            <IconButton
                              size={15}
                              icon="minus"
                              mode="contained-tonal"
                              containerColor={theme.colors.error}
                              iconColor={theme.colors.onError}
                              onPress={() => {
                                setSubEventList(
                                  subEventList.slice(0, subEventList.length - 1)
                                )
                              }}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  )
                }}
                renderStepIndicator={({ position, stepStatus }) => {
                  return (
                    <Avatar.Icon
                      icon={
                        EventActivityTypeIcon[
                          subEventList[position].activityType
                        ]
                      }
                    />
                  )
                }}
              />
            ) : (
              <Text style={{ paddingTop: 10, alignSelf: 'center' }}>
                Click below to add more, maximum of 4 challenges
              </Text>
            )}
            {subEventList.length < 4 && (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >
                <IconButton
                  icon={'plus'}
                  mode="contained"
                  style={{ marginLeft: -1 }}
                  onPress={() => {
                    navigation.navigate('CreateSubEvent', {
                      subEventList: subEventList,
                      setSubEventList: setSubEventList,
                    })
                  }}
                />
                <Text style={{ fontWeight: 'bold' }}>Add more</Text>
              </View>
            )}
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
              onPress={handleSubmit}
              style={styles(theme).button}
            >
              Create
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
    },
    title: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
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
