import { Dimensions, StyleSheet } from 'react-native'
import { AppTheme } from '../theme'
import Constants from 'expo-constants'

const windowWidth = Dimensions.get('window').width
export const baseStyles = (theme: AppTheme) =>
  StyleSheet.create({
    homeContainer: {
      marginTop: Constants.statusBarHeight,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    innerWrapper: {
      width: windowWidth - 26,
      alignSelf: 'center',
    },
  })
