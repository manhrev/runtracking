import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppTheme } from "../../theme";
import { RootActivityParamList } from "../../navigators/ActivityStack";

export default function Activity({
  navigation,
  route,
}: NativeStackScreenProps<RootActivityParamList, "ActivityHome">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <Button
        onPress={() => navigation.push("ActivityList", {})}
        title="View all activities"
        color={theme.colors.primary}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
