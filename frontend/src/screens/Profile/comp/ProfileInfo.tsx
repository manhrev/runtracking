import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { AppTheme, useAppTheme } from "../../../theme";
import { baseStyles } from "../../baseStyle";

export default function ProfileInfo() {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).extendedBaseContainer}>
      <View style={baseStyles(theme).innerWrapper}>
        <View style={styles(theme).infoValue}>
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Username
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">Tuannguyen</Text>
            </View>
          </View>
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Email
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">tuannguyen@gmail.com</Text>
            </View>
          </View>
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Phone number
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">1231235435</Text>
            </View>
          </View>
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Participated in
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">10 groups</Text>
            </View>
          </View>
          <Divider style={{ marginVertical: 10 }} />
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Weight
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">69 kg</Text>
            </View>
          </View>
          <View style={styles(theme).infoValueListItem}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
                Height
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text variant="titleMedium">172 cm</Text>
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
    infoValue: {
      paddingHorizontal: 20,
    },
    infoValueListItem: {
      display: "flex",
      flexDirection: "row",
      paddingVertical: 8,
    },
  });
