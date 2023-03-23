import { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import {
  ActivityIndicator,
  Button,
  Divider,
  IconButton,
  Menu,
  Provider,
  SegmentedButtons,
  Text,
} from 'react-native-paper'

import {
  ActivityStatisticData,
  ActivityType,
  GetActivityStatisticRequest,
} from '../../../lib/activity/activity_pb'
import {
  selectActivityStatisticList,
  isActivityStatisticListLoading,
} from '../../../redux/features/activityStatistic/slice'
import { getActivityStatisticThunk } from '../../../redux/features/activityStatistic/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import {
  getNameWithActivityType,
  minutesPerKilometer,
  secondsToHours,
} from '../../../utils/helpers'
import moment from 'moment'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { useFocusEffect } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width
const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

interface GeneralInfo {
  numberOfActivity: number
  totalDistance: number
  totalDuration: number
}

export default function StatisticSection() {
  const [momentList, setMomentList] = useState<moment.Moment[]>(
    getDaysArrayThisWeek()
  )

  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const loading = useAppSelector(isActivityStatisticListLoading)
  const { activityStatisticList } = useAppSelector(selectActivityStatisticList)

  const [filterByValue, setFilterByValue] = useState('week')
  const [activityType, setActivityType] = useState(
    ActivityType.ACTIVITY_TYPE_RUNNING
  )
  const [visible, setVisible] = useState(false)
  const openActivityTypeMenu = () => setVisible(true)
  const closeActivityTypeMenu = () => setVisible(false)

  // Total dist, total activities, hours, avg pace
  const generalInfo = getGeneralInfo(activityStatisticList)

  const fetchActivityStatistic = async (
    from: Timestamp.AsObject | undefined,
    to: Timestamp.AsObject | undefined
  ) => {
    const req: GetActivityStatisticRequest.AsObject = {
      from: from,
      to: to,
      groupBy: getGroupByType(filterByValue),
      type: activityType,
      tz: 7,
    }
    const { response } = await dispatch(getActivityStatisticThunk(req)).unwrap()
  }
  useFocusEffect(
    useCallback(() => {
      let from: Timestamp.AsObject | undefined = undefined
      let to: Timestamp.AsObject | undefined = undefined
      switch (filterByValue) {
        case 'week':
          from = {
            seconds: moment().isoWeekday(1).startOf('day').unix(),
            nanos: 0,
          }
          to = {
            seconds: moment().isoWeekday(7).endOf('day').unix(),
            nanos: 0,
          }
          setMomentList(getDaysArrayThisWeek)
          break
        case 'month':
          from = {
            seconds: moment().startOf('month').startOf('day').unix(),
            nanos: 0,
          }
          to = {
            seconds: moment().endOf('month').endOf('day').unix(),
            nanos: 0,
          }
          setMomentList(getDaysArrayThisMonth)
          break
        case 'year':
          from = {
            seconds: moment().startOf('year').startOf('day').unix(),
            nanos: 0,
          }
          to = {
            seconds: moment().endOf('year').endOf('day').unix(),
            nanos: 0,
          }
          setMomentList(getFirstDayMonthArrayThisYear)
          break
      }
      fetchActivityStatistic(from, to)
    }, [filterByValue, activityType])
  )
  return (
    <View style={styles(theme).analyticContainer}>
      <>
        <Text
          variant="headlineSmall"
          style={{ fontWeight: 'bold', textAlignVertical: 'center' }}
        >
          General statistics
        </Text>
        <SegmentedButtons
          style={{ marginTop: 10, alignSelf: 'center' }}
          value={filterByValue}
          onValueChange={setFilterByValue}
          density="medium"
          buttons={[
            {
              value: 'week',
              label: 'Week',
            },
            {
              value: 'month',
              label: 'Month',
            },
            {
              value: 'year',
              label: 'Year',
            },
            //      { value: 'all', label: 'All' },
          ]}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text
            variant="bodyLarge"
            style={{
              fontWeight: 'bold',
              textAlignVertical: 'center',
              color: theme.colors.secondary,
            }}
          >
            Activity type: {getNameWithActivityType(activityType)}
          </Text>
          <Menu
            visible={visible}
            onDismiss={closeActivityTypeMenu}
            anchor={
              <IconButton
                icon="cog"
                iconColor={theme.colors.primary}
                size={18}
                onPress={openActivityTypeMenu}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_RUNNING
              )}
            />
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_CYCLING
              )}
            />
            <Menu.Item
              onPress={() => {
                setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
                closeActivityTypeMenu()
              }}
              title={getNameWithActivityType(
                ActivityType.ACTIVITY_TYPE_WALKING
              )}
            />
          </Menu>
        </View>
        {!loading && (
          <>
            <View style={styles(theme).generalInfoContainter}>
              <View style={{ justifyContent: 'center' }}>
                <Text variant="displayMedium">
                  {(generalInfo.totalDistance / 1000.0).toFixed(1)} km
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{ marginTop: -5, alignSelf: 'center' }}
                >
                  Total distance
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text variant="bodyLarge">{generalInfo.numberOfActivity}</Text>
                <Text variant="bodyLarge">
                  {minutesPerKilometer(
                    generalInfo.totalDuration,
                    generalInfo.totalDistance
                  )}
                </Text>
                <Text variant="bodyLarge">
                  {secondsToHours(generalInfo.totalDuration)}
                </Text>
              </View>
              <View>
                <Text variant="bodyLarge">Activities</Text>
                <Text variant="bodyLarge">Avg. pace</Text>
                <Text variant="bodyLarge">Hours</Text>
              </View>
            </View>

            <BarChart
              yAxisSuffix=""
              data={{
                labels:
                  filterByValue === 'year'
                    ? [
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10',
                        '11',
                        '12',
                      ]
                    : convertMomentListToDayInMonthList(momentList),

                datasets: [
                  {
                    data: mapData(activityStatisticList, momentList),
                  },
                ],
              }}
              width={windowWidth - 20}
              height={200}
              yAxisLabel={''}
              chartConfig={{
                barPercentage: 0.25,
                propsForLabels: { inlineSize: 1 },
                backgroundColor: theme.colors.elevation.level4,
                backgroundGradientFrom: theme.colors.secondaryContainer,
                backgroundGradientTo: theme.colors.tertiaryContainer,
                decimalPlaces: 0,

                color: () => theme.colors.primary,
              }}
              hidePointsAtIndex={hideIndex(filterByValue)}
              style={{
                borderRadius: 16,
                alignSelf: 'center',
              }}
              withInnerLines={true}
              //           showValuesOnTopOfBars
            />
          </>
        )}
        {loading && (
          <ActivityIndicator
            animating={true}
            style={{
              paddingVertical: 141,
              backgroundColor: theme.colors.elevation.level1,
            }}
          />
        )}
      </>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    analyticContainer: {
      paddingTop: 20,
    },
    generalInfoContainter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.elevation.level1,
      marginBottom: 14,
      borderRadius: 15,
      paddingVertical: 10,
    },
  })

function getGroupByType(
  filterByValue: 'week' | 'month' | 'year' | 'all' | string
) {
  switch (filterByValue) {
    case 'week':
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY
    case 'month':
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY
    case 'year':
      return GetActivityStatisticRequest.GroupBy.GORUP_BY_MONTH
    case 'all':
      return GetActivityStatisticRequest.GroupBy.GORUP_BY_YEAR
    default:
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY
  }
}

function hideIndex(filterByType: string): number[] {
  switch (filterByType) {
    case 'month':
      return Array.from({ length: 31 }, (v, k) => (k % 5 !== 0 ? k : 999))
  }
  return []
}

function getGeneralInfo(list: ActivityStatisticData.AsObject[]): GeneralInfo {
  const info: GeneralInfo = {
    numberOfActivity: 0,
    totalDistance: 0,
    totalDuration: 0,
  }
  list.forEach((data) => {
    info.numberOfActivity += data.numberOfActivities
    info.totalDistance += data.totalDistance
    info.totalDuration += data.totalDuration
  })
  return info
}

function getFirstDayMonthArrayThisYear() {
  // create a moment object for the first day of the current year
  const firstDayOfYear = moment().startOf('year')

  // create an empty array to store the moments for the first day of each month
  const firstDaysOfMonth = []

  // loop through the past 12 months, starting with the current month
  for (let i = 0; i < 12; i++) {
    // create a moment object for the first day of the current month
    const firstDayOfMonth = moment(firstDayOfYear)
      .add(i, 'months')
      .startOf('month')
    // add the moment object to the array
    firstDaysOfMonth.push(firstDayOfMonth)
  }

  return firstDaysOfMonth
}

function getDaysArrayThisMonth() {
  var daysInMonth = moment().daysInMonth()
  var arrDays = []

  while (daysInMonth) {
    var current = moment().date(daysInMonth)
    arrDays.push(current)
    daysInMonth--
  }

  return arrDays.reverse()
}

function getDaysArrayThisWeek() {
  var thisDayInWeek = moment().isoWeekday()
  var thisDayInMonth = Number(moment().format('D'))
  var arrDays = []
  var endDayThisWeek = thisDayInMonth - thisDayInWeek + 7
  for (let i = 0; i < 7; i++) {
    var current = moment().date(endDayThisWeek)
    arrDays.push(current)
    endDayThisWeek--
  }

  return arrDays.reverse()
}

function convertMomentListToDayInMonthList(t: moment.Moment[]): string[] {
  let list: string[] = []
  t.forEach((d) => {
    list.push(d.format('D'))
  })
  return list
}

function mapData(
  indata: ActivityStatisticData.AsObject[],
  momentList: moment.Moment[]
): number[] {
  let data = [...indata].sort(
    (a, b) => (a.datetime?.seconds || 0) - (b.datetime?.seconds || 0)
  )
  let retData: number[] = []
  let i = 0
  momentList.forEach((mom) => {
    if (data.length == i) {
      retData.push(0)
      return
    }
    let endTime = moment.unix(data[i].datetime?.seconds || 0)

    if (mom.isSame(endTime, 'day')) {
      retData.push(data[i].numberOfActivities)
      i++
    } else {
      retData.push(0)
    }
  })
  return retData
}
