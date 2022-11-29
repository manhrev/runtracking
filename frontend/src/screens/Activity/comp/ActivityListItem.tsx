import { StyleSheet, View } from "react-native";
import { Avatar, Divider, Text, TouchableRipple } from "react-native-paper";
import { AppTheme, useAppTheme } from "../../../theme";

interface ActivityListItemProps {
  id: number;
  onPress: Function;
}

export default function ActivityListItem(props: ActivityListItemProps) {
  const { id, onPress } = props;
  const theme = useAppTheme();

  return (
    <>
      <Divider bold />
      <TouchableRipple key={id} onPress={() => onPress()}>
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon size={40} icon="run" />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12 }}>
                <Text variant="titleMedium" style={{ fontWeight: "700" }}>
                  Afternoon run
                </Text>
                <Text variant="bodyMedium">22/09/2022 15:30</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                }}
              >
                <Text variant="bodyMedium" style={{ alignSelf: "flex-end" }}>
                  Running activity
                </Text>
              </View>
            </View>
          </View>
          <View style={styles(theme).listItemValue}>
            <View style={styles(theme).listItemValueBox}>
              <Text
                variant="titleMedium"
                style={{
                  textAlign: "center",
                  color: theme.colors.secondary,
                }}
              >
                2.01
              </Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                Kilometers
              </Text>
            </View>
            <View style={styles(theme).listItemValueBox}>
              <Text
                variant="titleMedium"
                style={{
                  textAlign: "center",
                  color: theme.colors.secondary,
                }}
              >
                3'33"
              </Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                Avg Pace
              </Text>
            </View>
            <View style={styles(theme).listItemValueBox}>
              <Text
                variant="titleMedium"
                style={{
                  textAlign: "center",
                  color: theme.colors.secondary,
                }}
              >
                20:12
              </Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                Minutes
              </Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
    </>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 15,
      paddingHorizontal: 8,
    },
    listItemTilte: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    listItemValue: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
    },

    listItemValueBox: {
      width: "33.333%",
    },
  });
