import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootActivityParamList } from "../../navigators/ActivityStack";
import { useAppTheme } from "../../theme";

export default function ActivityList({
  navigation,
  route,
}: NativeStackScreenProps<RootActivityParamList, "ActivityList">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <Button
        mode="contained"
        onPress={() => navigation.push("ActivityDetail", { activityId: 4 })}
      >
        Activity 4
      </Button>
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
