import { Appbar, Text } from 'react-native-paper'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import { useAppDispatch } from '../redux/store'
import { showRightMenu } from '../redux/features/toggle/slice'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

export function CustomNavBar(props: NativeStackHeaderProps) {
  const dispatch = useAppDispatch()
  const toggleLeftMenu = () => {
    dispatch(showRightMenu())
    props.navigation.setParams({
      open: true,
    })
  }

  return (
    <Appbar.Header mode="center-aligned" elevated>
      {props.options.headerBackVisible && (
        <Appbar.BackAction
          onPress={() => {
            props.navigation.canGoBack() ? props.navigation.goBack() : null
          }}
        />
      )}
      <Appbar.Content
        title={
          <Text
            variant="titleLarge"
            style={{ fontWeight: 'bold', textAlignVertical: 'center' }}
          >
            {props.options.title}
          </Text>
        }
      />
      {/* <Appbar.Action icon="bell" /> */}
      {/* <Appbar.Action icon={MORE_ICON} onPress={toggleLeftMenu} /> */}
    </Appbar.Header>
  )
}
