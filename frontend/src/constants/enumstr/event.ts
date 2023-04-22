import { ListEventsRequest } from '../../lib/event/event_pb'

export const EventSortByStr = {
  [ListEventsRequest.SortBy.SORT_BY_UNSPECIFIED]: 'Popular',
  [ListEventsRequest.SortBy.SORT_BY_NUM_OF_GROUPS]: 'Popular',
  [ListEventsRequest.SortBy.SORT_BY_NAME]: 'Name',
  [ListEventsRequest.SortBy.SORT_BY_START_AT]: 'Start time',
}
