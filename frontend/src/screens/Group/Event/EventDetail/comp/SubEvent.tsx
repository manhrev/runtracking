import moment from 'moment'
import { View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Avatar, Divider, Text } from 'react-native-paper'
import { SubEvent, SubEventProgress } from '../../../../../lib/event/event_pb'
import { GroupInfo } from '../../../../../lib/group/group_pb'
import { selectEventList } from '../../../../../redux/features/eventList/slice'
import { selectGroupDetail } from '../../../../../redux/features/groupDetail/slice'
import { useAppSelector } from '../../../../../redux/store'
import { useAppTheme } from '../../../../../theme'
import { formatDateWithoutTime } from '../../../../../utils/helpers'
import { subEventRuleToStr } from '../../../../../utils/helpers/enumStr'
import GroupProgressListItem, {
  formatDataByRule,
} from './GroupProgressListItem'
import { getIconWithActivityType } from '../../../../../utils/helpers/index'

interface SubEventDisplayProps {
  subEvent: SubEvent.AsObject
  groupProgress: SubEventProgress.AsObject
}

const SubEventDisplay = ({ subEvent, groupProgress }: SubEventDisplayProps) => {
  const theme = useAppTheme()
  const { name, description, startAt, endAt, goal, rule, id, activityType } =
    subEvent
  const {
    groupDetail: { groupinfo },
  } = useAppSelector(selectGroupDetail)
  const groupId = groupinfo?.id || -1
  const { groupProgressList } = groupProgress
  const yourGroupProgress = groupProgressList.find((progress) => {
    return progress.groupId === groupId
  })
  const { groupInfoMap } = useAppSelector(selectEventList)
  const yourGroup = groupInfoMap[groupId] || new GroupInfo().toObject()
  const eventStatus = (() => {
    const now = moment()
    const start = moment.unix(startAt?.seconds || 0)
    const end = moment.unix(endAt?.seconds || 0)
    if (now.isBefore(start)) {
      return <Text style={{ color: theme.colors.secondary }}>Up coming</Text>
    } else if (now.isAfter(end)) {
      return <Text style={{ color: theme.colors.error }}>Ended</Text>
    } else {
      return <Text style={{ color: theme.colors.primary }}>In progress</Text>
    }
  })()
  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontSize: 16 }}>{eventStatus}</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 16 }}>
            Start: {formatDateWithoutTime(startAt)}
          </Text>
          <Text style={{ fontSize: 16 }}>
            End: {formatDateWithoutTime(endAt)}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 30,
          gap: 20,
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Avatar.Icon icon={getIconWithActivityType(activityType)} size={70} />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-start',
            display: 'flex',
          }}
        >
          <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Text>
              <Text style={{ fontSize: 18 }}>Rule: </Text>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                {subEventRuleToStr(rule)}
              </Text>
            </Text>
          </View>
          <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Text>
              <Text style={{ fontSize: 18 }}>Goal: </Text>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                {formatDataByRule(goal, rule)}
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <Divider style={{ marginTop: 20 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>
        Your group progress ({yourGroup.name})
      </Text>
      {yourGroupProgress && (
        <View style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
          <AnimatedCircularProgress
            rotation={0}
            size={200}
            width={5}
            fill={
              (parseFloat(formatDataByRule(yourGroupProgress.progress, rule)) *
                100) /
              parseFloat(formatDataByRule(goal, rule))
            }
            tintColor="green"
            backgroundColor="#e0e0e0"
            // text inside the circle
            children={(fill) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'green',
                  }}
                >
                  {formatDataByRule(yourGroupProgress.progress, rule)} /{' '}
                  {formatDataByRule(goal, rule)}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '100',
                    color: theme.colors.secondary,
                    marginTop: 15,
                  }}
                >
                  {Math.floor((yourGroupProgress.progress / goal) * 100)}%
                  progress of
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '700',
                    color: theme.colors.secondary,
                  }}
                >
                  {subEventRuleToStr(rule)}
                </Text>
              </View>
            )}
          />
        </View>
      )}
      <Divider style={{ marginVertical: 20 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        All group progresses
      </Text>
      <View>
        {groupProgressList.map((progress, idx) => {
          return (
            <GroupProgressListItem
              rule={rule}
              goal={goal}
              groupProgress={progress}
              navigateCallback={() => {}}
              hideTopDivider={idx === 0}
              key={idx}
            />
          )
        })}
      </View>
    </View>
  )
}

export default SubEventDisplay
