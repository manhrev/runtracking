import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";
import { useState, useEffect } from "react";
import * as Progress from 'react-native-progress';

import {
    isPlanListLoading,
    getPlanList,
} from "../../redux/features/planList/slice";

import {
    listPlanThunk
} from "../../redux/features/planList/thunk";

import {
    PlanInfo,
    RuleStatus,
    DeletePlansRequest,
    Rule,
    PlanProgress
} from "../../lib/plan/plan_pb";

import {
    ActivityType,
    CommitActivityRequest
} from "../../lib/activity/activity_pb";

import { activityClient } from "../../utils/grpc";
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";


const windowWidth = Dimensions.get("window").width;


export default function RunCommit({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "RunCommit">) {
    const theme = useAppTheme();
    const dispatch = useAppDispatch();

    const { planList } = useAppSelector(getPlanList);
    const [selectedPlan, setSelectedPlan] = useState<PlanInfo.AsObject>({} as PlanInfo.AsObject);

    useEffect(() => {
        const fetchData = async () => {
            const res = await dispatch(listPlanThunk({
                activityType: 0,
                ascending: false,
                limit: 100,
                offset: 0,
                sortBy: 1,
            })).unwrap();

            if(planList.length > 0) {
                // check each plan, if it is in progress and has the same activity type as the current activity, select it
                for(let i = 0; i < planList.length; i++){
                    if(planList[i].status === RuleStatus.RULE_STATUS_INPROGRESS && planList[i].activityType == route.params.activityType){
                        setSelectedPlan(planList[i]);
                        break;
                    }
                }
            }
            
        }
        fetchData();
    }, []);

    const toDate = (seconds: number) => {
        // dd/mm/yyyy
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    const commitActivity = async () => {
        const commitObj: CommitActivityRequest.AsObject = {
            activityId: route.params.activityId,
            commitId: selectedPlan.id,
            commitType: 1, // 1: plan
            rule: selectedPlan.rule
        }
        console.log(commitObj);

        activityClient.commitActivity(commitObj).then((res) => {
            if(!res.error){
                alert("Commited to plan ID: " + selectedPlan.id);
                
                backToHome();
            }
            else alert("Failed!");
        });
    }

    const backToHome = () => {
        route.params.resetRunInfo();
        navigation.popToTop();
    }

    const filteredPlanList = planList.filter((item) => item.status === RuleStatus.RULE_STATUS_INPROGRESS && item.activityType == route.params.activityType);

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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <IconButton icon="check-circle" size={100} iconColor={theme.colors.primary} style={{alignSelf: 'center'}}/>
                    <Text style={styles(theme).title}>Your activity has been recorded !!!</Text>
                    <Text style={styles(theme).title}>Choose a plan to commit</Text>
                    {filteredPlanList.length > 0 ? filteredPlanList.map((item, index) => (
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
                                right={props =>
                                    <IconButton {...props}
                                        icon={selectedPlan.id === item.id ? "checkbox-marked" : "checkbox-blank-outline"}
                                        iconColor={selectedPlan.id === item.id ? theme.colors.primary : "#969696"}
                                        size={27}
                                        onPress={() => setSelectedPlan(item)}
                                    />
                                }
                                onPress={() => navigation.navigate("PlanDetail", {planId: item.id, canEdit: false})}
                            />
                    )) :
                    <>
                        <Text style={{textAlign: 'center'}}>No plan is in progress</Text>
                        <Button
                            style={styles(theme).backToHomeBtn}
                            mode="text"
                            labelStyle = {{
                                fontSize: 16,
                                borderBottomColor: theme.colors.primary,
                                borderBottomWidth: 1,
                            }}
                            onPress={() => backToHome()}
                        >
                            &lt;&lt;&lt; Back to Home
                        </Button>
                    </>
                    }

                    {filteredPlanList.length > 0 &&
                        <Button
                            style={styles(theme).commitBtn}
                            mode="contained"
                            onPress={() => commitActivity()}
                        >
                            Commit to plan
                        </Button>
                    }

                </ScrollView>
            </View>
        </>
    );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
        flex: 1,
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
        borderBottomColor: "#b5b7ba",
    },
    commitBtn: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    backToHomeBtn: {
        alignItems: 'center',
        marginTop: 30,
    },
    segmentedBtn: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
  });
