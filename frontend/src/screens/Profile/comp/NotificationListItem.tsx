import { View,  StyleSheet} from "react-native";
import { Divider, Text, TouchableRipple, Avatar } from "react-native-paper";
import { useAppTheme, AppTheme } from "../../../theme";
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import RightSwipe from "./RightSwipe";
import { NotificationInfo } from "../../../lib/notification/notification_pb";

interface NotificationListItemProps {
  notificationInfo: NotificationInfo.AsObject;
}


export default function NotificationListItem(props: NotificationListItemProps) {
  const theme = useAppTheme();
//   const { left, right, topDivider, color, onPress } = props;
  

  const rightSwipeActions = () => RightSwipe(theme)
  const { notificationInfo } = props
  const {image, isSeen, message,referenceId, type, time} = notificationInfo

  return (
    <>
     <Divider bold />
     {/* <TouchableRipple> */}
     <GestureHandlerRootView>
     <Swipeable 
        renderRightActions={rightSwipeActions}
     >
        <TouchableRipple onPress={() => {console.log("on press")}}>
                <View style={styles(theme).listItemContainer}>
                <Avatar.Image  size={60} source={require('../../../../assets/icon.png')} />
                        <View style={styles(theme).listItemContent}>
                            <Text variant="bodyMedium" style={styles(theme).listItemValue}>
                                {message}
                            </Text>
                            <Text
                                variant="labelSmall"
                                style={{
                                    // textAlign: "right",
                                    color: theme.colors.secondary,
                                }}>
                                18 minutes
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
