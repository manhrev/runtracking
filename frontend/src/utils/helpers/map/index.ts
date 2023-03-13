import { LatLng } from "react-native-maps";
import { TrackPoint } from "../../../lib/activity/activity_pb";

export const arrayToMultiPolyline = (coordinates: TrackPoint.AsObject[]) => {
  const multiPolyline: LatLng[][] = [];
  let polyline: LatLng[] = [];
  console.log(coordinates);
  let startPoint = true;

  coordinates.forEach((coordinate) => {
    if (startPoint) {
      polyline.push({
        latitude: coordinate.latitude,
        longitude: coordinate.longtitude,
      });
      startPoint = false;
      return;
    }
    polyline.push({
      latitude: coordinate.latitude,
      longitude: coordinate.longtitude,
    });
    if (coordinate.isStopPoint) {
      multiPolyline.push(polyline);
      polyline = [];
    }
  });
  if (polyline.length > 0) multiPolyline.push(polyline);
  return multiPolyline;
};

export const calculateCenterAndDelta = (coordinates: TrackPoint.AsObject[]) => {
  const latitudes = coordinates.map((coordinate) => coordinate.latitude);
  const longitudes = coordinates.map((coordinate) => coordinate.longtitude);
  const minLatitude = Math.min(...latitudes);
  const maxLatitude = Math.max(...latitudes);
  const minLongitude = Math.min(...longitudes);
  const maxLongitude = Math.max(...longitudes);
  const latitudeDelta = maxLatitude - minLatitude;
  const longitudeDelta = maxLongitude - minLongitude;
  const delta = (Math.max(latitudeDelta, longitudeDelta) / 0.001) * 0.0015;
  const centerLatitude = minLatitude + latitudeDelta / 2;
  const centerLongitude = minLongitude + longitudeDelta / 2;
  return {
    center: {
      latitude: centerLatitude,
      longitude: centerLongitude,
    },
    delta: Math.max(0.008, delta),
  };
};
