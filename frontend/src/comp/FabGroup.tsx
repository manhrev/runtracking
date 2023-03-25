import { useIsFocused } from '@react-navigation/native'
import { useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { FAB, Portal } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon'
import { useAppTheme, AppTheme } from '../theme'

interface FabGroupProps {
  actions: Array<{
    icon: IconSource
    label?: string
    color?: string
    labelTextColor?: string
    accessibilityLabel?: string
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<ViewStyle>
    small?: boolean
    onPress: () => void
    testID?: string
  }>
  onPress?: () => void | undefined
  bottom?: number
  right?: number
  icon?: string
  type?: 'primary' | 'secondary' | 'tertiary' | 'error'
}

export const FabGroup = ({
  actions,
  onPress,
  bottom,
  right,
  icon,
  type,
}: FabGroupProps) => {
  const isFocused = useIsFocused()
  const onStateChange = ({ open }: { open: boolean }) => setState({ open })
  const [state, setState] = useState({ open: false })
  const theme = useAppTheme()
  const { backgroundColor, color } = getColorAndBackgroudColorFAB(
    type || 'primary',
    theme
  )

  const { open } = state
  return (
    <Portal>
      <FAB.Group
        style={{
          position: 'absolute',
          bottom: bottom || 80,
          right: right || 0,
        }}
        fabStyle={{ backgroundColor: color }}
        color={backgroundColor}
        backdropColor={theme.colors.backdrop}
        open={open && isFocused}
        visible={isFocused}
        icon={open ? 'window-close' : icon || 'dots-horizontal'}
        actions={actions}
        onStateChange={onStateChange}
        onPress={onPress}
      />
    </Portal>
  )
}

function getColorAndBackgroudColorFAB(
  type: 'primary' | 'secondary' | 'tertiary' | 'error',
  theme: AppTheme
) {
  switch (type) {
    case 'primary':
      return {
        color: theme.colors.primary,
        backgroundColor: theme.colors.onPrimary,
      }
    case 'secondary':
      return {
        color: theme.colors.secondary,
        backgroundColor: theme.colors.onSecondary,
      }
    case 'tertiary':
      return {
        color: theme.colors.tertiary,
        backgroundColor: theme.colors.onTertiary,
      }
    case 'error':
      return {
        color: theme.colors.error,
        backgroundColor: theme.colors.onError,
      }
  }
}
