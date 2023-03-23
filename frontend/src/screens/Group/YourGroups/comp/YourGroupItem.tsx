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

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  group: GroupInfo.AsObject
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  group,
}: GroupItemProps) {
  const theme = useAppTheme()
  const { name, numOfMembers } = group

  return (
    <TouchableRipple style={{ borderRadius: 10 }} onPress={() => {}} borderless>
      <View>
        {!hideTopDivider && <Divider />}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon size={55} icon="camera" style={{ borderRadius: 10 }} />
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
                  {name}
                </Text>
                <Text variant="bodyMedium">{numOfMembers} members</Text>
              </View>
              {/* <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <Button mode="contained-tonal">Join</Button>
              </View> */}
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
