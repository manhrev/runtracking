import { StyleSheet, View, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Divider, Text } from "react-native-paper";

import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { RootBaseStackParamList } from "../../navigators/BaseStack";

const windowWidth = Dimensions.get("window").width;

export default function ActivityDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "ActivityDetail">) {
  const theme = useAppTheme();
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <View style={{ marginVertical: 10 }}>
          <Text variant="bodyMedium">
            22/09/2022 - 15:30{"\n"}Running activity
          </Text>
          <Text variant="titleLarge" style={{ fontWeight: "700" }}>
            Afternoon run
          </Text>
        </View>

        <Divider />
        <View
          style={{
            marginVertical: 20,
            width: windowWidth - 60,
            alignSelf: "center",
          }}
        >
          <View>
            <Text
              variant="displayLarge"
              style={{
                fontStyle: "italic",
                fontWeight: "700",
                marginBottom: -6,
              }}
            >
              3.04
            </Text>
            <Text variant="bodyLarge" style={styles(theme).unit}>
              Kilometers
            </Text>
          </View>
          <View style={styles(theme).valueContainerOuter}>
            <View style={styles(theme).valueContainer}>
              <View style={styles(theme).valueBox}>
                <Text variant="titleLarge" style={styles(theme).value}>
                  12'5'''
                </Text>
                <Text variant="bodyLarge" style={styles(theme).unit}>
                  Pace
                </Text>
              </View>
              <View style={styles(theme).valueBox}>
                <Text variant="titleLarge" style={styles(theme).value}>
                  20:33
                </Text>
                <Text variant="bodyLarge" style={styles(theme).unit}>
                  Time
                </Text>
              </View>
              <View style={styles(theme).valueBox}>
                <Text variant="titleLarge" style={styles(theme).value}>
                  433
                </Text>
                <Text variant="bodyLarge" style={styles(theme).unit}>
                  Calories
                </Text>
              </View>
            </View>
            <View style={styles(theme).valueContainer}>
              <View style={styles(theme).valueBox}>
                <Text variant="titleLarge" style={styles(theme).value}>
                  __
                </Text>
                <Text variant="bodyLarge" style={styles(theme).unit}>
                  Elevation{"\n"}Gain
                </Text>
              </View>
              <View style={styles(theme).valueBox}>
                <Text variant="titleLarge" style={styles(theme).value}>
                  __
                </Text>
                <Text variant="bodyLarge" style={styles(theme).unit}>
                  Heart{"\n"}rate
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text variant="titleLarge" style={{ fontWeight: "700" }}>
            Notes
          </Text>
        </View>
        <Divider />
        <Text variant="bodyLarge" style={styles(theme).unit}>
          Pace Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </Text>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    unit: {
      fontWeight: "700",
      color: theme.colors.secondary,
    },
    value: {},
    valueContainerOuter: {
      marginTop: 10,
    },
    valueContainer: {
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
    },
    valueBox: {
      width: "33.333%",
    },
  });
