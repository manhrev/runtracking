import { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import {
  ActivityIndicator,
  Button,
  Divider,
  IconButton,
  Menu,
  Provider,
  SegmentedButtons,
  Text,
} from "react-native-paper";

import {
  ActivityStatisticData,
  ActivityType,
  GetActivityStatisticRequest,
} from "../../../lib/activity/activity_pb";
import {
  selectActivityStatisticList,
  isActivityStatisticListLoading,
} from "../../../redux/features/activityStatistic/slice";
import { getActivityStatisticThunk } from "../../../redux/features/activityStatistic/thunk";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { AppTheme, useAppTheme } from "../../../theme";
import {
  getNameWithActivityType,
  minutesPerKilometer,
  secondsToHours,
} from "../../../utils/helpers";

const windowWidth = Dimensions.get("window").width;
const weekLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface GeneralInfo {
  numberOfActivity: number;
  totalDistance: number;
  totalDuration: number;
}

export default function StatisticSection() {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isActivityStatisticListLoading);
  const { activityStatisticList } = useAppSelector(selectActivityStatisticList);
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  const [filterByValue, setFilterByValue] = useState("week");
  const [activityType, setActivityType] = useState(
    ActivityType.ACTIVITY_TYPE_RUNNING
  );
  const [visible, setVisible] = useState(false);
  const openActivityTypeMenu = () => setVisible(true);
  const closeActivityTypeMenu = () => setVisible(false);

  // Total dist, total activities, hours, avg pace
  const generalInfo = getGeneralInfo(activityStatisticList);

  const fetchActivityStatistic = async () => {
    const req: GetActivityStatisticRequest.AsObject = {
      groupBy: getGroupByType(filterByValue),
      type: activityType,
      tz: 7,
    };
    const { payload } = await dispatch(getActivityStatisticThunk(req));
  };
  useEffect(() => {
    fetchActivityStatistic();
  }, [filterByValue, activityType]);
  return (
    <View style={styles(theme).analyticContainer}>
      <Text
        variant="headlineSmall"
        style={{ fontWeight: "bold", textAlignVertical: "center" }}
      >
        General statistics
      </Text>
      <SegmentedButtons
        style={{ marginTop: 10, alignSelf: "center" }}
        value={filterByValue}
        onValueChange={setFilterByValue}
        density="medium"
        buttons={[
          {
            value: "week",
            label: "Week",
          },
          {
            value: "month",
            label: "Month",
          },
          {
            value: "year",
            label: "Year",
          },
          { value: "all", label: "All" },
        ]}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          variant="bodyLarge"
          style={{
            fontWeight: "bold",
            textAlignVertical: "center",
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
              setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING);
              closeActivityTypeMenu();
            }}
            title={getNameWithActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)}
          />
          <Menu.Item
            onPress={() => {
              setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING);
              closeActivityTypeMenu();
            }}
            title={getNameWithActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)}
          />
          <Menu.Item
            onPress={() => {
              setActivityType(ActivityType.ACTIVITY_TYPE_WALKING);
              closeActivityTypeMenu();
            }}
            title={getNameWithActivityType(ActivityType.ACTIVITY_TYPE_WALKING)}
          />
        </Menu>
      </View>
      {!loading && (
        <>
          <View style={styles(theme).generalInfoContainter}>
            <View style={{ justifyContent: "center" }}>
              <Text variant="displayMedium">
                {(generalInfo.totalDistance / 1000.0).toFixed(1)} km
              </Text>
              <Text
                variant="bodyMedium"
                style={{ marginTop: -5, alignSelf: "center" }}
              >
                Total distance
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
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
              <Text variant="bodyLarge">Runs</Text>
              <Text variant="bodyLarge">Avg. pace</Text>
              <Text variant="bodyLarge">Hours</Text>
            </View>
          </View>

          <BarChart
            yAxisSuffix=""
            data={{
              labels: weekLabels,
              datasets: [
                {
                  data: [4, 10, 1, 4, 8, 0],
                },
              ],
            }}
            width={windowWidth - 20}
            height={200}
            yAxisLabel={""}
            chartConfig={{
              backgroundColor: theme.colors.elevation.level4,
              backgroundGradientFrom: theme.colors.secondaryContainer,
              backgroundGradientTo: theme.colors.tertiaryContainer,
              decimalPlaces: 0,
              color: () => theme.colors.primary,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              borderRadius: 16,
              alignSelf: "center",
            }}
            withInnerLines={false}
            showValuesOnTopOfBars
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
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    analyticContainer: {
      paddingTop: 20,
    },
    generalInfoContainter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: theme.colors.elevation.level1,
      marginBottom: 14,
      borderRadius: 15,
      paddingVertical: 10,
    },
  });

function getGroupByType(
  filterByValue: "week" | "month" | "year" | "all" | string
) {
  switch (filterByValue) {
    case "week":
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY;
    case "month":
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY;
    case "year":
      return GetActivityStatisticRequest.GroupBy.GORUP_BY_MONTH;
    case "all":
      return GetActivityStatisticRequest.GroupBy.GORUP_BY_YEAR;
    default:
      return GetActivityStatisticRequest.GroupBy.GROUP_BY_DAY;
  }
}

function getGeneralInfo(list: ActivityStatisticData.AsObject[]): GeneralInfo {
  const info: GeneralInfo = {
    numberOfActivity: 0,
    totalDistance: 0,
    totalDuration: 0,
  };
  list.forEach((data) => {
    info.numberOfActivity += data.numberOfActivities;
    info.totalDistance += data.totalDistance;
    info.totalDuration += data.totalDuration;
  });
  return info;
}
