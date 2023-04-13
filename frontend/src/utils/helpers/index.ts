import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import moment from 'moment'
import { ActivityType } from '../../lib/activity/activity_pb'
import { Rule, PlanProgress } from '../../lib/plan/plan_pb'

export function dateTimeToTimestamp(date: Date) : Timestamp.AsObject {
  return new Timestamp().setSeconds(date.getTime() / 1000).toObject()
}

export function getIconWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: 'bike',
    [ActivityType.ACTIVITY_TYPE_RUNNING]: 'run-fast',
    [ActivityType.ACTIVITY_TYPE_WALKING]: 'walk',
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: '',
  }[activityType]
}

export function getNameWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: 'Cycling',
    [ActivityType.ACTIVITY_TYPE_RUNNING]: 'Running',
    [ActivityType.ACTIVITY_TYPE_WALKING]: 'Walking',
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: 'Unknown',
  }[activityType]
}

export function formatDate(time: Timestamp.AsObject | undefined): string {
  if (time !== undefined) {
    return moment.unix(time.seconds).format('DD/MM/YYYY HH:mm')
  }
  return 'NA'
}

export function mToKm(meters: number): string {
  return (meters / 1000).toFixed(2)
}

export function formatDateWithoutTime(
  time: Timestamp.AsObject | undefined
): string {
  if (time !== undefined) {
    return moment.unix(time.seconds).format('DD/MM/YYYY')
  }
  return 'NA'
}

export function formatDateNotification(
  time: Timestamp.AsObject | undefined
): string {
  if (time !== undefined) {
    let date = timestampToDate(time)
    let curDate = new Date()
    let minutes = (curDate.getTime() - date.getTime()) / 1000 / 60
    if (minutes < 60) {
      if (minutes < 1) return 'Just now'
      return Math.abs(Math.round(minutes)).toString() + ' minutes ago'
    } else return formatDate(time)
  }
  return 'NA'
}

export function timestampToDate(time: Timestamp.AsObject | undefined): Date {
  if (time !== undefined) {
    var date = new Date(time.seconds * 1000)
    return date
  }
  return new Date()
}

export function secondsToMinutes(seconds: number): string {
  var min = Math.floor(seconds / 60)
  var sec = seconds - min * 60
  if (isNaN(min) || isNaN(sec)) return '--'
  return min + "'" + sec + '"'
}

export function secondsToHours(seconds: number): string {
  var hours = Math.floor(seconds / (60 * 60))
  var min = Math.floor((seconds - hours * 60 * 60) / 60)
  return (hours < 10 ? '0' : '') + hours + ':' + (min < 10 ? '0' : '') + min
}

export function minutesPerKilometer(seconds: number, meters: number): string {
  const min = seconds / 60
  const km = meters / 1000
  return secondsToMinutes(Math.floor(min / km))
}

// plan helper
export function displayValue(rule: Rule, value: number) {
  if (
    rule === Rule.RULE_TOTAL_DISTANCE ||
    rule === Rule.RULE_TOTAL_DISTANCE_DAILY
  ) {
    return value / 1000 == Math.floor(value / 1000)
      ? value / 1000
      : (value / 1000).toFixed(2)
  } else if (
    rule === Rule.RULE_TOTAL_TIME ||
    rule === Rule.RULE_TOTAL_TIME_DAILY
  ) {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60
    if (seconds < 10) return `${minutes}:0${seconds}`
    else return `${minutes}:${seconds}`
  }
  return value
}

export function getProgressOfDailyActivity(
  progressList: Array<PlanProgress.AsObject>
) {
  if (progressList.length > 0) {
    const today = new Date().getDate()
    var value = -1
    progressList.map((element: any) => {
      // if the date is today -> get this element value
      const date = new Date(element.timestamp.seconds * 1000)
      if (date.getDate() === today) {
        value = Number(element.value)
      }
    })
    if (value === -1) return 0
    else return value
  }
  return 0
}

export function isDailyActivity(planRule: Rule) {
  return (
    planRule === Rule.RULE_TOTAL_DISTANCE_DAILY ||
    planRule === Rule.RULE_TOTAL_TIME_DAILY ||
    planRule === Rule.RULE_TOTAL_ACTIVITY_DAILY ||
    planRule === Rule.RULE_TOTAL_CALORIES_DAILY
  )
}

export function toDate(seconds: number, withoutYear: boolean = false) {
  // dd/mm/yyyy
  const date = new Date(seconds * 1000)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  if (withoutYear)
    return `${day < 10 ? '0' + day : day}/${
      // mm/dd
      month < 10 ? '0' + month : month
    }`

  return `${day < 10 ? '0' + day : day}/${
    // mm/dd/yyyy
    month < 10 ? '0' + month : month
  }/${year}`
}

export function getTextFromRule(rule: number) {
  switch (rule) {
    case Rule.RULE_TOTAL_DISTANCE:
      return 'Total Km'
    case Rule.RULE_TOTAL_DISTANCE_DAILY:
      return 'Km per day'
    case Rule.RULE_TOTAL_TIME:
      return 'Total time'
    case Rule.RULE_TOTAL_TIME_DAILY:
      return 'Time per day'
    case Rule.RULE_TOTAL_ACTIVITY:
      return 'Total activities'
    case Rule.RULE_TOTAL_ACTIVITY_DAILY:
      return 'Activities per day'
    case Rule.RULE_TOTAL_CALORIES:
      return 'Total calories'
    case Rule.RULE_TOTAL_CALORIES_DAILY:
      return 'Calories per day'
    default:
      return 'Unknown'
  }
}
