import { View } from 'react-native'
import { ActivityIndicator, Modal, Portal, Text } from 'react-native-paper'
import { selectToggleSlice } from '../redux/features/toggle/slice'
import { useAppSelector } from '../redux/store'
import { useAppTheme } from '../theme'

export interface LoadingOverlayProps {
  loading: boolean
  dismissable?: boolean
  onDismiss?: () => void
}

export const LoadingOverlay = ({
  loading,
  dismissable,
  onDismiss,
}: LoadingOverlayProps) => {
  const theme = useAppTheme()
  const { isNightMode } = useAppSelector(selectToggleSlice)

  return (
    <View style={{ zIndex: 1000 }}>
      <Portal>
        <Modal
          theme={{
            colors: {
              backdrop: 'rgba(0, 0, 0, 0.5)',
            },
          }}
          visible={loading}
          dismissable={dismissable ? true : false}
          onDismiss={onDismiss ? onDismiss : () => {}}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            size={60}
            animating={true}
            color={
              isNightMode
                ? theme.colors.primary
                : theme.colors.tertiaryContainer
            }
          />
          <Text
            variant="bodyLarge"
            style={{
              alignSelf: 'center',
              marginTop: 10,
              color: isNightMode
                ? theme.colors.primary
                : theme.colors.tertiaryContainer,
            }}
          >
            Loading...
          </Text>
        </Modal>
      </Portal>
    </View>
  )
}
