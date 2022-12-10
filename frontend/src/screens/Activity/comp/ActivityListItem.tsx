import { StyleSheet, View } from "react-native";
import { Avatar, Divider, Text, TouchableRipple } from "react-native-paper";
import { ActivityInfo, ActivityType } from "../../../lib/activity/activity_pb";
import { AppTheme, useAppTheme } from "../../../theme";
import {
  formatDate,
  getIconWithActivityType,
  getNameWithActivityType,
  minutesPerKilometer,
  secondsToMinutes,
} from "../../../utils/helpers";

interface ActivityListItemProps {
  activityInfo: ActivityInfo.AsObject;
  onPress: Function;
}

export default function ActivityListItem(props: ActivityListItemProps) {
  const { activityInfo, onPress } = props;
  const {
    id,
    activityName,
    activityNote,
    duration,
    kcal,
    totalDistance,
    startTime,
    endTime,
    type,
  } = activityInfo;
  const theme = useAppTheme();

  return (
    <>
      <Divider bold />
      <TouchableRipple key={id} onPress={() => onPress()}>
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon size={40} icon={getIconWithActivityType(type)} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12 }}>
                <Text variant="titleMedium" style={{ fontWeight: "700" }}>
                  {activityName}
                </Text>
                <Text variant="bodyMedium">{formatDate(endTime)}</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                }}
              >
                <Text variant="bodyMedium" style={{ alignSelf: "flex-end" }}>
                  {getNameWithActivityType(type)}
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
                {(totalDistance / 1000.0).toFixed(2)}
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
                {minutesPerKilometer(duration, totalDistance)}
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
                {secondsToMinutes(duration)}
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
