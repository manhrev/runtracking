import { ActivityType } from '../../../lib/activity/activity_pb'

export function getActivitySubjectWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: 'Cyclist',
    [ActivityType.ACTIVITY_TYPE_RUNNING]: 'Runner',
    [ActivityType.ACTIVITY_TYPE_WALKING]: 'Walker',
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: 'Unknown',
  }[activityType]
}
