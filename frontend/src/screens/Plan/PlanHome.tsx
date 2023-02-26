import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";
import { useState, useEffect } from "react";

import {
    isPlanListLoading,
    getPlanList,
} from "../../redux/features/planList/slice";

import {
    listPlanThunk
} from "../../redux/features/planList/thunk";


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

    useEffect(() => {
        dispatch(listPlanThunk({
            activityType: 0,
            ascending: false,
            limit: 100,
            offset: 0,
            sortBy: 1,
        })).unwrap();
    }, []);

    const toDate = (seconds: number) => {
        // dd/mm/yyyy
        const date = new Date(seconds * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
    }

    return (
        <>
            <View style={styles(theme).container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                
                    <Button mode="text" onPress={() => navigation.navigate("PlanAdd")} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                        ADD NEW PLAN
                    </Button>

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

                    {planList.map((item, index) => (
                        // ((item.status === "doing" && tabState === "current") || (item.status !== "doing" && tabState === "history")) ? 
                            <List.Item
                                style={styles(theme).curPlan}
                                key={index}
                                title={item.name}
                                titleStyle={styles(theme).planName}
                                description={`Start: ${toDate(item.startTime.seconds)}    -    End: ${toDate(item.endTime.seconds)}\nProgress: ${item.total}/${item.goal}`}
                                left={props => <List.Icon {...props} icon="run" />}
                                // enter bracket icon
                                right={props => <IconButton {...props} icon="chevron-right" />}
                                onPress={() => navigation.navigate("PlanDetail", {planId: item.id})}
                            />
                        // : null
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
        borderBottomColor: theme.colors.border,
    },
    addPlanBtn: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    segmentedBtn: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
  });
