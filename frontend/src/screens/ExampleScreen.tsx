import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useAppTheme } from "../theme";
import { authClient } from "../utils/grpc/index";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCommonSlice, setData } from "../redux/features/common/slice";
import UpperRightMenu from "../comp/UpperRightMenu";
import { useIsFocused } from "@react-navigation/native";

export default function ExampleScreen() {
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  const { data } = useAppSelector(selectCommonSlice);
  const login = async () => {
    const res = await authClient.login("manhagent", "manhagent");
  };

  const handleCommon = async () => {
    dispatch(setData());
  };

  return (
    <View style={styles(theme).container}>
      {isFocused && (
        <UpperRightMenu
          menuList={[
            {
              menuItem: "menu 1",
              callback: () => {
                console.log("menu 1 clicked");
              },
              icon: "egg",
            },
            {
              menuItem: "menu 2",
              callback: () => {},
            },
          ]}
        />
      )}

      <Text>ExampleScreen</Text>
      <Button mode="contained" onPress={login}>
        Send login req to localhost:8080
      </Button>
      <Text>Current redux comment value: {data}</Text>

      <Button mode="contained-tonal" onPress={handleCommon}>
        Change
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
