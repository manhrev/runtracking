import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'

import store, { useAppDispatch } from './src/redux/store'
import { BaseStack } from './src/navigators/BaseStack'
import { lightTheme, darkTheme, useAppTheme } from './src/theme'
import { selectToggleSlice } from './src/redux/features/toggle/slice'
import { useAppSelector } from './src/redux/store'
import { Dispatch, useEffect } from 'react'
import * as Notifications from 'expo-notifications'
import { listLastNotificationInfoThunk } from './src/redux/features/notification/thunk'
import Toast from 'react-native-toast-message'
import toastConfig from './src/constants/toast'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppInsideRedux />
    </ReduxProvider>
  )
}

function AppInsideRedux() {
  const { isNightMode } = useAppSelector(selectToggleSlice)
  const dispatch = useAppDispatch()
  useExpoPush(dispatch)
  const toastConf = toastConfig(isNightMode ? darkTheme : lightTheme)
  return (
    <PaperProvider theme={isNightMode ? darkTheme : lightTheme}>
      <NavigationContainer theme={isNightMode ? darkTheme : lightTheme}>
        <BaseStack />
      </NavigationContainer>
      <Toast
        config={toastConf}
        autoHide
        visibilityTime={2000}
        position="top"
        topOffset={60}
        onPress={() => {
          Toast.hide()
        }}
      />
    </PaperProvider>
  )
}

const useExpoPush = (dispatch: Dispatch<any>) =>
  useEffect(() => {
    const fetchLastNotificationInfo = async () => {
      dispatch(
        listLastNotificationInfoThunk({
          limit: 1,
          offset: 0,
        })
      )
    }

    const notficationSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        fetchLastNotificationInfo()
      })

    return () => {
      notficationSubscription.remove()
    }
  }, [])
