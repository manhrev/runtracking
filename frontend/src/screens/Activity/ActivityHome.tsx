import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, IconButton, SegmentedButtons, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { useCallback, useEffect, useState } from "react";
import UpperRightMenu from "../../comp/UpperRightMenu";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { baseStyles } from "../baseStyle";
import { BarChart } from "react-native-chart-kit";
import ActivityListItem from "./comp/ActivityListItem";
import { RootHomeTabsParamList } from "../../navigators/HomeTab";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { listActivityInfoThunk } from "../../redux/features/activityList/thunk";
import { ActivitySortBy, ActivityType } from "../../lib/activity/activity_pb";
import {
  isActivityListLoading,
  selectActivityList,
} from "../../redux/features/activityList/slice";
import { useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;

export default function Activity({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, "ActivityHome">) {
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const isFocused = useIsFocused();
  const [filterByValue, setFilterByValue] = useState("week");
  const { activityList } = useAppSelector(selectActivityList);
  const isLoading = useSelector(isActivityListLoading);
  const fetchListActivity = async () => {
    const { payload } = await dispatch(
      listActivityInfoThunk({
        activityType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
        ascending: false,
        limit: 10,
        offset: 0,
        sortBy: ActivitySortBy.ACTIVITY_SORT_BY_END_TIME,
      })
    );
  };

  useFocusEffect(
    useCallback(() => {
      fetchListActivity();
    }, [])
  );
  return (
    <>
      <View style={baseStyles(theme).homeContainer}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                  Activity type: Running
                </Text>
                <IconButton
                  icon="cog"
                  iconColor={theme.colors.primary}
                  size={18}
                  onPress={() => console.log("Pressed")}
                />
              </View>
              <View style={styles(theme).generalInfoContainter}>
                <View style={{ justifyContent: "center" }}>
                  <Text variant="displayMedium">32 km</Text>
                  <Text
                    variant="bodyMedium"
                    style={{ marginTop: -5, alignSelf: "center" }}
                  >
                    Total distance
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text variant="bodyLarge">4</Text>
                  <Text variant="bodyLarge">12'33''</Text>
                  <Text variant="bodyLarge">2:33</Text>
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
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 43],
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
                  decimalPlaces: 2,
                  color: () => theme.colors.primary,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  borderRadius: 16,
                  alignSelf: "center",
                }}
              />
            </View>

            <View style={styles(theme).recentActivityContainer}>
              <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
                Recent activities
              </Text>
              {activityList.slice(0, 3).map((activity) => {
                return (
                  <ActivityListItem
                    key={activity.id}
                    onPress={() =>
                      navigation.navigate("ActivityDetail", {
                        activityId: activity.id,
                      })
                    }
                    activityInfo={activity}
                  />
                );
              })}
              <Button
                mode="contained"
                onPress={() => navigation.navigate("ActivityList", {})}
                style={{ marginTop: 10 }}
                loading={isLoading}
              >
                View all activities
              </Button>
            </View>
          </ScrollView>
        </View>
      </View>
      {isFocused && (
        <UpperRightMenu
          menuList={[
            {
              menuItem: "act 1",
              callback: () => {
                console.log("menu 1 clicked");
              },
              icon: "egg",
            },
            {
              menuItem: "act 2",
              callback: () => {},
            },
            {
              menuItem: "act 3",
              callback: () => {},
            },
          ]}
        />
      )}
    </>
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
      borderRadius: 40,
      paddingVertical: 10,
    },
    recentActivityContainer: {
      paddingVertical: 20,
    },
  });
