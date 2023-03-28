import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Menu, Text } from 'react-native-paper'
import { PlanSortByStr } from '../../../constants/enumstr/plan'
import { PlanSortBy } from '../../../lib/plan/plan_pb'
import { ActivityType } from '../../../lib/activity/activity_pb'
import { useAppTheme, AppTheme } from '../../../theme'

interface FilterProps {
  asc: boolean
  setAsc: Function
  setSortBy: Function
  sortBy: PlanSortBy
  setFilteredActivityType: Function
  filteredActivityType: ActivityType
  selectedAll: boolean
  selectOrUnselectAll: Function
}

export default function Filter({
  asc,
  setAsc,
  setSortBy,
  sortBy,
  setFilteredActivityType,
  filteredActivityType,
  selectedAll,
  selectOrUnselectAll,
}: FilterProps) {
  const theme = useAppTheme()
  // activity type filter
  const [visibleA, setVisibleA] = useState(false)
  const openMenuA = () => setVisibleA(true)
  const closeMenuA = () => setVisibleA(false)

  // sort by filter
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <View>
      <View style={styles(theme).filterContainer}>
        <Menu
          visible={visibleA}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="filter-menu"
              style={{ marginLeft: 10 }}
              iconColor={theme.colors.primary}
              size={24}
              onPress={openMenuA}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setFilteredActivityType(ActivityType.ACTIVITY_TYPE_UNSPECIFIED)
              closeMenuA()
            }}
            title="All"
          />
          <Menu.Item
            onPress={() => {
              setFilteredActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
              closeMenuA()
            }}
            title="Running"
          />
          <Menu.Item
            onPress={() => {
              setFilteredActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
              closeMenuA()
            }}
            title="Walking"
          />
          <Menu.Item
            onPress={() => {
              setFilteredActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
              closeMenuA()
            }}
            title="Cycling"
          />
        </Menu>

        <Text
          variant="bodyLarge"
          style={{
            fontWeight: 'bold',
            textAlignVertical: 'center',
            color: theme.colors.secondary,
          }}
          onPress={openMenuA}
        >
          {filteredActivityType === ActivityType.ACTIVITY_TYPE_RUNNING
            ? 'Running'
            : filteredActivityType === ActivityType.ACTIVITY_TYPE_WALKING
            ? 'Walking'
            : filteredActivityType === ActivityType.ACTIVITY_TYPE_CYCLING
            ? 'Cycling'
            : 'All'}
        </Text>

        <IconButton
          icon={selectedAll ? 'checkbox-marked' : 'checkbox-blank-outline'}
          iconColor={selectedAll ? '#e82525' : '#969696'}
          size={25}
          onPress={() => selectOrUnselectAll()}
        />
      </View>

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
            Sort by: {PlanSortByStr[sortBy]}
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
                setSortBy(PlanSortBy.PLAN_SORT_BY_CREATED_TIME)
                closeMenu()
              }}
              title={'Created time'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(PlanSortBy.PLAN_SORT_BY_PROGESS)
                closeMenu()
              }}
              title={'Progress'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(PlanSortBy.PLAN_SORT_BY_START_TIME)
                closeMenu()
              }}
              title={'Start time'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(PlanSortBy.PLAN_SORT_BY_END_TIME)
                closeMenu()
              }}
              title={'End time'}
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
              onPress={() => setAsc(!asc)}
              size={22}
            />
          ) : (
            <IconButton
              icon="arrow-down-bold"
              iconColor={theme.colors.primary}
              onPress={() => setAsc(!asc)}
              size={22}
            />
          )}
        </View>
      </View>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    planName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    addPlanBtn: {
      marginLeft: 10,
    },
    selectPlanBtn: {
      marginRight: 10,
    },
    btnContainer: {
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    segmentedBtn: {
      alignSelf: 'center',
    },
    filterContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
