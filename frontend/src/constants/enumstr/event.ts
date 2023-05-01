import {
  ActivityType,
  GroupStatus,
  ListEventsRequest,
  Rule,
} from '../../lib/event/event_pb'

export const EventSortByStr = {
  [ListEventsRequest.SortBy.SORT_BY_UNSPECIFIED]: 'Popular',
  [ListEventsRequest.SortBy.SORT_BY_NUM_OF_GROUPS]: 'Popular',
  [ListEventsRequest.SortBy.SORT_BY_NAME]: 'Name',
  [ListEventsRequest.SortBy.SORT_BY_START_AT]: 'Start time',
}

export const EventActivityTypeIcon = {
  [ActivityType.ACTIVITY_TYPE_UNSPECIFIED]: 'question',
  [ActivityType.ACTIVITY_TYPE_CYCLING]: 'bike',
  [ActivityType.ACTIVITY_TYPE_RUNNING]: 'run',
  [ActivityType.ACTIVITY_TYPE_WALKING]: 'walk',
}

export const SubEventRuleStr = {
  [Rule.RULE_TOTAL_ACTIVITY]: 'Number of activities',
  [Rule.RULE_TOTAL_CALORIES]: 'Total calories burned (kcal)',
  [Rule.RULE_TOTAL_DISTANCE]: 'Total distance (km)',
  [Rule.RULE_TOTAL_TIME]: 'Total time (hours)',
  [Rule.RULE_UNSPECIFIED]: 'Unknown',
}

export const GroupStatusInEventButtonStr = {
  [GroupStatus.GROUP_STATUS_UNSPECIFIED]: 'Join',
  [GroupStatus.GROUP_STATUS_ACTIVE]: 'Joined',
  [GroupStatus.GROUP_STATUS_BANNED]: 'Banned',
  [GroupStatus.GROUP_STATUS_LEFT]: 'Join',
  [GroupStatus.GROUP_STATUS_REQUESTED]: 'Requested',
  [GroupStatus.GROUP_STATUS_REJECTED]: 'Rejected',
}
