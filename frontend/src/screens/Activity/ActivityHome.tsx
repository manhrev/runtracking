import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppTheme } from "../../theme";
import { RootActivityParamList } from "../../navigators/ActivityStack";
import { useEffect } from "react";
import UpperRightMenu from "../../comp/UpperRightMenu";
import { useIsFocused } from "@react-navigation/native";

export default function Activity({
  navigation,
  route,
}: NativeStackScreenProps<RootActivityParamList, "ActivityHome">) {
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  useEffect(() => {});
  return (
    <View style={styles(theme).container}>
      <Button
        mode="outlined"
        onPress={() => navigation.push("ActivityList", {})}
      >
        View all activities
      </Button>
      {isFocused && (
        <UpperRightMenu
          menuList={[
            {
              menuItem: "act 1",
              callback: () => {
                console.log("menu 1 clicked");
              },
              icon: "egg",
            },
            {
              menuItem: "act 2",
              callback: () => {},
            },
            {
              menuItem: "act 3",
              callback: () => {},
            },
          ]}
        />
      )}
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
