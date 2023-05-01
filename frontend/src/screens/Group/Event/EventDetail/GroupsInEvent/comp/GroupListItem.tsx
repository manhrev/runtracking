import { StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { GroupInEvent } from '../../../../../../lib/event/event_pb'
import { AppTheme, useAppTheme } from '../../../../../../theme'
import { groupEventStatusToStr } from '../../../../../../utils/helpers/enumStr'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  group: GroupInEvent.AsObject
  navigateFunc: () => void
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  group,
  navigateFunc,
}: GroupItemProps) {
  const theme = useAppTheme()
  const { id, status } = group

  return (
    <TouchableRipple
      style={{ borderRadius: 10 }}
      onPress={() => navigateFunc()}
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
                '' == ''
                  ? require('../../../../../../../assets/group-img.png')
                  : { uri: '' }
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
                  Groupid: {id}
                </Text>
                <Text variant="bodyMedium">
                  Status: {groupEventStatusToStr(status)}
                </Text>
              </View>
              {/* {isLeader && <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <IconButton
                  icon="account-star"
                  iconColor={theme.colors.secondary}
                  size={35}
                />
              </View>} */}
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