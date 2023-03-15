import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { AppTheme, useAppTheme } from '../theme'
import { authClient } from '../utils/grpc/index'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectCommonSlice, setData } from '../redux/features/common/slice'
import UpperRightMenu from '../comp/UpperRightMenu'
import { useIsFocused } from '@react-navigation/native'
import {
  selectToggleSlice,
  switchNightMode,
} from '../redux/features/toggle/slice'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootBaseStackParamList } from '../navigators/BaseStack'
import { logoutThunk } from '../redux/features/user/thunk'

export default function ExampleScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList>) {
  const dispatch = useAppDispatch()
  const theme = useAppTheme()
  const isFocused = useIsFocused()
  const { data } = useAppSelector(selectCommonSlice)
  const { isNightMode } = useAppSelector(selectToggleSlice)

  const logout = async () => {
    dispatch(logoutThunk())
  }

  const handleCommon = () => {
    dispatch(setData())
  }

  const handleChangeNightMode = () => {
    dispatch(switchNightMode())
  }

  return (
    <View style={styles(theme).container}>
      {isFocused && (
        <UpperRightMenu
          menuList={[
            {
              menuItem: 'menu 1',
              callback: () => {
                console.log('menu 1 clicked')
              },
              icon: 'egg',
            },
            {
              menuItem: 'menu 2',
              callback: () => {},
            },
          ]}
        />
      )}

      <Text>ExampleScreen</Text>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
      <Text>Current redux comment value: {data}</Text>

      <Button mode="contained-tonal" onPress={handleCommon}>
        Change
      </Button>
      <Button mode="outlined" onPress={handleChangeNightMode}>
        {isNightMode ? 'Switch to normal' : 'Switch to night mode'}
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Intro')}>
        Go to landing page
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Go to login page
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Signup')}>
        Go to signup page
      </Button>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
