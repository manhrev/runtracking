import { StyleSheet, View, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Divider, Text, List, TextInput, RadioButton, Button } from "react-native-paper";

import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import React, { useState } from "react";

const windowWidth = Dimensions.get("window").width;

export default function RunResult({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "RunResult">) {
  const theme = useAppTheme();
  const [title, setTitle] = useState("Sample");
  const [checked, setChecked] = useState("running");

  return (
    <View style={baseStyles(theme).container}>
        <List.Item
          title="Distance (KM)"
          description=""
          left={props => <List.Icon {...props} icon="map-marker-distance" />}
          right={props => <Text>{route.params.display.distance}</Text>}
        />
        <List.Item
          title="Time"
          description=""
          left={props => <List.Icon {...props} icon="timer" />}
          right={props => <Text>{route.params.display.time}</Text>}
        />
        <List.Item
          title="Pace (MIN/KM)"
          description=""
          left={props => <List.Icon {...props} icon="speedometer" />}
          right={props => <Text>{route.params.display.pace}</Text>}
        />
        
        <List.Item
          title="KCAL"
          description=""
          left={props => <List.Icon {...props} icon="lightning-bolt-circle" />}
          right={props => <Text>{route.params.display.kcal}</Text>}
        />

        <TextInput
          style={styles(theme).titleInput}
          label="Activity Title"
          mode="outlined"
          value={title}
          onChangeText={text => setTitle(text)}
        />

        
        <View style={{ marginLeft: 15 }}>
          <Text style={{ marginTop: 20, marginBottom: 10 }}>Activity Type:</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="running"
              status={checked === "running" ? "checked" : "unchecked"}
              onPress={() => setChecked("running")}
            />
            <Text>Running</Text>

            <RadioButton
              value="walking"
              status={checked === "walking" ? "checked" : "unchecked"}
              onPress={() => setChecked("walking")}
            />
            <Text>Walking</Text>

            <RadioButton
              value="cycling"
              status={checked === "cycling" ? "checked" : "unchecked"}
              onPress={() => setChecked("cycling")}
            />
            <Text>Cycling</Text>
          </View>
        </View>


        <View style={styles(theme).btnContainer}>
            <Button
              mode="contained"
              buttonColor="#e82525"
              onPress={() => alert("Deleted")}
              style={styles(theme).button}
            >
              Delete
            </Button>

            <Button
              mode="contained"
              onPress={() => alert("Saved")}
              style={styles(theme).button}
            >
              Save
            </Button>
        </View>
        

    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    titleInput: {
      width: windowWidth * 0.9,
      marginTop: 10,
      // center
      marginLeft: "auto",
      marginRight: "auto",
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
      position: 'absolute',
      bottom: 15,
    },
  });
