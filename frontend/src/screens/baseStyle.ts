import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import { AppTheme } from '../theme'

const windowWidth = Dimensions.get('window').width
export const baseStyles = (theme: AppTheme) =>
  StyleSheet.create({
    homeContainer: {
      marginTop: StatusBar.currentHeight,
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
