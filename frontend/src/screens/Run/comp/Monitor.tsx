import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { timeConversion } from "geolib";
import React from "react";
import { View, StyleSheet} from "react-native";
import { Button, IconButton, SegmentedButtons, Text } from "react-native-paper";
import { AppTheme, useAppTheme } from "../../../theme";


export default function Monitor(props: any) {
    const theme = useAppTheme();

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).text}>
                {props.distance}{"\n"}
                <Text style={styles(theme).unit}>KM</Text>
            </Text>
            <Text style={styles(theme).text}>
                <Text style={styles(theme).timer}>{props.timeMin}:{props.timeSec}</Text>{"\n"}
                <Text style={styles(theme).unit}>MIN</Text>{"\n"}
                {props.paceMin}:{props.paceSec}{"\n"}
                <Text style={styles(theme).unit}>PACE(MIN/KM)</Text>
            </Text>
            <Text style={styles(theme).text}>
                525{"\n"}
                <Text style={styles(theme).unit}>KCAL</Text>
            </Text>
        </View>

    );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    userState: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    timer: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        alignSelf: "flex-end",
        flex: 2, // 2:2:2
    },
    unit: {
        fontSize: 13,
    },
  });

