import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { AppTheme, useAppTheme } from "../../../theme";
import { baseStyles } from "../../baseStyle";

export default function ProfileAchievement() {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).extendedBaseContainer}>
      <View style={baseStyles(theme).innerWrapper}>
        <View style={styles(theme).achievementSection}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
              marginVertical: 12,
            }}
          >
            Golden level runner
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={styles(theme).achievementBoxLeft}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                312
              </Text>
              <Text variant="bodyLarge">Total kilometers</Text>
            </View>
            <View style={styles(theme).achievementBoxRight}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                122k
              </Text>
              <Text variant="bodyLarge">Total calories burned</Text>
            </View>
          </View>
        </View>
        <Divider />
        <View style={styles(theme).achievementSection}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
              marginVertical: 12,
            }}
          >
            Platinum level cyclist
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={styles(theme).achievementBoxLeft}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                1034
              </Text>
              <Text variant="bodyLarge">Total kilometers</Text>
            </View>
            <View style={styles(theme).achievementBoxRight}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                1920k
              </Text>
              <Text variant="bodyLarge">Total calories burned</Text>
            </View>
          </View>
        </View>
        <View style={styles(theme).achievementSection}>
          <Text
            variant="titleMedium"
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
              marginVertical: 12,
            }}
          >
            Platinum level cyclist
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={styles(theme).achievementBoxLeft}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                1034
              </Text>
              <Text variant="bodyLarge">Total kilometers</Text>
            </View>
            <View style={styles(theme).achievementBoxRight}>
              <Text
                variant="displayMedium"
                style={{ fontStyle: "italic", fontWeight: "bold" }}
              >
                1920k
              </Text>
              <Text variant="bodyLarge">Total calories burned</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    extendedBaseContainer: {
      ...baseStyles(theme).container,
      flex: 0,
    },
    achievementSection: {
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    achievementBoxLeft: {
      flex: 1,
      backgroundColor: theme.colors.elevation.level1,
      borderRadius: 20,
      padding: 10,
      marginRight: 8,
    },
    achievementBoxRight: {
      flex: 1,
      backgroundColor: theme.colors.elevation.level1,
      borderRadius: 20,
      padding: 10,
      marginLeft: 8,
    },
  });
