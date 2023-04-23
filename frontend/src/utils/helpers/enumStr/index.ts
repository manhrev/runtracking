import { ActivityType } from '../../../lib/activity/activity_pb'
import { GroupStatus, Rule } from '../../../lib/event/event_pb'

export function getActivitySubjectWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: 'Cyclist',
    [ActivityType.ACTIVITY_TYPE_RUNNING]: 'Runner',
    [ActivityType.ACTIVITY_TYPE_WALKING]: 'Walker',
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: 'Unknown',
  }[activityType]
}

export function subEventRuleToStr(rule: Rule) {
  return {
    [Rule.RULE_TOTAL_ACTIVITY]: 'Number of activities',
    [Rule.RULE_TOTAL_CALORIES]: 'Total calories burned (kcal)',
    [Rule.RULE_TOTAL_DISTANCE]: 'Total distance (km)',
    [Rule.RULE_TOTAL_TIME]: 'Total time (hours)',
    [Rule.RULE_UNSPECIFIED]: 'Unknown',
  }[rule]
}

export function groupEventStatusToStr(status: GroupStatus) {
  return {
    [GroupStatus.GROUP_STATUS_ACTIVE]: 'Active',
    [GroupStatus.GROUP_STATUS_BANNED]: 'Completed',
    [GroupStatus.GROUP_STATUS_REQUESTED]: 'Inactive',
    [GroupStatus.GROUP_STATUS_REJECTED]: 'Unknown',
    [GroupStatus.GROUP_STATUS_LEFT]: 'Unknown',
    [GroupStatus.GROUP_STATUS_UNSPECIFIED]: 'Unknown',
  }[status]
}
