import { Dimensions, StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { ActivityType, ChallengeInfo, Rule } from '../../../../../lib/group/group_pb'
import { AppTheme, useAppTheme } from '../../../../../theme'
import { formatDateWithoutTime, toDate } from '../../../../../utils/helpers'
import * as Progress from 'react-native-progress'
import { ChallengeRuleStrShorted } from '../../../../../constants/enumstr/group'

interface GroupItemProps {
    hideTopDivider?: boolean
    showBottomDivider?: boolean
    challenge: ChallengeInfo.AsObject
    deleteListId: number[]
    addOrRemoveFromDeleteList: (id: number) => void
    isLeader: boolean
    goToChallengeDetail: () => void
}

export default function GroupItem({
    hideTopDivider,
    showBottomDivider,
    challenge,
    deleteListId,
    addOrRemoveFromDeleteList,
    isLeader,
    goToChallengeDetail,
}: GroupItemProps) {
  const theme = useAppTheme()
  const windowWidth = Dimensions.get('window').width;

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

  const getRuleListDisplayStr = () => {
    let displayStr = ""
    challenge.challengerulesList.forEach((item, index) => {
        displayStr += ChallengeRuleStrShorted[item.rule] + ", "
    })
    return displayStr.slice(0, -2)
  }


  
  return (
    <TouchableRipple onPress={() => goToChallengeDetail()}>
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
                    challenge.picture == "" ?
                    require('../../../../../../assets/group-img.png') :
                    { uri: challenge.picture }
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
                    <Text variant="titleMedium" style={{ fontWeight: '700', width: windowWidth * 0.6 }}>
                        {challenge.name}
                    </Text>
                    <Text variant="bodyMedium">
                        Start: {toDate(challenge.from?.seconds || 0, true)}   --&gt;   End:{' '}
                        {toDate(challenge.to?.seconds || 0, true)}
                    </Text>

                    <Text variant="bodyMedium" style={{ marginBottom: 3, fontWeight: "bold", color: theme.colors.tertiary }}>
                        Rules: {getRuleListDisplayStr()}
                    </Text>
                </View>
            </View>
            {isLeader && <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <IconButton
                  icon={
                    deleteListId.includes(challenge.id)
                      ? 'checkbox-marked'
                      : 'checkbox-blank-outline'
                  }
                  iconColor={
                    deleteListId.includes(challenge.id) ? '#e82525' : '#969696'
                  }
                  size={27}
                  onPress={() => addOrRemoveFromDeleteList(challenge.id)}
                />
            </View>}
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
