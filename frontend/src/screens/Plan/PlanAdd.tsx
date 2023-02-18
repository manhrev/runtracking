import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text, List, Divider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";


import { baseStyles } from "../baseStyle";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";


const windowWidth = Dimensions.get("window").width;


export default function PlanAdd({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "PlanAdd">) {
    const theme = useAppTheme();
    return (
        <>
            <View style={styles(theme).container}>
                <Button mode="text" onPress={() => alert("Pressed")} style={styles(theme).addPlanBtn} labelStyle={{fontSize: 16}}>
                    SAVE
                </Button>
                <Text style={styles(theme).title}>Plan Type Id: {route.params.planTypeId}</Text>
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
    addPlanBtn: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
  });
