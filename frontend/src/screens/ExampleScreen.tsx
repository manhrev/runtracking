import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { AppTheme, useAppTheme } from "../theme";
import { authClient } from "../utils/grpc/index";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCommonSlice, setData } from "../redux/features/common/slice";
import UpperRightMenu from "../comp/UpperRightMenu";
import { useIsFocused } from "@react-navigation/native";
import {
  selectToggleSlice,
  switchNightMode,
} from "../redux/features/toggle/slice";

export default function ExampleScreen() {
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  const { data } = useAppSelector(selectCommonSlice);
  const { isNightMode } = useAppSelector(selectToggleSlice);

  const login = async () => {
    const res = await authClient.login("manhagent", "manhagent");
  };

  const handleCommon = () => {
    dispatch(setData());
  };

  const handleChangeNightMode = () => {
    dispatch(switchNightMode());
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
      <Button mode="outlined" onPress={handleChangeNightMode}>
        {isNightMode ? "Switch to normal" : "Switch to night mode"}
      </Button>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
