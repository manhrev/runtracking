import { Appbar } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { useAppTheme } from "../theme";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export function CustomNavBar(props: NativeStackHeaderProps) {
  const theme = useAppTheme();
  return (
    <Appbar.Header mode="center-aligned" elevated>
      <Appbar.BackAction
        onPress={() => {
          props.navigation.canGoBack() ? props.navigation.goBack() : null;
        }}
      />
      <Appbar.Content title={props.options.title} />
      <Appbar.Action icon={MORE_ICON} />
    </Appbar.Header>
  );
}
