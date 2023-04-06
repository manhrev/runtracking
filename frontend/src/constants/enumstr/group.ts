import { GroupSortBy, ListChallengeRequest, Rule } from '../../lib/group/group_pb'

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
  [Rule.RULE_TOTAL_DISTANCE]: 'Total KM',
  [Rule.RULE_TOTAL_TIME]: 'Total Time',
  [Rule.RULE_TOTAL_CALORIES]: 'Total Calories',
  [Rule.RULE_UNSPECIFIED]: '',
}
