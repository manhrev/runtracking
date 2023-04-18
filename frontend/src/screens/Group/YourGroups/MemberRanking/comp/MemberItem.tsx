import { StyleSheet, View } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { UserRanking, Member } from '../../../../../lib/group/group_pb'
import { AppTheme, useAppTheme } from '../../../../../theme'
import { formatDateWithoutTime } from '../../../../../utils/helpers'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  userRanking: UserRanking.AsObject
  isLeader: boolean
  viewProfile: () => void
}

export default function GroupItem({
  hideTopDivider,
  showBottomDivider,
  userRanking,
  isLeader,
  viewProfile,
}: GroupItemProps) {
  const theme = useAppTheme()
  const member = userRanking.member || {} as Member.AsObject

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
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 25, width: 40 }}>
                    <Avatar.Icon
                      style={{ backgroundColor: 'transparent' }}
                      color={theme.colors.secondary}
                      size={33}
                      icon='check-decagram'
                    />
                    <Text variant="bodyMedium">
                      {userRanking.countChallengeCompleted}
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 25 }}>
                    <Avatar.Icon
                      style={{ backgroundColor: 'transparent' }}
                      color={theme.colors.secondary}
                      size={33}
                      icon='star-circle'
                    />
                    <Text variant="bodyMedium">
                      {userRanking.point}
                    </Text>
                  </View>
                </View>
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
