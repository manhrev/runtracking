import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, Text, TextInput, RadioButton } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppDispatch } from "../../redux/store";
import {TimePicker, ValueMap} from 'react-native-simple-time-picker';

import {
  createPlanThunk,
  listPlanThunk,
} from "../../redux/features/planList/thunk";

import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";

import { ActivityType } from "../../lib/activity/activity_pb";

import { Rule, CreatePlanRequest } from "../../lib/plan/plan_pb";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;

export default function PlanAdd({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanAdd">) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();

  const data = [
    { label: "Total Km", value: Rule.RULE_TOTAL_DISTANCE.toString() },
    { label: "Km per day", value: Rule.RULE_TOTAL_DISTANCE_DAILY.toString() },
    { label: "Total time", value: Rule.RULE_TOTAL_TIME.toString() },
    { label: "Time per day", value: Rule.RULE_TOTAL_TIME_DAILY.toString() },
    { label: "Total activities", value: Rule.RULE_TOTAL_ACTIVITY.toString() },
    {
      label: "Activities per day",
      value: Rule.RULE_TOTAL_ACTIVITY_DAILY.toString(),
    },
    { label: "Total calories", value: Rule.RULE_TOTAL_CALORIES.toString() },
    {
      label: "Calories per day",
      value: Rule.RULE_TOTAL_CALORIES_DAILY.toString(),
    },
  ];

  const getLabel = (value: any) => {
    const item = data.find((item) => item.value === value);
    return item ? item.label : "";
  };

  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const [timeGoalPickerValue, setTimeGoalPickerValue] = useState<ValueMap>({
    hours: 0,
    minutes: 5,
    seconds: 0,
  });

  const handleTimeGoalChange = (newValue: ValueMap) => {
      setTimeGoalPickerValue(newValue);
  };

  const [name, setName] = useState<string>("Example Plan");
  const [activityType, setActivityType] = useState<ActivityType>(
    ActivityType.ACTIVITY_TYPE_RUNNING
  );
  const [rule, setRule] = useState(Rule.RULE_TOTAL_DISTANCE.toString());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  ); // 1 day after
  const [goal, setGoal] = useState(1);
  const [note, setNote] = useState("Example Note");

  const setStart = (event: any, date: any) => {
    setShowStartTimePicker(false);
    setStartTime(date);
  };

  const setEnd = (event: any, date: any) => {
    setShowEndTimePicker(false);
    setEndTime(date);
  };

  const isDayAfterDay = (day1Sec: number, day2Sec: number) => {
    // how many days = day1 - day2
    const day1 = new Date(day1Sec * 1000);
    const day2 = new Date(day2Sec * 1000);
    const diff = day1.getTime() - day2.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays > 0;
  };

  const goalNumberOnChange = (text: string) => {
    if (text === "") {
      setGoal(0);
      return;
    }
    // remove all non-number characters
    const number = text.replace(/[^0-9]/g, "");
    setGoal(parseInt(number));
  };

  const returnGoal = () => {
    if (Number(rule) === Rule.RULE_TOTAL_TIME || Number(rule) === Rule.RULE_TOTAL_TIME_DAILY) {
      return timeGoalPickerValue.minutes * 60 + timeGoalPickerValue.seconds;
    }
    else if(Number(rule) === Rule.RULE_TOTAL_DISTANCE || Number(rule) === Rule.RULE_TOTAL_DISTANCE_DAILY) {
      return goal * 1000;
    }
    else return goal;
  }

  const savePlan = async () => {
    const planData: CreatePlanRequest.AsObject = {
      name: name,
      activityType: activityType,
      rule: Number(rule),
      startTime: {
        seconds: Math.floor(
          moment
            .unix(startTime.getTime() / 1000)
            .startOf("day")
            .valueOf() / 1000
        ),
        nanos: 0,
      },
      endTime: {
        seconds: Math.floor(
          moment
            .unix(endTime.getTime() / 1000)
            .endOf("day")
            .valueOf() / 1000
        ),
        nanos: 0,
      },
      goal: returnGoal(),
      note: note,
      timeZone: 7,
    };

    if (planData.name === "") {
      alert("Plan name cannot be empty!");
      return;
    }

    if (
      !isDayAfterDay(
        planData.endTime?.seconds || 0,
        planData.startTime?.seconds || 0
      )
    ) {
      alert("End time must be after start time!");
      return;
    }

    if (planData.goal <= 0) {
      alert("Goal must be greater than 0!");
      return;
    }

    const { error } = await dispatch(createPlanThunk(planData)).unwrap();

    const list = await dispatch(
      listPlanThunk({
        activityType: 0,
        ascending: false,
        limit: 100,
        offset: 0,
        sortBy: 1,
      })
    ).unwrap();
    if (!error) {
      alert("Plan created!");
      navigation.goBack();
    } else alert("An error occured, please try again");
  };

  return (
    <>
      <View style={styles(theme).container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles(theme).title}>Plan Name: </Text>
          <TextInput
            mode="outlined"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles(theme).title}>Activity Type:</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="running"
              status={
                activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
              }
            />
            <Text>Running</Text>

            <RadioButton
              value="walking"
              status={
                activityType === ActivityType.ACTIVITY_TYPE_WALKING
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
              }
            />
            <Text>Walking</Text>

            <RadioButton
              value="cycling"
              status={
                activityType === ActivityType.ACTIVITY_TYPE_CYCLING
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
              }
            />
            <Text>Cycling</Text>
          </View>

          <Text style={styles(theme).title}>Plan Type: </Text>
          <Dropdown
            style={styles(theme).dropdown}
            placeholderStyle={styles(theme).placeholderStyle}
            selectedTextStyle={styles(theme).selectedTextStyle}
            inputSearchStyle={styles(theme).inputSearchStyle}
            iconStyle={styles(theme).iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={rule.toString()}
            onChange={(item) => {
              setRule(item.value);
            }}
          />

          <Text style={styles(theme).title}>Start Date: </Text>
          <TextInput
            mode="outlined"
            value={startTime.toDateString()}
            // onChangeText={text => setStartTime(text)}
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
              value={startTime}
              mode="date"
              display="default"
              minimumDate={new Date()}
              onChange={setStart}
            />
          )}
          <Text style={styles(theme).title}>End Date: </Text>
          <TextInput
            mode="outlined"
            value={endTime.toDateString()}
            // onChangeText={text => setStartTime(text)}
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
              value={endTime}
              mode="date"
              display="default"
              // tommorow
              minimumDate={new Date(startTime.getTime() + 24 * 60 * 60 * 1000)}
              onChange={setEnd}
            />
          )}
          <Text style={styles(theme).title}>Goal: </Text>
          {!(Number(rule) === Rule.RULE_TOTAL_TIME || Number(rule) === Rule.RULE_TOTAL_TIME_DAILY) &&
            <TextInput
              mode="outlined"
              value={goal.toString()}
              onChangeText={(text) => goalNumberOnChange(text)}
              label={getLabel(rule)}
            />
          }
          
          {(Number(rule) === Rule.RULE_TOTAL_TIME || Number(rule) === Rule.RULE_TOTAL_TIME_DAILY) &&
            <TimePicker
              value={timeGoalPickerValue}
              onChange={handleTimeGoalChange}
              pickerShows={["minutes", "seconds"]}
              minutesUnit="m"
              secondsUnit="s"
          />}

          <Text style={styles(theme).title}>Note: </Text>
          <TextInput
            style={styles(theme).noteInput}
            multiline={true}
            numberOfLines={4}
            mode="outlined"
            value={note}
            onChangeText={(text) => setNote(text)}
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
              onPress={() => savePlan()}
              style={styles(theme).button}
            >
              Create
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
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
      fontWeight: "bold",
      fontSize: 16,
    },
    addPlanBtn: {
      alignSelf: "flex-end",
      marginRight: 20,
    },
    dropdown: {
      marginBottom: 7,
      height: 50,
      borderColor: "gray",
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    noteInput: {
      width: "100%",
      maxHeight: 100,
    },
  });