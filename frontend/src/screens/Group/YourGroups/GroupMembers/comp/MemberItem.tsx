import { StyleSheet, View } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { GroupInfo, Member } from '../../../../../lib/group/group_pb'
import { AppTheme, useAppTheme } from '../../../../../theme'
import { formatDateWithoutTime } from '../../../../../utils/helpers'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  member: Member.AsObject
  acceptMemberFunc: () => void
  isLeader: boolean
  viewProfile: () => void
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  member,
  acceptMemberFunc,
  isLeader,
  viewProfile,
}: GroupItemProps) {
  const theme = useAppTheme()

  return (
    <TouchableRipple
      onPress={() => {
        viewProfile()
      }}
    >
      <>
        {!hideTopDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon
              size={55}
              icon="account-outline"
              style={{ borderRadius: 50 }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12, justifyContent: 'center' }}>
                <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                  {member.displayName}
                </Text>
                <Text variant="bodyMedium">
                  Joined at {formatDateWithoutTime(member.createdAt)}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                {member.isAdmin && (
                  <IconButton
                    icon="account-star"
                    iconColor={theme.colors.secondary}
                    size={35}
                  />
                )}
                {member.status === Member.Status.MEMBER_STATUS_WAITING &&
                  isLeader && (
                    <Button
                      mode="contained-tonal"
                      onPress={() => acceptMemberFunc()}
                    >
                      Accept
                    </Button>
                  )}
                {member.status === Member.Status.MEMBER_STATUS_REJECTED && (
                  <Button mode="contained-tonal" disabled>
                    Rejected
                  </Button>
                )}
                {member.status === Member.Status.MEMBER_STATUS_BANNED && (
                  <Button mode="contained-tonal" disabled>
                    Banned
                  </Button>
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
