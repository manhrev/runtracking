import { Button, Divider } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import ActivityListItem from "./comp/ActivityListItem";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  isActivityListLoading,
  selectActivityList,
} from "../../redux/features/activityList/slice";
import { listMoreActivityInfoThunk } from "../../redux/features/activityList/thunk";
import { ActivitySortBy, ActivityType } from "../../lib/activity/activity_pb";
import { useState } from "react";

export default function ActivityList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "ActivityList">) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const { activityList } = useAppSelector(selectActivityList);
  const isLoading = useAppSelector(isActivityListLoading);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [canLoadmore, setCanLoadmore] = useState(true);
  const fetchMore = async () => {
    const res: any = await dispatch(
      listMoreActivityInfoThunk({
        activityType: ActivityType.ACTIVITY_TYPE_UNSPECIFIED,
        ascending: false,
        limit: 10,
        offset: currentOffset + 10,
        sortBy: ActivitySortBy.ACTIVITY_SORT_BY_END_TIME,
      })
    );
    if (!res.payload.error) {
      if (currentOffset + 20 > activityList.length) {
        setCanLoadmore(false);
      }
      setCurrentOffset(currentOffset + 10);
    }
  };
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {activityList.map((activity) => {
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
            style={{ marginTop: 10, marginBottom: 40 }}
            mode="elevated"
            onPress={fetchMore}
            loading={isLoading}
            disabled={!canLoadmore}
          >
            Load more
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) => StyleSheet.create({});
