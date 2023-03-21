import { StyleSheet, View } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { GroupInfo } from '../../../../lib/group/group_pb'
import { AppTheme, useAppTheme } from '../../../../theme'
import { formatDateWithoutTime } from '../../../../utils/helpers'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  navigateFunc: () => void
  group: GroupInfo.AsObject
  onSubmit: () => void
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  navigateFunc,
  group,
  onSubmit,
}: GroupItemProps) {
  const theme = useAppTheme()
  const { name, numOfMembers, createdAt } = group
  return (
    <TouchableRipple onPress={() => navigateFunc()}>
      <>
        {!hideTopDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon
              size={55}
              icon="account-group-outline"
              style={{ borderRadius: 10 }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12 }}>
                <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                  {name}
                </Text>
                <Text variant="bodyMedium">{numOfMembers} members</Text>
                <Text variant="bodyMedium">
                  Created at {formatDateWithoutTime(createdAt)}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <Button
                  mode="contained-tonal"
                  onPress={() => {
                    onSubmit()
                  }}
                >
                  Join
                </Button>
              </View>
            </View>
          </View>
        </View>
        {showBottomDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
      </>
    </TouchableRipple>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 20,
      paddingHorizontal: 8,
    },
    listItemTilte: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  })
