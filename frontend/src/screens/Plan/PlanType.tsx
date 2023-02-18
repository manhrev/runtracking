import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";


import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";


const windowWidth = Dimensions.get("window").width;

const fdata = [
    {
        id: 1,
        name: "First Type",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
    },
    {
        id: 2,
        name: "Second Type",
        start_date: "2021-07-01",
        end_date: "2021-07-31",
        total: 100,
        goal: 150,
    },
];


export default function Plan({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanType">) {
    const theme = useAppTheme();
    return (
        <>
            <View style={styles(theme).container}>
                
                {/* <Text style={styles(theme).title}>Current Plan</Text>
                <Button mode="text" onPress={() => alert("Pressed")} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                    ADD NEW PLAN
                </Button> */}
                {fdata.map((item, index) => (
                        <List.Item
                            style={styles(theme).curPlan}
                            key={item.id}
                            title={item.name}
                            titleStyle={styles(theme).planName}
                            description={`Description for this plan type...`}
                            left={props => <List.Icon {...props} icon="run" />}
                            right={props => <IconButton {...props} icon="chevron-right" />}
                            onPress={() => navigation.navigate("PlanAdd", {planTypeId: item.id})}
                        />
                ))}
            </View>
        </>
    );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
        flex: 1,
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
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    addPlanBtn: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
  });
