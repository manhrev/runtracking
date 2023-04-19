import { PlanSortBy, Rule } from '../../lib/plan/plan_pb'

export const PlanSortByStr = {
    [PlanSortBy.PLAN_SORT_BY_CREATED_TIME]: 'Created time',
    [PlanSortBy.PLAN_SORT_BY_PROGESS]: 'Progress',
    [PlanSortBy.PLAN_SORT_BY_START_TIME]: 'Start time',
    [PlanSortBy.PLAN_SORT_BY_END_TIME]: 'End time',
    [PlanSortBy.PLAN_SORT_BY_UNSPECIFIED]: '',
}

export const PlanRuleProgressStr = {
    [Rule.RULE_TOTAL_DISTANCE]: 'TOTAL DISTANCE',
    [Rule.RULE_TOTAL_DISTANCE_DAILY]: 'DISTANCE DAILY',
    [Rule.RULE_TOTAL_TIME]: 'TOTAL TIME',
    [Rule.RULE_TOTAL_TIME_DAILY]: 'TIME DAILY',
    [Rule.RULE_TOTAL_ACTIVITY]: 'TOTAL ACTIVITIES',
    [Rule.RULE_TOTAL_ACTIVITY_DAILY]: 'ACTIVITIES DAILY',
    [Rule.RULE_TOTAL_CALORIES]: 'TOTAL CALORIES',
    [Rule.RULE_TOTAL_CALORIES_DAILY]: 'CALORIES DAILY',
    [Rule.RULE_UNSPECIFIED]: '',
}