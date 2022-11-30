import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootProfileParamList } from "../../navigators/ProfileStack";
import { AppTheme, useAppTheme } from "../../theme";
import SettingItem from "./comp/SettingItem";

export default function ProfileSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootProfileParamList, "ProfileSetting">) {
  const theme = useAppTheme();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Fullname" right="Tuan nguyen" topDivider />
        <SettingItem left="Username" right="tuancutoa" />
        <SettingItem left="Phone number" right="0123654789" />
        <SettingItem left="Email" right="tuanguyen@gmail.com" />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem left="Height" right="173 cm" topDivider={true} />
        <SettingItem left="Weight" right="69 kg" />
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
