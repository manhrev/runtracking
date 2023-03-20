import { ActivityType } from '../../lib/activity/activity_pb'
import { metCycling, metRunning, metWalking } from './met'

// distance in meters, duration in seconds, weight in kg
export function kCaloriesBurned(
  activityType: ActivityType,
  distance: number,
  duration: number,
  weight: number
) {
  switch (activityType) {
    case ActivityType.ACTIVITY_TYPE_RUNNING:
      return (metRunning(distance / duration) * weight * duration) / 3600 / 1000
    case ActivityType.ACTIVITY_TYPE_WALKING:
      return (metWalking(distance / duration) * weight * duration) / 3600 / 1000
    case ActivityType.ACTIVITY_TYPE_CYCLING:
      return (metCycling(distance / duration) * weight * duration) / 3600 / 1000
  }
  return 0
}
