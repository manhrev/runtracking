import { Button, IconButton, Menu, Text } from 'react-native-paper'
import { ScrollView, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { baseStyles } from '../baseStyle'
import ActivityListItem from './comp/ActivityListItem'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import {
  isActivityListLoading,
  selectActivityList,
} from '../../redux/features/activityList/slice'
import {
  listActivityInfoThunk,
  listMoreActivityInfoThunk,
} from '../../redux/features/activityList/thunk'
import { ActivitySortBy, ActivityType } from '../../lib/activity/activity_pb'
import { useEffect, useState } from 'react'
import { getNameWithActivityType } from '../../utils/helpers'
import { RefreshControl } from 'react-native-gesture-handler'

export default function ActivityList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'ActivityList'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { activityList, total } = useAppSelector(selectActivityList)
  const isLoading = useAppSelector(isActivityListLoading)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [canLoadmore, setCanLoadmore] = useState(true)
  const noData = activityList.length === 0 && !isLoading

  const [activityType, setActivityType] = useState(
    ActivityType.ACTIVITY_TYPE_UNSPECIFIED
  )
  const [visible, setVisible] = useState(false)
  const openActivityTypeMenu = () => setVisible(true)
  const closeActivityTypeMenu = () => setVisible(false)

  const fetchListActivity = async () => {
    const { response } = await dispatch(
      listActivityInfoThunk({
        activityType: activityType,
        ascending: false,
        limit: 10,
        offset: 0,
        sortBy: ActivitySortBy.ACTIVITY_SORT_BY_END_TIME,
      })
    ).unwrap()
    if (response) {
      setCurrentOffset(0)
      if (response.total > 10) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { error, response } = await dispatch(
      listMoreActivityInfoThunk({
        activityType: activityType,
        ascending: false,
        limit: 10,
        offset: currentOffset + 10,
        sortBy: ActivitySortBy.ACTIVITY_SORT_BY_END_TIME,
      })
    ).unwrap()

    if (response) {
      if (currentOffset + 20 >= response.total) {
        setCanLoadmore(false)
      }
      setCurrentOffset(currentOffset + 10)
    }
  }

  useEffect(() => {
    fetchListActivity()
  }, [activityType])
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
            Activity type:{' '}
            {activityType == ActivityType.ACTIVITY_TYPE_UNSPECIFIED
              ? 'All'
              : getNameWithActivityType(activityType)}
          </Text>
          <Menu
            visible={visible}
            onDismiss={closeActivityTypeMenu}
            anchor={
              <IconButton
                icon="cog"
                iconColor={theme.colors.primary}
                size={18}
                onPress={openActivityTypeMenu}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_UNSPECIFIED)
                closeActivityTypeMenu()
              }}
              title={'All'}
            />
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_RUNNING
              )}
            />
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_CYCLING
              )}
            />
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_WALKING
              )}
            />
          </Menu>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                fetchListActivity()
              }}
            />
          }
        >
          {activityList.map((activity) => {
            return (
              <ActivityListItem
                key={activity.id}
                onPress={() =>
                  navigation.navigate('ActivityDetail', {
                    activityId: activity.id,
                  })
                }
                activityInfo={activity}
              />
            )
          })}
          {!noData && total > 10 && (
            <Button
              style={{ marginTop: 10, marginBottom: 60 }}
              mode="elevated"
              onPress={fetchMore}
              loading={isLoading}
              disabled={!canLoadmore}
            >
              Load more
            </Button>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = (theme: AppTheme) => StyleSheet.create({})
