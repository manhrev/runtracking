import { View, StyleSheet } from 'react-native'
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
import { formatDateNotification } from '../../../utils/helpers'
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

//   const onPressDelete = async (id: number) => {
//     await dispatch(deleteConversationInfoThunk({ id: id }))
//   }

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

  const rightSwipeActions = () =>
    RightSwipe(theme, () => {
    //   onPressDelete(id)
    })

  return (
    <>
      <Divider bold />
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
                  label={displayName[0]}
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
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>{getFirstStrOfFullName(userId == lastmessage?.fromUserId ? 'You' : (partner?.displayName || ""))}: {lastmessage?.message}</Text>
                    <Text
                    variant="labelSmall"
                    style={{
                        // textAlign: "right",
                        color: theme.colors.secondary,
                        // fontWeight: isSeen ? '500' : 'bold',
                    }}
                    >
                    {formatDateNotification(lastmessage?.time)}
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
