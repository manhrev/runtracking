import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView, StyleSheet, View } from 'react-native'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import {
  selectToggleSlice,
  switchNightMode,
} from '../../redux/features/toggle/slice'
import { logoutThunk } from '../../redux/features/user/thunk'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import SettingItem from './comp/SettingItem'
import { toast } from '../../utils/toast/toast'

export default function AppSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'AppSetting'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const handleLogout = async () => {
    dispatch(logoutThunk())
    toast.success({ message: 'Logged out!' })
  }
  const { isNightMode } = useAppSelector(selectToggleSlice)

  const handleChangeNightMode = () => {
    dispatch(switchNightMode())
  }
  return (
    <View style={styles(theme).container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles(theme).settingGroup}>
          <SettingItem
            left="Profile"
            topDivider
            onPress={() => {
              navigation.navigate('ProfileSetting')
            }}
          />
          <SettingItem left="Units of Measure" onPress={() => {}} />
          <SettingItem
            left="Night mode"
            right={isNightMode ? 'Yes' : 'No'}
            onPress={handleChangeNightMode}
          />
        </View>
        <View style={styles(theme).settingGroup}>
          <SettingItem left="Notification" topDivider onPress={() => {}} />
          <SettingItem
            left="Privacy"
            onPress={() => {
              toast.error({ message: 'Success!' })
            }}
          />
        </View>
        <View style={styles(theme).settingGroup}>
          <SettingItem left="Country/Region" topDivider onPress={() => {}} />
          <SettingItem left="Language" onPress={() => {}} />
        </View>
        <View style={styles(theme).settingGroup}>
          <SettingItem
            left="About this Version"
            topDivider
            onPress={() => {}}
          />
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
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </View>
  )
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
  })
