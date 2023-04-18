import { useState } from 'react'
import { View } from 'react-native'
import { IconButton, Menu, SegmentedButtons, Text } from 'react-native-paper'
import { UserRankingSortBy } from '../../../../../constants/enumstr/group'
import { ListUserRankingRequest } from '../../../../../lib/group/group_pb'
import { useAppTheme } from '../../../../../theme'

interface FilterProps {
  asc: boolean
  switchAsc: Function
  setSortBy: Function
  sortBy: ListUserRankingRequest.SortBy
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
    <>
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
            Sort by: {UserRankingSortBy[sortBy]}
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
                setSortBy(ListUserRankingRequest.SortBy.SORT_BY_POINT)
                closeMenu()
              }}
              title={'Points'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(ListUserRankingRequest.SortBy.SORT_BY_COUNT_CHALLENGE_COMPLETED)
                closeMenu()
              }}
              title={'Challenges'}
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
    </>
  )
}
