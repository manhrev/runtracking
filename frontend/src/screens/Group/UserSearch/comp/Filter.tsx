import { useState } from 'react'
import { View } from 'react-native'
import { IconButton, Menu, Text } from 'react-native-paper'
import { ListUserInfoRequest } from '../../../../lib/auth/auth_pb'
import { useAppTheme } from '../../../../theme'

interface FilterProps {
  asc: boolean
  switchAsc: Function
  setSortBy: Function
  sortBy: ListUserInfoRequest.UserSortBy
}

export default function Filter({
  asc,
  switchAsc,
  setSortBy,
  sortBy,
}: FilterProps) {
  const theme = useAppTheme()
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text
          variant="bodyLarge"
          style={{
            fontWeight: 'bold',
            // textAlignVertical: 'center',
            color: theme.colors.secondary,
          }}
        >
          Sort by: {sortBy == ListUserInfoRequest.UserSortBy.USER_SORT_BY_UNSPECIFIED ? 'None' : 'Name'}
        </Text>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="cog"
              iconColor={theme.colors.primary}
              size={18}
              onPress={openMenu}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setSortBy(ListUserInfoRequest.UserSortBy.USER_SORT_BY_UNSPECIFIED)
              closeMenu()
            }}
            title={'None'}
          />
          <Menu.Item
            onPress={() => {
              setSortBy(ListUserInfoRequest.UserSortBy.USER_SORT_BY_NAME)
              closeMenu()
            }}
            title={'Name'}
          />
        </Menu>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          flex: 1,
        }}
      >
        <Text
          variant="bodyLarge"
          style={{
            fontWeight: 'bold',
            textAlignVertical: 'center',
            color: theme.colors.secondary,
          }}
        >
          Sort:
        </Text>
        {asc ? (
          <IconButton
            icon="arrow-up-bold"
            iconColor={theme.colors.primary}
            onPress={() => switchAsc(!asc)}
            size={22}
          />
        ) : (
          <IconButton
            icon="arrow-down-bold"
            iconColor={theme.colors.primary}
            onPress={() => switchAsc(!asc)}
            size={22}
          />
        )}
      </View>
    </View>
  )
}
