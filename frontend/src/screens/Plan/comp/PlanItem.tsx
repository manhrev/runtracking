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
import { PlanInfo } from '../../../lib/plan/plan_pb'
import { ActivityType } from '../../../lib/activity/activity_pb'
import { AppTheme, useAppTheme } from '../../../theme'
import { displayValue, getProgressOfDailyActivity, isDailyActivity, toDate } from '../../../utils/helpers'
import * as Progress from 'react-native-progress'
const windowWidth = Dimensions.get('window').width;

interface PlanItemProps {
    hideTopDivider?: boolean
    showBottomDivider?: boolean
    navigateFunc: () => void
    plan: PlanInfo.AsObject
    deleteListId: number[]
    addOrRemoveFromDeleteList: (id: number) => void
}

export default function PlanItem({
    hideTopDivider,
    showBottomDivider,
    navigateFunc,
    plan,
    deleteListId,
    addOrRemoveFromDeleteList,
}: PlanItemProps) {
  const theme = useAppTheme()
  return (
  <>
    <TouchableRipple onPress={() => navigateFunc()}>
      <>
        {!hideTopDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Avatar.Icon
                size={55}
                icon={
                    plan.activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                        ? 'run-fast'
                        : plan.activityType === ActivityType.ACTIVITY_TYPE_WALKING
                        ? 'walk'
                        : 'bike'
                }
                color={theme.colors.onPrimary}
                style={{
                    borderRadius: 50,
                    backgroundColor: theme.colors.primary,
                }}
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
                        {plan.name}
                    </Text>
                    <Text variant="bodyMedium">
                        Start: {toDate(plan.startTime?.seconds || 0, true)}   --&gt;   End:{' '}
                        {toDate(plan.endTime?.seconds || 0, true)}
                    </Text>
                    {isDailyActivity(plan.rule) ? (
                        <Text variant="bodyMedium" style={{ marginBottom: 3, fontWeight: "bold", color: theme.colors.tertiary }}>
                            Today:{' '}
                            {displayValue(
                            plan.rule,
                            getProgressOfDailyActivity(plan.progressList)
                            )}{' '}
                            / {displayValue(plan.rule, plan.goal)}
                        </Text>
                    ) : (
                        <Text variant="bodyMedium" style={{ marginBottom: 3, fontWeight: "bold", color: theme.colors.tertiary }}>
                            Progress: {displayValue(plan.rule, plan.total)} /{' '}
                            {displayValue(plan.rule, plan.goal)}
                        </Text>
                    )}
                    <Progress.Bar
                        progress={
                        isDailyActivity(plan.rule)
                            ? getProgressOfDailyActivity(plan.progressList) /
                            plan.goal
                            : plan.total / plan.goal
                        }
                        width={windowWidth * 0.6}
                        color={theme.colors.primary}
                        borderColor="#e0e0e0"
                        unfilledColor="#e0e0e0"
                        borderRadius={5}
                        animated={true}
                    />
                </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <IconButton
                  icon={
                    deleteListId.includes(plan.id)
                      ? 'checkbox-marked'
                      : 'checkbox-blank-outline'
                  }
                  iconColor={
                    deleteListId.includes(plan.id) ? '#e82525' : '#969696'
                  }
                  size={27}
                  onPress={() => addOrRemoveFromDeleteList(plan.id)}
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
