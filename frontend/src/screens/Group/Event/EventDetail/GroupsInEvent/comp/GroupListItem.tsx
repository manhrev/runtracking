import { StyleSheet, View, Image } from 'react-native'
import { Button, Divider, Text, TouchableRipple } from 'react-native-paper'
import { GroupStatusInEventStr } from '../../../../../../constants/enumstr/event'
import { GroupInEvent, GroupStatus } from '../../../../../../lib/event/event_pb'
import { GroupInfo } from '../../../../../../lib/group/group_pb'
import { selectEventList } from '../../../../../../redux/features/eventList/slice'
import { useAppSelector } from '../../../../../../redux/store'
import { AppTheme, useAppTheme } from '../../../../../../theme'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  group: GroupInEvent.AsObject
  acceptCallback: () => void
  isAdmin: boolean
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  group,
  acceptCallback,
  isAdmin,
}: GroupItemProps) {
  const theme = useAppTheme()
  const { id, status } = group
  const { groupInfoMap } = useAppSelector(selectEventList)
  const groupInfo = groupInfoMap[id] || new GroupInfo().toObject()

  return (
    <TouchableRipple
      style={{ borderRadius: 10 }}
      // onPress={() => navigateFunc()}
      borderless
    >
      <View>
        {!hideTopDivider && <Divider />}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 5,
              }}
              source={
                groupInfo.backgroundPicture == ''
                  ? require('../../../../../../../assets/group-img.png')
                  : { uri: groupInfo.backgroundPicture }
              }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12 }}>
                <Text
                  variant="titleMedium"
                  style={{ fontWeight: '700', marginBottom: 5 }}
                >
                  {groupInfo.name}
                </Text>
                <Text variant="bodyMedium">
                  Status: {GroupStatusInEventStr[status]}
                </Text>
              </View>
              {isAdmin && status === GroupStatus.GROUP_STATUS_REQUESTED && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: 1,
                  }}
                >
                  <Button mode="text" onPress={acceptCallback}>
                    Accept
                  </Button>
                </View>
              )}
            </View>
          </View>
        </View>
        {showBottomDivider && <Divider />}
      </View>
    </TouchableRipple>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 15,
      paddingHorizontal: 8,
    },
    listItemTilte: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  })
