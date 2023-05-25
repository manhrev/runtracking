import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useCallback, useState } from 'react'
import UpperRightMenu from '../../comp/UpperRightMenu'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

import { baseStyles } from '../baseStyle'
import ActivityListItem from './comp/ActivityListItem'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { listActivityInfoThunk } from '../../redux/features/activityList/thunk'
import { ActivitySortBy, ActivityType } from '../../lib/activity/activity_pb'
import {
  isActivityListLoading,
  selectActivityList,
} from '../../redux/features/activityList/slice'
import { useSelector } from 'react-redux'
import StatisticSection from './comp/StatisticSection'

export default function Activity({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'ActivityHome'>) {
  const dispatch = useAppDispatch()
  const theme = useAppTheme()
  const isFocused = useIsFocused()
  const [activityStatSwitch, setActivityStatSwitch] = useState(false)
  const { activityList } = useAppSelector(selectActivityList)
  const isLoading = useSelector(isActivityListLoading)
  const fetchListActivity = async () => {
    const { payload } = await dispatch(
      listActivityInfoThunk({
        activityType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
        ascending: false,
        limit: 10,
        offset: 0,
        sortBy: ActivitySortBy.ACTIVITY_SORT_BY_END_TIME,
      })
    )
  }

  useFocusEffect(
    useCallback(() => {
      fetchListActivity()
    }, [])
  )
  return (
    <>
      <View style={baseStyles(theme).homeContainer}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={() => {
                  fetchListActivity()
                  setActivityStatSwitch(!activityStatSwitch)
                }}
              />
            }
          >
            <StatisticSection reload={activityStatSwitch} />
            <View style={styles(theme).recentActivityContainer}>
              <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>
                Recent activities
              </Text>
              {activityList.slice(0, 3).map((activity) => {
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
              {activityList.length !== 0 ? (
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('ActivityList', {})}
                  style={{ marginTop: 10 }}
                  loading={isLoading}
                >
                  View all activities
                </Button>
              ) : (
                <>
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.colors.tertiary,
                      textAlign: 'center',
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    No activities to show
                  </Text>
                  <Button
                    style={{ width: '40%', alignSelf: 'center' }}
                    mode="contained"
                    onPress={() =>
                      navigation.navigate('RunTracking', {
                        activityType: ActivityType.ACTIVITY_TYPE_RUNNING,
                        planId: 0,
                      })
                    }
                  >
                    Create one!
                  </Button>
                </>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    recentActivityContainer: {
      paddingVertical: 20,
    },
  })
