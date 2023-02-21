import { View,  StyleSheet} from "react-native";
import { Divider, Text, TouchableRipple, Avatar } from "react-native-paper";
import { useAppTheme, AppTheme } from "../../../theme";
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import RightSwipe from "./RightSwipe";
import { NotificationInfo } from "../../../lib/notification/notification_pb";
import {
  formatDate,
  formatDateNotification,
  getIconWithActivityType,
  getNameWithActivityType,
  minutesPerKilometer,
  secondsToMinutes,
} from "../../../utils/helpers";
import { deleteNotificationInfoThunk, updateNotificationInfoThunk } from "../../../redux/features/notification/thunk";
import { useAppDispatch } from "../../../redux/store";

interface NotificationListItemProps {
  notificationInfo: NotificationInfo.AsObject;
}


export default function NotificationListItem(props: NotificationListItemProps) {
  const theme = useAppTheme();
//   const { left, right, topDivider, color, onPress } = props;
  

  
  const { notificationInfo } = props
  const {id, image, isSeen, message,referenceId, type, time} = notificationInfo
  const dispatch = useAppDispatch()
  
  const onPressDelete = async (id: number) => {
    await dispatch(deleteNotificationInfoThunk({id: id}))
  }

  const rightSwipeActions = () => RightSwipe(theme, () => {onPressDelete(id)})

  return (
    <>
     <Divider bold />
     {/* <TouchableRipple> */}
     <GestureHandlerRootView>
     <Swipeable 
        renderRightActions={rightSwipeActions}
     >
        <TouchableRipple onPress={() => {
          dispatch(updateNotificationInfoThunk({id: id, isSeen: true}))
        }}>
                <View style={styles(theme).listItemContainer}>
                <Avatar.Image  size={60} source={require('../../../../assets/icon.png')} />
                        <View style={styles(theme).listItemContent}>
                            
                            <Text variant="bodyMedium"  style={[styles(theme).listItemValue,
                            {fontWeight: (isSeen) ? "500" : "bold"}
                            
                            ]}>
                                {message} 
                            </Text>
                            <Text
                                variant="labelSmall"
                                style={{
                                    // textAlign: "right",
                                    color: theme.colors.secondary,
                                    fontWeight: (isSeen) ? "500" : "bold"
                                }}>
                                {formatDateNotification(time)}
                            </Text>
                        </View>
                </View>
                </TouchableRipple>
    </Swipeable>
      </GestureHandlerRootView>
    </>
  );
}


const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      display: "flex",
      flexDirection: "row",
      alignContent: "center"
    },
    listItemContent: {
        marginLeft: 20
    },
    listItemValue: {
        paddingBottom: 10
    },

  });
