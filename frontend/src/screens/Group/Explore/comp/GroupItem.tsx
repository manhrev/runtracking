import { StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { GroupInfo, Member } from '../../../../lib/group/group_pb'
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
  return (
    <TouchableRipple onPress={() => navigateFunc()}>
      <>
        {!hideTopDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Image
                style={{
                    width: 55,
                    height: 55,
                    borderRadius: 5,
                }}
                source={
                    group.backgroundPicture == "" ?
                    require('../../../../../assets/group-img.png') :
                    { uri: group.backgroundPicture }
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
                <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                  {group.name}
                </Text>
                <Text variant="bodyMedium">{group.numOfMembers} members</Text>
                <Text variant="bodyMedium">
                  Created at {formatDateWithoutTime(group.createdAt)}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                {group.memberStatus === Member.Status.MEMBER_STATUS_UNSPECIFIED && (
                  <IconButton
                    icon="account-arrow-right"
                    iconColor={theme.colors.primary}
                    size={35}
                    onPress={() => {
                      onSubmit()
                    }}
                  />
                )}
                {group.memberStatus === Member.Status.MEMBER_STATUS_WAITING && (
                  <IconButton
                    icon="account-clock"
                    iconColor={theme.colors.secondary}
                    size={35}
                    disabled
                  />
                )}
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
