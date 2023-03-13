import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Divider, Text } from "react-native-paper";

import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { useAppSelector } from "../../redux/store";
import { selectActivityList } from "../../redux/features/activityList/slice";
import {
  formatDate,
  getNameWithActivityType,
  minutesPerKilometer,
  secondsToMinutes,
} from "../../utils/helpers";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  arrayToMultiPolyline,
  calculateCenterAndDelta,
} from "../../utils/helpers/map";
import { minimalStyle } from "../../constants/mapstyles";

const windowWidth = Dimensions.get("window").width;

export default function ActivityDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "ActivityDetail">) {
  const theme = useAppTheme();
  const { activityId } = route.params;
  const { activityList } = useAppSelector(selectActivityList);

  const activity = activityList.find((activity) => {
    return activity.id == activityId;
  });

  console.log(activity);

  if (!activity) {
    return <></>;
  }
  const {
    activityName,
    activityNote,
    duration,
    id,
    kcal,
    routeList,
    totalDistance,
    type,
    endTime,
    startTime,
  } = activity;

  const polylineList = arrayToMultiPolyline(routeList);
  const { center, delta } = calculateCenterAndDelta(routeList);
  console.log(polylineList);
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginVertical: 10 }}>
            <Text variant="bodyMedium">
              {formatDate(endTime)}
              {"\n"}
              {getNameWithActivityType(type)} activity
            </Text>
            <Text variant="titleLarge" style={{ fontWeight: "700" }}>
              {activityName}
            </Text>
          </View>

          <Divider />
          <View
            style={{
              marginVertical: 20,
              width: windowWidth - 60,
              alignSelf: "center",
            }}
          >
            <View>
              <Text
                variant="displayLarge"
                style={{
                  fontStyle: "italic",
                  fontWeight: "700",
                  marginBottom: -6,
                }}
              >
                {(totalDistance / 1000.0).toFixed(2)}
              </Text>
              <Text variant="bodyLarge" style={styles(theme).unit}>
                Kilometers
              </Text>
            </View>
            <View style={styles(theme).valueContainerOuter}>
              <View style={styles(theme).valueContainer}>
                <View style={styles(theme).valueBox}>
                  <Text variant="titleLarge" style={styles(theme).value}>
                    {minutesPerKilometer(duration, totalDistance)}
                  </Text>
                  <Text variant="bodyLarge" style={styles(theme).unit}>
                    Pace
                  </Text>
                </View>
                <View style={styles(theme).valueBox}>
                  <Text variant="titleLarge" style={styles(theme).value}>
                    {secondsToMinutes(duration)}
                  </Text>
                  <Text variant="bodyLarge" style={styles(theme).unit}>
                    Time
                  </Text>
                </View>
                <View style={styles(theme).valueBox}>
                  <Text variant="titleLarge" style={styles(theme).value}>
                    {kcal.toFixed(2)}
                  </Text>
                  <Text variant="bodyLarge" style={styles(theme).unit}>
                    KCalories
                  </Text>
                </View>
              </View>
              <View style={styles(theme).valueContainer}>
                <View style={styles(theme).valueBox}>
                  <Text variant="titleLarge" style={styles(theme).value}>
                    __
                  </Text>
                  <Text variant="bodyLarge" style={styles(theme).unit}>
                    Elevation{"\n"}Gain
                  </Text>
                </View>
                <View style={styles(theme).valueBox}>
                  <Text variant="titleLarge" style={styles(theme).value}>
                    __
                  </Text>
                  <Text variant="bodyLarge" style={styles(theme).unit}>
                    Heart{"\n"}rate
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text variant="titleLarge" style={{ fontWeight: "700" }}>
              Notes
            </Text>
          </View>
          <Divider />
          <Text variant="bodyLarge" style={styles(theme).unit}>
            {activityNote}
          </Text>

          <View style={{ marginVertical: 10 }}>
            <Text variant="titleLarge" style={{ fontWeight: "700" }}>
              Route
            </Text>
            {polylineList.length > 0 ? (
              <>
                <Divider style={{ marginVertical: 10 }} />
                <MapView
                  // ref={mapRef}
                  region={{
                    latitude: center.latitude,
                    longitude: center.longitude,
                    latitudeDelta: delta,
                    longitudeDelta: delta,
                  }}
                  style={{
                    width: "100%",
                    height: 500,
                  }}
                  customMapStyle={minimalStyle}
                  mapType="mutedStandard"
                >
                  {polylineList.map((polyline, index) => (
                    <Polyline
                      key={index}
                      coordinates={polyline}
                      strokeColor="#f00"
                      strokeWidth={4}
                    />
                  ))}
                </MapView>
              </>
            ) : (
              <Text>No data</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    unit: {
      fontWeight: "700",
      color: theme.colors.secondary,
    },
    value: {},
    valueContainerOuter: {
      marginTop: 10,
    },
    valueContainer: {
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
    },
    valueBox: {
      width: "33.333%",
    },
  });
