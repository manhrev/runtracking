import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import { selectUserSlice } from '../../redux/features/user/slice'
import { useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import SettingItem from './comp/SettingItem'

export default function ProfileSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'ProfileSetting'>) {
  const theme = useAppTheme()
  const { displayName, email, height, phoneNumber, username, weight } =
    useAppSelector(selectUserSlice)
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Fullname"
          right={displayName}
          topDivider
          onPress={() => {}}
        />
        <SettingItem left="Username" right={username} onPress={() => {}} />
        <SettingItem
          left="Phone number"
          right={phoneNumber}
          onPress={() => {}}
        />
        <SettingItem left="Email" right={email} onPress={() => {}} />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Height"
          right={height.toString() + ' cm'}
          topDivider={true}
          onPress={() => {}}
        />
        <SettingItem
          left="Weight"
          right={weight.toString() + ' kg'}
          onPress={() => {}}
        />
      </View>
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
