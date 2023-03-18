import { Avatar, Button } from 'react-native-paper'
import Toast, { ErrorToast, SuccessToast } from 'react-native-toast-message'
import { AppTheme } from '../../theme'

/*
  1. Create the config
*/
const toastConfig = (theme: AppTheme) => {
  return {
    /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
    success: (props: any) => (
      <SuccessToast
        {...props}
        renderLeadingIcon={() => (
          <Avatar.Icon
            size={30}
            style={{
              marginRight: -10,
              marginLeft: 8,
            }}
            icon="check-bold"
          />
        )}
        style={{
          borderLeftColor: theme.colors.tertiary,
          backgroundColor: theme.colors.secondaryContainer,
          alignItems: 'center',
        }}
        contentContainerStyle={{ paddingVertical: 0 }}
        text1Style={{ fontSize: 13, color: theme.colors.onTertiaryContainer }}
        text2Style={{ fontSize: 11, color: theme.colors.onSurface }}
      />
    ),
    /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
    error: (props: any) => (
      <ErrorToast
        {...props}
        renderLeadingIcon={() => (
          <Avatar.Icon
            size={30}
            style={{
              marginRight: -10,
              marginLeft: 8,
              backgroundColor: theme.colors.error,
            }}
            icon="close-thick"
          />
        )}
        style={{
          borderLeftColor: theme.colors.error,
          backgroundColor: theme.colors.errorContainer,
          alignItems: 'center',
        }}
        contentContainerStyle={{ paddingVertical: 0 }}
        text1Style={{ fontSize: 13, color: theme.colors.onErrorContainer }}
        text2Style={{ fontSize: 11, color: theme.colors.onSurface }}
      />
    ),
    /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  }
}

export default toastConfig
