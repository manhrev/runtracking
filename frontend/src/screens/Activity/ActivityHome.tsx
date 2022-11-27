import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
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
        mode="outlined"
        onPress={() => navigation.push("ActivityList", {})}
      >
        View all activities
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
