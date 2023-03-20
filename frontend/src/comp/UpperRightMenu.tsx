import { Menu } from 'react-native-paper'
import { Dimensions } from 'react-native'
import {
  hideRightMenu,
  selectToggleSlice,
} from '../redux/features/toggle/slice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const windowWidth = Dimensions.get('window').width

export interface MenuItemWithCallback {
  menuItem: string
  callback: Function
  icon?: string
}
export interface UpperRightMenuConfig {
  menuList: Array<MenuItemWithCallback>
  leadingIcon?: boolean
}

export default function UpperRightMenu(props: UpperRightMenuConfig) {
  const dispatch = useAppDispatch()
  const { isRightMenuShow } = useAppSelector(selectToggleSlice)
  const closeMenu = () => {
    dispatch(hideRightMenu())
  }

  return (
    <Menu
      visible={isRightMenuShow}
      onDismiss={closeMenu}
      anchor={{ x: windowWidth - 15, y: 80 }}
      anchorPosition="top"
    >
      {props.menuList.map((amenu) => {
        if (!props.leadingIcon) {
          return (
            <Menu.Item
              key={amenu.menuItem}
              trailingIcon={amenu.icon}
              onPress={() => amenu.callback()}
              title={amenu.menuItem}
            />
          )
        } else {
          return (
            <Menu.Item
              key={amenu.menuItem}
              leadingIcon={amenu.icon}
              onPress={() => amenu.callback()}
              title={amenu.menuItem}
            />
          )
        }
      })}
    </Menu>
  )
}
