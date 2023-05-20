import { View, StyleSheet, Alert } from 'react-native'
import { Divider, Text, TouchableRipple, Avatar } from 'react-native-paper'
import { useAppTheme, AppTheme } from '../../../theme'
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler'
import RightSwipe from './RightSwipe'
import {
  ConversationInfo,
} from '../../../lib/chat/chat_pb'
// import { formatDateConversation } from '../../../utils/helpers'
import {
    deleteConversationThunk
} from '../../../redux/features/conversationList/thunk'
import { useAppDispatch } from '../../../redux/store'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootBaseStackParamList } from '../../../navigators/BaseStack'
import { toast } from '../../../utils/toast/toast'
import { listPlanThunk } from '../../../redux/features/planList/thunk'
import { ActivityType, PlanSortBy } from '../../../lib/plan/plan_pb'
import { formatDateConversation, formatDateNotification } from '../../../utils/helpers'
import { selectUserSlice } from '../../../redux/features/user/slice'
import { useAppSelector } from '../../../redux/store'

interface ConversationListItemProps {
  conversationInfo: ConversationInfo.AsObject
  navigation: NativeStackNavigationProp<
    RootBaseStackParamList,
    'ConversationList',
    undefined
  >
}

export default function ConversationListItem({
  navigation,
  conversationInfo,
}: ConversationListItemProps) {
  const theme = useAppTheme()

  const { partner, lastmessage } =
    conversationInfo
  const dispatch = useAppDispatch()
  const {userId , displayName} =
  useAppSelector(selectUserSlice)

  const onPressDelete = async (id: number) => {
    const {error} = await dispatch(deleteConversationThunk({ toUserId: id})).unwrap()
    if (error) {
      toast.error({ message: 'An error occured, please try again!' })
      return
    }
    else {
      toast.success({ message: 'Conversation deleted!' })
    }
  }

  const viewConversation = async () => {
    navigation.navigate('Chat', 
                    {userId: userId, toUserId: partner?.userId || userId})
  }

  const getFirstStrOfFullName = (fullname : string ) : string => {
        const names = fullname.split(" ")
        if(names.length > 0)
            return names[0]
        return ""
  }


  const deleteConversationOrNot = () => {
    Alert.alert(
      'Delete Conversation',
      'Are you sure you want to delete this conversation?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => onPressDelete(partner?.userId || 0)},
      ],
      { cancelable: false }
    )
  }

  const rightSwipeActions = () =>
    RightSwipe(theme, () => {
      deleteConversationOrNot()
    })

  return (
    <>
      <Divider bold testID={undefined} hitSlop={undefined} onLayout={undefined} pointerEvents={undefined} removeClippedSubviews={undefined} nativeID={undefined} collapsable={undefined} needsOffscreenAlphaCompositing={undefined} renderToHardwareTextureAndroid={undefined} focusable={undefined} shouldRasterizeIOS={undefined} isTVSelectable={undefined} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined} tvParallaxShiftDistanceX={undefined} tvParallaxShiftDistanceY={undefined} tvParallaxTiltAngle={undefined} tvParallaxMagnification={undefined} onStartShouldSetResponder={undefined} onMoveShouldSetResponder={undefined} onResponderEnd={undefined} onResponderGrant={undefined} onResponderReject={undefined} onResponderMove={undefined} onResponderRelease={undefined} onResponderStart={undefined} onResponderTerminationRequest={undefined} onResponderTerminate={undefined} onStartShouldSetResponderCapture={undefined} onMoveShouldSetResponderCapture={undefined} onTouchStart={undefined} onTouchMove={undefined} onTouchEnd={undefined} onTouchCancel={undefined} onTouchEndCapture={undefined} onPointerEnter={undefined} onPointerEnterCapture={undefined} onPointerLeave={undefined} onPointerLeaveCapture={undefined} onPointerMove={undefined} onPointerMoveCapture={undefined} onPointerCancel={undefined} onPointerCancelCapture={undefined} onPointerDown={undefined} onPointerDownCapture={undefined} onPointerUp={undefined} onPointerUpCapture={undefined} accessible={undefined} accessibilityActions={undefined} accessibilityLabel={undefined} accessibilityRole={undefined} accessibilityState={undefined} accessibilityHint={undefined} accessibilityValue={undefined} onAccessibilityAction={undefined} accessibilityLabelledBy={undefined} accessibilityLiveRegion={undefined} importantForAccessibility={undefined} accessibilityElementsHidden={undefined} accessibilityLanguage={undefined} accessibilityViewIsModal={undefined} onAccessibilityEscape={undefined} onAccessibilityTap={undefined} onMagicTap={undefined} accessibilityIgnoresInvertColors={undefined} />
      {/* <TouchableRipple> */}
      <GestureHandlerRootView>
        <Swipeable renderRightActions={rightSwipeActions}>
          <TouchableRipple
            onPress={() => {
              viewConversation()
            }}
          >
            <View style={styles(theme).listItemContainer}>
              {!partner?.profilePicture ? 
                (
                  <Avatar.Text
                  size={60}
                  label={partner?.displayName.at(0) || ""}
                />
                )
                : (
                  <Avatar.Image
                size={60}
                source={{uri: partner?.profilePicture}}
              />
                )
            }
              
              <View style={styles(theme).listItemContent}>
                <View style={{flexDirection: 'row', width: '90%' }}>
                  <Text
                    variant="titleMedium"
                    style={[
                      styles(theme).listItemValue,
                    //   { fontWeight: isSeen ? '500' : 'bold'},
                      {flex: 1, flexWrap: 'wrap' }
                    ]}
                  >
                    {partner?.displayName}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 50}}>
                    <Text style={{
                        fontWeight: lastmessage?.isSeen ? '500' : 'bold',
                    }}>{getFirstStrOfFullName(userId == lastmessage?.fromUserId ? 'You' : (partner?.displayName || ""))}: {lastmessage?.message}</Text>
                    <Text
                    variant="labelSmall"
                    style={{
                        color: theme.colors.secondary,
                        fontWeight: lastmessage?.isSeen ? '500' : 'bold',
                    }}
                    >
                    {formatDateConversation(lastmessage?.time)}
                    </Text>
                </View>
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
