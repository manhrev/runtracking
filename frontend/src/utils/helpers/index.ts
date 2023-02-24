import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { ActivityType } from "../../lib/activity/activity_pb";

export function getIconWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: "bike",
    [ActivityType.ACTIVITY_TYPE_RUNNING]: "run",
    [ActivityType.ACTIVITY_TYPE_WALKING]: "walk",
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: "",
  }[activityType];
}

export function getNameWithActivityType(activityType: ActivityType) {
  return {
    [ActivityType.ACTIVITY_TYPE_CYCLING]: "Cycling",
    [ActivityType.ACTIVITY_TYPE_RUNNING]: "Running",
    [ActivityType.ACTIVITY_TYPE_WALKING]: "Walking",
    [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: "Unknown",
  }[activityType];
}

export function formatDate(time: Timestamp.AsObject | undefined): string {
  if (time !== undefined) {
    var date = new Date(time.seconds * 1000);
    return date.toLocaleString();
  }
  return "NA";
}

export function formatDateNotification(time: Timestamp.AsObject | undefined): string{
  if(time !== undefined) {
      let date = timestampToDate(time)
      let curDate = new Date()
      let minutes = (curDate.getTime() - date.getTime()) / 1000 / 60
      if(minutes < 60){
        if(minutes < 1) return "Just now"
        return Math.abs(Math.round(minutes)).toString() + " minutes ago"
      }
      else return formatDate(time)
  }
  return "NA"
}

export function timestampToDate(time: Timestamp.AsObject | undefined): Date {
  if (time !== undefined) {
    var date = new Date(time.seconds * 1000);
    return date
  }
  return new Date();
}

export function secondsToMinutes(seconds: number): string {
  var min = Math.floor(seconds / 60);
  var sec = seconds - min * 60;
  return min + "'" + sec + '"';
}

export function secondsToHours(seconds: number): string {
  var hours = Math.floor(seconds / (60 * 60));
  var min = Math.floor((seconds - hours * 60 * 60) / 60);
  return hours + ":" + min;
}

export function minutesPerKilometer(seconds: number, meters: number): string {
  const min = seconds / 60;
  const km = meters / 1000;
  return secondsToMinutes(Math.floor(min / km));
}
