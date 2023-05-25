import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import {
  isNotificationListLoading,
  selectNotificationList,
} from '../../redux/features/notification/slice'
import {
  listMoreNotificationInfoThunk,
  listNotificationInfoThunk,
} from '../../redux/features/notification/thunk'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import NotificationListItem from './comp/NotificationListItem'
import { useFocusEffect } from '@react-navigation/native'
import { baseStyles } from '../baseStyle'
import { RefreshControl } from 'react-native-gesture-handler'

export default function NotificationList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'NotificationList'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { notificationList, offset, total } = useAppSelector(
    selectNotificationList
  )
  const isLoading = useAppSelector(isNotificationListLoading)
  const noData = notificationList.length === 0 && !isLoading

  const [canLoadmore, setCanLoadmore] = useState(true)

  const fetchNotificationList = async () => {
    const { response } = await dispatch(
      listNotificationInfoThunk({
        limit: 10,
        offset: 0,
      })
    ).unwrap()

    if (response) {
      if (response.notificationListList.length >= 10) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { response } = await dispatch(
      listMoreNotificationInfoThunk({
        limit: 10,
        offset: offset + 10,
      })
    ).unwrap()

    if (response) {
      if (offset + 10 > notificationList.length) {
        setCanLoadmore(false)
      }
    }
  }

  useEffect(() => {
    fetchNotificationList()
  }, [])

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchNotificationList}
            />
          }
        >
          {notificationList.map((notification) => {
            return (
              <NotificationListItem
                key={notification.id}
                notificationInfo={notification}
                navigation={navigation}
              />
            )
          })}
          {noData && (
            <Text
              variant="bodyLarge"
              style={{
                color: theme.colors.tertiary,
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              No notifications found!
            </Text>
          )}
          {!noData && total > 10 && (
            <Button
              style={{ marginTop: 10, marginBottom: 20 }}
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

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surfaceVariant,
    },
    itemTitle: {},
  })
