import Toast from 'react-native-toast-message'

interface ToastProps {
  title?: string
  message: string
}
export const toast = {
  success: ({ title, message }: ToastProps) => {
    Toast.show({
      type: 'success',
      text1: title || 'Success',
      text2: message,
    })
  },
  error: ({ title, message }: ToastProps) => {
    Toast.show({
      type: 'error',
      text1: title || 'Error',
      text2: message,
    })
  },
}
