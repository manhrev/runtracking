import { Alert, Dimensions, StyleSheet, View } from 'react-native'
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
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
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
import { toast } from '../../utils/toast/toast'
import { useDialog } from '../../hooks/useDialog'

export default function RunTracking({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'RunTracking'>) {
  const theme = useAppTheme()
  const [navEvent, setNavEvent] = useState<any>(undefined)
  const { weight } = useAppSelector(selectUserSlice)
  const { isNightMode } = useAppSelector(selectToggleSlice)
  const [isClosedBottomMenu, setIsClosedBottomMenu] = useState(false)
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
  const [goBackVisible, setGoBackVisible] = useState(false)
  const hideGoBackDialog = () => {
    setGoBackVisible(false)
  }

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
  const [activityType, setActivityType] = useState(route.params.activityType)
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

  // dialog
  const [visible, setVisible] = useState(false)
  const {
    open: dialogLocationPolicyOpen,
    toggleDialog: toggleDialogLocationPolicy,
  } = useDialog()

  const showDialog = () => {
    setVisible(true)
  }

  const showGoBackDialog = () => {
    if (userState == 'running' || userState == 'paused') {
      setUserState('paused')
      setGoBackVisible(true)
    } else {
      navigation.goBack()
    }
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
      const { status } = await Location.getForegroundPermissionsAsync()
      if (status !== 'granted') {
        toggleDialogLocationPolicy()
      } else {
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
      }
    })()
  }, [])

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        if (!(userState == 'running' || userState == 'paused')) return
        else {
          if (goBackVisible) return
          e.preventDefault()
          setNavEvent(e.data.action)
          showGoBackDialog()
        }
      }),
    [navigation, userState]
  )

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
        kcal: kcalBurned,
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
        acType: activityType,
      },
      selectedPlanId: route.params.planId,
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
      if (value == 0) return "00'00''"

      const paceMin =
        Math.floor(value / 60) < 10
          ? '0' + Math.floor(value / 60)
          : Math.floor(value / 60)
      const paceSec = ('0' + (value % 60)).slice(-2)
      return paceMin + "'" + paceSec + "''"
    }
    return 'Wrong type'
  }

  // reset
  const resetRunInfo = (toastMessage: boolean = false) => {
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

    if(toastMessage) {
      toast.success({
        message: 'Activity has been reset. Let\'s start a new one !'
      })
    }
  }

  const switchActivityType = () => {
    if (route.params.planId != -1) {
      toast.error({
        message: "Can't change activity type while following a plan !",
      })
      return
    }

    if (activityType == ActivityType.ACTIVITY_TYPE_RUNNING) {
      setActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
    } else if (activityType == ActivityType.ACTIVITY_TYPE_WALKING) {
      setActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
    } else {
      setActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
    }
  }

  const agreeLocationPermission = async () => {
    const err = await requestLocationPermission()
    toggleDialogLocationPolicy()
    if (err) return
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
  }

  const notNowLocationPermission = () => {
    navigation.goBack()
  }

  const requestLocationPermission = async () => {
    let { status, canAskAgain } =
      await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') {
      if (!canAskAgain) {
        toast.error({
          message: 'You must go to settings to enable location!',
        })
        navigation.goBack()
        return true
      }
      toast.error({ message: 'Location permission was denied' })
      navigation.goBack()
      return true
    }
    return false
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
            <Button onPress={() => resetRunInfo(true)}> Yes </Button>
            <Button onPress={hideDialog}> No </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <Portal>
        <Dialog visible={dialogLocationPolicyOpen}>
          <Dialog.Title>Use location?</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyLarge">
              <Text style={{ fontWeight: 'bold' }}>Go Tracker </Text>
              needs to collect{' '}
              <Text style={{ fontWeight: 'bold' }}>location data</Text> when the
              app is open or running in the background to record your physical
              activity.
            </Text>
            <Text variant="bodyLarge" style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>
                Collecting data in the background
              </Text>{' '}
              will allow you to train without having to keep your phone screen
              on.
            </Text>
            <Text variant="bodyLarge" style={{ marginTop: 10 }}>
              Those data will help you review the activities that have been
              saved, as well as statistics about those activities.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={notNowLocationPermission}> Deny </Button>
            <Button onPress={agreeLocationPermission}> Accept </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <Portal>
        <Dialog visible={goBackVisible} onDismiss={hideGoBackDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text>
              Your activity will be deleted. Do you want to continue ?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                if (navEvent === undefined) {
                  navigation.goBack()
                } else {
                  navigation.dispatch(navEvent)
                  setNavEvent(undefined)
                }
              }}
            >
              {' '}
              Yes{' '}
            </Button>
            <Button onPress={hideGoBackDialog}> No </Button>
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
        showGoBackDialog={showGoBackDialog}
      />
      <Divider style={{ height: 1 }} />
      <MapView
        provider={PROVIDER_GOOGLE}
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
          const { status } = await Location.getForegroundPermissionsAsync()
          if (status !== 'granted') {
            return
          }
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
            strokeColor={theme.colors.primary}
            strokeWidth={4}
          />
        ))}
      </MapView>

      <Divider style={{ height: 1 }} />
      {!isClosedBottomMenu && (
        <View
          style={{
            height: 100,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              flex: 1,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <IconButton
                icon={
                  activityType == ActivityType.ACTIVITY_TYPE_RUNNING
                    ? 'run-fast'
                    : activityType == ActivityType.ACTIVITY_TYPE_WALKING
                    ? 'walk'
                    : 'bike'
                }
                iconColor={theme.colors.tertiary}
                mode="outlined"
                size={30}
                onPress={() => switchActivityType()}
              />
              <Text style={styles(theme).underText}>
                {activityType == ActivityType.ACTIVITY_TYPE_RUNNING
                  ? 'Running'
                  : activityType == ActivityType.ACTIVITY_TYPE_WALKING
                  ? 'Walking'
                  : 'Cycling'}
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <IconButton // start button
              icon={
                userState == 'ready' || userState == 'paused'
                  ? 'arrow-right-drop-circle'
                  : 'pause-circle'
              }
              size={75}
              iconColor={theme.colors.primary}
              onPress={() => startOrPause()}
            />
            {userState == 'paused' && (
              <IconButton // paused button
                icon="stop-circle"
                size={75}
                iconColor={theme.colors.error}
                onPress={() => stopRun()}
              />
            )}
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <IconButton
                icon="chevron-double-down"
                mode="outlined"
                size={26}
                iconColor={theme.colors.tertiary}
                containerColor="white"
                onPress={() => setIsClosedBottomMenu(!isClosedBottomMenu)}
              />
              <Text style={styles(theme).underText}>Hide</Text>
            </View>
          </View>
        </View>
      )}

      {isClosedBottomMenu && (
        <IconButton // show bottom menu button
          style={{
            position: 'absolute',
            bottom: 10,
            right: 0,
            margin: 10,
          }}
          icon="chevron-double-up"
          mode="outlined"
          size={26}
          iconColor={theme.colors.tertiary}
          containerColor="white"
          onPress={() => setIsClosedBottomMenu(!isClosedBottomMenu)}
        />
      )}

      <IconButton // reset button
        style={styles(theme).resetBtn}
        disabled={userState == 'ready'}
        icon={userState == 'ready' ? 'restart-off' : 'restart'}
        mode="outlined"
        size={26}
        iconColor={theme.colors.tertiary}
        containerColor="white"
        onPress={() => showDialog()}
      />

      <IconButton // focus button
        style={styles(theme).focusBtn}
        icon="image-filter-center-focus-strong"
        mode="outlined"
        size={26}
        iconColor={focusMode ? theme.colors.primary : theme.colors.tertiary}
        containerColor="white"
        onPress={() => setFocusMode(!focusMode)}
      />

      <IconButton // get current position button
        style={styles(theme).currentLocationBtn}
        icon="crosshairs-gps"
        mode="outlined"
        size={26}
        iconColor={theme.colors.tertiary}
        containerColor="white"
        onPress={() => getLocation()}
      />
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
    resetBtn: {
      position: 'absolute',
      bottom: '50%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
    focusBtn: {
      position: 'absolute',
      bottom: '42%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
    currentLocationBtn: {
      position: 'absolute',
      bottom: '25%',
      right: '1%',
      alignSelf: 'flex-end', // for align to right
    },
    underText: {
      fontWeight: 'bold',
      color: theme.colors.tertiary,
      fontSize: 13,
    },
  })
