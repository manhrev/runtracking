import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, List, TouchableRipple, Text, Button } from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import {
  isNotificationListLoading,
  selectNotificationList,
} from '../../redux/features/notification/slice'
import {
  listLastNotificationInfoThunk,
  listMoreNotificationInfoThunk,
  listNotificationInfoThunk,
} from '../../redux/features/notification/thunk'
import { selectUserSlice } from '../../redux/features/user/slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import NotificationListItem from './comp/NotificationListItem'
import * as Notifications from 'expo-notifications'
import { Subscription } from 'expo-modules-core'
import { useFocusEffect } from '@react-navigation/native'

export default function NotificationList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'NotificationList'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { notificationList, offset } = useAppSelector(selectNotificationList)
  const isLoading = useAppSelector(isNotificationListLoading)

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
    const res: any = await dispatch(
      listMoreNotificationInfoThunk({
        limit: 10,
        offset: offset + 10,
      })
    )

    if (!res.payload.error) {
      if (offset + 10 > notificationList.length) {
        setCanLoadmore(false)
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchNotificationList()
    }, [])
  )

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {notificationList.map((notification) => {
        return (
          <NotificationListItem
            key={notification.id}
            notificationInfo={notification}
          />
        )
      })}

      <Button
        style={{ marginTop: 10, marginBottom: 60 }}
        mode="elevated"
        onPress={fetchMore}
        loading={isLoading}
        disabled={!canLoadmore}
      >
        Load more
      </Button>
    </ScrollView>
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
