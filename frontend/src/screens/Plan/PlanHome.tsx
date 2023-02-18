import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";


import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";
import { useState } from "react";


const windowWidth = Dimensions.get("window").width;

const fdata = [ // completed, failed, doing
    {
        id: 1,
        name: "First Item",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 2,
        name: "Second Item",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 3,
        name: "Third Item",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 4,
        name: "Fourth Item",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
        status: "completed",
    },
];


export default function Plan({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanHome">) {
    const theme = useAppTheme();

    const [tabState, setTabState] = useState("current");
    return (
        <>
            <View style={styles(theme).container}>
                
                {/* <Text style={styles(theme).title}>Current Plan</Text> */}
                <Button mode="text" onPress={() => navigation.navigate("PlanType")} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
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

                {fdata.map((item, index) => (
                    ((item.status === "doing" && tabState === "current") || (item.status !== "doing" && tabState === "history")) ? 
                        <List.Item
                            style={styles(theme).curPlan}
                            key={item.id}
                            title={item.name}
                            titleStyle={styles(theme).planName}
                            description={`Start: ${item.start_date}    -    End: ${item.end_date}\nProgress: ${item.total}/${item.goal}`}
                            left={props => <List.Icon {...props} icon="run" />}
                            // enter bracket icon
                            right={props => <IconButton {...props} icon="chevron-right" />}
                            onPress={() => navigation.navigate("PlanDetail", {planId: item.id})}
                        />
                    : null
                ))}
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
