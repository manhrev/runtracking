import { StyleSheet, View } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../../theme'
import { UserInfo } from '../../../../lib/auth/auth_pb'

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  member: UserInfo.AsObject
  viewProfile: () => void
  isYourself?: boolean
}

export default function MemberItem({
  hideTopDivider,
  showBottomDivider,
  member,
  viewProfile,
  isYourself,
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
            {!member?.profilePicture ? 
                (
                  <Avatar.Text
                  size={60}
                  label={member?.displayName.at(0) || ""}
                />
                )
                : (
                  <Avatar.Image
                size={60}
                source={{uri: member?.profilePicture}}
              />
                )
            }
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
              }}
            >
              <View style={{ marginLeft: 12, justifyContent: 'center' }}>
                <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                  {member.displayName} {isYourself && '(You)'}
                </Text>
                {member.age > 0 && <Text variant="bodyMedium">
                  {member.age} Years Old
                </Text>}
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
