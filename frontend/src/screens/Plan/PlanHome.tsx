import { Dimensions, ScrollView, StyleSheet, View, Alert } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import * as Progress from 'react-native-progress';

import {
    isPlanListLoading,
    getPlanList,
} from "../../redux/features/planList/slice";

import {
    listPlanThunk
} from "../../redux/features/planList/thunk";

import {
    RuleStatus,
    DeletePlansRequest,
    Rule,
    PlanProgress
} from "../../lib/plan/plan_pb";

import {
    deletePlansThunk
} from "../../redux/features/planList/thunk";

import {
    ActivityType
} from "../../lib/activity/activity_pb";


const windowWidth = Dimensions.get("window").width;


export default function Plan({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanHome">) {
    const theme = useAppTheme();

    const dispatch = useAppDispatch();
    const { planList } = useAppSelector(getPlanList);
    // const isLoading = useAppSelector(isPlanListLoading);
    const [tabState, setTabState] = useState("current");
    const [deleteListId, setDeleteListId] = useState<number[]>([]);

    useFocusEffect(
        useCallback(() => {
            dispatch(listPlanThunk({
                activityType: 0,
                ascending: false,
                limit: 100,
                offset: 0,
                sortBy: 1,
            })).unwrap();
        }, [])
    );

    const toDate = (seconds: number) => {
        // dd/mm/yyyy
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    const addOrRemoveFromDeleteList = (id: number) => {
        if(deleteListId.includes(id)){
            // remove from delete list
            setDeleteListId(deleteListId.filter((item) => item !== id));
        } else {
            setDeleteListId([...deleteListId, id]);
        }
    }

    const deletePlanOrNot = () => {
        if(deleteListId.length === 0) {
            alert("No plan selected");
            return;
        }

        Alert.alert(
            "Delete Plan",
            "Are you sure you want to delete " + deleteListId.length + " plan(s)?",
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
            idsList: deleteListId,
        }
        dispatch(deletePlansThunk(deleteInfo)).unwrap();
        alert("Deleted plan with ID(s): " + deleteListId);
        setDeleteListId([]);
    }

    const isDailyActivity = (planRule: Rule) => {
        return  planRule === Rule.RULE_TOTAL_DISTANCE_DAILY ||
                planRule === Rule.RULE_TOTAL_TIME_DAILY ||
                planRule === Rule.RULE_TOTAL_ACTIVITY_DAILY ||
                planRule === Rule.RULE_TOTAL_CALORIES_DAILY;
    }

    const getProgressOfDailyActivity = (progressList: Array<PlanProgress.AsObject>) => {
        if(progressList.length > 0)
        {
            const today = (new Date()). getDate();
            var value = -1;
            progressList.map((element: any) => {
                // if the date is today -> get this element value
                const date = new Date(element.timestamp.seconds * 1000);
                if(date.getDate() === today){
                    value = Number(element.value);
                }
            });
            if(value === -1) return 0;
            else return value;
        }
        return 0;
    }


    return (
        <>
            <View style={styles(theme).container}>
                <View style={styles(theme).btnContainer}>
                    <Button mode="text" onPress={() => navigation.navigate("PlanAdd")} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                        ADD NEW PLAN
                    </Button>

                    <Button mode="text" onPress={() => deletePlanOrNot()} style={styles(theme).selectPlanBtn} labelStyle={{
                        fontSize: 16,
                        color: "#e82525"
                    }}>
                        DELETE({deleteListId.length})
                    </Button>
                </View>

                    <SegmentedButtons
                        style={styles(theme).segmentedBtn}
                        value={tabState}
                        onValueChange={setTabState}
                        density="regular"
                        buttons={[
                        {
                            value: 'current',
                            label: '      Current      ',
                        },
                        {
                            value: 'history',
                            label: '      History      ',
                        }
                        ]}
                    />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {planList.map((item, index) => (
                        ((item.status === RuleStatus.RULE_STATUS_INPROGRESS && tabState === "current") || (item.status !== RuleStatus.RULE_STATUS_INPROGRESS && tabState === "history")) ? 
                            <List.Item
                                style={styles(theme).curPlan}
                                key={index}
                                title={item.name}
                                titleStyle={styles(theme).planName}
                                descriptionNumberOfLines={10}
                                description={
                                    <View>
                                        <Text>St: {toDate(item.startTime.seconds)}    -    End: {toDate(item.endTime.seconds)}</Text>
                                        {isDailyActivity(item.rule) ?
                                            <Text style={{marginBottom: 3}}>Today: {getProgressOfDailyActivity(item.progressList)} / {item.goal}</Text> :
                                            <Text style={{marginBottom: 3}}>Progress: {item.total} / {item.goal}</Text>
                                        }
                                        <Progress.Bar
                                            progress={isDailyActivity(item.rule) ? getProgressOfDailyActivity(item.progressList) / item.goal : item.total / item.goal}
                                            width={windowWidth*0.6}
                                            color={theme.colors.primary}
                                            borderColor="#e0e0e0"
                                            unfilledColor="#e0e0e0"
                                            borderRadius={5}
                                            animated={true}
                                        />
                                    </View>
                                }
                                left={props =>
                                    <List.Icon {...props}
                                        icon={
                                            item.activityType === ActivityType.ACTIVITY_TYPE_RUNNING ? "run-fast" : (item.activityType === ActivityType.ACTIVITY_TYPE_WALKING ? "walk" : "bike")
                                        }
                                        style={{
                                            alignSelf: 'center',
                                            marginLeft: 20,
                                        }}
                                    />
                                }
                                // checkbox
                                right={props => <IconButton {...props}
                                    icon={deleteListId.includes(item.id) ? "checkbox-marked" : "checkbox-blank-outline"}
                                    iconColor={deleteListId.includes(item.id) ? "#e82525" : "#969696"}
                                    size={27}
                                    onPress={() => addOrRemoveFromDeleteList(item.id)}
                                />}
                                onPress={() => navigation.navigate("PlanDetail", {planId: item.id, canEdit: true})}
                            />
                        : null
                    ))}
                </ScrollView>
            </View>
        </>
    );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    planName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    curPlan: {
        // bottom divider
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: "#b5b7ba"
    },
    addPlanBtn: {
        marginLeft: 10,
    },
    selectPlanBtn: {
        marginRight: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    segmentedBtn: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
  });
