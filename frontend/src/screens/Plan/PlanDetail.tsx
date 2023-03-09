import { Dimensions, ScrollView, StyleSheet, View, Alert } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider, TextInput } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppSelector } from "../../redux/store";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import DateTimePicker from '@react-native-community/datetimepicker';

import {
    isPlanListLoading,
    getPlanList,
} from "../../redux/features/planList/slice";

import {
    ActivityType
} from "../../lib/activity/activity_pb";

import {
    Rule,
    PlanInfo,
    UpdatePlanRequest,
    DeletePlansRequest
} from "../../lib/plan/plan_pb";

import {
    updatePlanThunk,
    deletePlansThunk
} from "../../redux/features/planList/thunk";


import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";


const windowWidth = Dimensions.get("window").width;


export default function PlanDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanDetail">) {
    const theme = useAppTheme();
    const dispatch = useAppDispatch();

    const { planList } = useAppSelector(getPlanList);

    const [selectedPlan, setSelectedPlan] = useState({
        id: -1,
        name: "",
        activityType: 0,
        rule: 0,
        startTime: {
            seconds: 0,
            nanos: 0
        },
        endTime: {
            seconds: 0,
            nanos: 0
        },
        total: 0,
        goal: 0,
        note: "",
        status: 0
    });
    const [editMode, setEditMode] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const setEnd = (event: any, date: any) => {
        setShowEndTimePicker(false);
        if (date) {
            setSelectedPlan({
                ...selectedPlan,
                endTime: {
                    seconds: date.getTime() / 1000,
                    nanos: 0
                }
            });
        }
    }

    const toDate = (seconds: number) => {
        // dd/mm/yyyy
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    const toNewDate = (seconds: number) => {
        const t = new Date(seconds * 1000);
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
    }

    const getTextFromActivityType = (activityType: number) => {
        switch (activityType) {
            case ActivityType.ACTIVITY_TYPE_RUNNING:
                return "Running";
            case ActivityType.ACTIVITY_TYPE_WALKING:
                return "Walking";
            case ActivityType.ACTIVITY_TYPE_CYCLING:
                return "Cycling";
            default:
                return "Unknown";
        }
    }

    const getTextFromRule = (rule: number) => {
        switch (rule) {
            case Rule.RULE_TOTAL_DISTANCE:
                return "Total Km";
            case Rule.RULE_TOTAL_DISTANCE_DAILY:
                return "Km per day";
            case Rule.RULE_TOTAL_TIME:
                return "Total time";
            case Rule.RULE_TOTAL_TIME_DAILY:
                return "Time per day";
            case Rule.RULE_TOTAL_ACTIVITY:
                return "Total activities";
            case Rule.RULE_TOTAL_ACTIVITY_DAILY:
                return "Activities per day";
            case Rule.RULE_TOTAL_CALORIES:
                return "Total calories";
            case Rule.RULE_TOTAL_CALORIES_DAILY:
                return "Calories per day";
            default:
                return "Unknown";
        }
    }

    const goalNumberOnChange = (text: string) => {
        if(text === "") {
            setSelectedPlan({...selectedPlan, goal: 0});
            return;
        }
        // remove all non-number characters
        const number = text.replace(/[^0-9]/g, "");
        setSelectedPlan({...selectedPlan, goal: parseInt(number)});
    }

    const isDayAfterDay = (day1Sec: number, day2Sec: number) => {
        // how many days = day1 - day2
        const day1 = new Date(day1Sec * 1000);
        const day2 = new Date(day2Sec * 1000);
        const diff = day1.getTime() - day2.getTime();
        const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays > 0;
    }
    

    const updatePlan = (planId: number | undefined) => {
        const updateInfo: UpdatePlanRequest.AsObject = {
            id: planId || 0,
            endTime: {
              seconds: selectedPlan?.endTime?.seconds || 0,
              nanos: 0
            },
            goal: selectedPlan?.goal || 0,
            name: selectedPlan?.name || "",
            note: selectedPlan?.note || "",
        }
        
        if(planId) {
            if(updateInfo.name === "") {
                alert("Plan name cannot be empty!");
                return;
            }

            if(!isDayAfterDay(updateInfo.endTime?.seconds || 0, selectedPlan?.startTime?.seconds || 0)) {
                alert("End day must be after start day!");
                return;
            }

            if(updateInfo.goal <= 0) {
                alert("Goal must be greater than 0!");
                return;
            }

            dispatch(updatePlanThunk(updateInfo)).unwrap();
            alert("Plan updated");
            navigation.goBack();
        }
        else alert("Plan ID is undefined");
    }

    const deletePlanOrNot = () => {
        Alert.alert(
            "Delete Plan",
            "Are you sure you want to delete \"" + selectedPlan?.name + "\" ?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Yes", onPress: () => deletePlanConfirmed() }
            ],
            { cancelable: false }
        );
    }

    const deletePlanConfirmed = () => {
        const deleteInfo: DeletePlansRequest.AsObject = {
            idsList: [selectedPlan?.id || 0]
        }
        dispatch(deletePlansThunk(deleteInfo)).unwrap();
        alert("Deleted plan with ID: " + selectedPlan?.id);
        navigation.goBack();
    }

    useEffect(() => {
        setSelectedPlan(planList.find(plan => plan.id === route.params.planId));
    }, []);

    return (
        <>
            <View style={styles(theme).container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {route.params.canEdit ?
                    <Button mode="text" onPress={() => setEditMode(!editMode)} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                        {editMode ? "EDITABLE: ON  " : "EDITABLE: OFF"}
                    </Button>: null}

                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Plan Name (ID: {selectedPlan?.id}): </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.name}
                        onChangeText={text => setSelectedPlan({...selectedPlan, name: text})}
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
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>End Date: </Text>
                    <TextInput
                        mode="outlined"
                        value={toDate(selectedPlan?.endTime?.seconds || 0)}
                        editable={editMode}
                        right={
                            editMode && <TextInput.Icon iconColor={theme.colors.primary} icon="calendar" onPress={() => setShowEndTimePicker(true)}
                        />}
                    />
                    {showEndTimePicker && (
                        <DateTimePicker
                            value={toNewDate(selectedPlan?.endTime?.seconds || 0)}
                            mode="date"
                            display="default"
                            minimumDate={toNewDate(selectedPlan?.startTime?.seconds + 86400 || 0)}
                            onChange={setEnd}
                        />
                    )}
                    <Text style={styles(theme).title}>Total: </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.total.toString()}
                        editable={false}
                    />
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Goal: </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.goal.toString()}
                        label={getTextFromRule(selectedPlan?.rule || 0)}
                        onChangeText={text => goalNumberOnChange(text)}
                        editable={editMode}
                    />
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Note: </Text>
                    <TextInput
                        style={styles(theme).noteInput}
                        multiline={true}
                        numberOfLines={4}
                        mode="outlined"
                        value={selectedPlan?.note}
                        onChangeText={text => setSelectedPlan({...selectedPlan, note: text})}
                        editable={editMode}
                    />

                    <View style={editMode ? styles(theme).btnContainer : {display: "none"}}>
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

                    {editMode && <Button mode="text" onPress={() => deletePlanOrNot()} 
                        style={styles(theme).deleteBtn}
                        labelStyle={{
                            fontSize: 16,
                            borderBottomColor: "#e82525",
                            borderBottomWidth: 1,
                            color: "#e82525"
                        }}>
                        [ Delete Plan ]
                    </Button>}
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
        marginBottom: 16,
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
    editModeTitle: {
        color: theme.colors.primary,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 16,
    },
    deleteBtn: {
        alignItems: "center",
        justifyContent: "center",
    },
});

