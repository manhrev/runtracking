import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
export const baseStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    innerWrapper: {
      width: windowWidth - 26,
      alignSelf: "center",
    },
  });
