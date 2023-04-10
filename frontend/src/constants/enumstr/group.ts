import { GroupSortBy, ListChallengeRequest, Rule } from '../../lib/group/group_pb'
import { ActivityType } from '../../lib/activity/activity_pb'

export const GroupSortByStr = {
  [GroupSortBy.GROUP_SORT_BY_CREATED_TIME]: 'Created time',
  [GroupSortBy.GROUP_SORT_BY_NAME]: 'Name',
  [GroupSortBy.GROUP_SORT_BY_UNSPECIFIED]: '',
}

export const ChallengeSortByStr = {
  [ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_START_TIME]: 'Start time',
  [ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_END_TIME]: 'End time',
  [ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_NAME]: 'Name',
  [ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_UNSPECIFIED]: '',
}

export const ChallengeRuleStr = {
  [Rule.RULE_TOTAL_DISTANCE]: 'Total Distance (km)',
  [Rule.RULE_TOTAL_TIME]: 'Total Time (minutes)',
  [Rule.RULE_TOTAL_CALORIES]: 'Total Calories',
  [Rule.RULE_UNSPECIFIED]: '',
}

export const ChallengeRuleStrShorted = {
  [Rule.RULE_TOTAL_DISTANCE]: 'Distance',
  [Rule.RULE_TOTAL_TIME]: 'Time',
  [Rule.RULE_TOTAL_CALORIES]: 'Calories',
  [Rule.RULE_UNSPECIFIED]: '',
}

export const ChallengeRuleIcon = {
  [Rule.RULE_TOTAL_DISTANCE]: 'map-marker-distance',
  [Rule.RULE_TOTAL_TIME]: 'timer',
  [Rule.RULE_TOTAL_CALORIES]: 'lightning-bolt-circle',
  [Rule.RULE_UNSPECIFIED]: '',
}

export const ActivityTypeIcon = {
  [ActivityType.ACTIVITY_TYPE_RUNNING]: 'run-fast',
  [ActivityType.ACTIVITY_TYPE_WALKING]: 'walk',
  [ActivityType.ACTIVITY_TYPE_CYCLING]: 'bike',
  [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: '',
}

export const ActivityTypeStr = {
  [ActivityType.ACTIVITY_TYPE_RUNNING]: 'Running',
  [ActivityType.ACTIVITY_TYPE_WALKING]: 'Walking',
  [ActivityType.ACTIVITY_TYPE_CYCLING]: 'Cycling',
  [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: '',
}

