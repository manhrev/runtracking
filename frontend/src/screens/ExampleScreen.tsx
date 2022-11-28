import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "../theme";

export default function ExampleScreen() {
  const theme = useAppTheme();

  return (
    <View style={styles(theme).container}>
      <Text>ExampleScreen</Text>
      <StatusBar style="auto" />
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
