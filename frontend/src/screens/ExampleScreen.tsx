import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAppTheme } from "../theme";

import { authClient } from "../utils/grpc/index";

export default function ExampleScreen() {
  const theme = useAppTheme();
  const login = async () => {
    const res = await authClient.login("manhagent", "manhagent");
  };

  return (
    <View style={styles(theme).container}>
      <Text>ExampleScreen</Text>
      <Button mode="contained" onPress={login}>
        Send login req
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
