import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { Text, Button, TextInput, RadioButton, IconButton, Menu } from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { toast } from '../../../../utils/toast/toast'
import * as Clipboard from 'expo-clipboard'

import { CreateChallengeRequest, ChallengeInfo, RuleStatus, Rule } from '../../../../lib/group/group_pb'

import { createChallengeThunk } from '../../../../redux/features/challengeList/thunk'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import { ActivityType } from '../../../../lib/activity/activity_pb'
import moment from 'moment'
import { ChallengeRuleStr } from '../../../../constants/enumstr/group'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function ChallengeAdd({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'ChallengeAdd'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const [visible, setVisible] = useState(false)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    // time picker
    const [showStartTimePicker, setShowStartTimePicker] = useState(false)
    const [showEndTimePicker, setShowEndTimePicker] = useState(false)

    const [challengeInfo, setChallengeInfo] = useState<ChallengeInfo.AsObject>({
        name: 'Example Challenge',
        description: 'Example Description',
        picture:
        'https://cdn.dribbble.com/users/2984251/screenshots/15487625/media/1501cb8cd7dbdb88127b7402c2692acd.png?compress=1&resize=1000x750&vertical=top',
        type: ActivityType.ACTIVITY_TYPE_RUNNING,
        status: RuleStatus.RULE_STATUS_COMING_SOON,
        challengerulesList: [
            {
                id: 1,
                goal: 1,
                rule: Rule.RULE_TOTAL_DISTANCE,
                createdAt: {
                  "seconds": 1680755341,
                  "nanos": 0
                },
                updatedAt: {
                  "seconds": 1680755341,
                  "nanos": 0
                },
            }
        ],
        from: {
            // today
            seconds: Math.floor(
                moment
                    .unix(new Date().getTime() / 1000)
                    .startOf('day')
                    .valueOf() / 1000
            ),
            nanos: 0,
        },
        to: {
            // 1 day later
            seconds: Math.floor(
                moment
                    .unix(new Date().getTime() / 1000 + 86400)
                    .endOf('day')
                    .valueOf() / 1000
            ),
            nanos: 0,
        },
        // dont need
        id: 0,
        groupId: 0,
        memberProgressListList: [],
    })

    const challengRulesListChange = (field: string, value: number) => {
        setChallengeInfo({
            ...challengeInfo,
            challengerulesList: [
                {
                    ...challengeInfo.challengerulesList[0],
                    [field]: value,
                },
            ],
        })
    }

    const setStart = (event: any, date: any) => {
        setShowStartTimePicker(false)
        setChallengeInfo({ ...challengeInfo, from: {
            seconds: Math.floor(
                moment
                    .unix(date.getTime() / 1000)
                    .startOf('day')
                    .valueOf() / 1000
            ),
            nanos: 0,
        }})
    }
    
    const setEnd = (event: any, date: any) => {
        setShowEndTimePicker(false)
        setChallengeInfo({ ...challengeInfo, to: {
            seconds: Math.floor(
                moment
                    .unix(date.getTime() / 1000)
                    .endOf('day')
                    .valueOf() / 1000
            ),
            nanos: 0,
        }})
    }

    const copiedTextToImageLink = async () => {
        const text: any = await Clipboard.getStringAsync()
        if (text == null || text == '') {
        toast.error({ message: 'Clipboard is empty!' })
        return
        }
        setChallengeInfo({ ...challengeInfo, picture: text })
    }

    const createNewChallenge = async () => {
        if (challengeInfo.name == '' || challengeInfo.picture == '') {
        toast.error({ message: 'Challenge name or image link cannot be empty!' })
        return
        }

        const req: CreateChallengeRequest.AsObject = {
            groupId: route.params.groupId,
            challengeinfo: challengeInfo,
        }

        console.log(req)

        const { error } = await dispatch(createChallengeThunk(req)).unwrap()
        if (error) {
          toast.error({ message: 'An error occured, please try again!' })
          return
        } else {
          toast.success({ message: 'Challenge created!' })
          navigation.goBack()
        }
    }

  return (
    <View style={baseStyles(theme).container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={baseStyles(theme).innerWrapper}
      >
        <View style={styles(theme).imgContainer}>
          <Image
            style={styles(theme).profilePicture}
            source={
              challengeInfo.picture == ''
                ? require('../../../../../assets/group-img.png')
                : { uri: challengeInfo.picture }
            }
          />
        </View>

        {challengeInfo.name && (
          <Text style={styles(theme).groupTitle}>{challengeInfo.name}</Text>
        )}

        <Text style={styles(theme).title}>Challenge Name </Text>
        <TextInput
          mode="outlined"
          value={challengeInfo.name}
          onChangeText={(text) => setChallengeInfo({ ...challengeInfo, name: text })}
        />

        <Text style={styles(theme).title}>Image Link </Text>
        <TextInput
          mode="outlined"
          value={challengeInfo.picture}
          onChangeText={(text) =>
            setChallengeInfo({ ...challengeInfo, picture: text })
          }
          right={
            challengeInfo.picture == '' ? (
              <TextInput.Icon
                icon="clipboard-arrow-down-outline"
                onPress={() => copiedTextToImageLink()}
              />
            ) : (
              <TextInput.Icon
                icon="window-close"
                onPress={() =>
                  setChallengeInfo({ ...challengeInfo, picture: '' })
                }
              />
            )
          }
        />

        <Text style={styles(theme).title}>Activity Type</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton
                value="running"
                status={
                challengeInfo.type === ActivityType.ACTIVITY_TYPE_RUNNING
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                    setChallengeInfo({ ...challengeInfo, type: ActivityType.ACTIVITY_TYPE_RUNNING })
                }
            />
            <Text>Running</Text>

            <RadioButton
                value="walking"
                status={
                    challengeInfo.type === ActivityType.ACTIVITY_TYPE_WALKING
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                    setChallengeInfo({ ...challengeInfo, type: ActivityType.ACTIVITY_TYPE_WALKING })
                }
            />
            <Text>Walking</Text>

            <RadioButton
                value="cycling"
                status={
                challengeInfo.type === ActivityType.ACTIVITY_TYPE_CYCLING
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                    setChallengeInfo({ ...challengeInfo, type: ActivityType.ACTIVITY_TYPE_CYCLING })
                }
            />
            <Text>Cycling</Text>
        </View>

        <Text style={styles(theme).title}>Challenge Rule: </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
                variant="bodyLarge"
                style={{
                    fontWeight: 'bold',
                    color: theme.colors.secondary,
                    marginLeft: 10,
                }}
            >
                {ChallengeRuleStr[challengeInfo.challengerulesList[0].rule]}
            </Text>

            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <IconButton
                        icon="cog"
                        iconColor={theme.colors.primary}
                        size={23}
                        onPress={openMenu}
                    />
                }
            >
                <Menu.Item
                    onPress={() => {
                        challengRulesListChange('rule', Rule.RULE_TOTAL_DISTANCE)
                        closeMenu()
                    }}
                    title={'Total KM'}
                />
                <Menu.Item
                    onPress={() => {
                        challengRulesListChange('rule', Rule.RULE_TOTAL_TIME)
                        closeMenu()
                    }}
                    title={'Total Time'}
                />
                <Menu.Item
                    onPress={() => {
                        challengRulesListChange('rule', Rule.RULE_TOTAL_CALORIES)
                        closeMenu()
                    }}
                    title={'Total Calories'}
            />
            </Menu>
        </View>

        <Text style={styles(theme).title}>Start Date: </Text>
        <TextInput
            mode="outlined"
            value={challengeInfo.from?.seconds ? new Date(challengeInfo.from.seconds * 1000).toDateString() : ''}
            editable={false}
            right={
                <TextInput.Icon
                    icon="calendar"
                    onPress={() => setShowStartTimePicker(true)}
                />
            }
        />
        {showStartTimePicker && (
            <DateTimePicker
                value={challengeInfo.from?.seconds ? new Date(challengeInfo.from.seconds * 1000) : new Date()}
                mode="date"
                display="default"
                minimumDate={new Date()}
                onChange={setStart}
            />
        )}

        <Text style={styles(theme).title}>End Date: </Text>
        <TextInput
            mode="outlined"
            value={challengeInfo.to?.seconds ? new Date(challengeInfo.to.seconds * 1000).toDateString() : ''}
            editable={false}
            right={
                <TextInput.Icon
                    icon="calendar"
                    onPress={() => setShowEndTimePicker(true)}
                />
            }
        />
        {showEndTimePicker && (
            <DateTimePicker
                value={challengeInfo.to?.seconds ? new Date(challengeInfo.to.seconds * 1000) : new Date()}
                mode="date"
                display="default"
                // tommorow
                minimumDate={new Date(challengeInfo.from?.seconds ? challengeInfo.from.seconds * 1000 + 24 * 60 * 60 * 1000 : new Date().getTime() + 24 * 60 * 60 * 1000)}
                onChange={setEnd}
            />
        )}

        <Text style={styles(theme).title}>Goal</Text>
        <TextInput
          mode="outlined"
          value={challengeInfo.challengerulesList[0].goal.toString()}
          onChangeText={(text) => challengRulesListChange('goal', text === '' ? 0 : parseInt(text))}
        />

        <Text style={styles(theme).title}>Challenge Description</Text>
        <TextInput
          style={styles(theme).noteInput}
          multiline={true}
          numberOfLines={6}
          mode="outlined"
          value={challengeInfo.description}
          onChangeText={(text) =>
            setChallengeInfo({ ...challengeInfo, description: text })
          }
        />

        <View style={styles(theme).btnContainer}>
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
            onPress={() => createNewChallenge()}
            style={styles(theme).button}
          >
            Create
          </Button>
        </View>
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
    noteInput: {
      width: '100%',
      maxHeight: 150,
    },
    button: {
      flex: 1,
      marginTop: 30,
      marginRight: 12,
      marginLeft: 12,
    },
    btnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    groupTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  })
