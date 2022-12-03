import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { AppTheme, useAppTheme } from "../../theme";
import SettingItem from "./comp/SettingItem";

export default function AppSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "AppSetting">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Profile"
          topDivider
          onPress={() => {
            navigation.navigate("ProfileSetting");
          }}
        />
        <SettingItem left="Units of Measure" onPress={() => {}} />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Notification" topDivider onPress={() => {}} />
        <SettingItem left="Privacy" onPress={() => {}} />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Country/Region" topDivider onPress={() => {}} />
        <SettingItem left="Language" onPress={() => {}} />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="About this Version" topDivider onPress={() => {}} />
        <SettingItem left="Terms of Use" onPress={() => {}} />
        <SettingItem left="Privacy Policy" onPress={() => {}} />
        <SettingItem left="Contact Us" onPress={() => {}} />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Delete Account"
          topDivider
          color={theme.colors.error}
          onPress={() => {}}
        />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Log Out"
          topDivider
          color={theme.colors.error}
          onPress={() => {}}
        />
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
