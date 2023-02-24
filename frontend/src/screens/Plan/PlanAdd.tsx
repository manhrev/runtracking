import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, Text, TextInput, RadioButton } from "react-native-paper";
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppDispatch } from "../../redux/store";

import {
    createPlanThunk
} from "../../redux/features/planList/thunk";

import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";

import {
    ActivityType
} from "../../lib/activity/activity_pb";


const windowWidth = Dimensions.get("window").width;


export default function PlanAdd({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanAdd">) {
    const theme = useAppTheme();
    const dispatch = useAppDispatch();

    const data = [
        { label: 'Total Km', value: '1' },
        { label: 'Km per day', value: '2' },
        { label: 'Total activity', value: '3' },
        { label: 'Activity per day', value: '4' },
        { label: 'Total calories', value: '5' },
        { label: 'Calories per day', value: '6' },
    ];

    const getLabel = (value: string) => {
        const item = data.find((item) => item.value === value);
        return item ? item.label : '';
    };

    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const [name, setName] = useState<string>('Example Plan');
    const [activityType, setActivityType] = useState<ActivityType>(ActivityType.ACTIVITY_TYPE_RUNNING);
    const [rule, setRule] = useState('1');
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [goal, setGoal] = useState(1);
    const [note, setNote] = useState('Example Note');

    const setStart = (event: any, date: any) => {
        setShowStartTimePicker(false);
        setStartTime(date);
    }

    const setEnd = (event: any, date: any) => {
        setShowEndTimePicker(false);
        setEndTime(date);
    }

    const savePlan = () => {
        const planData = {
            name: name,
            activityType: activityType,
            rule: rule,
            startTime: {
                seconds: startTime.getTime() / 1000,
                nanos: 0,
            },
            endTime: {
                seconds: endTime.getTime() / 1000,
                nanos: 0,
            },
            goal: goal,
            note: note,
        }
        dispatch(createPlanThunk(planData));
        alert("Plan created!");
        navigation.goBack();
    }
    


    return (
        <>
            <View style={styles(theme).container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles(theme).title}>Plan Name: </Text>
                    <TextInput
                        mode="outlined"
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    <Text style={styles(theme).title}>Activity Type:</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                        value="running"
                        status={activityType === ActivityType.ACTIVITY_TYPE_RUNNING ? "checked" : "unchecked"}
                        onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)}
                        />
                        <Text>Running</Text>

                        <RadioButton
                        value="walking"
                        status={activityType === ActivityType.ACTIVITY_TYPE_WALKING ? "checked" : "unchecked"}
                        onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)}
                        />
                        <Text>Walking</Text>

                        <RadioButton
                        value="cycling"
                        status={activityType === ActivityType.ACTIVITY_TYPE_CYCLING ? "checked" : "unchecked"}
                        onPress={() => setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)}
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
                        value={rule}
                        onChange={item => {
                            setRule(item.value);
                        }}
                    />

                    <Text style={styles(theme).title}>Start Date: </Text>
                    <TextInput
                        mode="outlined"
                        value={startTime.toDateString()}
                        // onChangeText={text => setStartTime(text)}
                        editable={false}
                        right={<TextInput.Icon icon="calendar" onPress={() => setShowStartTimePicker(true)} />} 
                    />
                    {showStartTimePicker && (
                        <DateTimePicker value={startTime} mode="date" display="default" onChange={setStart} />
                    )}
                    <Text style={styles(theme).title}>End Date: </Text>
                    <TextInput
                        mode="outlined"
                        value={endTime.toDateString()}
                        // onChangeText={text => setStartTime(text)}
                        editable={false}
                        right={<TextInput.Icon icon="calendar" onPress={() => setShowEndTimePicker(true)} />} 
                    />
                    {showEndTimePicker && (
                        <DateTimePicker value={endTime} mode="date" display="default" onChange={setEnd} />
                    )}
                    <Text style={styles(theme).title}>Goal: </Text>
                    <TextInput
                        mode="outlined"
                        value={goal.toString()}
                        onChangeText={text => setGoal(parseInt(text))}
                        label={getLabel(rule)}
                    />
                    
                    <Text style={styles(theme).title}>Note: </Text>
                    <TextInput
                        style={styles(theme).noteInput}
                        multiline={true}
                        numberOfLines={4}
                        mode="outlined"
                        value={note}
                        onChangeText={text => setNote(text)}
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
    button : {
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
        width: "100%",
        maxHeight: 100,
    },
  });
