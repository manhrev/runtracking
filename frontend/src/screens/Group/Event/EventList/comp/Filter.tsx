import { useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { Button, IconButton, Menu, Text } from 'react-native-paper'
import { EventSortByStr } from '../../../../../constants/enumstr/event'
import { ListEventsRequest } from '../../../../../lib/event/event_pb'
import { useAppTheme } from '../../../../../theme'

interface FilterProps {
  asc: boolean
  switchAsc: Function
  setSortBy: Function
  sortBy: ListEventsRequest.SortBy
  visibility: ListEventsRequest.Visibility
  setVisibility: Function
  setYourGroup: Function
  clearYourGroup: Function
}

export default function Filter({
  asc,
  switchAsc,
  setSortBy,
  sortBy,
  visibility,
  setVisibility,
  clearYourGroup,
  setYourGroup,
}: FilterProps) {
  const theme = useAppTheme()
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const [filterEvent, setFilterEvent] = useState(0)

  useEffect(() => {
    // if (visibility === ListEventsRequest.Visibility.VISIBILITY_GLOBAL) {
    //   setFilterEvent(0)
    // } else if (
    //   visibility === ListEventsRequest.Visibility.VISIBILITY_NO_GLOBAL
    // ) {
    //   setFilterEvent(1)
    // }
    setFilterEvent(2)
  }, [])

  const toggleFilter = (filter: number) => {
    setFilterEvent(filter)
    if (filter === 0) {
      setVisibility(ListEventsRequest.Visibility.VISIBILITY_GLOBAL)
      clearYourGroup()
    } else if (filter === 1) {
      setVisibility(ListEventsRequest.Visibility.VISIBILITY_NO_GLOBAL)
      clearYourGroup()
    } else if (filter === 2) {
      setYourGroup()
      setVisibility(ListEventsRequest.Visibility.VISIBILITY_UNSPECIFIED)
    }
  }

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
            Sort by: {EventSortByStr[sortBy]}
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
                setSortBy(ListEventsRequest.SortBy.SORT_BY_START_AT)
                closeMenu()
              }}
              title={'Start time'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(ListEventsRequest.SortBy.SORT_BY_NAME)
                closeMenu()
              }}
              title={'Name'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(ListEventsRequest.SortBy.SORT_BY_NUM_OF_GROUPS)
                closeMenu()
              }}
              title={'Popular'}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          paddingBottom: 10,
        }}
      >
        <Button
          mode={filterEvent === 0 ? 'contained' : 'text'}
          compact
          onPress={() => {
            toggleFilter(0)
          }}
        >
          Global
        </Button>
        <Button
          mode={filterEvent === 1 ? 'contained' : 'text'}
          compact
          onPress={() => {
            toggleFilter(1)
          }}
        >
          Normal
        </Button>
        <Button
          mode={filterEvent === 2 ? 'contained' : 'text'}
          compact
          onPress={() => {
            toggleFilter(2)
          }}
        >
          Your group
        </Button>
      </View>
    </>
  )
}
