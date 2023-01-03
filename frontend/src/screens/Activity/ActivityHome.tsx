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
import StatisticSection from "./comp/StatisticSection";

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
            <StatisticSection />
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
    recentActivityContainer: {
      paddingVertical: 20,
    },
  });
