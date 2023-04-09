import { StyleSheet, View } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { GroupInfo, Member, MemberProgress, Rule } from '../../../../../lib/group/group_pb';
import { AppTheme, useAppTheme } from '../../../../../theme'
import { ChallengeRuleIcon } from '../../../../../constants/enumstr/group';

interface GroupItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  progress: MemberProgress.AsObject
  leaderId: number
  viewProfile: () => void
}

export default function MemberItem({
  hideTopDivider,
  showBottomDivider,
  progress,
  leaderId,
  viewProfile,
}: GroupItemProps) {
  const theme = useAppTheme()

  // display
  const getRealDisplayValue = (rule: Rule, value: number) => {
      if(rule == Rule.RULE_TOTAL_DISTANCE) {
          return value / 1000
      }
      else if(rule == Rule.RULE_TOTAL_TIME) {
          // to mm:ss
          const minutes = Math.floor(value / 60)
          const seconds = value % 60 < 10 ? `0${value % 60}` : value % 60

          return `${minutes}:${seconds}`
      }
      else return value
  }

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
                  {progress.memberInfo?.displayName}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  {progress.ruleProgressListList.map((item) => {
                    return (
                      <View key={item.rule} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                        <Avatar.Icon
                          style={{ backgroundColor: 'transparent' }}
                          color={theme.colors.secondary}
                          size={33}
                          icon={ChallengeRuleIcon[item.rule]}
                        />
                        <Text variant="bodyMedium">
                          {getRealDisplayValue(item.rule, item.total)}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                {progress.memberInfo?.userId == leaderId && (
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
