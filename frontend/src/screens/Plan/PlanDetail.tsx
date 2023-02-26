import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider, TextInput } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppSelector } from "../../redux/store";
import { useState, useEffect } from "react";

import {
    isPlanListLoading,
    getPlanList,
} from "../../redux/features/planList/slice";

import {
    ActivityType
} from "../../lib/activity/activity_pb";

import {
    Rule,
    PlanInfo
} from "../../lib/plan/plan_pb";


import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";


const windowWidth = Dimensions.get("window").width;


export default function PlanDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanDetail">) {
    const theme = useAppTheme();
    const { planList } = useAppSelector(getPlanList);

    const [selectedPlan, setSelectedPlan] = useState<PlanInfo.AsObject | null>(null);
    const [editMode, setEditMode] = useState(false);

    const toDate = (seconds: number) => {
        // dd/mm/yyyy
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
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




    useEffect(() => {
        setSelectedPlan(planList.find(plan => plan.id === route.params.planId));
    }, []);

    return (
        <>
            <View style={styles(theme).container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Button mode="text" onPress={() => setEditMode(!editMode)} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                        {editMode ? "EDITABLE: ON  " : "EDITABLE: OFF"}
                    </Button>
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Plan Name (ID: {selectedPlan?.id}): </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.name}
                        // onChangeText={text => setName(text)}
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
                        // onChangeText={text => setName(text)}
                        editable={editMode}
                    />
                    <Text style={styles(theme).title}>Total: </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.total.toString()}
                        editable={editMode}
                    />
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Goal: </Text>
                    <TextInput
                        mode="outlined"
                        value={selectedPlan?.goal.toString()}
                        label={getTextFromRule(selectedPlan?.rule || 0)}
                        // onChangeText={text => setName(text)}
                        editable={editMode}
                    />
                    <Text style={editMode ? styles(theme).editModeTitle : styles(theme).title}>Note: </Text>
                    <TextInput
                        style={styles(theme).noteInput}
                        multiline={true}
                        numberOfLines={4}
                        mode="outlined"
                        value={selectedPlan?.note}
                        // onChangeText={text => setNote(text)}
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
                            onPress={() => { alert("Plan saved"); navigation.goBack(); }}
                            style={styles(theme).button}
                            >
                            Save
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

});

