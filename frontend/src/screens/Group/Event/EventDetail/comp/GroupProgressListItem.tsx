import { Dimensions, StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { PlanInfo } from '../../../../../lib/plan/plan_pb'
import { ActivityType } from '../../../../../lib/activity/activity_pb'
import { AppTheme, useAppTheme } from '../../../../../theme'
import {
  displayValue,
  getProgressOfDailyActivity,
  isDailyActivity,
  mToKm,
  toDate,
} from '../../../../../utils/helpers'
import * as Progress from 'react-native-progress'
import {
  GroupProgressInSubEvent,
  Rule,
} from '../../../../../lib/event/event_pb'
import { useAppSelector } from '../../../../../redux/store'
import { selectEventList } from '../../../../../redux/features/eventList/slice'
import { GroupInfo } from '../../../../../lib/group/group_pb'
const windowWidth = Dimensions.get('window').width

interface GroupProgressListItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  navigateCallback: () => void
  groupProgress: GroupProgressInSubEvent.AsObject
  rule: Rule
  goal: number
}

export default function GroupProgressListItem({
  hideTopDivider,
  showBottomDivider,
  navigateCallback,
  groupProgress,
  goal,
  rule,
}: GroupProgressListItemProps) {
  const theme = useAppTheme()
  const { groupId, progress } = groupProgress
  const { groupInfoMap } = useAppSelector(selectEventList)
  const groupInfo = groupInfoMap[groupId] || new GroupInfo().toObject()
  return (
    <>
      <TouchableRipple onPress={() => navigateCallback()}>
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
                  groupInfo.backgroundPicture == ''
                    ? require('../../../../../../assets/group-img.png')
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
                  <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                    {groupInfo.name}
                  </Text>

                  <Text
                    variant="bodyMedium"
                    style={{
                      marginBottom: 3,
                      fontWeight: 'bold',
                      color: theme.colors.tertiary,
                    }}
                  >
                    Progress: {formatDataByRule(progress, rule)} /{' '}
                    {formatDataByRule(goal, rule)}
                  </Text>

                  <Progress.Bar
                    progress={progress / goal}
                    width={windowWidth * 0.6}
                    color={theme.colors.primary}
                    borderColor="#e0e0e0"
                    unfilledColor="#e0e0e0"
                    borderRadius={5}
                    animated={true}
                  />
                </View>
              </View>
            </View>
          </View>
          {showBottomDivider && (
            <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
          )}
        </>
      </TouchableRipple>
      {showBottomDivider && <View style={{ marginBottom: 35 }} />}
    </>
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

export function formatDataByRule(data: number, rule: Rule) {
  switch (rule) {
    case Rule.RULE_TOTAL_ACTIVITY:
      return data
    case Rule.RULE_TOTAL_DISTANCE:
      return mToKm(data)
    case Rule.RULE_TOTAL_TIME:
      return (data / 3600).toFixed(2)
    case Rule.RULE_TOTAL_CALORIES:
      return data
  }
}
