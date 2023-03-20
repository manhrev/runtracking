import { StyleSheet, View } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  Text,
  Dialog,
  Portal,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'

import { useState, useEffect, useRef } from 'react'
import MapView, { Polyline } from 'react-native-maps'
import * as Location from 'expo-location'
import { getDistance } from 'geolib'
import Monitor from './comp/Monitor'

import { ActivityType, TrackPoint } from '../../lib/activity/activity_pb'
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'
import { minimalStyle, minimalStyleDark } from '../../constants/mapstyles'
import { kCaloriesBurned } from '../../utils/calories'
import { useAppSelector } from '../../redux/store'
import { selectUserSlice } from '../../redux/features/user/slice'
import { selectToggleSlice } from '../../redux/features/toggle/slice'

export default function Run({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'RunHome'>) {
  const theme = useAppTheme()
  const { weight } = useAppSelector(selectUserSlice)
  const { isNightMode } = useAppSelector(selectToggleSlice)
  const [coordinates, setCoordinates] = useState<Array<TrackPoint.AsObject>>([
    {
      latitude: 0,
      longtitude: 0,
      isStopPoint: false,
      altitude: 0,
      createdAt: {
        seconds: 0,
        nanos: 0,
      },
    },
  ])

  const [location, setLocation] = useState<TrackPoint.AsObject>({
    latitude: 0,
    longtitude: 0,
    isStopPoint: false,
    altitude: 0,
    createdAt: {
      seconds: 0,
      nanos: 0,
    },
  })

  // focus mode
  const [focusMode, setFocusMode] = useState(false)

  // some info
  const [totalDistance, setTotalDistance] = useState(0)
  const [totalTime, setTotalTime] = useState(0) // seconds
  const [userState, setUserState] = useState('ready') // ready, running, paused, stopped
  const [pace, setPace] = useState(0) // seconds per km
  const [startTime, setStartTime] =
    useState<google_protobuf_timestamp_pb.Timestamp.AsObject>({
      seconds: 0,
      nanos: 0,
    })

  const kcalBurned = kCaloriesBurned(
    ActivityType.ACTIVITY_TYPE_RUNNING,
    totalDistance,
    totalTime,
    weight
  )
  console.log(kcalBurned)
  // dialog
  const [visible, setVisible] = useState(false)

  const showDialog = () => {
    setVisible(true)
  }

  const hideDialog = () => {
    setVisible(false)
  }

  useEffect(() => {
    if (
      coordinates.length == 1 &&
      coordinates[0].latitude == 0 &&
      coordinates[0].longtitude == 0
    ) {
      // set location as first coordinate
      setCoordinates([
        {
          latitude: location.latitude,
          longtitude: location.longtitude,
          isStopPoint: true,
          altitude: 0,
          createdAt: location.createdAt,
        },
      ])
    } else if (userState == 'running') {
      setCoordinates([...coordinates, location])

      // calculate distance from 2 points
      if (
        coordinates.length > 1 &&
        !coordinates[coordinates.length - 2].isStopPoint
      ) {
        const pointA = {
          latitude: coordinates[coordinates.length - 2].latitude,
          longitude: coordinates[coordinates.length - 2].longtitude,
        }
        const pointB = {
          latitude: coordinates[coordinates.length - 1].latitude,
          longitude: coordinates[coordinates.length - 1].longtitude,
        }

        const distance = getDistance(pointA, pointB)
        setTotalDistance(totalDistance + distance)
      }
    }

    // console.log("=>>>> Distance: ", totalDistance);
    // console.log("State: ", userState);

    if (focusMode) {
      getLocation() // move the map to current location
    }
  }, [location])

  // time calculation every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      if (userState == 'running') {
        // calculate pace
        if (totalDistance == 0) setPace(0)
        else {
          const pace = (totalTime / totalDistance) * 1000
          setPace(Math.floor(pace)) // seconds per km
        }

        setTotalTime(totalTime + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [totalTime, userState])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 1,
        },
        (location) => {
          const timeNow = new google_protobuf_timestamp_pb.Timestamp()
          timeNow.fromDate(new Date())

          setLocation({
            latitude: location.coords.latitude,
            longtitude: location.coords.longitude,
            isStopPoint: false,
            altitude: 0,
            createdAt: {
              seconds: timeNow.getSeconds(),
              nanos: timeNow.getNanos(),
            },
          })
        }
      )
    })()
  }, [])

  // center map to current location
  const mapRef = useRef<MapView>(null)

  const getLocation = () => {
    if (mapRef.current) {
      if (location.longtitude != 0 && location.latitude != 0)
        mapRef.current.animateToRegion({
          latitude: location.latitude,
          longitude: location.longtitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.003,
        })
    }
  }

  // state control
  const startOrPause = () => {
    if (userState == 'ready') {
      setUserState('running')

      // save start time
      const timeNow = new google_protobuf_timestamp_pb.Timestamp()
      timeNow.fromDate(new Date())
      setStartTime({
        seconds: timeNow.getSeconds(),
        nanos: timeNow.getNanos(),
      })
    } else if (userState == 'running') {
      setUserState('paused')

      if (coordinates.length > 0) {
        // set last coordinate as stop point
        let lastCoordinate: TrackPoint.AsObject = {
          latitude: coordinates[coordinates.length - 1].latitude,
          longtitude: coordinates[coordinates.length - 1].longtitude,
          isStopPoint: true,
          altitude: 0,
          createdAt: coordinates[coordinates.length - 1].createdAt,
        }
        setCoordinates([...coordinates, lastCoordinate])
      }
    } else if (userState == 'paused') {
      setUserState('running')
    }
  }

  const stopRun = () => {
    setUserState('paused')
    // get end time first
    const timeNow = new google_protobuf_timestamp_pb.Timestamp()
    timeNow.fromDate(new Date())

    navigation.navigate('RunResult', {
      display: {
        distance: formatForDisplay('distance-km', totalDistance),
        time: formatForDisplay('time', totalTime),
        pace: formatForDisplay('pace', pace),
        kcal: kcalBurned.toFixed(3),
      },
      savingInfo: {
        duration: totalTime,
        kcal: 0,
        totalDistance: totalDistance,
        routeList: coordinates,
        startTime: {
          seconds: startTime.seconds,
          nanos: startTime.nanos,
        },
        endTime: {
          seconds: timeNow.getSeconds(),
          nanos: timeNow.getNanos(),
        },
      },
      resetRunInfo: resetRunInfo,
    })
  }

  // convert array of coordinates to multi polyline
  const arrayToMultiPolyline = (coordinates: any) => {
    const multiPolyline = []
    let polyline: any = []
    coordinates.forEach((coordinate: any) => {
      if (!coordinate.isStopPoint) {
        polyline.push({
          latitude: coordinate.latitude,
          longitude: coordinate.longtitude,
        })
      } else {
        multiPolyline.push(polyline)
        polyline = []
      }
    })
    multiPolyline.push(polyline)
    return multiPolyline
  }

  // format convert
  const formatForDisplay = (type: string, value: number) => {
    if (type == 'time') {
      const timeMin =
        Math.floor(value / 60) < 10
          ? '0' + Math.floor(value / 60)
          : Math.floor(value / 60)
      const timeSec = ('0' + (value % 60)).slice(-2)
      return timeMin + ':' + timeSec
    } else if (type == 'distance') {
      return value / 1000 < 10
        ? '0' + (value / 1000).toFixed(2).replace('.', ':')
        : (value / 1000).toFixed(2).replace('.', ':')
    } else if (type == 'distance-km') {
      return (value / 1000).toFixed(2)
    } else if (type == 'pace') {
      if (value == 0) return '00:00'

      const paceMin =
        Math.floor(value / 60) < 10
          ? '0' + Math.floor(value / 60)
          : Math.floor(value / 60)
      const paceSec = ('0' + (value % 60)).slice(-2)
      return paceMin + ':' + paceSec
    }
    return 'Wrong type'
  }

  // reset
  const resetRunInfo = () => {
    setTotalTime(0)
    setTotalDistance(0)
    setPace(0)
    setCoordinates([])
    setUserState('ready')
    setStartTime({
      seconds: 0,
      nanos: 0,
    })
    setFocusMode(false)
    setVisible(false)
  }

  return (
    <View style={styles(theme).container}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>Do you want to restart your activity ?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={resetRunInfo}> Yes </Button>
            <Button onPress={hideDialog}> No </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Monitor
        userState={
          userState == 'ready'
            ? 'Ready'
            : userState == 'running'
            ? 'Running'
            : 'Paused'
        }
        displayTime={formatForDisplay('time', totalTime)}
        displayDistance={(totalDistance / 1000).toFixed(2)}
        displayPace={formatForDisplay('pace', pace)}
        displayKcal={isNaN(kcalBurned) ? 0 : kcalBurned.toFixed(3)}
      />
      <Divider style={{ height: 1 }} />
      <MapView
        ref={mapRef}
        style={styles(theme).map}
        initialRegion={{
          latitude: 10.87839,
          longitude: 106.80632,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={isNightMode ? minimalStyleDark : minimalStyle}
        onMapLoaded={async (event) => {
          const { coords } = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            distanceInterval: 1,
          })
          mapRef.current?.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.003,
          })
        }}
        showsUserLocation
      >
        {/* <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longtitude,
          }}
          title="Your Location"
          pinColor="purple"
        /> */}
        {arrayToMultiPolyline(coordinates).map((polyline, index) => (
          <Polyline
            key={index}
            coordinates={polyline}
            strokeColor="#f00"
            strokeWidth={4}
          />
        ))}
      </MapView>

      <IconButton // reset button
        style={styles(theme).resetBtn}
        disabled={userState == 'ready'}
        icon={userState == 'ready' ? 'restart-off' : 'restart'}
        mode="outlined"
        size={26}
        iconColor={'black'}
        containerColor="white"
        onPress={() => showDialog()}
      />

      <IconButton // focus button
        style={styles(theme).focusBtn}
        icon="image-filter-center-focus-strong"
        mode="outlined"
        size={26}
        iconColor={focusMode ? 'red' : 'black'}
        containerColor="white"
        onPress={() => setFocusMode(!focusMode)}
      />

      <IconButton // get location button
        style={styles(theme).getLocationBtn}
        icon="crosshairs-gps"
        mode="outlined"
        size={26}
        iconColor="black"
        containerColor="white"
        onPress={() => getLocation()}
      />

      <IconButton // start button
        style={styles(theme).startBtn}
        icon={
          userState == 'ready' || userState == 'paused'
            ? 'arrow-right-drop-circle'
            : 'pause-circle'
        }
        mode="outlined"
        size={36}
        iconColor="green"
        containerColor="white"
        onPress={() => startOrPause()}
      />
      {userState == 'paused' ? (
        <IconButton // paused button
          style={styles(theme).stopBtn}
          icon="stop"
          mode="outlined"
          size={36}
          iconColor="red"
          containerColor="white"
          onPress={() => stopRun()}
        />
      ) : null}
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    getLocationBtn: {
      position: 'absolute',
      bottom: '10%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
    startBtn: {
      position: 'absolute',
      bottom: '10%',
      left: '1%',
      alignSelf: 'flex-start', // for align to left
    },
    stopBtn: {
      position: 'absolute',
      bottom: '10%',
      left: '15%',
      alignSelf: 'flex-start', // for align to left
    },
    focusBtn: {
      position: 'absolute',
      bottom: '20%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
    resetBtn: {
      position: 'absolute',
      bottom: '50%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
  })
