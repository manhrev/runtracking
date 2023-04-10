import { View, StyleSheet } from 'react-native'
import { Divider, Text, TouchableRipple, Avatar } from 'react-native-paper'
import { useAppTheme, AppTheme } from '../../../theme'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler'
import RightSwipe from './RightSwipe'
import {
  NotificationInfo,
  SOURCE_TYPE,
} from '../../../lib/notification/notification_pb'
import { formatDateNotification } from '../../../utils/helpers'
import {
  deleteNotificationInfoThunk,
  updateNotificationInfoThunk,
} from '../../../redux/features/notification/thunk'
import { useAppDispatch } from '../../../redux/store'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootBaseStackParamList } from '../../../navigators/BaseStack'
import { toast } from '../../../utils/toast/toast'
import { listPlanThunk } from '../../../redux/features/planList/thunk'
import { ActivityType, PlanSortBy } from '../../../lib/plan/plan_pb'

interface NotificationListItemProps {
  notificationInfo: NotificationInfo.AsObject
  navigation: NativeStackNavigationProp<
    RootBaseStackParamList,
    'NotificationList',
    undefined
  >
}

export default function NotificationListItem({
  navigation,
  notificationInfo,
}: NotificationListItemProps) {
  const theme = useAppTheme()

  const { id, image, isSeen, message, sourceId, sourceType, time } =
    notificationInfo
  const dispatch = useAppDispatch()

  const onPressDelete = async (id: number) => {
    await dispatch(deleteNotificationInfoThunk({ id: id }))
  }

  const viewNoti = async () => {
    const { error } = await dispatch(
      updateNotificationInfoThunk({ id: id, isSeen: true })
    ).unwrap()
    if (error) toast.error({ message: 'An error occurred, please try again' })
    else {
      switch (sourceType) {
        case SOURCE_TYPE.PLAN:
          const { error } = await dispatch(
            listPlanThunk({
              activityType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
              ascending: true,
              idsList: [sourceId],
              limit: 1,
              offset: 0,
              sortBy: PlanSortBy.PLAN_SORT_BY_CREATED_TIME,
              from: undefined,
              to: undefined,
            })
          ).unwrap()

          if (error)
            toast.error({ message: 'An error occurred, please try again' })
          else
            navigation.navigate('PlanDetail', {
              planId: sourceId,
              canEdit: false,
            })
      }
    }
  }

  const rightSwipeActions = () =>
    RightSwipe(theme, () => {
      onPressDelete(id)
    })

  return (
    <>
      <Divider bold />
      {/* <TouchableRipple> */}
      <GestureHandlerRootView>
        <Swipeable renderRightActions={rightSwipeActions}>
          <TouchableRipple
            onPress={() => {
              viewNoti()
            }}
          >
            <View style={styles(theme).listItemContainer}>
              <Avatar.Image
                size={60}
                source={{uri: image}}
              />
              <View style={styles(theme).listItemContent}>
                <View style={{flexDirection: 'row', width: '90%' }}>
                  <Text
                    variant="bodyMedium"
                    style={[
                      styles(theme).listItemValue,
                      { fontWeight: isSeen ? '500' : 'bold'},
                      {flex: 1, flexWrap: 'wrap' }
                    ]}
                  >
                    {message}
                  </Text>
                </View>
                <Text
                  variant="labelSmall"
                  style={{
                    // textAlign: "right",
                    color: theme.colors.secondary,
                    fontWeight: isSeen ? '500' : 'bold',
                  }}
                >
                  {formatDateNotification(time)}
                </Text>
              </View>
            </View>
          </TouchableRipple>
        </Swipeable>
      </GestureHandlerRootView>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
    },
    listItemContent: {
      marginLeft: 20,
      width: '90%'
      // width: '90%'
      // flexDirection: 'row',
    },
    listItemValue: {
      paddingBottom: 10,
    },
  })
