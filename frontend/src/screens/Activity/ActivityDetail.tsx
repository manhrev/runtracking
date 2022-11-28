import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { RootActivityParamList } from "../../navigators/ActivityStack";
import { useAppTheme } from "../../theme";

export default function ActivityDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootActivityParamList, "ActivityDetail">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <Text variant="displayLarge" style={{ fontStyle: "italic" }}>
        600 km
      </Text>
      <Text variant="bodyLarge">ID: {route.params.activityId}</Text>
    </View>
  );
}

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },
  });
