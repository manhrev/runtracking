import { Button, Dialog, Portal, Text } from 'react-native-paper'

interface ConfirmDialogProps {
  visible: boolean
  toogleDialog: () => void
  onSubmit: () => void
  title?: string
  message: string
}

export const ConfirmDialog = ({
  visible,
  toogleDialog,
  onSubmit,
  title,
  message,
}: ConfirmDialogProps) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => toogleDialog()}>
        <Dialog.Title>{title || 'Alert'}</Dialog.Title>
        <Dialog.Content>
          <Text>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => toogleDialog()}>No</Button>
          <Button onPress={onSubmit}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}
