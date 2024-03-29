import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
  useTheme,
} from 'react-native-paper'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import merge from 'deepmerge'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
  dark: NavigationDarkTheme,
})

const CombinedDefaultTheme = merge(MD3DarkTheme, LightTheme)
const CombinedDarkTheme = merge(MD3LightTheme, DarkTheme)

const ExtendedDarkTheme = {
  ...CombinedDarkTheme,
  colors: {
    ...CombinedDarkTheme.colors,
    primary: 'rgb(0, 110, 0)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(141, 251, 119)',
    onPrimaryContainer: 'rgb(0, 34, 0)',
    secondary: 'rgb(84, 99, 77)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(215, 232, 205)',
    onSecondaryContainer: 'rgb(18, 31, 14)',
    tertiary: 'rgb(56, 101, 104)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(188, 235, 238)',
    onTertiaryContainer: 'rgb(0, 32, 34)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 255, 255)',
    onBackground: 'rgb(26, 28, 24)',
    surface: 'rgb(252, 253, 246)',
    onSurface: 'rgb(26, 28, 24)',
    surfaceVariant: 'rgb(223, 228, 215)',
    onSurfaceVariant: 'rgb(67, 72, 63)',
    outline: 'rgb(115, 121, 110)',
    outlineVariant: 'rgb(195, 200, 188)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 49, 45)',
    inverseOnSurface: 'rgb(241, 241, 235)',
    inversePrimary: 'rgb(114, 222, 94)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(239, 246, 234)',
      level2: 'rgb(232, 242, 226)',
      level3: 'rgb(224, 237, 219)',
      level4: 'rgb(222, 236, 217)',
      level5: 'rgb(217, 233, 212)',
    },
    surfaceDisabled: 'rgba(26, 28, 24, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 24, 0.38)',
    backdrop: 'rgba(44, 50, 41, 0.4)',
  },
}

const ExtendedDefaultTheme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,
    primary: 'rgb(114, 222, 94)',
    onPrimary: 'rgb(0, 58, 0)',
    primaryContainer: 'rgb(255, 215, 245)',
    onPrimaryContainer: 'rgb(141, 251, 119)',
    secondary: 'rgb(187, 203, 178)',
    onSecondary: 'rgb(38, 52, 34)',
    secondaryContainer: 'rgb(60, 75, 55)',
    onSecondaryContainer: 'rgb(215, 232, 205)',
    tertiary: 'rgb(160, 207, 210)',
    onTertiary: 'rgb(0, 55, 57)',
    tertiaryContainer: 'rgb(30, 77, 80)',
    onTertiaryContainer: 'rgb(188, 235, 238)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(26, 28, 24)',
    onBackground: 'rgb(226, 227, 220)',
    surface: 'rgb(26, 28, 24)',
    onSurface: 'rgb(226, 227, 220)',
    surfaceVariant: 'rgb(67, 72, 63)',
    onSurfaceVariant: 'rgb(195, 200, 188)',
    outline: 'rgb(141, 147, 135)',
    outlineVariant: 'rgb(67, 72, 63)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(226, 227, 220)',
    inverseOnSurface: 'rgb(47, 49, 45)',
    inversePrimary: 'rgb(0, 110, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(30, 38, 28)',
      level2: 'rgb(33, 44, 30)',
      level3: 'rgb(36, 49, 32)',
      level4: 'rgb(37, 51, 32)',
      level5: 'rgb(38, 55, 34)',
    },
    surfaceDisabled: 'rgba(226, 227, 220, 0.12)',
    onSurfaceDisabled: 'rgba(226, 227, 220, 0.38)',
    backdrop: 'rgba(44, 50, 41, 0.4)',
  },
}
export const darkTheme = ExtendedDefaultTheme
export const lightTheme = ExtendedDarkTheme

export type AppTheme = typeof lightTheme

export const useAppTheme = () => useTheme<AppTheme>()
