import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootProfileParamList } from "../../navigators/ProfileStack";
import { AppTheme, useAppTheme } from "../../theme";
import SettingItem from "./comp/SettingItem";

export default function AppSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootProfileParamList, "AppSetting">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Profile" topDivider />
        <SettingItem left="Units of Measure" />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Notification" topDivider />
        <SettingItem left="Privacy" />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Country/Region" topDivider />
        <SettingItem left="Language" />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="About this Version" topDivider />
        <SettingItem left="Terms of Use" />
        <SettingItem left="Privacy Policy" />
        <SettingItem left="Contact Us" />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Delete Account"
          topDivider
          color={theme.colors.error}
        />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Log Out" topDivider color={theme.colors.error} />
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surfaceVariant,
    },
    settingGroup: {
      marginTop: 20,
    },
  });
