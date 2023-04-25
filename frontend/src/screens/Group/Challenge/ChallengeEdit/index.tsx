import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Button, TextInput, RadioButton, IconButton, Menu } from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { toast } from '../../../../utils/toast/toast'
import * as Clipboard from 'expo-clipboard'

import { UpdateChallengeRequest, ChallengeInfo, RuleStatus, Rule } from '../../../../lib/group/group_pb'

import { updateChallengeThunk } from '../../../../redux/features/challengeList/thunk'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import { ActivityType } from '../../../../lib/activity/activity_pb'
import moment from 'moment'
import { ChallengeRuleStr } from '../../../../constants/enumstr/group'
import DateTimePicker from '@react-native-community/datetimepicker'
import { MultiSelect } from 'react-native-element-dropdown'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ChallengeRuleInfo } from '../../../../lib/group/group_pb'

export default function ChallengeEdit({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'ChallengeEdit'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()


    const [challengeInfo, setChallengeInfo] = useState<ChallengeInfo.AsObject>({
        name: route.params.challengeInfo?.name || "",
        description: route.params.challengeInfo?.description || "",
        picture: route.params.challengeInfo?.picture || "",
        type: route.params.challengeInfo?.type || ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
        status: route.params.challengeInfo?.status || RuleStatus.RULE_STATUS_UNSPECIFIED,
        challengerulesList: route.params.challengeInfo?.challengerulesList || [],
        from: route.params.challengeInfo?.from || {
            seconds: 0,
            nanos: 0,
        },
        to: route.params.challengeInfo?.to || {
            seconds: 0,
            nanos: 0,
        },
        id: route.params.challengeInfo?.id || 0,
        // dont need
        groupId: 0,
        memberProgressListList: [],
    })

    const getRealValue = (rule: Rule, value: number) => {
        if(rule == Rule.RULE_TOTAL_DISTANCE) {
            return value / 1000
        }
        else if(rule == Rule.RULE_TOTAL_TIME) {
            return value / 60
        }
        else return value
    }

    const getOldGoal = (rule: Rule) => {
        for (let i = 0; i < challengeInfo.challengerulesList.length; i++) {
            if (challengeInfo.challengerulesList[i].rule == rule) {
                return getRealValue(rule, challengeInfo.challengerulesList[i].goal)
            }
        }
        return rule == Rule.RULE_TOTAL_DISTANCE ? 1 : rule == Rule.RULE_TOTAL_TIME ? 5 : 500
    }

    // goals object
    const [goals, setGoals] = useState({
      distance: getOldGoal(Rule.RULE_TOTAL_DISTANCE),
      time: getOldGoal(Rule.RULE_TOTAL_TIME),
      calories: getOldGoal(Rule.RULE_TOTAL_CALORIES),
    })

    // dropdown list
    const dropDownData = [
      { label: 'Distance', value: Rule.RULE_TOTAL_DISTANCE.toString() },
      { label: 'Time', value: Rule.RULE_TOTAL_TIME.toString() },
      { label: 'Calories', value: Rule.RULE_TOTAL_CALORIES.toString() },
    ]
    const [dropdownSelected, setDropdownSelected] = useState<string[]>(route.params.challengeInfo?
        route.params.challengeInfo?.challengerulesList.map((item) => item.rule.toString()): [])

    const oldDropdown = (route.params.challengeInfo?
      route.params.challengeInfo?.challengerulesList.map((item) => item.rule.toString()): [])

    const renderItem = (item: any) => {
      return (
        <View style={styles(theme).item}>
          <Text style={styles(theme).selectedTextStyle}>{item.label}</Text>
          {dropdownSelected.includes(item.value) && (
            <AntDesign style={styles(theme).icon} color="black" name="Safety" size={20} />
          )}
        </View>
      );
    };

    // time picker
    const [showStartTimePicker, setShowStartTimePicker] = useState(false)
    const [showEndTimePicker, setShowEndTimePicker] = useState(false)

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

    const getRealGoal = (rule: Rule, goal: number) => {
        if (rule == Rule.RULE_TOTAL_DISTANCE) {
            return goal * 1000 // to meters
        }
        else if (rule == Rule.RULE_TOTAL_TIME) {
            return goal * 60 // to seconds
        }
        else return goal // calories
    }

    const getOldRuleId = (rule: number) => {
        const oldRuleId: number = 1
        for (let i = 0; i < challengeInfo.challengerulesList.length; i++) {
            if (challengeInfo.challengerulesList[i].rule == rule) {
                return challengeInfo.challengerulesList[i].id
            }
        }
        return oldRuleId
    }

    const getRuleListAfterModify = () => {
        const oldRuleList: ChallengeRuleInfo.AsObject[] = []
        const addRuleList: ChallengeRuleInfo.AsObject[] = []
        for (let i = 0; i < dropdownSelected.length; i++) {
            const rule = parseInt(dropdownSelected[i])
            const goal = rule == Rule.RULE_TOTAL_DISTANCE ? goals.distance : rule == Rule.RULE_TOTAL_TIME ? goals.time : goals.calories
            if(oldDropdown.includes(dropdownSelected[i])) { // already in old rule list
              oldRuleList.push({
                  id: getOldRuleId(rule),
                  rule: rule,
                  goal: getRealGoal(rule, goal),
              })
            }
            else addRuleList.push({
                id: 1, // ignore
                rule: rule,
                goal: getRealGoal(rule, goal),
            })

        }
        return { oldRuleList, addRuleList }
    }

    const getIdsRuleToDeleteList = () => {
        const deleteRuleList: number[] = []
        for (let i = 0; i < challengeInfo.challengerulesList.length; i++) {
            const rule = challengeInfo.challengerulesList[i].rule
            if (!dropdownSelected.includes(rule.toString())) {
                deleteRuleList.push(challengeInfo.challengerulesList[i].id)
            }
        }
        return deleteRuleList
    }


    const updateChallenge = async () => {
        if (challengeInfo.name == '' || challengeInfo.picture == '') {
          toast.error({ message: 'Challenge name or image link cannot be empty!' })
          return
        }
        else if (dropdownSelected.length == 0) {
          toast.error({ message: 'Please select at least 1 rule!' })
          return
        }
        else if (goals.distance <= 0 || goals.time <=  0 || goals.calories <=  0) {
          toast.error({ message: 'Goals cannot be negative or zero!' })
          return
        }
        else if (challengeInfo.from?.seconds)
        {
          if(challengeInfo.to?.seconds)
          {
            if(challengeInfo.from.seconds > challengeInfo.to.seconds)
            {
              toast.error({ message: 'Start date cannot be later than end date!' })
              return
            }
          }
        }

        const deleteRuleList = getIdsRuleToDeleteList()
        const req: UpdateChallengeRequest.AsObject = {
            groupId: route.params.groupId,
            idsRuleToDeleteList: deleteRuleList,
            challengeRulesToAddList: getRuleListAfterModify()['addRuleList'],
            challengeinfo: {
                ...challengeInfo,
                challengerulesList: getRuleListAfterModify()['oldRuleList'],
            }
        }

        console.log(req)

        const { error } = await dispatch(updateChallengeThunk(req)).unwrap()
        if (error) {
          toast.error({ message: 'An error occured, please try again!' })
          return
        } else {
          toast.success({ message: 'Challenge updated!' })
          navigation.goBack()
          route.params.reloadDetailFunc()
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

        <Text style={styles(theme).title}>Challenge Rules</Text>
        <MultiSelect
          style={styles(theme).dropdown}
          placeholderStyle={styles(theme).placeholderStyle}
          selectedTextStyle={styles(theme).selectedTextStyle}
          iconStyle={styles(theme).iconStyle}
          data={dropDownData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={dropdownSelected}
          onChange={(item) => {
            // challengRulesListChange('rule', parseInt(item.value))
            setDropdownSelected(item)
          }}
          renderItem={renderItem}
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles(theme).selectedStyle}>
                <Text style={styles(theme).textSelectedStyle}>{item.label}</Text>
                <AntDesign color="black" name="close" size={17} />
              </View>
            </TouchableOpacity>
          )}
        />

        <Text style={styles(theme).title}>Goals</Text>
        {dropdownSelected.length == 0 && <Text style={{marginLeft: 10}}>Please select at least one rule !</Text>}

        {dropdownSelected.includes(Rule.RULE_TOTAL_DISTANCE.toString()) && <TextInput
          mode="outlined"
          style={{ marginBottom: 10 }}
          label={ChallengeRuleStr[Rule.RULE_TOTAL_DISTANCE]}
          value={goals.distance.toString()}
          onChangeText={(text) => setGoals({ ...goals, distance: parseInt(text == '' ? '0' : text) })}
        />}

        {dropdownSelected.includes(Rule.RULE_TOTAL_TIME.toString()) && <TextInput
          mode="outlined"
          style={{ marginBottom: 10 }}
          label={ChallengeRuleStr[Rule.RULE_TOTAL_TIME]}
          value={goals.time.toString()}
          onChangeText={(text) => setGoals({ ...goals, time: parseInt(text == '' ? '0' : text) })}
        />}

        {dropdownSelected.includes(Rule.RULE_TOTAL_CALORIES.toString()) && <TextInput
          mode="outlined"
          label={ChallengeRuleStr[Rule.RULE_TOTAL_CALORIES]}
          value={goals.calories.toString()}
          onChangeText={(text) => setGoals({ ...goals, calories: parseInt(text == '' ? '0' : text) })}
        />}

        <Text style={styles(theme).title}>Start Date</Text>
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

        <Text style={styles(theme).title}>End Date</Text>
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
            onPress={() => updateChallenge()}
            style={styles(theme).button}
          >
            Save
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
    dropdown: {
      marginBottom: 7,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingRight: 15,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      marginLeft: 10,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 10,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'white',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
